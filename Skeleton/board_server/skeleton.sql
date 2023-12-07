-- Active: 1699837608055@@127.0.0.1@3306@skeleton
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema skeleton
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema skeleton
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `skeleton` DEFAULT CHARACTER SET utf8 ;
USE `skeleton` ;

-- -----------------------------------------------------
-- Table `skeleton`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `skeleton`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `createdAt` DATETIME NULL DEFAULT now(),
  `updatedAt` DATETIME NULL DEFAULT now(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `skeleton`.`board`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `skeleton`.`board` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `content` VARCHAR(1024) NOT NULL,
  `cnt` INT NULL DEFAULT 0,
  `createdAt` DATETIME NULL DEFAULT now(),
  `updatedAt` DATETIME NULL DEFAULT now(),
  `creatorId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_board_user_idx` (`creatorId` ASC) VISIBLE,
  CONSTRAINT `fk_board_user`
    FOREIGN KEY (`creatorId`)
    REFERENCES `skeleton`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- ----------------- 여기서 부터 직접 작성 -------------------
DROP TABLE user, board;

CREATE TABLE user(
  id          INT             NOT NULL    AUTO_INCREMENT,
  name        VARCHAR(50)     NOT NULL,
  email       VARCHAR(50)     NOT NULL,
  password    VARCHAR(50)     NOT NULL,
  createdAt   DATETIME                    DEFAULT NOW(),
  updatedAt   DATETIME                    DEFAULT NOW(),
  CONSTRAINT user_id_pk PRIMARY KEY(id)
);

DROP TABLE board;

CREATE TABLE board(
  id          INT             NOT NULL    AUTO_INCREMENT,
  title       VARCHAR(100)    NOT NULL,
  content     VARCHAR(1024)   NOT NULL,
  cnt         INT                         DEFAULT 0,
  createdAt   DATETIME                    DEFAULT NOW(),
  updatedAt   DATETIME                    DEFAULT NOW(),
  creatorAt   INT             NOT NULL,
  CONSTRAINT board_id_pk PRIMARY key(id),
  CONSTRAINT board_creatorAt_fk FOREIGN KEY(creatorAt) REFERENCES user(id)
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
);

-- user table에 insert, update, delete, select
INSERT INTO user(name, email, password) VALUES('놀부', 'nolbu@company.com', 'abc123');
INSERT INTO user(name, email, password) VALUES('흥부', 'hungbu@company.com', 'abc123');
INSERT INTO user(name, email, password) VALUES('방자', 'bangja@company.com', 'abc123');

UPDATE user SET name="향단", password='a123' WHERE id = 3;

DELETE FROM user WHERE id = 3;

SELECT * FROM user;

-- board table에 insert, update, delete, select
-- board 목록에는 항상 입력한 사용자 이름이 출력되도록..
INSERT INTO board(title, content, creatorAt) VALUES('첫번째 게시물', '첫번째 게시물 내용', 1);
INSERT INTO board(title, content, creatorAt) VALUES('두번째 게시물', '두번째 게시물 내용', 1);
INSERT INTO board(title, content, creatorAt) VALUES('세번째 게시물', '세번째 게시물 내용', 2);

UPDATE board set title = '변경됨', content="변경됨" WHERE id = 3;

DELETE FROM board WHERE id = 3;


-- 전체 조회
SELECT b.id, u.name, title, b.createdAt, cnt
FROM user u INNER JOIN board b ON u.id = b.creatorAt;

-- 조회하면 카운트를 1개 증가
UPDATE board SET cnt = cnt + 1 WHERE id = 3;


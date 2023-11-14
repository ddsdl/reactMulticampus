-- Active: 1699837608055@@127.0.0.1@3306@hr

SHOW INDEX FROM employees;

DROP TABLE IF EXISTS tbl1, tbl2, tbl3;

CREATE TABLE tbl1 (
  a INT PRIMARY key,    -- 클러스터형 인텍스
  b INT,
  c INT
);
SHOW INDEX FROM tbl1;

CREATE TABLE tbl2 (
  a INT PRIMARY key,    -- 클러스터형 인텍스
  b INT UNIQUE,         -- 보조 인덱스
  c INT UNIQUE,         -- 보조 인덱스
  d INT
);
SHOW INDEX FROM tbl2;

CREATE TABLE tbl3 (
  a INT UNIQUE,         -- 클러스터형 인텍스
  b INT UNIQUE,         -- 보조 인덱스
  c INT UNIQUE,         -- 보조 인덱스
  d INT
);
SHOW INDEX FROM tbl3;


CREATE TABLE tbl4 (
  a INT UNIQUE NOT NULL,         -- 클러스터형 인텍스
  b INT UNIQUE,         -- 보조 인덱스
  c INT UNIQUE,         -- 보조 인덱스
  d INT PRIMARY KEY
);

SHOW INDEX FROM tbl4;


CREATE TABLE usertbl (
  userid    VARCHAR(10)   NOT NULL    PRIMARY KEY,
  name      VARCHAR(20)   NOT NULL,
  address   VARCHAR(100)
);

INSERT INTO usertbl VALUES('AAA', 'Hong', 'Seoul');
INSERT INTO usertbl VALUES('ZAA', 'NolBu', '전주');

INSERT INTO usertbl VALUES('DAA', '흥부', '전주');

SELECT * FROM usertbl;

ALTER TABLE usertbl DROP PRIMARY KEY;

ALTER TABLE usertbl
  ADD CONSTRAINT usertbl_name_pk PRIMARY KEY(name);

SELECT * FROM usertbl;
-- Active: 1699837608055@@127.0.0.1@3306@hr

-- 전체 테이블 조회
SHOW TABLES;

-- 테이블 상태
SHOW TABLE STATUS;

-- 테이블 생성 - 기존 테이블을 이용해서 생성 (복사 - 제약조건은 복사되지 않는다)
CREATE TABLE emp
AS
SELECT * FROM employees;

SELECT * FROM emp;

-- 구조 확인
DESC employees;
DESC emp;


-- 테이블 삭제
DROP TABLE emp;

-- 테이블 생성 - 기존 테이블을 이용해서 생성 (복사 - 제약조건은 복사되지 않는다)
-- 필요한 컬럼만 추출
CREATE TABLE emp
AS
SELECT 
  employee_id AS empId,
  CONCAT(first_name, ' ', last_name) AS name,
  salary,
  commission_pct pct,           -- AS 생략 가능
  hire_date hire,
  manager_id magId,
  department_id deptId
FROM employees
WHERE department_id IN (30, 60, 70, 90);

SELECT * FROM emp;

-- 삭제 - 존재하는 경우만 삭제
DROP TABLE IF EXISTS emp;


-- employees table과 동일한 테이블을 작성 - 제약 조건 없음
DESC employees;
DESC departments;

-- 테이블 생성
DROP TABLE IF EXISTS emp;
CREATE TABLE emp (
  -- AUTO_INCREMENT => 값을 입력하지 않으면 입력된 employee_id의 가장 큰 수 +1을 해서 자동 입력해 준다
  -- PRIMARY KEY 제약조건 => NOT NULL And UNIQUE
  employee_id   INT UNSIGNED    AUTO_INCREMENT    PRIMARY KEY,
  first_name    VARCHAR(20),
  last_name     VARCHAR(25)     NOT NULL,
  -- UNIQUE 제약 조건 => 같은 값이 입력되면 에러 발생 (NULL은 허용한다)
  email         VARCHAR(50)     NOT NULL          UNIQUE,
  phone_number  VARCHAR(20)     NULL,
  -- DEFAULT => 입력시 값을 지정하지 않으면 DEFAULT로 지정한 값이 기본값으로 입력된다
  hire_date     DATETIME        NOT NULL          DEFAULT NOW(),
  job_id        VARCHAR(10)     NOT NULL,
  salary        DECIMAL(8, 2)   NOT NULL,
  commission_pct  DECIMAL(2, 2),
  manager_id    INT UNSIGNED,
  department_id INT UNSIGNED
);

-- 테이블의 제약 조건 등을 참조..
SHOW KEYS FROM emp;


DESC emp;
SELECT * FROM employees;
-- 데이터 입력

-- 모든 컬럼을 순차적으로 빠짐없이 입력하는 경우는 컬럼명을 생략할 수 있다
INSERT INTO emp VALUES(100, '홍', '길동', 'hong@abc.com', '010-1234-5678', NOW(), 'AD_VP', 3500, NULL, NULL, NULL);

-- employee_id와 email은 중복되는 값을 가질 수 없다.
INSERT INTO emp VALUES(101, '놀', '부', 'nonbu@abc.com', '010-1234-5678', NOW(), 'AD_VP', 3500, NULL, NULL, NULL);

-- salary의 정수값 초과는 에러, 소수점 이하는 지정한 자리수에서 짤림
INSERT INTO emp VALUES(102, '흥', '부', 'hungbu@abc.com', '010-1234-5678', NOW(), 'AD_VP', 4500.123, NULL, NULL, NULL);

-- 날짜는 문자 형태로 지정하면 자동 캐스팅이 이루어 진다
INSERT INTO emp VALUES(103, '이', '몽룡', 'mong@abc.com', '010-1234-5678', '2022-12-25 10:20:30', 'AD_VP', 4500.123, NULL, NULL, NULL);

-- 원하는 컬럼에만 값 입력
INSERT INTO emp(last_name, email, job_id, salary) 
  VALUES('춘향', 'chun@abc.com', 'AD_VP', 5000);

-- last_name 없음 => Error (NOT NULL 항목은 반드시 컬럼을 지정하고 값을 입력해야 한다)
-- INSERT INTO emp(email, job_id, salary) VALUES('chun@abc.com', 'AD_VP', 5000);

-- NOT NULL이 아닌 항목은 필요에 따라 추가해서 값 입력 - 입력 순서는 정의한 순서대로 입력
INSERT INTO emp(salary, last_name, first_name, email, job_id) 
  VALUES(5000, '자', '방', 'bang@abc.com', 'AD_VP');

-- AUTO_INCREMENT는 임의의 값을 입력해도 된다
INSERT INTO emp(employee_id, salary, last_name, first_name, email, job_id) 
  VALUES(200, 5000, '철수', '김', 'kim@abc.com', 'AD_VP');

-- employee_id를 생략하면 몇번이 입력될까?
INSERT INTO emp(salary, last_name, first_name, email, job_id) 
  VALUES(6000, '영희', '박', 'park@abc.com', 'AD_VP');

SELECT * FROM emp;


-- departments 테이블 생성
DESC departments;

DROP TABLE IF EXISTS dept;
CREATE TABLE dept (
  department_id     INT UNSIGNED  NOT NULL  PRIMARY KEY,
  department_name   VARCHAR(30)   NOT NULL,
  manager_id        INT UNSIGNED,
  location_id       int UNSIGNED
);
DESC dept;



DROP TABLE IF EXISTS emp, dept;

-- 제약 조건을 따로 정리
CREATE TABLE emp (
  employee_id   INT UNSIGNED    AUTO_INCREMENT,
  first_name    VARCHAR(20),
  last_name     VARCHAR(25)     NOT NULL,
  email         VARCHAR(50)     NOT NULL,
  phone_number  VARCHAR(20)     NULL,
  hire_date     DATETIME        NOT NULL          DEFAULT NOW(),
  job_id        VARCHAR(10)     NOT NULL,
  salary        DECIMAL(8, 2)   NOT NULL,
  commission_pct  DECIMAL(2, 2),
  manager_id    INT UNSIGNED,
  department_id INT UNSIGNED,
  CONSTRAINT PRIMARY KEY (employee_id),
  CONSTRAINT emp_email_uk UNIQUE (email),
  CONSTRAINT emp_deptId_fk FOREIGN KEY (department_id) REFERENCES dept(department_id)
);

CREATE TABLE dept (
  department_id     INT UNSIGNED  NOT NULL,
  department_name   VARCHAR(30)   NOT NULL,
  manager_id        INT UNSIGNED,
  location_id       int UNSIGNED,
  CONSTRAINT PRIMARY KEY (department_id)
);


INSERT INTO emp VALUES(100, '홍', '길동', 'hong@abc.com', '010-1234-5678', NOW(), 'AD_VP', 3500, NULL, NULL, NULL);
INSERT INTO emp(last_name, email, job_id, salary, department_id) 
  VALUES('춘향', 'chun@abc.com', 'AD_VP', 5000, 200);

INSERT INTO dept VALUES (200, '영업부', NULL, NULL);


-- 컬럼 삭제
-- emp 테이블의 춘향 컬럼이 참조하고 있음 => 삭제 안됨
-- DELETE FROM dept WHERE department_id = 200;

-- 삭제를 위해서는 모든 emp의 모든 참조 값을 삭제 또는 다른 값으로 변경해서 참조가 없도록 먼저 할 필요가 있다
UPDATE emp SET department_id = NULL WHERE last_name = '춘향';
DELETE FROM dept WHERE department_id = 200;




DROP TABLE IF EXISTS emp, dept;

-- 제약 조건을 따로 정리
CREATE TABLE emp (
  employee_id   INT UNSIGNED    AUTO_INCREMENT,
  first_name    VARCHAR(20),
  last_name     VARCHAR(25)     NOT NULL,
  email         VARCHAR(50)     NOT NULL,
  phone_number  VARCHAR(20)     NULL,
  hire_date     DATETIME        NOT NULL          DEFAULT NOW(),
  job_id        VARCHAR(10)     NOT NULL,
  salary        DECIMAL(8, 2)   NOT NULL,
  commission_pct  DECIMAL(2, 2),
  manager_id    INT UNSIGNED,
  department_id INT UNSIGNED,
  CONSTRAINT PRIMARY KEY (employee_id),
  CONSTRAINT emp_email_uk UNIQUE (email),
  CONSTRAINT emp_deptId_fk FOREIGN KEY (department_id) REFERENCES dept(department_id)
    ON UPDATE SET NULL
    ON DELETE SET NULL
);

CREATE TABLE dept (
  department_id     INT UNSIGNED  NOT NULL,
  department_name   VARCHAR(30)   NOT NULL,
  manager_id        INT UNSIGNED,
  location_id       int UNSIGNED,
  CONSTRAINT PRIMARY KEY (department_id)
);

-- NULL은 입력 가능
INSERT INTO emp VALUES(100, '홍', '길동', 'hong@abc.com', '010-1234-5678', NOW(), 'AD_VP', 3500, NULL, NULL, NULL);

-- 부서번호가 지정되면 dept 테이블에 해당 부서번호가 있어야 입력 가능하다
INSERT INTO emp(last_name, email, job_id, salary, department_id) 
  VALUES('춘향', 'chun@abc.com', 'AD_VP', 5000, 200);
INSERT INTO emp(last_name, email, job_id, salary, department_id) 
  VALUES('몽룡', 'mong@abc.com', 'AD_VP', 5000, 202);

INSERT INTO dept VALUES (200, '영업부', NULL, NULL);
INSERT INTO dept VALUES (202, '개발부', NULL, NULL);


SELECT * FROM emp;
SELECT * FROM dept;

UPDATE dept SET department_id = 201 WHERE department_id = 200;
DELETE FROM dept WHERE department_id = 202;



-- 자동 벼경으로 변경
DROP TABLE IF EXISTS emp, dept;

-- 제약 조건을 따로 정리
CREATE TABLE emp (
  employee_id   INT UNSIGNED    AUTO_INCREMENT,
  first_name    VARCHAR(20),
  last_name     VARCHAR(25)     NOT NULL,
  email         VARCHAR(50)     NOT NULL,
  phone_number  VARCHAR(20)     NULL,
  hire_date     DATETIME        NOT NULL          DEFAULT NOW(),
  job_id        VARCHAR(10)     NOT NULL,
  salary        DECIMAL(8, 2)   NOT NULL,
  commission_pct  DECIMAL(2, 2),
  manager_id    INT UNSIGNED,
  department_id INT UNSIGNED,
  CONSTRAINT PRIMARY KEY (employee_id),
  CONSTRAINT emp_email_uk UNIQUE (email),
  CONSTRAINT emp_deptId_fk FOREIGN KEY (department_id) REFERENCES dept(department_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE       -- NO ACTION (에러 발생), 또는 SET NULL로 NULL로 변경
);

CREATE TABLE dept (
  department_id     INT UNSIGNED  NOT NULL,
  department_name   VARCHAR(30)   NOT NULL,
  manager_id        INT UNSIGNED,
  location_id       int UNSIGNED,
  CONSTRAINT PRIMARY KEY (department_id)
);

-- NULL은 입력 가능
INSERT INTO emp VALUES(100, '홍', '길동', 'hong@abc.com', '010-1234-5678', NOW(), 'AD_VP', 3500, NULL, NULL, NULL);

-- 부서번호가 지정되면 dept 테이블에 해당 부서번호가 있어야 입력 가능하다
INSERT INTO emp(last_name, email, job_id, salary, department_id) 
  VALUES('춘향', 'chun@abc.com', 'AD_VP', 5000, 200);
INSERT INTO emp(last_name, email, job_id, salary, department_id) 
  VALUES('몽룡', 'mong@abc.com', 'AD_VP', 5000, 202);

INSERT INTO dept VALUES (200, '영업부', NULL, NULL);
INSERT INTO dept VALUES (202, '개발부', NULL, NULL);


SELECT * FROM emp;
SELECT * FROM dept;

UPDATE dept SET department_id = 201 WHERE department_id = 200;
DELETE FROM dept WHERE department_id = 202;



-- 제약 조건 추가
DROP TABLE IF EXISTS emp, dept;

CREATE TABLE emp (
  employee_id   INT UNSIGNED,
  first_name    VARCHAR(20),
  last_name     VARCHAR(25)     NOT NULL,
  email         VARCHAR(50)     NOT NULL,
  phone_number  VARCHAR(20)     NULL,
  hire_date     DATETIME        NOT NULL          DEFAULT NOW(),
  job_id        VARCHAR(10)     NOT NULL,
  salary        DECIMAL(8, 2)   NOT NULL,
  commission_pct  DECIMAL(2, 2),
  manager_id    INT UNSIGNED,
  department_id INT UNSIGNED
);

CREATE TABLE dept (
  department_id     INT UNSIGNED  NOT NULL,
  department_name   VARCHAR(30)   NOT NULL,
  manager_id        INT UNSIGNED,
  location_id       int UNSIGNED
);

-- PRIMARY KEY 제약 조건 추가
ALTER TABLE emp
  ADD CONSTRAINT PRIMARY KEY (employee_id);

ALTER TABLE dept
  ADD CONSTRAINT PRIMARY KEY (department_id);


ALTER TABLE emp
  ADD CONSTRAINT emp_deptId_fk FOREIGN KEY (department_id) REFERENCES dept(department_id)
  ON UPDATE CASCADE
  ON DELETE SET NULL;


ALTER TABLE emp
  ADD CONSTRAINT emp_magId_fk FOREIGN KEY (manager_id) REFERENCES emp(employee_id)
  ON UPDATE CASCADE
  ON DELETE SET NULL;


-- COLUMN 추가
ALTER TABLE emp ADD gender CHAR(1);
DESC emp;

-- CHECK 제약 조건
ALTER TABLE emp
  ADD CONSTRAINT emp_gender_ck CHECK (gender IN('F', 'M'));

-- UNIQUE 제약 조건
-- ADD를 사용하지 않고 컬럼을 변경하는 MODIFY를 사용한다
-- ALTER TABLE emp ADD CONSTRAINT emp_email_uk UNIQUE;
ALTER TABLE emp
  MODIFY COLUMN email VARCHAR(50) NOT NULL UNIQUE;

DESC emp;
SHOW KEYS FROM emp;


-- NULL은 입력 가능
INSERT INTO emp 
  VALUES(100, '홍', '길동', 'hong@abc.com', '010-1234-5678', NOW(), 'AD_VP', 3500, NULL, NULL, NULL, NULL);

-- 부서번호가 지정되면 dept 테이블에 해당 부서번호가 있어야 입력 가능하다
INSERT INTO emp(employee_id, last_name, email, job_id, salary, department_id, gender) 
  VALUES(101, '춘향', 'chun@abc.com', 'AD_VP', 5000, 200, 'F');
INSERT INTO emp(employee_id, last_name, email, job_id, salary, department_id, gender) 
  VALUES(103, '몽룡', 'mong@abc.com', 'AD_VP', 5000, 202, 'M');

INSERT INTO dept VALUES (200, '영업부', NULL, NULL);
INSERT INTO dept VALUES (202, '개발부', NULL, NULL);


SELECT * FROM emp;
SELECT * FROM dept;

UPDATE dept SET department_id = 201 WHERE department_id = 200;
DELETE FROM dept WHERE department_id = 202;


-- 제약 조건 삭제
SHOW KEYS FROM emp;

ALTER TABLE emp DROP CONSTRAINT email;
ALTER TABLE emp DROP CONSTRAINT emp_gender_ck;

-- CHECK 제약 조건이 삭제됨
INSERT INTO emp(employee_id, last_name, email, job_id, salary, department_id, gender) 
  VALUES(104, '놀부', 'nolbu@abc.com', 'AD_VP', 5000, 202, 'A');

-- gender 라는 컬럼에 'F', 'M' 이외의 값이 들어가 있는 경우 제약조건에 위배됨 -> 추가 안된다
ALTER TABLE emp
  ADD CONSTRAINT emp_gender_ck CHECK (gender IN('F', 'M', 'A'));



-- AUTO_INCREMENT 추가
-- 참조값이 있으면 참조값 먼저 제거
ALTER TABLE emp
  DROP CONSTRAINT emp_magId_fk;

ALTER TABLE emp
  CHANGE employee_id employee_id INT UNSIGNED NOT NULL AUTO_INCREMENT;

-- 다시 magId 제약조건 추가


-- CHANGE => Column 이름을 변경하는 경우 사용한다
ALTER TABLE emp
  CHANGE phone_number phone VARCHAR(20);

DESC emp;

-- MODIFY => 컬럼 타입, 조건 등을 변경하고자 하는 경우 사용
-- 타입을 변경하는 경우 입력된 데이터가 변경하고자 하는 데이터와 호환되지 않으면 에러 발생 => 변경 안됨
-- ALTER TABLE emp MODIFY COLUMN phone INT UNSIGNED; => Erro

-- 이미 컬럼에 NULL 값이 존재 => 기존의 비어있는 값이 NOT NULL 위반 => ERROR
-- ALTER TABLE emp MODIFY COLUMN phone VARCHAR(30) NOT NULL;

ALTER TABLE emp MODIFY COLUMN phone VARCHAR(30);


-- COLUMN 추가
ALTER TABLE emp
  ADD homepage VARCHAR(100) NOT NULL;

-- COLUMN 삭제
ALTER TABLE emp
  DROP COLUMN homepage;


-- Active: 1699837608055@@127.0.0.1@3306@hr
DROP DATABASE one;

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

-- DEPT INSERT
-- 컬럼명이 지정되지 않으면 모든 컬럼을 순서대로 입력해 주어야 한다
-- INSERT INTO dept VALUES(100, '영업부');      -- Error
INSERT INTO dept VALUES(100, '영업부', NULL, NULL);

-- 컬럼명을 지정하면 지정한 컬럼명의 값만 대입할 수 있다
INSERT INTO dept(department_id, department_name) VALUES(110, '개발부');

-- NOT NULL 컬럼은 생략할 수 없다
-- department_name이 NOT NULL이라 반드시 입력되어야 한다.
-- INSERT INTO dept(department_id, location_id) VALUES(120, 1000);

INSERT INTO dept(department_id, department_name, location_id) 
  VALUES(120, '지원부', 1500);

SELECT * FROM dept;

-- emp
-- department_id가 departments 테이블의 department_id를 참조하고 있으므로
-- departments 테이블의 department_id가 있는 값만 입력 가능 또는 NULL
INSERT INTO emp VALUES(100, '홍', '길동', 'hong@abc.com', '010-1234-5678', NOW(), 'AV_ABC', 5000, NULL, NULL, 120);

-- 원하는 항목만 대입
-- employee_id => AUTO_INCREMENT
-- first_name => NULL 허용
-- hire_date => DEFAULT NOW()
-- department_id => 참조키는 NULL은 허용한다.
INSERT INTO emp(last_name, email, job_id, salary) 
  VALUES('향단', 'hang@abc.com', 'ABC', 3500);

INSERT INTO emp(last_name, email, job_id, salary, commission_pct) 
  VALUES('방자', 'bang@abc.com', 'ABC', 3500, 0.1);

SELECT * FROM emp;


-- UPDATE - 수정
-- DEPT의 primary key를 수정하면 emp 테이블의 department_id도 변경되어야 한다. 
-- ON UPDATE CASCADE, ON DELETE CASCADE 

-- WHERE 구문이 없으면 모두 ROW가 변경된다. 지금은 PRIMARY KEY 제약조건에 걸려서 에러
-- UPDATE dept SET department_id = 150;

UPDATE dept SET department_id = 150 WHERE department_id = 120;
SELECT * FROM emp;

-- 1개 이상의 컬럼을 변경하고자 하는 경우는 ,로 구분한다
UPDATE emp SET last_name = '놀부', email='nolbu@company.com', commission_pct = 0.15
  WHERE employee_id = 102;

-- 여러개의 매칭되는 조건의 ROW를 일괄 변경도 할 수 있다.
UPDATE emp SET salary = 3800, commission_pct = 0.05
  WHERE salary = 3500;


-- 삭제
-- WHERE 구문이 없으면 모두 삭제된다.
DELETE FROM emp WHERE employee_id = 102;

-- 조건에 따라 여러개가 삭제될 수 있다

SELECT * FROM emp;


-- Active: 1699837608055@@127.0.0.1@3306@hr

DROP TABLE emp, dept, tbl1, tbl2, tbl3, tbl4, usertbl;

CREATE TABLE emp
as
SELECT 
  employee_id as empId,
  CONCAT(first_name, ' ', last_name) as name,
  email,
  hire_date as hire,
  salary,
  department_id as deptId
FROM employees;

SELECT * FROM departments;

CREATE TABLE dept
AS
SELECT
  department_id as deptId,
  department_name as deptName,
  location_id as locId
FROM departments;

ALTER TABLE dept
  ADD CONSTRAINT dept_deptId_pk PRIMARY KEY(deptId);

ALTER TABLE emp
  ADD CONSTRAINT emp_empId_pk PRIMARY KEY(empId);

ALTER TABLE emp
  ADD CONSTRAINT emp_deptId_fk FOREIGN KEY(deptId) REFERENCES dept(deptId)
  ON UPDATE NO ACTION
  ON DELETE NO ACTION;


-- emp
SELECT * FROM emp;

-- emp 전체 목록
SELECT e.*, d.deptName
FROM emp e INNER JOIN dept d ON e.deptId = d.deptId
ORDER BY e.empId DESC
LIMIT 1, 10;

-- emp 상세 정보
SELECT * FROM emp WHERE empId = 200;

-- emp 삭제
DELETE FROM emp WHERE empId = 200;
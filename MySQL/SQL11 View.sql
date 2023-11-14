-- Active: 1699837608055@@127.0.0.1@3306@hr

----------- VIEW --------------
-- 읽기 전용 테이블을 생성한다 (수정, 삭제, 입력도 가능은 하다)
-- 1. 민감한 정보를 숨긴 테이블을 생성하자
CREATE VIEW emp_view
AS
SELECT
  employee_id,
  last_name,
  job_id,
  department_id
FROM employees;

SELECT * FROM emp_view;

-- VIEW 삭제
DROP VIEW emp_view;


CREATE VIEW emp_view
AS
SELECT
  employee_id AS empId,
  CONCAT(first_name, ' ', last_name) name,
  job_id AS jobId,
  department_id AS deptId
FROM employees
WHERE department_id IN (50, 60, 70);

SELECT * FROM emp_view;


-- 2. 자주 사용되는 쿼리 결과를 하나의 VIEW로 생성
DROP VIEW emp_view;

CREATE VIEW emp_view
AS
SELECT 
  employee_id, first_name, last_name, salary, hire_date, commission_pct as pct,
  e.department_id, department_name
FROM employees e 
  INNER JOIN departments d ON e.department_id = d.department_id;

SELECT * FROM emp_view;

SELECT * FROM emp_view WHERE department_id IN(60, 70)

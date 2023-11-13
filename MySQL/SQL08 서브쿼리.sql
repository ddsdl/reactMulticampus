-- Active: 1699837608055@@127.0.0.1@3306@hr
USE hr;

-- 회사 평균 월급보다 많이 받는 직원은?
SELECT AVG(salary) FROM employees;

-- SubQuery => 먼저 실행할 쿼리 구문을 ()로 묶어 그 결과값을 이용

-- 단일행 서브쿼리 => 서버 쿼리의 결과가 1개만 출력된다
SELECT *
FROM employees
WHERE salary >= (SELECT AVG(salary) FROM employees);

-- IT 사업부에서 근무하는 직원은?
SELECT department_id FROM departments WHERE department_name = 'IT';

SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE department_id = (
  SELECT department_id 
  FROM departments 
  WHERE department_name = 'IT'
);


-- 다중행 서브쿼리 => 서브쿼리의 결과가 여러 줄
SELECT * FROM employees WHERE department_id = 100;

-- 100번 부서의 직원과 동일한 월급을 받는 직원은?
-- ERROR. 비교 대상이 우측은 FROM에서 꺼내온 row 1개 우측은 비교 대상이 6개 => 매칭 안됨
-- SELECT employee_id, first_name, salary, hire_date, department_id
-- FROM employees
-- WHERE salary = (SELECT * FROM employees WHERE department_id = 100)

SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE salary IN (
  SELECT salary                     -- * 이면 컬럼이 매칭되지 않으므로 에러 
  FROM employees 
  WHERE department_id = 100
);

-- ANY
-- ? = ANY(subquery)는 IN과 동일
-- ? >= ANY(subquery)는 서브쿼리의 가장 작은 값 보다 큰 ROW를 모두 출력 => 6900.00
-- ? <= ANY(subquery)는 서브쿼리의 가장 큰 값 보다 작은 ROW를 모두 출력 => 12000.00
SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE salary = ANY (
  SELECT salary
  FROM employees 
  WHERE department_id = 100
);

-- 6900 이상
SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE salary >= ANY (
  SELECT salary
  FROM employees 
  WHERE department_id = 100
);

-- 12000 이하
SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE salary <= ANY (
  SELECT salary
  FROM employees 
  WHERE department_id = 100
);


-- ALL
-- ? >= ALL(subquery)는 서브쿼리의 가장 큰 값 보다 큰 ROW를 모두 출력 => 6900.00
-- ? <= ALL(subquery)는 서브쿼리의 가장 작은 값 보다 작은 ROW를 모두 출력 => 12000.00
SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE salary >= ALL (
  SELECT salary
  FROM employees 
  WHERE department_id = 100
);

SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE salary <= ALL (
  SELECT salary
  FROM employees 
  WHERE department_id = 100
);


SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE salary = SOME (
  SELECT salary
  FROM employees 
  WHERE department_id = 100
);


-- 연습문제
-- 1. first_name이 Den인 직원보다 월급을 많이 받는 직원은?




-- 2. 직원 중 manager_id가 Adam과 같은 직원은?


-- 3. department_id가 50번인 직원의 평균 월급보다 많이 받는 직원은?


-- 4. 직원중 월급을 가장 많이 받는 직원의 정보 출력


-- 5. 90번 부서의 인원보다 직원이 많은 부서는 ?

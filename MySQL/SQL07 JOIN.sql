-- Active: 1699837608055@@127.0.0.1@3306@hr

USE hr;

SELECT 
  employee_id, 
  CONCAT(first_name, ' ', last_name) AS name,
  salary,
  commission_pct,
  hire_date,
  department_id
FROM employees;

-- https://dev.mysql.com/doc/refman/8.0/en/json.html
-- 각 ROW의 값을 배열로 묶어준다 
SELECT 
  JSON_ARRAY(
    employee_id,
    CONCAT(first_name, ' ', last_name),
    salary,
    commission_pct,
    hire_date,
    department_id
  )
FROM employees;


-- 각 ROW의 값을 단일 배열로 묶어준다 
SELECT 
  JSON_ARRAYAGG(
    JSON_ARRAY(
      employee_id,
      CONCAT(first_name, ' ', last_name),
      salary,
      commission_pct,
      hire_date,
      department_id
    )
  )
FROM employees;

-- 객체로 묶는다
SELECT 
  JSON_OBJECT(
    'empId', employee_id,
    'name', CONCAT(first_name, ' ', last_name),
    'salary', salary,
    'pct', commission_pct,
    'hire', hire_date,
    'deptId', department_id
  )
FROM employees;

SELECT JSON_ARRAYAGG(
  JSON_OBJECT(
    'empId', employee_id,
    'name', CONCAT(first_name, ' ', last_name),
    'salary', salary,
    'pct', commission_pct,
    'hire', hire_date,
    'deptId', department_id
  )
) 
FROM employees;

-------------- JOIN -----------------
SELECT * FROM employees;
SELECT * FROM departments;

DESC departments;
DESC employees;


-- CROSS JOIN
SELECT *
FROM employees CROSS JOIN departments;

SELECT *
FROM employees, departments;


-- INNER JOIN
-- tableName Alias INNER JOIN tableName Alias ON 조건
SELECT *
FROM employees 
  INNER JOIN departments ON employees.department_id = departments.department_id
ORDER BY employee_id;


-- 위의 결과에서 원하는 컬럼만 추출. 중복된 컬럼면은 어느 테이블에서 추출할 것인가를 명확히 해 주어야 한다
SELECT employee_id, first_name, salary, hire_date, employees.department_id, department_name, location_id
FROM employees 
  INNER JOIN departments ON employees.department_id = departments.department_id
ORDER BY employee_id;

-- 위에서는 테이블 이름을 참조했다. FROM 절에서 테이블에 Alias를 붙이면 어느 구문에서도 사용 가능
SELECT employee_id, first_name, salary, hire_date, e.department_id, department_name, location_id
FROM employees e 
  INNER JOIN departments d ON e.department_id = d.department_id
ORDER BY employee_id;

-- 위를 다음과 같이 ON을 WHERE로 변경 사용도 가능
SELECT employee_id, first_name, salary, hire_date, e.department_id, department_name, location_id
FROM employees e INNER JOIN departments d
WHERE e.department_id = d.department_id
ORDER BY employee_id;

-- 위의 구문에서 60, 70, 80번 부서만 직원만 출력
SELECT employee_id, first_name, salary, hire_date, e.department_id, department_name, location_id
FROM employees e INNER JOIN departments d
WHERE e.department_id = d.department_id AND e.department_id IN(60, 70, 80)
ORDER BY employee_id;

-- ON 이라면
SELECT employee_id, first_name, salary, hire_date, e.department_id, department_name, location_id
FROM employees e 
  INNER JOIN departments d ON e.department_id = d.department_id
WHERE e.department_id IN(60, 70, 80)
ORDER BY employee_id;

SHOW TABLES;

SELECT * FROM locations;


-- 3개의 테이블을 하나로 묶자
SELECT employee_id, first_name, salary, hire_date, e.department_id, department_name, street_address, city
FROM employees e
  INNER JOIN departments d ON e.department_id = d.department_id         -- 여기까지 만들어진 테이블을 1개의 테이블로 생각
  INNER JOIN locations loc ON d.location_id = loc.location_id
WHERE e.department_id IN(60, 70, 80);

SELECT * FROM employees;
SELECT * FROM employees WHERE department_id IS NULL;

SELECT employee_id, first_name, salary, hire_date, e.department_id, department_name, street_address, city
FROM employees e
  INNER JOIN departments d ON e.department_id = d.department_id         -- 여기까지 만들어진 테이블을 1개의 테이블로 생각
  INNER JOIN locations loc ON d.location_id = loc.location_id;


-- OUTER JOIN - LEFT, RIGHT가 붙는다.
SELECT * FROM employees;          -- 107
SELECT * FROM employees WHERE department_id IS NULL;

-- department_id가 없는 직원도 결과에 참여하고자 한다.
-- ON 조건이 매칭되지 않은 어느 테이블의 ROW를 참여시킬 것을 결정 (LEFT, RIGHT)
SELECT employee_id, first_name, salary, hire_date, e.department_id, department_name, location_id
FROM employees e 
  LEFT OUTER JOIN departments d ON e.department_id = d.department_id;

-- departments 테이블에 JOIN에 매칭되지 않는 부서까지 출력하고자 한다.
SELECT * FROM departments;

SELECT employee_id, first_name, salary, hire_date, e.department_id, department_name, location_id
FROM employees e 
  RIGHT OUTER JOIN departments d ON e.department_id = d.department_id
ORDER BY e.department_id IS NULL ASC;           -- DESC는 NULL 부터 출력된다



-- Location 정보까지 JOIN
SELECT employee_id, first_name, salary, hire_date, e.department_id, department_name, d.location_id,
  street_address, city
FROM employees e
  LEFT OUTER JOIN departments d ON e.department_id = d.department_id
  LEFT OUTER JOIN locations loc ON d.location_id = loc.location_id;

SELECT * FROM locations;

SELECT employee_id, first_name, salary, hire_date, e.department_id, department_name, d.location_id,
  street_address, city
FROM employees e
  LEFT OUTER JOIN departments d ON e.department_id = d.department_id
  RIGHT OUTER JOIN locations loc ON d.location_id = loc.location_id;      -- location에만 존재하는 ROW도 출력


-- FULL JOIN - Error
SELECT employee_id, first_name, salary, hire_date, e.department_id, department_name, location_id
FROM employees e 
  FULL OUTER JOIN departments d ON e.department_id = d.department_id
ORDER BY e.department_id IS NULL ASC;       -- Error


-- UNION을 사용해서 합친다 - 중첩되지 않은 요소만 합쳐진다
SELECT employee_id, first_name, salary, hire_date, e.department_id, department_name, location_id
FROM employees e 
  LEFT OUTER JOIN departments d ON e.department_id = d.department_id
UNION
SELECT employee_id, first_name, salary, hire_date, e.department_id, department_name, location_id
FROM employees e 
  RIGHT OUTER JOIN departments d ON e.department_id = d.department_id


-- SELF JOIN
SELECT * from employees;

-- 사원아이디, 사원이름, 사원 월급, 사원 입사일, 관리자 아이디, 관리자 이름, 관리자 월급, 관리자 입사일 출력
SELECT e.employee_id, e.first_name, e.salary, e.hire_date, e.manager_id, 
  m.employee_id, m.first_name, m.salary, m.hire_date 
FROM employees e
  INNER JOIN employees m ON e.manager_id = m.employee_id
ORDER BY e.employee_id;

-- 매니저가 없는 직원도 표시하려면?
SELECT e.employee_id, e.first_name, e.salary, e.hire_date, e.manager_id, 
  m.employee_id, m.first_name, m.salary, m.hire_date 
FROM employees e
  LEFT OUTER JOIN employees m ON e.manager_id = m.employee_id
ORDER BY e.employee_id;


-- 연습문제
-- 1. JOB 타이틀이 Accountant인 직원의 first_name, job_id, job_title, salary를 표시

SHOW TABLES;
SELECT * FROM jobs;
SELECT * FROM employees;

SELECT first_name, e.job_id, job_title, salary
FROM employees e
  INNER JOIN jobs j ON e.job_id = j.job_id;


-- 2. 사원의 이름, 부서번호, 소속 부서명 조회. 단 부서번호가 70. 80번인 부서만 조회
SELECT first_name, e.department_id, department_name
FROM employees e
  INNER JOIN departments d ON e.department_id = d.department_id
WHERE e.department_id IN (70, 80);

-- 3. 각 부서의 부서번호, 부서명, 부서 도시명을 조회
SELECT first_name, e.department_id, department_name, city
FROM employees e
  INNER JOIN departments d ON e.department_id = d.department_id
  JOIN locations loc ON d.location_id = loc.location_id;

-- 4. 사원이름, 부서번호, 부서명, 근무도시 출력. 부서 번호가 없는 직원도 출력
SELECT first_name, e.department_id, department_name, city
FROM employees e
  LEFT OUTER JOIN departments d ON e.department_id = d.department_id
  LEFT OUTER JOIN locations loc ON d.location_id = loc.location_id;


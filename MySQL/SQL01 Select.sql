-- Active: 1699575795219@@58.142.199.169@3306@hr

-- 전체 데이터 베이스 목록 출력
SHOW DATABASES;

-- 위에서 검색한 DB중에서 어떤 DB 사용할 것인가를 지정
use hr;

-- 테이블 목록 조회
SHOW TABLES;


-- 조회 구문 => SELECT

-- 테이블의 구조를 조회
DESC employees;

-- 모든 컬럼을 조회
SELECT * FROM employees;

-- 컬럼을 지정해서 조회
SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees;

-- 컬럼 별칭 변경 -> 별칭에 스페이스가 포함되면 ""로 묶는다. AS는 생략 가능
SELECT 
  employee_id AS 아이디, 
  first_name 이름, 
  salary, 
  hire_date "입사 연월일", 
  department_id
FROM employees;


-- 원하는 row만 출력 => WHERE
SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE department_id = 50;

-- 부서가 80번 이면서 월급이 8000 이상인 직원
SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE department_id = 50 AND salary >= 8000;

-- 부서가 80번이거나 월급이 10000 이상인 직원
SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE department_id = 80 OR salary >= 10000;

-- 부서 번호가 70, 80, 90번인 부서
SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE department_id = 70 OR department_id = 80 OR department_id = 90;

-- 위의 조건을 IN을 사용해 구현.
SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE department_id IN(70, 80, 90);


-- like
SELECT employee_id, first_name, salary, hire_date, department_id
FROM employees
WHERE first_name LIKE '%ae%';

-- NULL 검색
SELECT employee_id, first_name, salary, hire_date, department_id, commission_pct
FROM employees
WHERE commission_pct IS NULL;       -- IS NOT NULL


-- 정렬
SELECT employee_id, first_name, salary, hire_date, department_id, commission_pct
FROM employees
WHERE commission_pct IS NULL
ORDER BY first_name DESC;           -- ASC(기본값), DESC(내림)


-- 지정한 개수 만큼만 출력 => 넘버링 1, 2, 3, ... LIMIT => 맨 마지막에 위치
SELECT employee_id, first_name, salary, hire_date, department_id, commission_pct
FROM employees
WHERE commission_pct IS NULL
ORDER BY first_name DESC, department_id ASC
LIMIT 10;

-- 범위 지정
SELECT employee_id, first_name, salary, hire_date, department_id, commission_pct
FROM employees
WHERE commission_pct IS NULL
ORDER BY first_name DESC, department_id ASC
LIMIT 10, 20;

-- 중복되는 값을 1번만 출력한다.
SELECT DISTINCT department_id from employees;

-- 여러개의 row을 가진 요소와 같이 사용하면 여러개의 ROW가 있는 요소수 만큼 출력된다 - DISTINCT 의미 없음
SELECT DISTINCT department_id, first_name from employees;


-- 208 page SELECT를 이용해서 테이블 생성

-- 테이블 삭제
DROP TABLE emp;

-- table을 그대로 복사 -> 제약조건은 복사되지 않는다
CREATE TABLE emp
AS
SELECT * FROM employees;

-- 컬럼 이름 변경 후 생성
CREATE TABLE emp
AS
SELECT
  employee_id AS empId,
  concat(first_name, ' ', last_name) name,
  salary,
  hire_date hire,
  commission_pct pct,
  department_id deptId
FROM employees
WHERE department_id IN(50, 60, 70);

SELECT * FROM emp;

DESC emp;

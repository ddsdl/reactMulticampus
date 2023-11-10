-- Active: 1699575795219@@127.0.0.1@3306@hr

-- 그룹 함수 => 그룹 함수는 결과의 row가 1개다
SELECT employee_id, first_name, salary
FROM employees
ORDER BY salary DESC
LIMIT 1;

-- 최고값(MAX), 최소값(MIN), 평균(AVG), 총합(SUM), 전체 ROW수(COUNT)
SELECT MAX(salary), MIN(salary), AVG(salary), SUM(salary), COUNT(salary) 
FROM employees;

-- COUNT는 NULL 값의 ROW는 포함하지 않는다.
SELECT COUNT(salary), COUNT(commission_pct), COUNT(*)
FROM employees;

-- NULL을 가진 ROW도 포함하고자 하는 경우 NULL을 다른 값으로 변경 후 사용
SELECT 
  commission_pct,
  IFNULL(commission_pct, 0)
FROM employees;

SELECT 
  COUNT(*),
  COUNT(commission_pct),
  COUNT(IFNULL(commission_pct, 0)) AS pct
FROM employees;

-- 평균
SELECT 
  AVG(commission_pct),                        -- / 35
  AVG(IFNULL(commission_pct, 0)) AS avg       -- / 107
FROM employees;

-- 문자도 가능
SELECT 
  MAX(first_name),
  MIN(first_name)
FROM employees;

---------------- GROUP BY ---------------------
-- GROUP 함수는 결과가 1줄이다.
SELECT 
  MAX(salary),
  first_name            -- 이 구문이 있어서 에러 발생
FROM employees;

-- GROUP BY 절은 그룹함수를 어떤 값 기준으로 묶어서 표시 할 것인가를 지정
SELECT
  MAX(salary),
  MIN(salary),
  AVG(salary),
  SUM(salary),
  COUNT(salary)
FROM employees
GROUP BY first_name;        -- 동일한 이름은 합쳐져서 그룹함수가 구해짐 

SELECT first_name, salary FROM employees WHERE first_name = 'John';

-- GROUP BY에 참여한 컴펌은 SELECT 구문에 참여할 수 있다.
-- 그룹 함수를 사용하는 경우 SELECT 구문에 참여하고자 하는 컬럼은 반드시 GROUP BY 구문에 포함되어야 한다.
-- FROM => WHERE => GROUP BY => HAVING => ORDER BY => SELECT
SELECT
  first_name,
  MAX(salary),
  MIN(salary),
  AVG(salary),
  SUM(salary),
  COUNT(salary)
FROM employees
GROUP BY first_name;

-- 각 부서별 최고, 초소.... 값 출력
SELECT
  department_id,
  MAX(salary),
  MIN(salary),
  AVG(salary),
  SUM(salary),
  COUNT(salary)
FROM employees
GROUP BY department_id;

-- first_name도 출력되고 싶다
-- GROUP이 department_id로 묶이고, 다시 first_name로 묶임
SELECT
  first_name,
  department_id,
  MAX(salary),
  MIN(salary),
  AVG(salary),
  SUM(salary),
  COUNT(salary)
FROM employees
GROUP BY department_id, first_name;

-- manager 별로 몇명의 직원을 관리하는가?
SELECT
  manager_id,
  COUNT(*)
FROM employees
GROUP BY manager_id;


-- WHERE절은 FROM (TABLE)에서 걸러낸다

------------------ HAVING --------------------
-- GROUP BY를 사용한 경우만 HAVING절 사용 가능
-- GROUP BY를 하고 난 후의 결과에서 조건으로 걸러내는 경우 사용

SELECT
  manager_id,
  COUNT(*)
FROM employees
GROUP BY manager_id
HAVING COUNT(*) >= 5
ORDER BY manager_id DESC
LIMIT 5;

-- 부서별 최고, 최저...를 부서별로 산출. 단 평균 임금이 5000 이상인 부서만 출력하시오
SELECT
  department_id,
  MAX(salary),
  MIN(salary),
  AVG(salary),
  SUM(salary),
  COUNT(salary)
FROM employees
GROUP BY department_id
WITH ROLLUP;                -- 맨 마지막 줄에 합을 구해준다.
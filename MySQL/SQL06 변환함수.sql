-- Active: 1699837608055@@127.0.0.1@3306@hr
SELECT * FROM employees;

-- ------------ 변환 함수 ---------------

-- 날짜를 문자로 변경
SELECT DATE_FORMAT(NOW(), '%Y-%m-%d %W %p %H:%i%s');

-- 날짜를 숫자로 변경
SELECT NOW(), NOW() + 0;

-- 문자를 날짜로 변경
-- 문자열의 구분자(, -)와 Format 형식이 매칭되야 한다. 매칭되지 않으면 NULL 출력
SELECT 
  STR_TO_DATE('2030, 12, 25 12:10:20', '%Y, %m, %d %H:%i:%s'),
  STR_TO_DATE('2030-12-25 12:10:20', '%Y-%m-%d %H:%i:%s');

-- 숫자를 시간으로 변경
SELECT SEC_TO_TIME(3600);

-- 시간을 초로 변환 (숫자, 문자)
SELECT TIME_TO_SEC('1:00:00');


-- CAST, CONVERT

-- 숫자, 문자를 날짜로 변환
SELECT CAST(20301225121020 AS DATE), CAST('20301225121020' AS DATE);
SELECT CAST(20301225121020 AS DATETIME), CAST('20301225121020' AS DATETIME);

SELECT 
  CAST(20301225121020 AS DATETIME), CAST('2030-12-25 12:10:20' AS DATETIME);

SELECT 
  CONVERT(20301225121020, DATETIME), CONVERT('2030-12-25 12:10:20', DATETIME);


-- 숫자를 문자로 변경
SELECT
  CAST(20301225 AS CHAR), CAST(20301225 AS CHAR(3));

SELECT
  CONVERT(20301225, CHAR), CONVERT(20301225, CHAR(3));


-- 문자를 숫자로 변환 (정수)
SELECT
  CAST('12.345' AS UNSIGNED), CAST('12.345' AS SIGNED), 
  CAST('-12.345' AS UNSIGNED), CAST('-12.345' AS SIGNED);

-- 문자를 숫자로 변환 (실수)
SELECT
  CAST('12.345' AS FLOAT), CAST('12.345' AS FLOAT), 
  CAST('-12.345' AS FLOAT), CAST('-12.345' AS FLOAT);

-- 현재 시간을 숫자로 변경
SELECT NOW(), NOW() + 0, CAST(NOW() AS UNSIGNED);

-- 연습문제
-- 1. 2030년 12월 25일은 무슨 요일일까?
SELECT 
  DAYOFWEEK(CAST('20301225' AS DATE)),
  DATE_FORMAT(CAST('20301225' AS DATE), '%W');

-- 2. 30개월 후는 며칠인가? 요일까지 이름으로 표시하시오
SELECT
  ADDDATE(NOW(), INTERVAL 30 MONTH),
  DATE_FORMAT(ADDDATE(NOW(), INTERVAL 30 MONTH), '%Y-%m-%d %W %H:%i:%s');


-- ----------------- IF / CASE -------------------
SELECT employee_id, first_name, salary, 
  IF(salary >= 7000, 'O', 'X')
FROM employees
WHERE department_id IN(60, 70, 80);

-- salary * commission_pct 값을 산출
SELECT employee_id, first_name, salary, commission_pct, 
  IF(commission_pct IS NULL, salary, (salary * commission_pct) + salary),
  IF(IFNULL(commission_pct, 0) = 0 , salary, (salary * commission_pct) + salary)
FROM employees
WHERE department_id IN(60, 70, 80);

-- CASE
SELECT employee_id, first_name, salary, commission_pct, department_id,
  CASE
    WHEN department_id = 50 THEN salary * 1.2
    WHEN department_id = 60 THEN salary * 1.15
    ELSE salary * 1.1
  END AS '월급 계산'
FROM employees
WHERE department_id IN(50, 60, 70, 80);

-- 연습문제
-- 1. 부서번호가 60번이면 급여 20% 증가, 이외는 10% 증가
SELECT employee_id, first_name, salary, commission_pct, 
  IF(department_id = 60, salary * 1.2, salary * 1.1)
FROM employees
WHERE department_id IN(60, 70, 80);

SELECT employee_id, first_name, salary, commission_pct, 
  CASE
    WHEN department_id = 60 THEN salary * 1.2
    -- WHEN department_id != 60 THEN salary * 1.1
    ELSE salary * 1.1
  END AS salary
FROM employees
WHERE department_id IN(60, 70, 80);

-- 2. 이름에 'a'가 포함되어 있으면 'A팀', 나머지는 'B팀'으로 구분
SELECT employee_id, first_name, salary, commission_pct, 
  IF(LOWER(first_name) LIKE '%a%', 'A팀', 'B팀')
FROM employees
WHERE department_id IN(60, 70, 80);

-- 3. 월급이 10000 이상이면 고액, 그외는 보통 표시
SELECT employee_id, first_name, salary, commission_pct, 
  IF(salary >= 10000, '고액', '보통')
FROM employees
WHERE department_id IN(60, 70, 80);
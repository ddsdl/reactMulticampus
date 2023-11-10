-- Active: 1699575795219@@127.0.0.1@3306@hr

-------------- 문자열 함수 ---------------
USE hr;

-- SELECT * FROM dual;      -- oracle

-- ROW 수 만큼 출력
SELECT CHAR_LENGTH('abc') FROM employees;

-- 글자의 크기. 한글도 1글자로 취급
SELECT CHAR_LENGTH('abc'), CHAR_LENGTH('가나다');

-- ASCII에 있는 1글자는 1bit. 한글은(unicode) 1글자가 3byte (1byte => 8bit)
-- 한글은 1글자당 24bit * 3 => 72
SELECT BIT_LENGTH('abc'), BIT_LENGTH('가나다');

-- ASCII Code 변환
SELECT ASCII('A'), ASCII('a');
SELECT CHAR(65), CHAR(97), CHAR(65 + 32);
SELECT CHAR(ASCII('A')), CHAR(ASCII('A') + 32);

-- 대문자, 소문자로 변경
SELECT UPPER('Hello World'), LOWER('Hello World');

-- 대소문자 구별 없이 값을 검색하고자 하는 경우..
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE LOWER(first_name) = 'john';

-- 문자열을 합쳐서 1개의 컬럼으로 출력
SELECT CONCAT('Hello', ' ', 'World', '!!!');

SELECT employee_id, CONCAT(first_name, ' ', last_name) AS name, salary
FROM employees;

-- 지정한 문자열로 이어 연결. space도 하나의 문자로 취급된다
SELECT CONCAT_WS(' * ', 'Hello', 'World', '!!!');

-- Format. 지정한 자리에서 반올림. 정수는 3자리 단위로 , 추가
SELECT FORMAT('12345.6789', 2), FORMAT(12345.6789, 2);

SELECT 
  employee_id, 
  CONCAT(first_name, ' ', last_name) AS name, 
  FORMAT(salary, 0)
FROM employees;

-- 위치 찾기
SELECT INSTR('Hello World', 'e');

-- 기준 문자열의 위치부터 지정한 길이만큼 삭제하고 선언한 문자열 끼어넣기
SELECT INSERT('Hello World', 6, 1, '***');

-- 지정한 수 만큼 좌, 우에서 문자열 반환
SELECT LEFT('Hello World', 5);      -- Hello
SELECT RIGHT('Hello World', 5);      -- World

SELECT 
  employee_id, 
  CONCAT( LEFT(CONCAT(first_name, ' ', last_name), 5), '...') AS name, 
  FORMAT(salary, 0)
FROM employees;

-- 지정한 수(10)만큼 공간 확보. 값이 지정한 수(10)만큼 안되면 *로 채운다
SELECT LPAD(first_name, 10, '*'), RPAD(last_name, 10, ' ')
FROM employees;


-- 좌, 우 공백 제거
SELECT 
  LTRIM( LPAD(first_name, 10, ' ') ),         -- 왼쪽 공백 삭제
  RTRIM( RPAD(last_name, 10, ' ') ),          -- 오른쪽 공백 삭제
  TRIM( RPAD(last_name, 10, ' ') )            -- 좌, 우 공백 모두 삭제
FROM employees;

-- TRIM은 삭제하고자 하는 문자를 지정할 수 있음.
-- BOTH(양쪽), LEADING(앞), TRAILING(뒤) 지정 가능
SELECT TRIM(BOTH 'H' FROM 'Hello WorlH');

-- 반복
SELECT REPEAT('Hello', 5);

-- 문자 변경
SELECT REPLACE('Hello World', ' ', '-');
SELECT REPLACE('Hello World', 'Hello', 'Good');


-- 문자열 뒤집기
SELECT REVERSE('Hello World');


-- 공백 투입
SELECT CONCAT('Hello', SPACE(5), 'World');

-- 총 글자수
SELECT LENGTH('abc'), LENGTH('가나다');             -- 3, 9
SELECT CHAR_LENGTH('abc'), CHAR_LENGTH('가나다');   -- 3, 3


-- 지정한 값 만큼의 글자수 추출
SELECT
  SUBSTRING('Hello World', 1),    -- 처음부터 끝까지
  SUBSTRING('Hello World', 1, 5), -- 1에서 5개
  SUBSTRING('Hello World', 7),    -- 7부터 끝가지
  SUBSTRING('Hello World', 7, 3); -- 7부터 3개만

-- 위와 동일
SELECT
  SUBSTR('Hello World', 1),    -- 처음부터 끝까지
  SUBSTR('Hello World', 1, 5), -- 1에서 5개
  SUBSTR('Hello World', 7),    -- 7부터 끝가지
  SUBSTR('Hello World', 7, 3); -- 7부터 3개만

SELECT
  MID('Hello World', 1),    -- 처음부터 끝까지
  MID('Hello World', 1, 5), -- 1에서 5개
  MID('Hello World', 7),    -- 7부터 끝가지
  MID('Hello World', 7, 3); -- 7부터 3개만


SELECT
  SUBSTRING_INDEX('www.daum.net', '.', 2),    -- 왼쪽에서부터 .이 2번째 나오는 이후 텍스트 무시
  SUBSTRING_INDEX('www.daum.net', '.', -2)    -- 오른쪽에서부터 왼쪽으로 .이 2번째 나오는 이전 텍스트 무시


SELECT 
  BIN(5),       -- 2진수
  OCT(9),       -- 8진수
  HEX('FF');    -- 16진수


-- 연습문제
-- 사원명을 모두 대문자로 스페이스로 이어서 표시
SELECT 
  employee_id, 
  CONCAT(UPPER(first_name), ' ', UPPER(last_name)) AS name, 
  salary
FROM employees;


-- 사원중 first_name이 10글자 이상인 직원을 출력하시오
SELECT 
  employee_id, 
  CONCAT(UPPER(first_name), ' ', UPPER(last_name)) AS name, 
  salary
FROM employees
WHERE CHAR_LENGTH(first_name) >= 10;


-- first_name 첫 글자 다음에 -를 추가해서 출력 ex] 'Adam' => 'A-dam'
SELECT 
  employee_id, 
  first_name,
  CONCAT(SUBSTR(first_name, 1, 1), '-', SUBSTR(first_name, 2))
  salary
FROM employees
WHERE department_id IN(60, 70);

select insert(first_name, 2, 0, '-')
from employees; 


-- 입사 연도가 94, 95년도인 직원을 출력하시오.
SELECT 
  employee_id, 
  first_name,
  hire_date,
  salary
FROM employees
WHERE SUBSTR(hire_date, 3, 4) IN(94, 95)
ORDER BY employee_id;

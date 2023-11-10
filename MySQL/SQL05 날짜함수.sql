-- Active: 1699575795219@@127.0.0.1@3306@hr

--------------- 날짜 함수 ------------------

SELECT NOW();

-- 현재 로컬 시간으로 변경 - 임시 변경
SET time_zone = 'Asia/Seoul';


-- 오늘의 날짜, 시간 출력
SELECT NOW(), SYSDATE(), NOW() + 0, SYSDATE() + 0;

-- CURRENT_TIMESTAMP은 NOW 의 별칭.
SELECT CURRENT_TIMESTAMP();


-- 날짜와 시간만
SELECT CURDATE(), CURTIME(), CURDATE() + 0, CURTIME() + 0;

-- CURRENT_DATE은 CURDATE의 별칭, CURRENT_TIME은 CURTIME의 별칭
SELECT CURRENT_DATE(), CURRENT_TIME(), CURRENT_DATE() + 0, CURRENT_TIME() + 0;


-- 각각 개별로 참조
SELECT 
  YEAR(NOW()), YEAR('2030-12-25'),
  MONTH(NOW()), MONTH('2030-12-25'),
  DAY(NOW()), DAY('2030-12-25'),
  HOUR(NOW()), HOUR('2030-12-25 12:13:14'),
  MINUTE(NOW()), MINUTE('2030-12-25 12:13:14'),
  SECOND(NOW()), SECOND('2030-12-25 12:13:14');

SELECT
  DATE(NOW()), DATE('2030-12-25 12:13:14'),
  TIME(NOW()), TIME('2030-12-25 12:13:14');


-- 주 추출
SELECT
  DAYOFWEEK(NOW()),     -- 1이 일요일, 7일 토요일
  DAYOFMONTH(NOW()),    -- 월에서 지난 날짜
  DAYOFYEAR(NOW());     -- 올해 시작에서 경과한 일수

SELECT WEEKDAY(NOW());  -- 0이 월요일 6이 일요일

SELECT MONTHNAME(NOW()), DAYNAME(NOW());

-- 분기 출력
SELECT QUARTER(NOW());


-- 해당 월에 며칠까지 있나?
SELECT LAST_DAY(NOW()), LAST_DAY('2030-2-5');


-- 날짜 포멧 => 날짜를 문자로
-- https://devjhs.tistory.com/89

-- %Y4자리 년도, %y2자리 년도
-- %m숫자 월 ( 두자리 ), %c 숫자 월(한자리는 한자리)  
-- %M긴 월(영문) %d일자 (두자리)  %b짧은 월(영문)  
-- %e일자(한자리는 한자리)  
-- %W긴 요일 이름(영문)  
-- %I 시간 (12시간), %H시간(24시간) %i분
-- %a짧은 요일 이름(영문)    
-- %rhh:mm:ss AM,PM  %Thh:mm:SS %S초

출처: https://devjhs.tistory.com/89 [키보드와 하루:티스토리]
SELECT DATE_FORMAT(NOW(), '%Y-%m-%d %W %p %H:%i%s');
SELECT DATE_FORMAT(NOW(), '%y-%m-%d %a %p %h:%i%s');


-- 날짜와 날짜 사이의 일수 구하기
SELECT
  DATEDIFF('2023-12-31', NOW());

-- 시간과 시간 사이의 일수 구하기
SELECT TIMEDIFF('23:59:59', '12:10:30');
SELECT TIMEDIFF('23:59:59', DATE_FORMAT(NOW(), '%H:%i:%s'));

-- 날짜 생성. 지정한 연도에서 경과 일수를 더한 날짜
SELECT MAKEDATE(2030, 100), MAKETIME(12, 30, 40);

-- 날짜 더하기
SELECT
  NOW(),
  ADDDATE(NOW(), 1),                -- 숫자는 일 기준. 즉 1일 후
  ADDDATE(NOW(), INTERVAL 1 DAY);   -- 1일 추가. 위와 동일

SELECT
  NOW(),
  ADDDATE(NOW(), INTERVAL 1 MONTH),   -- 1달 추가
  ADDDATE(NOW(), INTERVAL 1 YEAR);   -- 1년 추가

-- ADDDATE과 DATE_ADD은 동일 명령
SELECT
  '2030-01-05 10:00:00' + INTERVAL 1 SECOND,
  INTERVAL 1 SECOND + '2030-01-05 10:00:00',
  '2030-01-05 10:00:00' - INTERVAL 1 SECOND,
  ADDDATE('2030-01-05 10:00:00', INTERVAL 1 SECOND),
  DATE_ADD('2030-01-05 10:00:00', INTERVAL 1 MINUTE),
  DATE_ADD('2030-01-05 10:00:00', INTERVAL 1 HOUR);

-- 날짜와 시간을 동시에 추가
-- SECOND
-- MINUTE_SECOND, MINUTE_MICROSECOND
-- HOUR_MINUTE, HOUR_SECOND, HOUR_MICROSECOND
-- DAY_HOUR, DAY_MINUTE, DAY_SECOND, DAY_MICROSECOND
SELECT
  ADDDATE('2030-01-05 10:00:00', INTERVAL '1:1' MINUTE_SECOND),
  ADDDATE('2030-01-05 10:00:00', INTERVAL '1:1:1' HOUR_SECOND),
  ADDDATE('2030-01-05 10:00:00', INTERVAL '1 1:1:1' DAY_SECOND),
  ADDDATE('2030-01-05 10:00:00.000000', INTERVAL '1.000005' SECOND_MICROSECOND);

-- ADD를 SUB로만 변경하면 빼기로 연산된다
SELECT
  SUBDATE('2030-01-05 10:00:00', INTERVAL '1:1' MINUTE_SECOND),
  SUBDATE('2030-01-05 10:00:00', INTERVAL '1:1:1' HOUR_SECOND),
  SUBDATE('2030-01-05 10:00:00', INTERVAL '1 1:1:1' DAY_SECOND),
  SUBDATE('2030-01-05 10:00:00.000000', INTERVAL '1.000005' SECOND_MICROSECOND);


-- 시간만 조작. TIME_ADD는 없음..
SELECT 
  NOW(),
  ADDTIME(NOW(), '10'),       -- 기본이 초
  ADDTIME('2030-01-05 10:00:00', '10'),
  ADDTIME('2030-01-05 10:00:00', '0:10'),   -- :로 연결되면 시:분
  ADDTIME('2030-01-05 10:00:00', '1:10:10');

-- 빼기는 SUB로 변경
SELECT 
  NOW(),
  SUBTIME(NOW(), '10'),       -- 기본이 초
  SUBTIME('2030-01-05 10:00:00', '10'),
  SUBTIME('2030-01-05 10:00:00', '0:10'),   -- :로 연결되면 시:분
  SUBTIME('2030-01-05 10:00:00', '1:10:10');


-- 연습문제
-- 이름이 'A'로 시작되는 사원의 입사 30주년이 되는 날은?
SELECT employee_id, first_name, hire_date, 
FROM employees
WHERE 

-- 사원의 이름, 나이 조회, 나이는 입사일을 생년월일로 한다
-- 출력 형태는 20세 3개월 형태가 되도록 출력
SELECT employee_id, first_name, hire_date, 
  TIMESTAMPDIFF(MONTH, hire_date, NOW())
FROM employees
WHERE department_id = 60;

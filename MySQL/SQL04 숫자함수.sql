-- Active: 1699575795219@@127.0.0.1@3306@hr

------------------ 숫자 함수 -------------------

SELECT 10 + 3, 10 - 3, 10 * 3, 10 / 3, 10 % 3
FROM employees;

-- 나머지 함수
SELECT MOD(10, 3);

-- 자승 2 * 2 * 2 => 2의 3승 ( ** )
SELECT POW(2, 3), POWER(2, 3);


-- 무조건 올림, 무조건 버림, 반올림
SELECT CEILING(10.0001), FLOOR(10.999), ROUND(10.4), ROUND(10.5);

-- 반올림 자리수 지정
SELECT 
  ROUND(12345.1234567, 2),
  ROUND(12345.1234567, 5),
  ROUND(12345.1234567, 0);

-- 무조건 버림(소수점이하). 지정한 자리수까지만 짤라서 반환
SELECT 
  TRUNCATE(12345.1234567, 2),
  TRUNCATE(12345.1234567, 5),
  TRUNCATE(12345.1234567, 0);

-- 난수 발생
SELECT
  RAND(),
  RAND() * 5,             -- 0.xxxxxx ~ 4.xxxxxx
  CEILING(RAND() * 5);    -- 1 ~ 5


-- 지정한 지수 값으로 값 변경
SELECT BIN(255), OCT(255), HEX(255);

-- CONV(2진수|8진수|16진수읙 값, 원래의 진수값, 변경한 진수 값);
SELECT 
  CONV(11111111, 2, 10),
  CONV(377, 8, 10),
  CONV(377, 8, 2),
  CONV('FF', 16, 10);

-- 값이 양수, 음수, 0인지 판별
SELECT SIGN(123), SIGN(-123), SIGN(0), SIGN(-0);

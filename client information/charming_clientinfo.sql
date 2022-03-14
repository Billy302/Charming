-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-03-14 03:53:57
-- 伺服器版本： 8.0.28
-- PHP 版本： 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `charming_clientinfo`
--

-- --------------------------------------------------------

--
-- 資料表結構 `client_information`
--

CREATE TABLE `client_information` (
  `User_ID` int NOT NULL,
  `User_Account` varchar(20) NOT NULL,
  `Join_Date` datetime NOT NULL,
  `User_Password` varchar(30) NOT NULL,
  `Lastname` varchar(5) NOT NULL,
  `FirstName` varchar(5) NOT NULL,
  `Birthday` datetime NOT NULL,
  `Id_number` varchar(10) NOT NULL,
  `Edu_level` varchar(10) NOT NULL,
  `Gender` varchar(1) NOT NULL,
  `Skill` varchar(15) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Phone` int NOT NULL,
  `Work` varchar(30) NOT NULL,
  `Workhours` int NOT NULL,
  `Photo` blob NOT NULL,
  `Bank_accnum` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `client_information`
--

INSERT INTO `client_information` (`User_ID`, `User_Account`, `Join_Date`, `User_Password`, `Lastname`, `FirstName`, `Birthday`, `Id_number`, `Edu_level`, `Gender`, `Skill`, `Email`, `Address`, `Phone`, `Work`, `Workhours`, `Photo`, `Bank_accnum`) VALUES
(1, 'charming1', '2022-03-14 03:46:04', 0x636861726d696e6731323300000000000000000000000000000000000000, 'Char', 'ming', '2022-03-14 03:46:04', 'A234567890', 'master', 'M', 'English ', 'charming@gmail.com', '123', 987654321, 'Tutor', 30, '', 123456);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

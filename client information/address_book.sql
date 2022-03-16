-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-03-16 09:10:52
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
-- 資料庫: `proj57`
--

-- --------------------------------------------------------

--
-- 資料表結構 `address_book`
--

CREATE TABLE `address_book` (
  `sid` int NOT NULL,
  `User_ID` int DEFAULT NULL,
  `User_Account` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `User_Password` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `birthday` date NOT NULL,
  `ID NUMBER` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Edu_level` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `gender` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `skill` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mobile` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Work` varchar(30) NOT NULL,
  `Workhours` int NOT NULL,
  `Photo` blob,
  `Bank_accnum` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- 傾印資料表的資料 `address_book`
--

INSERT INTO `address_book` (`sid`, `User_ID`, `User_Account`, `created_at`, `User_Password`, `name`, `birthday`, `ID NUMBER`, `Edu_level`, `gender`, `skill`, `email`, `address`, `mobile`, `Work`, `Workhours`, `Photo`, `Bank_accnum`) VALUES
(1, 1, '', '2020-04-06 16:31:02', '', '歐芷晴', '1990-05-01', '', '碩士', '女', '廣東話', '00001@gmail.com', '新界荃灣怡樂街２－１２號海濱花園Ｄ平台', '0918111222', '', 0, '', 1),
(2, 2, '', '2020-04-06 16:31:02', '', '陳裕樺', '1990-05-07', '', '博士', '男', '廣東話', '00002@gmail.com', '香港鰂魚涌英皇道１１２４號康山花園第８座及第９座地下', '0918111222', 'Tutor', 20, '', 2),
(3, 3, '', '2020-04-06 16:31:02', '', '鄭悅芙', '1990-05-07', '', '碩士', '女', '廣東話', '00003@gmail.com', '九龍紅磡德康街６號黃埔花園第１１期地下Ｇ２５號舖', '0918111222', 'Tutor', 15, '', 3),
(4, 4, '', '2020-04-06 16:31:02', '', '錢風遠', '1990-05-07', '', '碩士', '男', '', '00004@gmail.com', '新界元朗丈量約份第１１５約南邊圍地段２３９號地下', '0918111222', 'Tutor', 10, '', 4),
(5, 5, '', '2020-04-06 16:31:02', '', '徐琪雁', '1990-05-07', '', '學士', '女', '', '00005@gmail.com', '新界大埔寶雅苑興和閣地下１１７－１２４室', '0918111222', 'Tutor', 20, '', 5),
(6, 6, '', '2020-04-06 16:31:02', '', '費鵬旭', '1990-05-07', '', '學士', '男', '廣東話', '00006@gmail.com', '新界天水圍天恩邨天恩商場１樓１２２號', '0918111222', '', 20, '', 6),
(7, 7, '', '2020-04-06 16:31:02', '', '趙筠榆', '1990-05-07', '', '博士', '女', '', '00007@gmail.com', '新界將軍澳貿泰路８號茵怡花園第一座平台', '0918111222', '', 10, '', 7),
(8, 8, '', '2020-04-06 16:31:02', '', '蔣名謙', '1990-05-07', '', '碩士', '男', '', '00008@gmail.com', '新界屯門屯門市地段３３８號第１６區翠寧花園', '0918111222', '', 30, '', 8),
(9, 9, '', '2020-04-06 16:31:02', '', '程曼芷', '1990-05-07', '', '博士', '女', '', '00009@gmail.com', '新界荃灣沙咀道３２８號寶石大廈３座地下', '0918111222', '', 15, '', 0),
(10, 10, '', '2020-04-06 16:31:02', '', '卓逸朗', '1990-05-07', '', '博士', '男', 'python', '00010@gmail.com', '新界葵涌石蔭邨石蔭商場平台Ｂ及Ｃ單位', '0918111222', 'Tutor', 10, '', 10),
(11, 11, '', '2020-04-06 16:31:02', '', '簡柔馨', '1990-05-07', '', '博士', '女', '大提琴', '00011@gmail.com', '新界大埔翠樂街８號富萊花園Ｇ０７Ｂ舖部份地下及２樓', '0918111222', 'Tutor', 20, '', 11),
(12, 12, '', '2020-04-06 16:31:02', '', '張俊軒', '1990-05-07', '', '學士', '男', '物理', '00012@gmail.com', '新界大埔翠樂街８號富萊花園Ｇ０７Ｂ舖地下至二樓', '0918111222', '', 10, '', 12),
(13, 13, '', '2020-04-06 16:31:02', '', '曹穎彤', '1990-05-07', '', '碩士', '女', '', '00013@gmail.com', '新界大嶼山梅窩梅窩碼頭路１９號海愉花園地下１號舖', '0918111222', '', 30, '', 13),
(14, 14, '', '2020-04-06 16:31:02', '', '畢曉嵐', '1990-05-07', '', '博士', '女', '', '00014@gmail.com', '新界荃灣梨木樹邨第３期榮樹樓地下', '0918111222', 'Tutor', 30, '', 14),
(15, 15, '', '2020-04-08 11:50:22', '', '朱思澄', '1990-04-01', '', '學士', '男', '', '00015@gmail.com', '新界沙田愉翠苑二期停車場及服務設施大樓一樓', '0918-222555', 'Tutor', 20, '', 15),
(16, 16, '', '2020-04-08 12:05:21', '', '梁嘉琪', '0000-00-00', '', '博士', '女', '', '00017@gmail.com', '香港銅鑼灣高士威道１６－２２號高威樓４樓Ａ、Ｂ、Ｆ、Ｇ及Ｈ室', '0918-222333', '', 10, '', 17),
(17, 17, '', '2020-04-09 14:56:05', '', '胡靖睿', '2020-04-08', '', '博士', '男', '', '00017@gmail.com', '新界沙田馬鞍山利安邨利興樓地下Ｇ１\r\n                    ', '0918-222333', '', 20, '', 17),
(18, 18, '', '2020-04-09 15:11:01', '', '范熙睿', '2020-04-01', '', '碩士', '男', '', '00018@gmail.com', '九龍深水埗歌和老街５５號', '0918-222333', '', 20, '', 18),
(19, 19, '', '2020-04-09 16:31:09', '', '霍諾軒', '2020-04-01', '', '博士', '男', '', '00019@gmail.com', '香港西灣河西灣河街１７５－１８１號', '0918-222555', 'Tutor', 20, '', 19),
(20, 20, '', '2020-04-10 09:23:56', '', '許晞彤', '1995-05-05', '', '碩士', '女', '', '00020@gmail.com', '香港西灣河西灣河街１７５－１８１號', '0999-123-456', '', 10, '', 20),
(21, 21, '', '2020-04-10 10:12:09', '', '馮丹麗', '2020-04-09', '', '學士', '女', '', '00021@gmail.com', '香港灣仔駱克道３號２樓及４樓（天台遊戲場）', '0900000021', 'Tutor', 20, '', 21),
(22, 22, '', '2022-03-15 10:59:19', '', '向柏賢', '2022-03-18', '', '學士', '男', '', '00022@gmail.com', '新界上水石湖墟龍琛路２６－２８號地下二樓', '0987654334', '', 20, '', 22),
(23, 23, '', '2022-03-15 11:00:44', '', '蘇熙珺', '2022-03-19', '', '學士', '女', '', '00023@gmail.com', '香港第一街８號縉城峰１樓７號舖', '0987654356', 'Tutor', 15, '', 23),
(24, 24, '', '2022-03-15 15:29:22', '', '方彥廷', '2022-03-25', '', '學士', '男', '', '00024@gmail.com', '新界大埔安泰路一號大埔廣場２樓７６室', '0987667342', 'Tutor', 20, '', 24),
(25, 25, '', '2022-03-16 11:13:28', '', '康樂恩', '2022-03-10', '', '博士', '女', '', '00025@gmail.com', '新界沙田火炭銀禧薈平台３２７號', '0987655321', '', 30, '', 25),
(26, 26, NULL, '2022-03-16 14:23:22', NULL, '楊凱晴', '2022-03-01', '26', '學士', '女', NULL, '00026@gmail.com', '新界荃灣怡樂街２－１２號海濱花園Ｄ平台', '0900000001', '研究助理', 20, NULL, NULL),
(27, 27, NULL, '2022-03-16 14:21:22', NULL, '何靖翰', '2022-03-01', '011', '碩士', '男', NULL, '00027@gmail.com', '新界葵涌華景山路９號華景商場地下２１號及１樓１號', '0900000001', '', 20, NULL, NULL);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `address_book`
--
ALTER TABLE `address_book`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `address_book`
--
ALTER TABLE `address_book`
  MODIFY `sid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

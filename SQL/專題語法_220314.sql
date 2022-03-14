CREATE TABLE `client_information` (
  `ID`  int PRIMARY KEY NOT NULL AUTO_INCREMENT,,
  `account` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `birthday` datetime NOT NULL,
  `ID_number` varchar(10) NOT NULL,
  `edu_level` varchar(10) NOT NULL,
  `gender` varchar(2) NOT NULL,
  `skill` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` int NOT NULL,
  `photo` blob NOT NULL,
  `bank_accnum` int NOT NULL,
  `Join_date` datetime DEFAULT (now())
);

CREATE TABLE `wf_top` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `top_name` varchar(20) NOT NULL
);

CREATE TABLE `wf_content` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `top_ID` int,
  `user_ID` int,
  `title` varchar(20) NOT NULL,
  `content` varchar(10000) NOT NULL,
  `tag_id` varchar(15),
  `creat_at` datetime DEFAULT (now())
);

CREATE TABLE `wf_comment` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_ID` int,
  `content` varchar(500),
  `content_ID` int,
  `img` varchar(max),
  `creat_at` datetime DEFAULT (now())
);

CREATE TABLE `wf_likes` (
  `content_ID` int,
  `user_ID` int
);

CREATE TABLE `wf_img` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `link` varchar(max) NOT NULL,
  `img_ID` int NOT NULL
);

CREATE TABLE `wf_views` (
  `collection_ID` int,
  `tag_ID` int
);

CREATE TABLE `wf_tag` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(10) NOT NULL
);

CREATE TABLE `wf_save` (
  `content_ID` int,
  `user_ID` int,
  `creat_at` datetime DEFAULT (now())
);

CREATE TABLE `ds_board` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `board_name` varchar(20) NOT NULL
);

CREATE TABLE `ds_article` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `board_ID` int,
  `user_ID` int,
  `title` varchar(20) NOT NULL,
  `content` varchar(max) NOT NULL,
  `tag_ID` varchar(15),
  `creat_at` datetime DEFAULT (now())
);

CREATE TABLE `ds_comment` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_ID` int,
  `content` varchar(max),
  `article_ID` int,
  `img` varchar(max),
  `creat_at` datetime DEFAULT (now())
);

CREATE TABLE `ds_likes` (
  `article_ID` int,
  `user_ID` int
);

CREATE TABLE `ds_photo` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `link` varchar(max) NOT NULL,
  `article_ID` int NOT NULL
);

CREATE TABLE `ds_article_tag` (
  `article_ID` int,
  `tag_ID` int
);

CREATE TABLE `ds_tag` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(10) NOT NULL
);

CREATE TABLE `ds_save` (
  `article_ID` int,
  `user_ID` int,
  `creat_at` datetime DEFAULT (now())
);

CREATE TABLE `blog` (
  `blog_ID` int PRIMARY KEY AUTO_INCREMENT,
  `blog_title` varchar(100) NOT NULL,
  `blog_content` varchar(100) NOT NULL
);

CREATE TABLE `blog_photos` (
  `photos_ID` int PRIMARY KEY AUTO_INCREMENT,
  `photos_img` varchar(50) NOT NULL,
  `blog_ID` int
);

CREATE TABLE `blog_tags` (
  `tags_ID` int PRIMARY KEY AUTO_INCREMENT,
  `tags_desc` varchar(50),
  `blog_ID` int
);

CREATE TABLE `blog_comments` (
  `comments_ID` int PRIMARY KEY AUTO_INCREMENT,
  `comments_desc` varchar(50),
  `blog_ID` int
);

CREATE TABLE `blog_likes` (
  `likes_ID` int PRIMARY KEY AUTO_INCREMENT,
  `comments_ID` int,
  `blog_ID` int
);

CREATE TABLE `activity` (
  `sid` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `class_name` varchar(10) NOT NULL,
  `class_time` int NOT NULL,
  `user_ID` int NOT NULL,
  `creat_at` datetime NOT NULL DEFAULT (now())
);

CREATE TABLE `members_search` (
  `sid` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `keyword` text NOT NULL,
  `user_ID` int NOT NULL,
  `place` varchar(10) NOT NULL
);

CREATE TABLE `place` (
  `sid` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `place` varchar(10) DEFAULT NULL,
  `create_at` datetime DEFAULT (now())
);

CREATE TABLE `search` (
  `sid` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `keyword` varchar(10) DEFAULT NULL,
  `place_ID` int DEFAULT NULL,
  `create_at` datetime DEFAULT (now())
);

CREATE TABLE `work_service` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `service_ltems` varchar(max) NOT NULL,
  `service_hours` varchar(50) DEFAULT (09:00~18:00),
  `service_fee` int NOT NULL,
  `production_time` int NOT NULL,
  `modifications` int DEFAULT (3),
  `user_ID` int NOT NULL,
  `create_at` datetime DEFAULT (now())
);

CREATE TABLE `work_service_score` (
  `case_ID` int NOT NULL,
  `porson_ID` int NOT NULL,
  `star` int DEFAULT (0),
  `content` varchar(max) NOT NULL,
  `create_at` datetime DEFAULT (now())
);

CREATE TABLE `work_picture` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `service_ID` int,
  `link` varchar(max)
);

CREATE TABLE `work_case` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `employer_ID` int NOT NULL,
  `employee_ID` int NOT NULL,
  `service_ID` int NOT NULL,
  `status_ID` int NOT NULL,
  `modify_ID` int NOT NULL,
  `start_time` datetime DEFAULT (now()),
  `end_time` datetime
);

CREATE TABLE `work_case_modify` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `modifications` int DEFAULT (0),
  `remark` varchar(50),
  `create_at` datetime DEFAULT (now())
);

CREATE TABLE `work_case_status` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `mode` int DEFAULT (1),
  `remark` varchar(50),
  `start_time` datetime DEFAULT (now()),
  `end_time` datetime
);

CREATE TABLE `work_talk` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `speaker` tinyint NOT NULL,
  `content` varchar(max) NOT NULL,
  `case_ID` int NOT NULL,
  `speaker_time` datetime DEFAULT (now())
);

CREATE TABLE `work_like` (
  `service_ID` int NOT NULL,
  `porson_ID` int NOT NULL,
  `create_at` datetime DEFAULT (now())
);

CREATE TABLE `work_track` (
  `service_ID` int NOT NULL,
  `porson_ID` int NOT NULL,
  `create_at` datetime DEFAULT (now())
);

ALTER TABLE `wf_content` ADD FOREIGN KEY (`top_ID`) REFERENCES `wf_top` (`ID`);

ALTER TABLE `wf_content` ADD FOREIGN KEY (`user_ID`) REFERENCES `client_information` (`ID`);

ALTER TABLE `blog_photos` ADD FOREIGN KEY (`blog_ID`) REFERENCES `blog` (`blog_ID`);

ALTER TABLE `blog_tags` ADD FOREIGN KEY (`blog_ID`) REFERENCES `blog` (`blog_ID`);

ALTER TABLE `blog_comments` ADD FOREIGN KEY (`blog_ID`) REFERENCES `blog` (`blog_ID`);

ALTER TABLE `blog_likes` ADD FOREIGN KEY (`comments_ID`) REFERENCES `blog_comments` (`comments_ID`);

ALTER TABLE `blog_likes` ADD FOREIGN KEY (`blog_ID`) REFERENCES `blog` (`blog_ID`);

ALTER TABLE `search` ADD FOREIGN KEY (`place_ID`) REFERENCES `place` (`sid`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `activity` (`user_ID`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `members_search` (`user_ID`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `wf_likes` (`user_ID`);

ALTER TABLE `wf_content` ADD FOREIGN KEY (`ID`) REFERENCES `wf_likes` (`content_ID`);

ALTER TABLE `wf_content` ADD FOREIGN KEY (`ID`) REFERENCES `wf_img` (`img_ID`);

ALTER TABLE `wf_content` ADD FOREIGN KEY (`ID`) REFERENCES `wf_save` (`content_ID`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `wf_save` (`user_ID`);

ALTER TABLE `wf_tag` ADD FOREIGN KEY (`ID`) REFERENCES `wf_content` (`tag_id`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `wf_comment` (`user_ID`);

ALTER TABLE `wf_content` ADD FOREIGN KEY (`ID`) REFERENCES `wf_comment` (`content_ID`);

ALTER TABLE `wf_tag` ADD FOREIGN KEY (`ID`) REFERENCES `wf_views` (`tag_ID`);

ALTER TABLE `wf_content` ADD FOREIGN KEY (`ID`) REFERENCES `wf_views` (`collection_ID`);

ALTER TABLE `ds_board` ADD FOREIGN KEY (`ID`) REFERENCES `ds_article` (`board_ID`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `ds_article` (`user_ID`);

ALTER TABLE `ds_tag` ADD FOREIGN KEY (`ID`) REFERENCES `ds_article` (`tag_ID`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `ds_comment` (`user_ID`);

ALTER TABLE `ds_article` ADD FOREIGN KEY (`ID`) REFERENCES `ds_comment` (`article_ID`);

ALTER TABLE `ds_article` ADD FOREIGN KEY (`ID`) REFERENCES `ds_likes` (`article_ID`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `ds_likes` (`user_ID`);

ALTER TABLE `ds_article` ADD FOREIGN KEY (`ID`) REFERENCES `ds_photo` (`article_ID`);

ALTER TABLE `ds_tag` ADD FOREIGN KEY (`tag_name`) REFERENCES `ds_article_tag` (`tag_ID`);

ALTER TABLE `ds_article` ADD FOREIGN KEY (`ID`) REFERENCES `ds_article_tag` (`article_ID`);

ALTER TABLE `ds_article` ADD FOREIGN KEY (`ID`) REFERENCES `ds_save` (`article_ID`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `ds_save` (`user_ID`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `work_service` (`user_ID`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `work_case` (`employer_ID`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `work_case` (`employee_ID`);

ALTER TABLE `work_service` ADD FOREIGN KEY (`ID`) REFERENCES `work_case` (`service_ID`);

ALTER TABLE `work_service` ADD FOREIGN KEY (`ID`) REFERENCES `work_picture` (`service_ID`);

ALTER TABLE `work_case_status` ADD FOREIGN KEY (`ID`) REFERENCES `work_case` (`status_ID`);

ALTER TABLE `work_case` ADD FOREIGN KEY (`ID`) REFERENCES `work_talk` (`case_ID`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `work_like` (`create_at`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `work_track` (`create_at`);

ALTER TABLE `client_information` ADD FOREIGN KEY (`ID`) REFERENCES `work_service_score` (`porson_ID`);

ALTER TABLE `work_case` ADD FOREIGN KEY (`ID`) REFERENCES `work_service_score` (`case_ID`);

ALTER TABLE `work_case_modify` ADD FOREIGN KEY (`ID`) REFERENCES `work_case` (`modify_ID`);

ALTER TABLE `work_service` ADD FOREIGN KEY (`ID`) REFERENCES `work_track` (`service_ID`);

ALTER TABLE `work_service` ADD FOREIGN KEY (`ID`) REFERENCES `work_like` (`service_ID`);

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'prefecture'
-- 県
-- ---

DROP TABLE IF EXISTS `prefecture`;
		
CREATE TABLE `prefecture` (
  `pref_cd` MEDIUMTEXT NULL DEFAULT NULL COMMENT '県コード',
  `pref_name` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '県名',
  PRIMARY KEY (`pref_cd`)
) COMMENT '県';

-- ---
-- Table 'specialty_food'
-- ご当地名物
-- ---

DROP TABLE IF EXISTS `specialty_food`;
		
CREATE TABLE `specialty_food` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `food_name` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '料理名',
  `food_description` MEDIUMTEXT NULL DEFAULT NULL COMMENT '料理説明',
  `food_img_url` MEDIUMTEXT NULL DEFAULT NULL COMMENT '料理画像URL',
  `pref_cd` MEDIUMTEXT NULL DEFAULT NULL COMMENT '県コード',
  `season_cd` MEDIUMTEXT NULL DEFAULT NULL COMMENT '季節コード',
  PRIMARY KEY (`id`)
) COMMENT 'ご当地名物';

-- ---
-- Table 'season'
-- 旬の時期
-- ---

DROP TABLE IF EXISTS `season`;
		
CREATE TABLE `season` (
  `season_cd` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '季節コード',
  `season_name` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '季節名',
  `season_start` DATE NULL DEFAULT NULL COMMENT '季節開始日',
  `season_end` DATE NULL DEFAULT NULL COMMENT '季節終了日',
  PRIMARY KEY (`season_cd`)
) COMMENT '旬の時期';

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `specialty_food` ADD FOREIGN KEY (pref_cd) REFERENCES `prefecture` (`pref_cd`);
ALTER TABLE `specialty_food` ADD FOREIGN KEY (season_cd) REFERENCES `season` (`season_cd`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `prefecture` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `specialty_food` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `season` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `prefecture` (`pref_cd`,`pref_name`) VALUES
-- ('','');
-- INSERT INTO `specialty_food` (`id`,`food_name`,`food_description`,`food_img_url`,`pref_cd`,`season_cd`) VALUES
-- ('','','','','','');
-- INSERT INTO `season` (`season_cd`,`season_name`,`season_start`,`season_end`) VALUES
-- ('','','','');
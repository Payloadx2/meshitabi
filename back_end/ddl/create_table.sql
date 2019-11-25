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
  `pref_cd` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '県コード',
  `pref_name` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '県名',
  `region_cd` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '地方コード',
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
  `season_cd` MEDIUMTEXT NULL DEFAULT NULL COMMENT '季節コード',
  `pref_cd` MEDIUMTEXT NULL DEFAULT NULL COMMENT '県コード',
  `station_cd` MEDIUMTEXT NULL DEFAULT NULL COMMENT '駅コード',
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
-- Table 'region'
-- 地方
-- ---

DROP TABLE IF EXISTS `region`;
		
CREATE TABLE `region` (
  `region_cd` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '地方コード',
  `region_name` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '地方名',
  PRIMARY KEY (`region_cd`)
) COMMENT '地方';

-- ---
-- Table 'station'
-- 駅
-- ---

DROP TABLE IF EXISTS `station`;
		
CREATE TABLE `station` (
  `station_cd` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '駅コード',
  `station_name` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '駅名',
  `pref_cd` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '県コード',
  PRIMARY KEY (`station_cd`)
) COMMENT '駅';

-- ---
-- Table 'distance'
-- 距離
-- ---

DROP TABLE IF EXISTS `distance`;
		
CREATE TABLE `distance` (
  `id` INTEGER NULL DEFAULT NULL COMMENT 'id',
  `from_station_cd` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '出発駅',
  `to_station_cd` MEDIUMTEXT NOT NULL DEFAULT 'NULL' COMMENT '到着駅',
  `distance` INTEGER NULL DEFAULT NULL COMMENT '距離',
  `time_required` INTEGER NULL DEFAULT NULL COMMENT '所要時間',
  PRIMARY KEY (`id`)
) COMMENT '距離';

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `prefecture` ADD FOREIGN KEY (region_cd) REFERENCES `region` (`region_cd`);
ALTER TABLE `specialty_food` ADD FOREIGN KEY (season_cd) REFERENCES `season` (`season_cd`);
ALTER TABLE `specialty_food` ADD FOREIGN KEY (pref_cd) REFERENCES `prefecture` (`pref_cd`);
ALTER TABLE `specialty_food` ADD FOREIGN KEY (station_cd) REFERENCES `station` (`station_cd`);
ALTER TABLE `station` ADD FOREIGN KEY (pref_cd) REFERENCES `prefecture` (`pref_cd`);
ALTER TABLE `distance` ADD FOREIGN KEY (from_station_cd) REFERENCES `station` (`station_cd`);
ALTER TABLE `distance` ADD FOREIGN KEY (to_station_cd) REFERENCES `station` (`station_cd`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `prefecture` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `specialty_food` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `season` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `region` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `station` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `distance` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `prefecture` (`pref_cd`,`pref_name`,`region_cd`) VALUES
-- ('','','');
-- INSERT INTO `specialty_food` (`id`,`food_name`,`food_description`,`food_img_url`,`season_cd`,`pref_cd`,`station_cd`) VALUES
-- ('','','','','','','');
-- INSERT INTO `season` (`season_cd`,`season_name`,`season_start`,`season_end`) VALUES
-- ('','','','');
-- INSERT INTO `region` (`region_cd`,`region_name`) VALUES
-- ('','');
-- INSERT INTO `station` (`station_cd`,`station_name`,`pref_cd`) VALUES
-- ('','','');
-- INSERT INTO `distance` (`id`,`from_station_cd`,`to_station_cd`,`distance`,`time_required`) VALUES
-- ('','','','','');
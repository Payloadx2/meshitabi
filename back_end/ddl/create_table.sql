-- ---
-- Table 'region'
-- 地方
-- ---

DROP TABLE IF EXISTS region;
		
CREATE TABLE region (
  region_cd SERIAL NOT NULL,
  region_name TEXT NOT NULL,
  region_name_kana TEXT NULL ,
  PRIMARY KEY (region_cd)
);

-- ---
-- Table 'prefecture'
-- 県
-- ---

DROP TABLE IF EXISTS prefecture;
		
CREATE TABLE prefecture (
  pref_cd SERIAL NOT NULL,
  region_cd INTEGER NOT NULL,
  pref_name TEXT NOT NULL,
  pref_name_kana TEXT NULL ,
  PRIMARY KEY (pref_cd)
);

-- ---
-- Table 'food_category'
-- 食べ物カテゴリ
-- ---

DROP TABLE IF EXISTS food_category;

CREATE TABLE food_category (
  food_category_cd SERIAL NOT NULL,
  food_category_name TEXT NOT NULL,
  PRIMARY KEY (food_category_cd)
);

-- ---
-- Table 'specialty_food'
-- ご当地名物
-- ---

DROP TABLE IF EXISTS specialty_food;
		
CREATE TABLE specialty_food (
  food_cd SERIAL NOT NULL,
  food_category_cd INTEGER NULL,
  pref_cd INTEGER NULL,
  station_cd INTEGER NULL,
  location TEXT NULL,
  season_cd INTEGER NULL,
  food_name TEXT NOT NULL,
  food_name_kana TEXT NULL,
  food_description TEXT NULL,
  food_img_url TEXT NULL,
  PRIMARY KEY (food_cd)
);

-- ---
-- Table 'season'
-- 旬の時期
-- ---

DROP TABLE IF EXISTS season;
		
CREATE TABLE season (
  season_cd SERIAL NOT NULL,
  season_name TEXT NOT NULL,
  season_start DATE NULL,
  season_end DATE NULL,
  PRIMARY KEY (season_cd)
);

-- ---
-- Table 'station'
-- 駅
-- ---

DROP TABLE IF EXISTS station;
		
CREATE TABLE station (
  station_cd SERIAL NOT NULL,
  pref_cd INTEGER NOT NULL,
  station_name TEXT NOT NULL,
  station_name_kana TEXT NULL ,
  PRIMARY KEY (station_cd)
);

-- ---
-- Table 'distance'
-- 距離
-- ---

DROP TABLE IF EXISTS distance;
		
CREATE TABLE distance (
  distance_cd SERIAL NOT NULL,
  from_station_cd INTEGER NOT NULL,
  to_station_cd INTEGER NOT NULL,
  distance INTEGER NULL,
  time_required INTEGER NULL,
  PRIMARY KEY (distance_cd)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE prefecture ADD FOREIGN KEY (region_cd) REFERENCES region (region_cd);
ALTER TABLE specialty_food ADD FOREIGN KEY (food_category_cd) REFERENCES food_category (food_category_cd);
ALTER TABLE specialty_food ADD FOREIGN KEY (season_cd) REFERENCES season (season_cd);
ALTER TABLE specialty_food ADD FOREIGN KEY (pref_cd) REFERENCES prefecture (pref_cd);
ALTER TABLE specialty_food ADD FOREIGN KEY (station_cd) REFERENCES station (station_cd);
ALTER TABLE station ADD FOREIGN KEY (pref_cd) REFERENCES prefecture (pref_cd);
ALTER TABLE distance ADD FOREIGN KEY (from_station_cd) REFERENCES station (station_cd);
ALTER TABLE distance ADD FOREIGN KEY (to_station_cd) REFERENCES station (station_cd);

-- ---
-- Test Data
-- ---

-- INSERT INTO prefecture (pref_cd,region_cd,pref_name,pref_name_kana) VALUES
-- ('','','','');
-- INSERT INTO specialty_food (food_cd,season_cd,pref_cd,station_cd,food_name,food_name_kana,food_description,food_img_url) VALUES
-- ('','','','','','','','');
-- INSERT INTO season (season_cd,season_name,season_start,season_end) VALUES
-- ('','','','');
-- INSERT INTO region (region_cd,region_name,region_name_kana) VALUES
-- ('','','');
-- INSERT INTO station (station_cd,pref_cd,station_name,station_name_kana) VALUES
-- ('','','','');
-- INSERT INTO distance (distance_cd,from_station_cd,to_station_cd,distance,time_required) VALUES
-- ('','','','','');
-- INSERT INTO food_category (food_category_cd,food_category_name) VALUES
-- ('','');

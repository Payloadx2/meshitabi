-- ---
-- Test Data
-- ---

-- INSERT INTO region (region_cd,region_name,region_name_kana) VALUES
-- ('','','');
INSERT INTO region (region_cd,region_name,region_name_kana) VALUES
    (1,'北海道','ホッカイドウ'),
    (2,'東北','トウホク'),
    (3,'関東','カントウ'),
    (4,'中部','チュウブ'),
    (5,'近畿','キンキ'),
    (6,'中国','チュウゴク'),
    (7,'四国','シコク'),
    (8,'九州','キュウシュウ')
;

-- INSERT INTO prefecture (pref_cd,region_cd,pref_name,pref_name_kana) VALUES
-- ('','','','');
INSERT INTO prefecture (pref_cd,region_cd,pref_name,pref_name_kana) VALUES
    (1,1,'北海道','ホッカイドウ'),
    (2,2,'青森','アオモリ'),
    (3,2,'岩手','イワテ'),
    (4,2,'宮城','ミヤギ'),
    (5,2,'秋田','アキタ'),
    (6,2,'山形','ヤマガタ'),
    (7,2,'福島','フクシマ'),
    (8,3,'茨城','イバラキ'),
    (9,3,'栃木','トチギ'),
    (10,3,'群馬','グンマ'),
    (11,3,'埼玉','サイタマ'),
    (12,3,'千葉','チバ'),
    (13,3,'東京都','トウキョウト'),
    (14,3,'神奈川','カナガワ'),
    (15,4,'新潟','ニイガタ'),
    (16,4,'富山','トヤマ'),
    (17,4,'石川','イシカワ'),
    (18,4,'福井','フクイ'),
    (19,4,'山梨','ヤマナシ'),
    (20,4,'長野','ナガノ'),
    (21,4,'岐阜','ギフ'),
    (22,4,'静岡','シズオカ'),
    (23,4,'愛知','アイチ'),
    (24,5,'三重','ミエ'),
    (25,5,'滋賀','シガ'),
    (26,5,'京都府','キョウトフ'),
    (27,5,'大阪府','オオサカフ'),
    (28,5,'兵庫','ヒョウゴ'),
    (29,5,'奈良','ナラ'),
    (30,5,'和歌山','ワカヤマ'),
    (31,6,'鳥取','トットリ'),
    (32,6,'島根','シマネ'),
    (33,6,'岡山','オカヤマ'),
    (34,6,'広島','ヒロシマ'),
    (35,6,'山口','ヤマグチ'),
    (36,7,'徳島','トクシマ'),
    (37,7,'香川','カガワ'),
    (38,7,'愛媛','エヒメ'),
    (39,7,'高知','コウチ'),
    (40,8,'福岡','フクオカ'),
    (41,8,'佐賀','サガ'),
    (42,8,'長崎','ナガサキ'),
    (43,8,'熊本','クマモト'),
    (44,8,'大分','オオイタ'),
    (45,8,'宮崎','ミヤザキ'),
    (46,8,'鹿児島','カゴシマ'),
    (47,8,'沖縄','オキナワ')
;

-- INSERT INTO specialty_food (s_food_cd,season_cd,pref_cd,station_cd,food_name,food_name_kana,food_description,food_img_url) VALUES
-- ('','','','','','','','');
-- INSERT INTO season (season_cd,season_name,season_start,season_end) VALUES
-- ('','','','');

-- INSERT INTO station (station_cd,pref_cd,station_name,station_name_kana) VALUES
-- ('','','','');
-- INSERT INTO distance (distance_cd,from_station_cd,to_station_cd,distance,time_required) VALUES
-- ('','','','','');
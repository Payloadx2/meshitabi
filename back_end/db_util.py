# coding=utf-8
import sys   
import psycopg2
from sqlalchemy import Column, Integer, String, DateTime, create_engine, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker, relationship
from sqlalchemy.sql import func
import datetime
import time
import os
import json

"""
    connection to DB
"""
"""
    config

    静的なDB情報(接続情報等)を記載してください
"""

# Database定義
with open(os.path.dirname(os.path.abspath(__file__))+'/settings/key.json') as f:
    df = json.load(f)
    SERVER_NAME = df['SERVER_NAME']
    DB_NAME = df['DB_NAME']
    DB_USER = df['DB_USER']
    DB_PASSWORD = df['DB_PASSWORD']

DATABASE = 'postgresql+psycopg2://%s:%s@%s/%s' % (
    DB_USER,
    DB_PASSWORD,
    SERVER_NAME,
    DB_NAME
)

ENGINE = create_engine(
    DATABASE,
    encoding="utf-8",
    echo=False
)

Session = sessionmaker(
        autocommit=False,
        autoflush=False,
        bind=ENGINE
)
session = Session()
Base = declarative_base()


"""
    function

    モデル共通処理
"""
def saveEntities(entities):
    session.add_all(entities)
    session.commit()


"""
    Model

    DBモデル定義
"""
class Region(Base):
    __tablename__ = 'region'
    region_cd = Column('region_cd', Integer, primary_key=True)  
    region_name = Column('region_name', String(10))  
    region_name_kana = Column('region_name_kana', String(10))
    pref = relationship('Prefecture')


    @classmethod
    def get_all(self, include_deleted = False):
        """全件検索します。
        """
        result = session.query(Region).order_by(Region.region_cd).all()
        return Region.populate_entities_to_dicts(result)


    @classmethod
    def populate_entities_to_dicts(self ,entities):
        """エンティティを辞書型のリストとして返却します。
        """
        recs= []
        for entity in entities:
            rec = {}
            rec['regionCd'] = entity.region_cd
            rec['regionName'] = entity.region_name  
            rec['regionNameKana'] = entity.region_name_kana
            rec['checked'] = True
            rec['prefChecks'] = Prefecture.populate_entities_to_dicts(entity.pref)
            recs.append(rec)
        return recs


class Prefecture(Base):
    __tablename__ = 'prefecture'
    pref_cd = Column('pref_cd', Integer, primary_key=True)
    region_cd = Column(Integer, ForeignKey('region.region_cd'))
    pref_name = Column('pref_name', String(10))  
    pref_name_kana = Column('pref_name_kana', String(10))  


    @classmethod
    def get_all(self, include_deleted = False):
        """全件検索します。
        """
        result = session.query(Prefecture).order_by(Prefecture.pref_cd).all()
        return Prefecture.populate_entities_to_dicts(result)


    @classmethod
    def populate_entities_to_dicts(self ,entities):
        """エンティティを辞書型のリストとして返却します。
        """
        recs= []
        for entity in entities:
            rec = {}
            rec['prefCd'] = entity.pref_cd
            rec['regionCd'] = entity.region_cd
            rec['prefName'] = entity.pref_name  
            rec['prefNameKana'] = entity.pref_name_kana
            rec['checked'] = True
            recs.append(rec)
        return recs


class Season(Base):
    __tablename__ = 'season'
    season_cd = Column('season_cd', Integer, primary_key=True)
    season_name = Column('season_name', String(10))  
    season_start = Column('season_start', DateTime)
    season_end = Column('season_end', DateTime)


    @classmethod
    def get_all(self, include_deleted = False):
        """全件検索します。
        """
        result = session.query(Season).order_by(Season.season_cd).all()
        return Season.populate_entities_to_dicts(result)


    @classmethod
    def populate_entities_to_dicts(self ,entities):
        """エンティティを辞書型のリストとして返却します。
        """
        recs= []
        for entity in entities:
            rec = {}
            rec['seasonCd'] = entity.season_cd
            rec['seasonName'] = entity.season_name  
            rec['seasonStart'] = entity.season_start
            rec['seasonEnd'] = entity.season_end
            recs.append(rec)
        return recs


class FoodCategory(Base):
    __tablename__ = 'food_category'
    food_category_cd = Column('food_category_cd', Integer, primary_key=True)
    food_category_name = Column('food_category_name', String(10))
    specialty_food = relationship('SpecialtyFood')


    @classmethod
    def get_all(self, include_deleted = False):
        """全件検索します。
        """
        result = session.query(FoodCategory).order_by(FoodCategory.food_category_cd).all()
        return FoodCategory.populate_entities_to_dicts(result)


    @classmethod
    def populate_entities_to_dicts(self ,entities):
        """エンティティを辞書型のリストとして返却します。
        """
        recs= []
        for entity in entities:
            rec = {}
            rec['opened'] = True
            rec['foodCategoryCd'] = entity.food_category_cd
            rec['foodCategoryName'] = entity.food_category_name
            rec['specialtyFoods'] = []
            for specialtyFood in entity.specialty_food:
                srec = {}
                srec['foodCd'] = specialtyFood.food_cd
                srec['foodCategoryCd'] = specialtyFood.food_category_cd
                srec['regionCd'] = specialtyFood.pref.region_cd
                srec['prefCd'] = specialtyFood.pref_cd
                srec['prefName'] = specialtyFood.pref.pref_name
                srec['stationCd'] = specialtyFood.station_cd
                srec['location'] = specialtyFood.location
                srec['seasonCd'] = specialtyFood.season_cd
                srec['seasonName'] = specialtyFood.season.season_name
                srec['seasonStart'] = specialtyFood.season.season_start
                srec['seasonEnd'] = specialtyFood.season.season_end
                srec['foodName'] = specialtyFood.food_name
                srec['foodNameKana'] = specialtyFood.food_name_kana
                srec['foodDescription'] = specialtyFood.food_description
                srec['foodImgUrl'] = specialtyFood.food_img_url
                srec['flag'] = False
                srec['flagVisible'] = True
                srec['localeVisible'] = True
                srec['visible'] = True
                rec['specialtyFoods'].append(srec)
            recs.append(rec)
        return recs


class SpecialtyFood(Base):
    __tablename__ = 'specialty_food'
    food_cd = Column('food_cd', Integer, primary_key=True)
    food_category_cd = Column(Integer, ForeignKey('food_category.food_category_cd'))
    pref_cd = Column(Integer, ForeignKey('prefecture.pref_cd'))
    pref = relationship('Prefecture')
    station_cd = Column(Integer, ForeignKey('station.station_cd'))
    location = Column('location', String(20))
    season_cd = Column(Integer, ForeignKey('season.season_cd'))
    season = relationship('Season')
    food_name = Column('food_name', String(20))
    food_name_kana = Column('food_name_kana', String(20))
    food_description = Column('food_description', String(1024))
    food_img_url = Column('food_img_url', String(256))


    @classmethod
    def get_all(self, include_deleted = False):
        """全件検索します。
        """
        result = session.query(SpecialtyFood).order_by(SpecialtyFood.food_category_cd).all()
        return SpecialtyFood.populate_entities_to_dicts(result)


    @classmethod
    def populate_entities_to_dicts(self ,entities):
        """エンティティを辞書型のリストとして返却します。
        """
        recs= []
        for entity in entities:
            rec = {}
            rec['foodCd'] = entity.food_cd
            rec['foodCategoryCd'] = entity.food_category_cd
            rec['regionCd'] = entity.pref.region_cd
            rec['prefCd'] = entity.pref_cd
            rec['prefName'] = entity.pref.pref_name
            rec['stationCd'] = entity.station_cd
            rec['location'] = entity.location
            rec['seasonCd'] = entity.season_cd
            rec['seasonName'] = entity.season.season_name
            rec['seasonStart'] = entity.season.season_start
            rec['seasonEnd'] = entity.season.season_end
            rec['foodName'] = entity.food_name
            rec['foodNameKana'] = entity.food_name_kana
            rec['foodDescription'] = entity.food_description
            rec['foodImgUrl'] = entity.food_img_url
            rec['flag'] = False
            rec['flagVisible'] = True
            rec['localeVisible'] = True
            # rec['visible'] = True
            recs.append(rec)
        return recs

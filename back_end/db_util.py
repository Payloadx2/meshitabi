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

"""
    connection to DB
"""
"""
    config

    静的なDB情報(接続情報等)を記載してください
"""

# Database定義
SERVER_NAME = 'localhost'
DB_NAME   = 'meshitabi'
DB_USER = 'meshitabi'
DB_PASSWORD = 'meshitabi'

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
    # region_cd = Column('region_cd', Integer)
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
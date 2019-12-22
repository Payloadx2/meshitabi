from flask import Flask, request, abort, jsonify, make_response, request as req
from flask_cors import CORS
import json
import db_util
import os


"""
    app config
"""
app = Flask(__name__)

CORS(app, resources=r'*', origins=['http://localhost:8080'])
app.config['JSON_AS_ASCII'] = False


"""
    app rooting
"""
@app.route('/appdata', methods=['GET'])
def get_appdata():
    """アプリケーション表示用データを返却します。
    """
    app_data = {}

    # 地方/県データDB取得(県データは地方データ取得時にjoin取得される)
    app_data['regions'] = db_util.Region.get_all()

    # 名産品データDB取得
    app_data['foodCategories'] = db_util.FoodCategory.get_all()

    return make_response(jsonify(app_data))

"""
    main
"""
if __name__ == "__main__":
    print(db_util.FoodCategory.get_all())
    app.run(host="0.0.0.0", port=5001)

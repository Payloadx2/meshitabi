from flask import Flask, request, abort, jsonify, make_response, request as req
from flask_cors import CORS
import json
import db_util
import os


"""
    app config
"""
app = Flask(__name__)

CORS(app, resources=r'*', origins=['http://localhost:5500'])
app.config['JSON_AS_ASCII'] = False


"""
    app rooting
"""
@app.route('/locale', methods=['GET'])
def get_locale():
    """地方・県データを返却します。
    """
    # リクエストパラメタ取得
    # max_id = req.args.get('maxid')
    # fetch_count = req.args.get('count')
    
    # リクエストパラメタチェック
    # max_id = req.args.get('maxid') if (req.args.get('maxid') is not None) and req.args.get('maxid').isdecimal() else '' 
    # fetch_count = req.args.get('count') if (req.args.get('count') is not None) and req.args.get('count').isdecimal() else ''

    # 地方データDB取得
    regions = db_util.Region.get_all()

    # 県データDB取得
    prefs = db_util.Prefecture.get_all()

    # json整形(階層構造に整形)
    stratified_locale = stratify_locale(regions,prefs)

    return make_response(jsonify(stratified_locale))


def stratify_locale(regions,prefs):
    """地方データと県データを階層化します。
    """
    for region in regions:
        region['prefs'] = []
        for pref in prefs:
            if region['region_cd'] == pref['region_cd']:
                 region['prefs'].append(pref)


"""
    main
"""
if __name__ == "__main__":
    # 地方データDB取得
    regions = db_util.Region.get_all()

    # 県データDB取得
    prefs = db_util.Prefecture.get_all()

    # json整形(階層構造に整形)
    stratified_locale = stratify_locale(regions,prefs)

    app.run(host="0.0.0.0", port=5001)

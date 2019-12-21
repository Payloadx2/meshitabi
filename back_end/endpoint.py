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

    # 地方/県データDB取得(県データは地方データ取得時にjoin取得される)
    regions = db_util.Region.get_all()

    return make_response(jsonify(regions))


"""
    main
"""
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)

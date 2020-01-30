import json
import os
import datetime
import requests
import xml.etree.ElementTree as ET

# HotpepperAPIキー
with open(os.path.dirname(os.path.abspath(__file__))+'/key.json') as f:
    df = json.load(f)
    HOTPEPPER_API_KEY = df['HOTPEPPER_API_KEY']

class Hotpepper_api:
    """
    HotpepperrAPIクラス

    Attributes
    ----------

    """

    def __init__( self) :
        pass

    def fetch_gourmet_search_api(self, keyword):
        """グルメサーチAPI から情報を取得する。
        
        Parameters
        ----------

        Returns
        -------
        res :
            グルメサーチAPIからのレスポンスオブジェクト
        """

        # get-request to twitter api
        url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/'
        params = {             
            'key' : HOTPEPPER_API_KEY,
            'keyword' : keyword,
            'format' : 'json'
        }
        res = requests.get(url, params=params)
        if res.status_code == 200:
            print("Suceed: %d" % res.status_code)
        else:
            print("Failed: %d" % res.status_code)
        return res


if __name__ == "__main__":
    hotpepper = Hotpepper_api()
    print(hotpepper.fetch_gourmet_search_api('牛タン 仙台').text)
    
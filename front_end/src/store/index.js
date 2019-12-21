/* eslint-disable standard/computed-property-even-spacing */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    searchByLocale: {
      visible: false,
      regionChecks: [
        {
          regionCd: 'pc01',
          regionName: '東北',
          regionNameKana: 'トウホク',
          checked: true,
          prefChecks: [
            {
              prefCd: 'cc01',
              prefName: '青森',
              checked: true,
            },
            {
              prefCd: 'cc02',
              prefName: '岩手',
              checked: true,
            },
            {
              prefCd: 'cc03',
              prefName: '宮城',
              checked: true,
            },
            {
              prefCd: 'cc04',
              prefName: '秋田',
              checked: true,
            },
            {
              prefCd: 'cc05',
              prefName: '福島',
              checked: true,
            },
          ],
        },
        {
          regionCd: 'pc02',
          regionName: '北海道',
          regionName_kana: 'ホッカイドウ',
          checked: true,
          prefChecks: [
            {
              prefCd: 'cc06',
              prefName: '北海道',
              checked: true,
            },
          ],
        },
        {
          regionCd: 'pc03',
          regionName: '近畿',
          regionName_kana: 'キンキ',
          checked: true,
          prefChecks: [
            {
              prefCd: 'cc07',
              prefName: '三重',
              checked: true,
            },
          ],
        },
        {
          regionCd: 'pc04',
          regionName: '中国',
          regionName_kana: 'チュウゴク',
          checked: true,
          prefChecks: [
            {
              prefCd: 'cc08',
              prefName: '鳥取',
              checked: true,
            },
          ],
        },
        {
          regionCd: 'pc05',
          regionName: '中部',
          regionName_kana: 'チュウブ',
          checked: true,
          prefChecks: [
            {
              prefCd: 'cc09',
              prefName: '石川',
              checked: true,
            },
          ],
        },
      ],
    },
    foodBlocks: [
      {
        foodBlockCd: 'fb0001',
        foodTitle: '肉',
        foodRows: [
          {
            foodCd: 'f0001',
            flag: false,
            flagVisible: true,
            localeVisible: true,
            visible: true,
            food: '牛タン',
            region: '東北',
            pref: '宮城',
          },
          {
            foodCd: 'f0002',
            flag: false,
            flagVisible: true,
            localeVisible: true,
            visible: true,
            food: 'ジンギスカン',
            region: '北海道',
            pref: '北海道',
          },
          {
            foodCd: 'f0003',
            flag: false,
            flagVisible: true,
            localeVisible: true,
            visible: true,
            food: '松坂牛',
            region: '近畿',
            pref: '三重',
          },
        ],
      },
      {
        foodBlockCd: 'fb0002',
        foodTitle: '海鮮',
        foodRows: [
          {
            foodCd: 'f0004',
            flag: false,
            flagVisible: true,
            localeVisible: true,
            visible: true,
            food: 'ノドグロ',
            region: '中部',
            pref: '石川',
          },
          {
            foodCd: 'f0005',
            flag: false,
            flagVisible: true,
            localeVisible: true,
            visible: true,
            food: '松葉ガニ',
            region: '中国',
            pref: '鳥取',
          },
        ],
      },
    ],
    foodDetail: {
      visible: false,
      title: '牛タン',
      img: require('../assets/gyutan.jpg'),
      nearFoodDiscription:
        '仙台牛、松島牡蠣丼、フカヒレ、気仙沼ホルモン、石巻焼きそば',
    },
    randomChoiseResult: {
      visible: false,
      title: '結果',
      foodRows: [],
    },
  },
  mutations: {
    initialize: function(state, payload) {
      state.searchByLocale.regionChecks = payload.myJson
    },
    hideDetail: function(state) {
      state.foodDetail.visible = false
    },
    showDetail: function(state, payload) {
      state.foodDetail.visible = true
      state.foodDetail.title =
        state.foodBlocks[payload.blockIndex].foodRows[payload.rowIndex].food
    },
    changeFlag: function(state, payload) {
      state.foodBlocks[payload.blockIndex].foodRows[
        payload.rowIndex
      ].flag = !state.foodBlocks[payload.blockIndex].foodRows[payload.rowIndex] //
        .flag
    },
    refineFoodByFlag: function(state) {
      state.foodBlocks.forEach(function(foodBlock) {
        foodBlock.foodRows.forEach(function(foodRow) {
          if (!foodRow.flag) {
            foodRow.flagVisible = false
            foodRow.visible = false
          }
        })
      })
    },
    clearRefineFoodByFlag: function(state) {
      state.foodBlocks.forEach(function(foodBlock) {
        foodBlock.foodRows.forEach(function(foodRow) {
          if (!foodRow.flag) {
            foodRow.flagVisible = true
            if (foodRow.localeVisible) {
              foodRow.visible = true
            }
          }
        })
      })
    },
    clearAllFlag: function(state) {
      state.foodBlocks.forEach(function(foodBlock) {
        foodBlock.foodRows.forEach(function(foodRow) {
          foodRow.flag = false
          foodRow.flagVisible = true
          if (foodRow.localeVisible) {
            foodRow.visible = true
          }
        })
      })
    },
    toggleLocaleSearchBox: function(state) {
      state.searchByLocale.visible = !state.searchByLocale.visible
    },
    toggleCheckAllPrefInReg: function(state, payload) {
      const parentChecked =
        state.searchByLocale.regionChecks[payload.regionCheckIndex].checked
      state.searchByLocale.regionChecks[
        payload.regionCheckIndex
      ].prefChecks.forEach(function(prefCheck) {
        prefCheck.checked = parentChecked
      })
    },
    showRandomChoise: function(state, payload) {
      let targetFoods = []

      // 表示されている名物にターゲットを絞り込む
      state.foodBlocks.forEach(function(foodBlock, blockIndex) {
        foodBlock.foodRows.forEach(function(foodRow, rowIndex) {
          if (foodRow.visible) {
            targetFoods.push({
              blockIndex: blockIndex,
              rowIndex: rowIndex,
              foodItem: foodRow,
            })
          }
        })
      })

      // 指定個数ランダムに選択して結果に追加
      state.randomChoiseResult.foodRows = random(targetFoods, payload.count)

      // 結果表示
      state.randomChoiseResult.visible = true
    },
    hideRandomChoise: function(state) {
      state.randomChoiseResult.visible = false
      state.randomChoiseResult.foodRows.splice(0)
    },
    refineFoodByLocale: function(state) {
      state.foodBlocks.forEach(function(foodBlock) {
        foodBlock.foodRows.forEach(function(foodRow) {
          foodRow.localeVisible = isLocaleChecked(
            state,
            foodRow.region,
            foodRow.pref
          )
          if (
            foodRow.visible !== (foodRow.flagVisible && foodRow.localeVisible)
          ) {
            // 現在の表示状態と、localeVisible更新後の表示状態が異なる場合のみ表示状態更新
            foodRow.visible = foodRow.flagVisible && foodRow.localeVisible
          }
        })
      })
    },
  },
  getters: {
    searchByLocale: state => {
      return state.searchByLocale
    },
    foodBlocks: state => {
      return state.foodBlocks
    },
    randomChoiseResult: state => {
      return state.randomChoiseResult
    },
    foodDetail: state => {
      return state.foodDetail
    },
  },
  actions: {
    initialize: function(context) {
      fetch('http://localhost:5001/locale')
        .then(function(response) {
          return response.json()
        })
        .then(function(myJson) {
          context.commit('initialize', {
            myJson: myJson,
          })
        })
    },
  },
})

function isLocaleChecked(state, regionName, prefName) {
  for (const regionCheck of state.searchByLocale.regionChecks) {
    if (regionCheck.regionName === regionName) {
      // 地方名がチェックされていなければ直ぐにreturn
      if (!regionCheck.checked) {
        return false
      }

      // 地方内の県を検索
      for (const prefCheck of regionCheck.prefChecks) {
        if (prefCheck.prefName === prefName) {
          return prefCheck.checked
        }
      }
    }
  }
  return false
}

function random(array, num) {
  var a = array
  var t = {}
  var r = []
  var l = a.length
  var n = num < l ? num : l
  while (n-- > 0) {
    var i = (Math.random() * l) | 0
    r[n] = t[i] || a[i]
    --l
    t[i] = t[l] || a[l]
  }
  return r
}

export default store

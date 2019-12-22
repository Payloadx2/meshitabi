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
          regionNameKana: 'ホッカイドウ',
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
          regionNameKana: 'キンキ',
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
          regionNameKana: 'チュウゴク',
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
          regionNameKana: 'チュウブ',
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
    foodCategories: [
      {
        foodCategoryCd: 'fb0001',
        foodCategoryName: '肉',
        specialtyFoods: [
          {
            foodCd: 'f0001',
            flag: false,
            flagVisible: true,
            localeVisible: true,
            visible: true,
            foodName: '牛タン',
            region: '東北',
            prefName: '宮城',
          },
          {
            foodCd: 'f0002',
            flag: false,
            flagVisible: true,
            localeVisible: true,
            visible: true,
            foodName: 'ジンギスカン',
            region: '北海道',
            prefName: '北海道',
          },
          {
            foodCd: 'f0003',
            flag: false,
            flagVisible: true,
            localeVisible: true,
            visible: true,
            foodName: '松坂牛',
            region: '近畿',
            prefName: '三重',
          },
        ],
      },
      {
        foodCategoryCd: 'fb0002',
        foodCategoryName: '海鮮',
        specialtyFoods: [
          {
            foodCd: 'f0004',
            flag: false,
            flagVisible: true,
            localeVisible: true,
            visible: true,
            foodName: 'ノドグロ',
            region: '中部',
            prefName: '石川',
          },
          {
            foodCd: 'f0005',
            flag: false,
            flagVisible: true,
            localeVisible: true,
            visible: true,
            foodName: '松葉ガニ',
            region: '中国',
            prefName: '鳥取',
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
      specialtyFoods: [],
    },
  },
  mutations: {
    initialize: function(state, payload) {
      state.searchByLocale.regionChecks = payload.myJson.regions
      state.foodCategories = payload.myJson.foodCategories
    },
    hideDetail: function(state) {
      state.foodDetail.visible = false
    },
    showDetail: function(state, payload) {
      state.foodDetail.visible = true
      state.foodDetail.title =
        state.foodCategories[payload.categoryIndex].specialtyFoods[
          payload.specialtyFoodIndex
        ].foodName
    },
    changeFlag: function(state, payload) {
      state.foodCategories[payload.categoryIndex].specialtyFoods[
        payload.specialtyFoodIndex
      ].flag = !state.foodCategories[payload.categoryIndex].specialtyFoods[
        payload.specialtyFoodIndex
      ].flag //
    },
    refineFoodByFlag: function(state) {
      state.foodCategories.forEach(function(foodCategory) {
        foodCategory.specialtyFoods.forEach(function(specialtyFood) {
          if (!specialtyFood.flag) {
            specialtyFood.flagVisible = false
            specialtyFood.visible = false
          }
        })
      })
    },
    clearRefineFoodByFlag: function(state) {
      state.foodCategories.forEach(function(foodCategory) {
        foodCategory.specialtyFoods.forEach(function(specialtyFood) {
          if (!specialtyFood.flag) {
            specialtyFood.flagVisible = true
            if (specialtyFood.localeVisible) {
              specialtyFood.visible = true
            }
          }
        })
      })
    },
    clearAllFlag: function(state) {
      state.foodCategories.forEach(function(foodCategory) {
        foodCategory.specialtyFoods.forEach(function(specialtyFood) {
          specialtyFood.flag = false
          specialtyFood.flagVisible = true
          if (specialtyFood.localeVisible) {
            specialtyFood.visible = true
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
      state.foodCategories.forEach(function(foodCategory, categoryIndex) {
        foodCategory.specialtyFoods.forEach(function(
          specialtyFood,
          specialtyFoodIndex
        ) {
          if (specialtyFood.visible) {
            targetFoods.push({
              categoryIndex: categoryIndex,
              specialtyFoodIndex: specialtyFoodIndex,
              foodItem: specialtyFood,
            })
          }
        })
      })

      // 指定個数ランダムに選択して結果に追加
      state.randomChoiseResult.specialtyFoods = random(
        targetFoods,
        payload.count
      )

      // 結果表示
      state.randomChoiseResult.visible = true
    },
    hideRandomChoise: function(state) {
      state.randomChoiseResult.visible = false
      state.randomChoiseResult.specialtyFoods.splice(0)
    },
    refineFoodByLocale: function(state) {
      state.foodCategories.forEach(function(foodCategory) {
        foodCategory.specialtyFoods.forEach(function(specialtyFood) {
          specialtyFood.localeVisible = isLocaleChecked(
            state,
            specialtyFood.regionCd,
            specialtyFood.prefCd
          )
          if (
            specialtyFood.visible !==
            (specialtyFood.flagVisible && specialtyFood.localeVisible)
          ) {
            // 現在の表示状態と、localeVisible更新後の表示状態が異なる場合のみ表示状態更新
            specialtyFood.visible =
              specialtyFood.flagVisible && specialtyFood.localeVisible
          }
        })
      })
    },
  },
  getters: {
    searchByLocale: state => {
      return state.searchByLocale
    },
    foodCategories: state => {
      return state.foodCategories
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
      fetch('http://localhost:5001/appdata')
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

function isLocaleChecked(state, regionCd, prefCd) {
  for (const regionCheck of state.searchByLocale.regionChecks) {
    if (regionCheck.regionCd === regionCd) {
      // 地方名がチェックされていなければ直ぐにreturn
      if (!regionCheck.checked) {
        return false
      }

      // 地方内の県を検索
      for (const prefCheck of regionCheck.prefChecks) {
        if (prefCheck.prefCd === prefCd) {
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

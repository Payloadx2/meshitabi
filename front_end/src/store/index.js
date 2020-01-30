/* eslint-disable standard/computed-property-even-spacing */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    searchByLocale: {
      visible: false,
      regionChecks: [
        //   {
        //     regionCd: 'pc01',
        //     regionName: '東北',
        //     regionNameKana: 'トウホク',
        //     checked: true,
        //     prefChecks: [
        //       {
        //         prefCd: 'cc01',
        //         prefName: '青森',
        //         checked: true,
        //       },
        //       {
        //         prefCd: 'cc02',
        //         prefName: '岩手',
        //         checked: true,
        //       },
        //       {
        //         prefCd: 'cc03',
        //         prefName: '宮城',
        //         checked: true,
        //       },
        //       {
        //         prefCd: 'cc04',
        //         prefName: '秋田',
        //         checked: true,
        //       },
        //       {
        //         prefCd: 'cc05',
        //         prefName: '福島',
        //         checked: true,
        //       },
        //     ],
        //   },
        //   {
        //     regionCd: 'pc02',
        //     regionName: '北海道',
        //     regionNameKana: 'ホッカイドウ',
        //     checked: true,
        //     prefChecks: [
        //       {
        //         prefCd: 'cc06',
        //         prefName: '北海道',
        //         checked: true,
        //       },
        //     ],
        //   },
        //   {
        //     regionCd: 'pc03',
        //     regionName: '近畿',
        //     regionNameKana: 'キンキ',
        //     checked: true,
        //     prefChecks: [
        //       {
        //         prefCd: 'cc07',
        //         prefName: '三重',
        //         checked: true,
        //       },
        //     ],
        //   },
        //   {
        //     regionCd: 'pc04',
        //     regionName: '中国',
        //     regionNameKana: 'チュウゴク',
        //     checked: true,
        //     prefChecks: [
        //       {
        //         prefCd: 'cc08',
        //         prefName: '鳥取',
        //         checked: true,
        //       },
        //     ],
        //   },
        //   {
        //     regionCd: 'pc05',
        //     regionName: '中部',
        //     regionNameKana: 'チュウブ',
        //     checked: true,
        //     prefChecks: [
        //       {
        //         prefCd: 'cc09',
        //         prefName: '石川',
        //         checked: true,
        //       },
        //     ],
        //   },
      ],
    },
    foodCategories: [
      // {
      //   foodCategoryCd: 'fb0001',
      //   foodCategoryName: '肉',
      //   specialtyFoods: [
      //     {
      //       foodCd: 'f0001',
      //       flag: false,
      //       flagVisible: true,
      //       localeVisible: true,
      //       visible: true,
      //       foodName: '牛タン',
      //       region: '東北',
      //       prefName: '宮城',
      //     },
      //     {
      //       foodCd: 'f0002',
      //       flag: false,
      //       flagVisible: true,
      //       localeVisible: true,
      //       visible: true,
      //       foodName: 'ジンギスカン',
      //       region: '北海道',
      //       prefName: '北海道',
      //     },
      //     {
      //       foodCd: 'f0003',
      //       flag: false,
      //       flagVisible: true,
      //       localeVisible: true,
      //       visible: true,
      //       foodName: '松坂牛',
      //       region: '近畿',
      //       prefName: '三重',
      //     },
      //   ],
      // },
      // {
      //   foodCategoryCd: 'fb0002',
      //   foodCategoryName: '海鮮',
      //   specialtyFoods: [
      //     {
      //       foodCd: 'f0004',
      //       flag: false,
      //       flagVisible: true,
      //       localeVisible: true,
      //       visible: true,
      //       foodName: 'ノドグロ',
      //       region: '中部',
      //       prefName: '石川',
      //     },
      //     {
      //       foodCd: 'f0005',
      //       flag: false,
      //       flagVisible: true,
      //       localeVisible: true,
      //       visible: true,
      //       foodName: '松葉ガニ',
      //       region: '中国',
      //       prefName: '鳥取',
      //     },
      //   ],
      // },
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
    toggleFoodCategory: function(state, payload) {
      state.foodCategories[payload.categoryIndex].opened = !state
        .foodCategories[payload.categoryIndex].opened
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
            // specialtyFood.visible = false
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
              // specialtyFood.visible = true
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
            // specialtyFood.visible = true
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
          if (specialtyFood.flagVisible && specialtyFood.localeVisible) {
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
          // if (
          //   specialtyFood.visible !==
          //   (specialtyFood.flagVisible && specialtyFood.localeVisible)
          // ) {
          //   // 現在の表示状態と、localeVisible更新後の表示状態が異なる場合のみ表示状態更新
          //   specialtyFood.visible =
          //     specialtyFood.flagVisible && specialtyFood.localeVisible
          // }
        })
      })
    },
    setDefaultState: function(state, payload) {
      // 地域検索チェックボックス状態更新
      if (payload.falseLocaleCheckCds !== undefined) {
        for (const falseLocaleCheckCd of payload.falseLocaleCheckCds) {
          const prefCheck = findPrefCheck(parseInt(falseLocaleCheckCd), state)
          if (prefCheck !== undefined) {
            prefCheck.checked = false
          }
        }

        // 地域内の全県がチェック無の場合は地域チェック無とする
        for (const regionCheck of state.searchByLocale.regionChecks) {
          if (
            regionCheck.prefChecks.every(function(value) {
              return value.checked === false
            })
          ) {
            regionCheck.checked = false
          }
        }
      }

      // メシデータ状態更新
      if (payload.trueFlagCds !== undefined) {
        for (const trueFlagCd of payload.trueFlagCds) {
          const food = findFood(parseInt(trueFlagCd), state)
          if (food !== undefined) {
            food.flag = true
          }
        }
      }
      if (payload.falseFlagVisibleCds !== undefined) {
        for (const falseFlagVisibleCd of payload.falseFlagVisibleCds) {
          const food = findFood(parseInt(falseFlagVisibleCd), state)
          if (food !== undefined) {
            food.flagVisible = false
          }
        }
      }
      if (payload.falseLocaleVisibleCds !== undefined) {
        for (const falseLocaleVisibleCd of payload.falseLocaleVisibleCds) {
          const food = findFood(parseInt(falseLocaleVisibleCd), state)
          if (food !== undefined) {
            food.localeVisible = false
          }
        }
      }
    },
    setDefaultStateHex: function(state, payload) {
      // メシデータ状態更新
      if (payload.flag !== undefined) {
        // パラメータ処理
        const flags = payload.flag.split('_')

        // 前ゼロ復元
        let flagBit = ''
        if (parseInt(flags[0]) > 0) {
          flagBit = '0'.repeat(parseInt(flags[0]))
        }

        // 2進数変換
        flagBit += parseInt(flags[1], 36).toString(2)
        console.log(flagBit)

        // フラグ更新
        let flagBitArray = [...flagBit]
        let currentIndex = 0
        try {
          for (const foodCategory of state.foodCategories) {
            for (const specialtyFood of foodCategory.specialtyFoods) {
              if (flagBitArray[currentIndex] === '1') {
                specialtyFood.flag = true
              }
              ++currentIndex
            }
          }
        } catch (e) {
          // DB更新により、flagの個数とマスタの個数が一致しない場合にエラーが発生する
          console.log(e.message)
        }
      }

      // 地域検索チェックボックス状態更新
      if (payload.localeCheck !== undefined) {
        // パラメータ処理
        const localeChecks = payload.localeCheck.split('_')

        // 前ゼロ復元
        let localeCheckBit = ''
        if (parseInt(localeChecks[0]) > 0) {
          localeCheckBit = '0'.repeat(parseInt(localeChecks[0]))
        }

        // 2進数変換
        localeCheckBit += parseInt(localeChecks[1], 36).toString(2)
        console.log(localeCheckBit)

        // フラグ更新
        let localeCheckBitArray = [...localeCheckBit]
        let currentIndex = 0
        try {
          for (const regionCheck of state.searchByLocale.regionChecks) {
            for (const prefCheck of regionCheck.prefChecks) {
              if (localeCheckBitArray[currentIndex] === '0') {
                prefCheck.checked = false
              }
              ++currentIndex
            }
          }
        } catch (e) {
          // DB更新により、localeCheckの個数とマスタの個数が一致しない場合にエラーが発生する
          console.log(e.message)
        }

        // 地域内の全県がチェック無の場合は地域チェック無とする
        for (const regionCheck of state.searchByLocale.regionChecks) {
          if (
            regionCheck.prefChecks.every(function(value) {
              return value.checked === false
            })
          ) {
            regionCheck.checked = false
          }
        }
      }
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
    shareLink: state => {
      // const baseUrl = 'http://localhost:8080/'
      const baseUrl = 'https://www.meshitabi.net/meshitabi/'

      // 名物フラグパラメータ設定
      let trueFlagCds = []
      for (const foodCategory of state.foodCategories) {
        const specialtyFoods = foodCategory.specialtyFoods.filter(function(
          value
        ) {
          return value.flag === true
        })
        for (const specialtyFood of specialtyFoods) {
          trueFlagCds.push(specialtyFood.foodCd)
        }
      }
      const trueFlagCdsParam = 'flag=' + trueFlagCds.join(',')

      // 名物フラグ表示パラメータ設定
      let falseFlagVisibleCds = []
      for (const foodCategory of state.foodCategories) {
        const specialtyFoods = foodCategory.specialtyFoods.filter(function(
          value
        ) {
          return value.flagVisible === false
        })
        for (const specialtyFood of specialtyFoods) {
          falseFlagVisibleCds.push(specialtyFood.foodCd)
        }
      }
      const falseFlagVisibleCdsParam = 'fvis=' + falseFlagVisibleCds.join(',')

      // 名物地域表示パラメータ設定
      let falseLocaleVisibleCds = []
      for (const foodCategory of state.foodCategories) {
        const specialtyFoods = foodCategory.specialtyFoods.filter(function(
          value
        ) {
          return value.localeVisible === false
        })
        for (const specialtyFood of specialtyFoods) {
          falseLocaleVisibleCds.push(specialtyFood.foodCd)
        }
      }
      let falseLocaleVisibleCdsParam = 'lvis=' + falseLocaleVisibleCds.join(',')

      // 地域検索ボックスチェックパラメータ設定
      let falseLocaleCheckCds = []
      for (const regionChecks of state.searchByLocale.regionChecks) {
        const prefChecks = regionChecks.prefChecks.filter(function(value) {
          return value.checked === false
        })
        for (const prefCheck of prefChecks) {
          falseLocaleCheckCds.push(prefCheck.prefCd)
        }
      }
      let falseLocaleCheckCdsParam = 'loc=' + falseLocaleCheckCds.join(',')

      // 共有URL返却
      return (
        baseUrl +
        '?' +
        trueFlagCdsParam +
        '&' +
        falseFlagVisibleCdsParam +
        '&' +
        falseLocaleVisibleCdsParam +
        '&' +
        falseLocaleCheckCdsParam
      )
    },
    shareLinkHex: state => {
      // const baseUrl = 'http://localhost:8080/'
      const baseUrl = 'https://www.meshitabi.net/meshitabi/'

      // 各種パラメータbit取得
      let flagBit = ''
      // let flagVisibleBit = ''
      // let localeVisibleBit = ''
      for (const foodCategory of state.foodCategories) {
        for (const specialtyFood of foodCategory.specialtyFoods) {
          // 名物フラグパラメータbit取得
          if (specialtyFood.flag) {
            flagBit += '1'
          } else {
            flagBit += '0'
          }

          // // 名物フラグ表示パラメータbit取得
          // if (specialtyFood.flagVisible) {
          //   flagVisibleBit += '1'
          // } else {
          //   flagVisibleBit += '0'
          // }

          // // 名物地域表示パラメータbit取得
          // if (specialtyFood.localeVisible) {
          //   localeVisibleBit += '1'
          // } else {
          //   localeVisibleBit += '0'
          // }
        }
      }

      // 地域検索ボックスチェックパラメータbit取得
      let localeCheckBit = ''
      for (const regionChecks of state.searchByLocale.regionChecks) {
        for (const prefCheck of regionChecks.prefChecks) {
          if (prefCheck.checked) {
            localeCheckBit += '1'
          } else {
            localeCheckBit += '0'
          }
        }
      }

      // 各種パラメータbit36進数変換、パラメータ整形
      const flagParam =
        'f=' + flagBit.indexOf('1') + '_' + parseInt(flagBit, 2).toString(36)
      // const flagVisibleParam =
      //   'fvis=' +
      //   flagVisibleBit.indexOf('1') +
      //   '_' +
      //   parseInt(flagVisibleBit, 2).toString(36)
      // const localeVisibleParam =
      //   'lvis=' +
      //   localeVisibleBit.indexOf('1') +
      //   '_' +
      //   parseInt(localeVisibleBit, 2).toString(36)
      const localeCheckParam =
        'l=' +
        localeCheckBit.indexOf('1') +
        '_' +
        parseInt(localeCheckBit, 2).toString(36)
      console.log(flagBit.toString())
      console.log(parseInt(flagBit, 2))
      console.log(flagParam)
      console.log(localeCheckBit.toString())
      console.log(parseInt(localeCheckBit, 2))
      console.log(localeCheckParam)

      // 共有URL返却
      return (
        baseUrl +
        '?' +
        flagParam +
        // '&' +
        // flagVisibleParam +
        // '&' +
        // localeVisibleParam +
        '&' +
        localeCheckParam
      )
    },
  },
  actions: {
    fetchServerData: function(context) {
      // return fetch('http://localhost:5001/backend/meshitabi/appdata')
      return fetch('https://www.meshitabi.net/backend/meshitabi/appdata')
        .then(function(response) {
          return response.json()
        })
        .then(function(myJson) {
          context.commit('initialize', {
            myJson: myJson,
          })
        })
    },
    initialize: async function(context, payload) {
      await this.dispatch('fetchServerData')
      this.commit('setDefaultState', payload)
      this.commit('refineFoodByLocale')
    },
    initializeHex: async function(context, payload) {
      await this.dispatch('fetchServerData')
      this.commit('setDefaultStateHex', payload)
      this.commit('refineFoodByLocale')
      if (payload.localeCheck !== undefined) {
        this.commit('refineFoodByFlag')
      }
    },
  },
})

function isLocaleChecked(state, regionCd, prefCd) {
  for (const regionCheck of state.searchByLocale.regionChecks) {
    if (regionCheck.regionCd === regionCd) {
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

function findPrefCheck(prefCd, state) {
  for (const regionCheck of state.searchByLocale.regionChecks) {
    const prefCheck = regionCheck.prefChecks.find(function(value) {
      return value.prefCd === prefCd
    })
    if (prefCheck !== undefined) {
      return prefCheck
    }
  }
}

function findFood(foodCd, state) {
  for (const foodCategory of state.foodCategories) {
    const food = foodCategory.specialtyFoods.find(function(value) {
      return value.foodCd === foodCd
    })
    if (food !== undefined) {
      return food
    }
  }
}

export default store

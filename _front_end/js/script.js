let vm = new Vue({
    el: '#main-container',
    data: {
        searchByLocale: {
            visible: true,
            regionCheckBoxes: [
                {
                    region_cd: 'pc01',
                    region_name: '東北',
                    region_name_kana: 'トウホク',
                    checked: 'checked',
                    prefCheckBoxes: [
                        {
                            id: 'cc01',
                            name: '青森',
                            checked: 'checked'
                        },
                        {
                            id: 'cc02',
                            name: '岩手',
                            checked: 'checked'
                        },
                        {
                            id: 'cc03',
                            name: '宮城',
                            checked: 'checked'
                        },
                        {
                            id: 'cc04',
                            name: '秋田',
                            checked: 'checked'
                        },
                        {
                            id: 'cc05',
                            name: '福島',
                            checked: 'checked'
                        }
                    ]
                },
                {
                    region_cd: 'pc02',
                    region_name: '北海道',
                    region_name_kana: 'ホッカイドウ',
                    checked: 'checked',
                    prefCheckBoxes: [
                        {
                            id: 'cc06',
                            name: '北海道',
                            checked: 'checked'
                        }
                    ]
                },
                {
                    region_cd: 'pc03',
                    region_name: '近畿',
                    region_name_kana: 'キンキ',
                    checked: 'checked',
                    prefCheckBoxes: [
                        {
                            id: 'cc07',
                            name: '三重',
                            checked: 'checked'
                        }
                    ]
                },
                {
                    region_code: 'pc04',
                    region_name: '中国',
                    region_name_kana: 'チュウゴク',
                    checked: 'checked',
                    prefCheckBoxes: [
                        {
                            id: 'cc08',
                            name: '鳥取',
                            checked: 'checked'
                        }
                    ]
                },
                {
                    region_code: 'pc05',
                    region_name: '中部',
                    region_name_kana: 'チュウブ',
                    checked: 'checked',
                    prefCheckBoxes: [
                        {
                            id: 'cc09',
                            name: '石川',
                            checked: 'checked'
                        }
                    ]
                }
            ]
        },
        foodBlocks: [
            {
                foodTitle: '肉',
                foodItems: [
                    {
                        flag: false,
                        flagVisible: true,
                        localeVisible: true,
                        visible: true,
                        food: '牛タン',
                        region: '東北',
                        pref: '宮城'
                    },
                    {
                        flag: false,
                        flagVisible: true,
                        localeVisible: true,
                        visible: true,
                        food: 'ジンギスカン',
                        region: '北海道',
                        pref: '北海道'
                    },
                    {
                        flag: false,
                        flagVisible: true,
                        localeVisible: true,
                        visible: true,
                        food: '松坂牛',
                        region: '近畿',
                        pref: '三重'
                    }
                ]
            },
            {
                foodTitle: '海鮮',
                foodItems: [
                    {
                        flag: false,
                        flagVisible: true,
                        localeVisible: true,
                        visible: true,
                        food: 'ノドグロ',
                        region: '中部',
                        pref: '石川'
                    },
                    {
                        flag: false,
                        flagVisible: true,
                        localeVisible: true,
                        visible: true,
                        food: '松葉ガニ',
                        region: '中国',
                        pref: '鳥取'
                    }
                ]
            }
        ],
        foodDetail: {
            visible: false,
            title: '牛タン',
            img: './img/gyutan.JPG',
            nearFoodDiscription: '仙台牛、松島牡蠣丼、フカヒレ、気仙沼ホルモン、石巻焼きそば'
        },
        randomChoiseResult: {
            visible: false,
            title: '結果',
            foodItems: []
        }
    },
    methods: {
        hideDetail: function () {
            this.foodDetail.visible = false;
        },
        showDetail: function (blockIndex, itemIndex) {
            this.foodDetail.visible = true;
            this.foodDetail.title = this.foodBlocks[blockIndex].foodItems[itemIndex].food;
        },
        changeFlag: function (blockIndex, itemIndex) {
            this.foodBlocks[blockIndex].foodItems[itemIndex].flag = //
                this.foodBlocks[blockIndex].foodItems[itemIndex].flag ? false : true;
        },
        refineFoodByFlag: function () {
            for (block of this.foodBlocks) {
                for (item of block.foodItems) {
                    if (!item.flag) {
                        item.flagVisible = false;
                        item.visible = false;
                    }
                }
            }
        },
        clearRefineFoodByFlag: function () {
            for (block of this.foodBlocks) {
                for (item of block.foodItems) {
                    if (!item.flag) {
                        item.flagVisible = true;
                        if (item.localeVisible) {
                            item.visible = true;
                        }
                    }
                }
            }
        },
        clearAllFlag: function () {
            for (block of this.foodBlocks) {
                for (item of block.foodItems) {
                    item.flag = false;
                    item.flagVisible = true;
                    if (item.localeVisible) {
                        item.visible = true;
                    }
                }
            }
        },
        toggleLocaleSearchBox: function () {
            this.searchByLocale.visible = !this.searchByLocale.visible;
        },
        toggleCheckAllPrefInReg: function (regionCheckBoxIndex) {
            parentChecked = this.searchByLocale.regionCheckBoxes[regionCheckBoxIndex].checked;
            for (prefCheckBox of this.searchByLocale.regionCheckBoxes[regionCheckBoxIndex].prefCheckBoxes) {
                prefCheckBox.checked = parentChecked;
            }
        },
        showRandomChoise: function (count) {
            let targetFoods = [];

            // 表示されている名物にターゲットを絞り込む
            this.foodBlocks.forEach(function (block, blockIndex) {
                block.foodItems.forEach(function (item, itemIndex) {
                    if (item.visible) {
                        targetFoods.push(
                            {
                                blockIndex: blockIndex,
                                itemIndex: itemIndex,
                                foodItem: item
                            }
                        )
                    }
                })
            });

            // 指定個数ランダムに選択して結果に追加
            this.randomChoiseResult.foodItems = random(targetFoods, count);

            // 結果表示
            this.randomChoiseResult.visible = true;
        },
        hideRandomChoise: function () {
            this.randomChoiseResult.visible = false;
            this.randomChoiseResult.foodItems.splice(0);
        },
        refineFoodByLocale: function () {
            for (block of this.foodBlocks) {
                for (item of block.foodItems) {
                    item.localeVisible = this.isLocaleChecked(item.region, item.pref);
                    if (item.visible != (item.flagVisible && item.localeVisible)) {
                        // 現在の表示状態と、localeVisible更新後の表示状態が異なる場合のみ表示状態更新
                        item.visible = item.flagVisible && item.localeVisible;
                    }
                }
            }
        },
        isLocaleChecked: function (region, pref) {
            for (regionCheckBox of this.searchByLocale.regionCheckBoxes) {
                if (regionCheckBox.region_name == region) {
                    // 地方名がチェックされていなければ直ぐにreturn
                    if (!regionCheckBox.checked) {
                        return false;
                    }

                    // 地方内の県を検索
                    for (prefCheckBox of regionCheckBox.prefCheckBoxes) {
                        if (prefCheckBox.name == pref) {
                            return prefCheckBox.checked;
                        }
                    }
                }
            }
        },
        beforeEnter: function (el) {
            el.style.height = '0';
        },
        enter: function (el) {
            el.style.height = el.scrollHeight + 'px';
        },
        beforeLeave: function (el) {
            el.style.height = el.scrollHeight + 'px';
        },
        leave: function (el) {
            el.style.height = '0';
        }
    }
});

function random(array, num) {
    var a = array;
    var t = {};
    var r = [];
    var l = a.length;
    var n = num < l ? num : l;
    while (n-- > 0) {
        var i = Math.random() * l | 0;
        r[n] = t[i] || a[i];
        --l;
        t[i] = t[l] || a[l];
    }
    return r;
}

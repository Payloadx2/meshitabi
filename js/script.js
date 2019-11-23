let vm = new Vue({
    el: '#main-container',
    data: {
        foodBlocks: [
            {
                foodTitle: '肉',
                foodItems: [
                    {
                        flag: false,
                        visible: true,
                        food: '牛タン',
                        locale: '宮城'
                    },
                    {
                        flag: false,
                        visible: true,
                        food: 'ジンギスカン',
                        locale: '北海道'
                    },
                    {
                        flag: false,
                        visible: true,
                        food: '松坂牛',
                        locale: '三重'
                    }
                ]
            },
            {
                foodTitle: '海鮮',
                foodItems: [
                    {
                        flag: false,
                        visible: true,
                        food: 'ノドグロ',
                        locale: '石川'
                    },
                    {
                        flag: false,
                        visible: true,
                        food: '松葉ガニ',
                        locale: '鳥取'
                    }
                ]
            }
        ],
        foodDetail:{
            visible: false,
            title: '牛タン',
            img: './img/gyutan.JPG',
            nearFoodDiscription: '仙台牛、松島牡蠣丼、フカヒレ、気仙沼ホルモン、石巻焼きそば'
        }
    },
    methods: {
        hideDetail: function(){
            this.foodDetail.visible = false;
        },
        showDetail: function(blockIndex, itemIndex){
            this.foodDetail.visible = true;
            this.foodDetail.title = this.foodBlocks[blockIndex].foodItems[itemIndex].food
        },
        changeFlag: function (blockIndex, itemIndex) {
            this.foodBlocks[blockIndex].foodItems[itemIndex].flag = //
                this.foodBlocks[blockIndex].foodItems[itemIndex].flag ? false : true;
        },
        refineFood: function(){
            for(block of this.foodBlocks) {
                for(item of block.foodItems) {
                    if(!item.flag) {
                        item.visible = false;
                    }
                }
            }
        },
        clearRefineFood: function() {
            for(block of this.foodBlocks) {
                for(item of block.foodItems) {
                    if(!item.flag) {
                        item.visible = true;
                    }
                }
            }
        },
        clearSelected: function() {
            for(block of this.foodBlocks) {
                for(item of block.foodItems) {
                        item.visible = true;
                        item.flag = false;                    
                }
            }
        }
    }
});
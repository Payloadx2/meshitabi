let vm = new Vue({
    el: '#main-container',
    data: {
        foodBlocks: [
            {
                foodTitle: '肉',
                foodItems: [
                    {
                        food: '牛タン',
                        locale: '宮城'
                    },
                    {
                        food: 'ジンギスカン',
                        locale: '北海道'
                    },
                    {
                        food: '松坂牛',
                        locale: '三重'
                    }
                ]
            },
            {
                foodTitle: '肉',
                foodItems: [
                    {
                        food: '牛タン',
                        locale: '宮城'
                    },
                    {
                        food: 'ジンギスカン',
                        locale: '北海道'
                    },
                    {
                        food: '松坂牛',
                        locale: '三重'
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
        }
    }
});
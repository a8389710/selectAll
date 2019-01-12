<template>
  <div>
    <ul class='goods-list-menu'>
      <li class='goods-list' v-for="(item,index) in data" :key="index" :data-set="index">
        <p class='goods-name'>{{ item.name }}</p>
        <img class='goods-cover' :src=item.cover alt="">
        <p class='goods-author'>{{ item.author }}</p>
        <p> {{ item.price }} <span>元</span> </p>
        <button class="add-goods-buycar" @click="addBuycar">添加商品到购物车</button>
      </li>
    </ul>
    <button class="to-goods-buycar" @click="toBuycar">跳转到购物车</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  path: '/home',
  data () {
    return {
      data: [],
      addsgoods:[]
    }
  },
  methods: {
    toBuycar () {
      this.$router.push({path:'/buycar'})
    },
    addBuycar (e) {
      let ishas = false
      if (this.addsgoods.length == 0) {
         this.addsgoods.push({
            goodsId: e.path[1].dataset.set,
            goodsname: e.path[1].children[0].innerText,
            goodsauthor: e.path[1].children[2].innerText,
            goodsprice: e.path[1].children[3].innerText,
            goodscount: 1
         })
          alert('添加成功！')
          localStorage.setItem('Buycar-list',JSON.stringify(this.addsgoods))
      } else {
        this.addsgoods.forEach(g => {
          if (g.goodsId == e.path[1].dataset.set) {
            alert('该物品已加入购物车！') 
            ishas = true
          }
        })
        if (!ishas) {
          this.addsgoods.push({
            goodsId: e.path[1].dataset.set,
            goodsname: e.path[1].children[0].innerText,
            goodsauthor: e.path[1].children[2].innerText,
            goodsprice: e.path[1].children[3].innerText,
            goodscount: 1
         })
         alert('添加成功！')
          localStorage.setItem('Buycar-list',JSON.stringify(this.addsgoods))
        }
      }
      console.log(this.addsgoods)
    }
  },
  created () {
    this.axios.get('https://www.easy-mock.com/mock/5c1b0deb48952b7bd6514342/example/lykmobileshopAppdata')
      .then((response) => {
      this.data = response.data
      }).catch(()=>{
      console.log('加载失败')
    })
    if (localStorage.getItem('Buycar-list') === null) {
      this.addsgoods = []
    } else {
      this.addsgoods = JSON.parse(localStorage.getItem('Buycar-list'))
    }
  },
  mounted () {
    
  }
}
</script>

<style lang="less" scope>
  .goods-list-menu {
    text-align: left;
    list-style: none;
    .goods-list {
      padding: 5px;
      .add-goods-buycar {
        height: 60px;
        width: 200px;
        bottom:0;
        border:none;
        outline: none;
        background: rgb(243, 129, 35);
      }      
      .goods-name {
        font-size: 20px;
        font-weight: bold;
      }
      .goods-cover {
        width: 100px;
      }
    }
  }
  .to-goods-buycar {
    position: fixed;
    height: 60px;
    width: 300px;
    bottom:0;
    border:none;
    outline: none;
    background: lightblue;
  }
</style>

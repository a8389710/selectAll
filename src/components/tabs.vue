<template>
  <div class="tabs-page">tab选项卡
    <ul class="tabs-wrap">
      <li v-for="tab in tablist" :key="tab.id">
        <span @click="changeTab">{{ tab.title }}</span>
      </li>
    </ul>
    <div class="tabitem-wrap">
      <TabOne v-if="chosetab == 'tab1'"/>
      <Tabtwo v-else-if="chosetab == 'tab2'"/>
      <Tabthree v-else-if="chosetab == 'tab3'"/>
    </div>
  </div>
</template>
<script>
import TabOne from "./itemone";
import Tabtwo from "./itemtwo";
import Tabthree from "./itemthree";

export default {
  nama: "tabs",
  components: {
    TabOne,
    Tabtwo,
    Tabthree
  },
  data() {
    return {
      tablist: [
        {
          id: 1,
          title: "tab1"
        },
        {
          id: 2,
          title: "tab2"
        },
        {
          id: 3,
          title: "tab3"
        }
      ],
      chosetab: 'tab1'
    };
  },
  methods: {
    changeTab (e) {
      this.chosetab = e.target.innerText
      console.log(this.chosetab)
    }
  }
};
</script>
<style lang="less" scoped>
.tabs-page {
  position: relative;
}
 .tabs-wrap {
   text-align: left;
   li {
     width: 300px;
     text-align: center;
     color:#fff;
     span {
       margin-top:4px;
       display: block;
       width: 50px;
       height: 40px;
       line-height: 40px;
       border-radius: 5px;
       background: red;
     }
   }
 }
 .tabitem-wrap {
   position: absolute;
   top:50%;
   left: 50%;
   transform: translateX(-50%) translateY(-50%);
   width: 300px;
   color:#fff;
   height: 80px;
   line-height: 80px;
 }
</style>

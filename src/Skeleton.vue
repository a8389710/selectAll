<template>
  <div class="skeleton-wrap">
    <p class="skeleton title"></p>
    <p class="skeleton price"></p>
    <p class="skeleton img"></p>
    <p class="skeleton btn"></p>
  </div>
</template>
<style lang="less" scoped>
.skeleton-wrap {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #ddd;
  .skeleton {
    background: #fff;
  }
  p {
    width: 80%;
    height: 20px;
    border-radius: 5px;
  }
  .img {
    width: 100px;
    height: 80px;
    border-radius: 5px;
  }
  .btn {
    width: 120px;
    height: 40px;
    border-radius: 5px;
  } 
}
</style>

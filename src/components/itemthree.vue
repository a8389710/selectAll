<template>
  <div>
    这是tab3
  </div>
</template>
<style lang="less" scoped>
div {
  background: red;
  border-radius: 10px;
  animation: colorchange 3s infinite linear;
}
@keyframes colorchange {
  0% {background: red;}
  50% {background: rgb(250, 87, 163);
  transform: rotateZ(360deg)}
  100% {background: red;
  transform: rotateZ(720deg)
  }
}
</style>
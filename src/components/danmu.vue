<template>
  <div class="danmu-warps">
    <div class="video-warp">
      <div class="video">
        <video src=""></video>
      </div>
      <p v-for="dm in danmumsg" :key="dm.id">
        <span class="danmu-span" :class="{'danmumove':dm.msg}" :style="{'top':dm.top+'px'}">{{dm.msg}}</span>
      </p>
    </div>
    <div class="chat-warp">
      <div class="chat-show">
        <span class>聊天记录</span>
        <p v-for="msg in showmsg" :key="msg.id">
          <span>{{msg}}</span>
        </p>
      </div>
      <div class="chat-keyin">
        <textarea class="keyin-ipt" v-model="keyinmsg" type="textarea" placeholder="输入聊天内容" maxlength="15"></textarea>
        <button class="keryin-btn" @click="submitAdvice">提交评论</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'danmu',
  meta: {
    title: '弹幕'
  },
  data () {
    return {
      keyinmsg:'',
      showmsg:[''],
      danmumsg:['']
    }
  },
  methods: {
    submitAdvice () {
      let top = Math.floor(Math.random()*100)
      this.showmsg.push(this.keyinmsg)
      let danmuconfig = {
        'msg':this.keyinmsg,
        'top':top
      }
      this.danmumsg.push(danmuconfig)
      this.keyinmsg = ''
    }
  }
}
</script>
<style lang="less" scoped>
* {
  margin:0;
  padding: 0;
}
.danmu-warps{
  position: relative;
  display: flex;
  justify-content: center;
  width: 900px;
  height: 400px;
  background: #ddd;
  border:2px solid black;
  border-radius: 5px;
  padding: 4px;
  .video-warp{
    position: relative;
    width: 600px;
    height: 300px;
    z-index: 3;
    overflow: hidden;
    float: left;
    .video{
      width: 100%;
      height: 300px;
      background: pink;
    }
    .danmu-span{
      position: absolute;
      display:block;
      width: 100%;
      height: 20px;
      line-height: 20px;
      text-align: left;
      top:0;
    }
  }
  .chat-warp{
    display: block;
    width: 300px;
    height: 300px;
    float: left;
    border:1px solid red;
    .chat-show{
      position: relative;
      height: 200px;
      z-index: 3;
      box-sizing: border-box;
      // 让容器可以上下滑动
      overflow-y: auto;
      border-bottom: 4px solid black;
      background: lightblue;
    }
    .chat-keyin{
      position: relative;
      width: 300px;
      height: 100px;
      background: rgb(156, 218, 156);
      .keyin-ipt{
        position: absolute;
        width: 300px;
        height: 100px;
        padding:10px;
        top:0;
        left:0;
        vertical-align:top;
        background: none;
        border:none;
        outline: none;
        resize:none
      }
      .keryin-btn{
        position: absolute;
        width: 80px;
        height: 30px;
        right:10px;
        bottom:10px;
        color:black;
        border-radius: 5px;
      }
    }
  }
}
// 动画
@keyframes danmuMove {
  0%{
    left:110%;
  }
  100%{
    left:-100%;
  }
}
.danmumove{
  animation: danmuMove 5s linear forwards;
  color:#fff;
  font-weight: bold;
  font-size: 20px;
}
</style>

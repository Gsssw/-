<!--
 - @Author: 郭树伟
 - @Date: 2023-03-08 21:04:16
 - @LastEditTime: 2023-04-13 09:18:13
 - @LastEditors: 郭树伟
 - @FilePath: /douyin-master 2/src/App.vue
 - @Copyright 2021 - 2023 郭树伟, All Rights Reserved. 
 - @All codes are protected by China's regulations on the protection of computer software, and infringement must be investigated.
 - @所有代码均受中国《计算机软件保护条例》保护，侵权必究.
-->
<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <keep-alive :exclude="excludeRoutes">
        <component :is="Component"/>
      </keep-alive>
    </transition>
  </router-view>
</template>
<script>
/*
* try {navigator.control.gesture(false);} catch (e) {} //UC浏览器关闭默认手势事件
try {navigator.control.longpressMenu(false);} catch (e) {} //关闭长按弹出菜单
* */
import {mapState} from "vuex";
import routes from "./router/routes";

export default {
  name: 'App',
  data() {
    return {
      transitionName: 'go',
    }
  },
  computed: {
    ...mapState(['excludeRoutes']),
  },
  methods: {},
  // watch $route 决定使用哪种过渡
  watch: {
    '$route'(to, from) {
      this.$store.commit('setMaskDialog', {state: false, mode: this.maskDialogMode})

      //footer下面的5个按钮，对跳不要用动画
      let noAnimation = ['/', '/home','/slide', '/me', '/attention', '/message', '/publish', '/home/live',
      'slide'
      ]
      if (noAnimation.indexOf(from.path) !== -1 && noAnimation.indexOf(to.path) !== -1) {
        return this.transitionName = ''
      }

      const toDepth = routes.findIndex(v => v.path === to.path)
      const fromDepth = routes.findIndex(v => v.path === from.path)
      this.transitionName = toDepth > fromDepth ? 'go' : 'back'
    },
  },
  mounted() {
    window.onresize = () => {
      location.reload()
    }
    // this.$store.dispatch('getFriends')
    try {
      navigator.control.gesture(false);
    } catch (e) {
    }
    try {
      navigator.control.longpressMenu(false);
    } catch (e) {
    }
    document.onselectstart = new Function("return false")//禁止选中文字
  },
}
</script>

<style lang="less">
@import "./assets/less/index";

#app {
  height: 100%;
  width: 100%;
  position: relative;
}

.go-enter-from {
  transform: translate3d(100%, 0, 0);
}

//最终状态
.back-enter-to, .back-enter-from, .go-enter-to, .go-leave-from {
  transform: translate3d(0, 0, 0);
}

.go-leave-to {
  transform: translate3d(-100%, 0, 0);
}

.go-enter-active, .go-leave-active, .back-enter-active, .back-leave-active {
  transition: all .3s;
}


.back-enter-from {
  transform: translate3d(-100%, 0, 0);
}

.back-leave-to {
  transform: translate3d(100%, 0, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

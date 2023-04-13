/**
 * @Author: 郭树伟
 * @Date: 2023-03-08 21:04:16
 * @LastEditTime: 2023-04-13 09:04:05
 * @LastEditors: 郭树伟
 * @FilePath: /douyin-master 2/src/store/index.js
 * @Copyright 2021 - 2023 郭树伟, All Rights Reserved. 
 * @All codes are protected by China's regulations on the protection of computer software, and infringement must be investigated.
 * @所有代码均受中国《计算机软件保护条例》保护，侵权必究.
 */
import * as Vuex from "vuex";
import enums from '../utils/enums'
import api from '../api/index'
import CONST_VAR from "../utils/const_var";
import resource from "../assets/data/resource";

const store = Vuex.createStore({
  state: {
    bodyHeight: document.body.clientHeight,
    bodyWidth: document.body.clientWidth,
    maskDialog: false,
    maskDialogMode: 'dark',
    version: '17.1.0',
    userinfo: {
      school: {
        name: '中北大学',
        department: null,
        joinTime: null,
        education: null,
        displayType: enums.DISPLAY_TYPE.ALL,
      },
      "id": "93864497380",
      "unique_id_modify_time": "1630393144",
      "unique_id": "Bb_02gg",
      "favoriting_count": 143,
      "avatar": "http://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813c001_38b65801f08c473eb54d415ca8e46c65~tplv-8yspqt5zfm-300x300.webp?x-expires=1681516800&x-signature=IfmEEUKXZa%2FD0ZF%2Fm%2BpTg2ewa%2FU%3D&from=2480802190",
      "city": "太原",
      "province": '山西',
      "country": "中国",
      "birthday": "2002-09-22",
      "cover": "http://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813c001_38b65801f08c473eb54d415ca8e46c65~tplv-8yspqt5zfm-300x300.webp?x-expires=1681516800&x-signature=IfmEEUKXZa%2FD0ZF%2Fm%2BpTg2ewa%2FU%3D&from=2480802190",
      "following_count": 210,
      "follower_count": 236,
      "aweme_count": 1993,
      "nickname": "郭树伟",
      "phone": "19934978318",
      "sex": "男",
      "last_login_time": "1630423555",
      "create_time": "1630423555",
      "status": 1,
      "desc": `阿巴阿巴~~~`,
      "is_private": 1
    },
    friends: resource.users,
    excludeRoutes: [],
    judgeValue: 20,
    homeRefresh: 60,
    loading: false,
  },
  mutations: {
    setLoading(store, val) {
      store.loading = val
    },
    setUserinfo(store, val) {
      store.userinfo = val
    },
    setFriends(store, val) {
      store.friends = val
    },
    setMaskDialog(store, val) {
      store.maskDialog = val.state
      if (val.mode) {
        store.maskDialogMode = val.mode
      }
    },
    updateExcludeRoutes(store, val) {
      if (val.type === 'add') {
        if (!store.excludeRoutes.find(v => v === val.value)) {
          store.excludeRoutes.push(val.value)
        }
      } else {
        let resIndex = store.excludeRoutes.findIndex(v => v === val.value)
        if (resIndex !== -1) {
          store.excludeRoutes.splice(resIndex, 1)
        }
      }
      console.log('store.excludeRoutes', store.excludeRoutes)
    },
  },
  actions: {
    async getFriends(context) {
      let res = await api.user.friends()
      if (res.code === CONST_VAR.SUCCESS) {
        context.commit('setFriends', res.data)
      }
    }
  }
})

export default store
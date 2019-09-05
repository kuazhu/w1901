//index.js
//获取应用实例
const app = getApp()

Page({
  /*
  tapText:function(){
    console.log('tapText...')
  },
  tapView:function(){
    console.log('tabView..')
  }
  */
  tapMotto:function(){
    /*
    wx.navigateTo({
      url:'/pages/article/article'
    })
    */
    wx.redirectTo({
      url: '/pages/article/article'
    })
  }
})

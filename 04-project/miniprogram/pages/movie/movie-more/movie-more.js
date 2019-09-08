var { getMoiveList } = require('../../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var type = options.type
    var _this = this
    var baseUrl = app.GLOBAL_DATA.baseUrl
    var requestUrl = ''
    var navigationBarTitleText = ''
    switch(type){
      case 'inTheaters':
        requestUrl = baseUrl + 'in_theaters'
        navigationBarTitleText = '正在热映'
        break
      case 'comingSoon':
        requestUrl = baseUrl + 'coming_soon'
        navigationBarTitleText = '即将上映'
        break
      case 'top250':
        requestUrl = baseUrl + 'top250'
        navigationBarTitleText = 'top250'
        break               
    }
    //设置标题
    wx.setNavigationBarTitle({ title: navigationBarTitleText})
    //在当前页面显示导航条加载动画
    wx.showNavigationBarLoading()

    getMoiveList(requestUrl, function (data) {
      _this.setData({ movies: data },function(){
        //在当前页面隐藏导航条加载动画
        wx.hideNavigationBarLoading()
      })
    })  

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
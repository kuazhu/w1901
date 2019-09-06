var { articles } = require('../../../data/db.js')

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
    var articleId = options.articleId
    var article = articles[articleId]
    //处理收藏
    var isCollected = false
    //获取storage中的收藏对象
    var articles_collection = wx.getStorageSync('articles_collection')
    if (articles_collection){
      isCollected = !!articles_collection[articleId]
    }
    //没有收藏对象,初始化
    else{
      /**
       * articleId:false
       * {
       *  '0':false,
       *  '1':true
       * }
       */
      var data = {

      }
      data[articleId] = false
      wx.setStorageSync('articles_collection', data)
    }


    this.setData({ ...article, isCollected:isCollected})
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

  },
  /**
   * 处理收藏
   */
  tapCollection:function(){
    //wx.setStorageSync('key1',{name:'Tom'})
    //var data = wx.getStorageSync('key1')
    //console.log(data)
    //获取storage中的收藏对象
    var articles_collection = wx.getStorageSync('articles_collection')
    var currentIsCollected = articles_collection[this.data.articleId]
    articles_collection[this.data.articleId] = !currentIsCollected
    wx.setStorageSync('articles_collection', articles_collection)
    this.setData({ isCollected: !currentIsCollected})

  }
})
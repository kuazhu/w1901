// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*
    text:'abc',
    */
    articles:[
      {
        avatar:'/images/avatar/u1.jpg',
        date:'2019-10-10',
        title:'我是文章标题1',
        img:'/images/article/a1.jpg',
        desc:'我是描述1',
        star:30,
        view:20
      },
      {
        avatar: '/images/avatar/u2.jpg',
        date: '2019-10-10',
        title: '我是文章标题2',
        img: '/images/article/a2.jpg',
        desc: '我是描述2',
        star: 30,
        view: 20
      },      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
var { getMoiveList } = require('../../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requestUrl:'',
    totalCount:0,
    totalData:[],
    isEnd:false
  },
  /**
   * 处理请求的数据
   */
  handleMoiveList:function(data){
    if(data.length == 0){
      wx.hideNavigationBarLoading()
      this.data.isEnd = true
      wx.showToast({
        title: '没有数据啦'
      })
      return;
    }
    this.data.totalCount = this.data.totalCount + data.length
    this.data.totalData = this.data.totalData.concat(data)
    this.setData({ movies: this.data.totalData }, function () {
      //在当前页面隐藏导航条加载动画
      wx.hideNavigationBarLoading()
    })
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
    //保存当前的请求地址
    this.data.requestUrl = requestUrl
    //设置标题
    wx.setNavigationBarTitle({ title: navigationBarTitleText})
    //在当前页面显示导航条加载动画
    wx.showNavigationBarLoading()

    /*
    getMoiveList(requestUrl, function (data) {
      _this.setData({ movies: data },function(){
        //在当前页面隐藏导航条加载动画
        wx.hideNavigationBarLoading()
      })
    })
    */  
    getMoiveList(requestUrl,this.handleMoiveList)
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    //var _this = this
    wx.showNavigationBarLoading()
    /*
    getMoiveList(this.data.requestUrl, function (data) {
      _this.setData({ movies: data }, function () {
        //在当前页面隐藏导航条加载动画
        wx.hideNavigationBarLoading()
      })
    })
    */
    getMoiveList(this.data.requestUrl,this.handleMoiveList)      
  },

  /**
   * 页面上拉触底事件的处理函数
   * 加载更多
   */
  onReachBottom: function () {
    if(this.data.isEnd){
      wx.showToast({
        title: '没有数据啦'
      })
      return;
    }
    wx.showNavigationBarLoading()
    var nextUrl = this.data.requestUrl + "?start="+this.data.totalCount+"&count=20"
    getMoiveList(nextUrl, this.handleMoiveList)
  }
})
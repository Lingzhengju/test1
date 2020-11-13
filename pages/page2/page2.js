import data from "../../utils/mp4.js";

console.log(data);

Page({

  /**
   * 页面的初始数据
   */
  data: data[0],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载数据
    //这里数据写死，假装我是在服务器拿到的数据
  },
  //展开
  //原本没有upStatus这个字段，所以默认值为false
  upDown(event) {
    var index = event.currentTarget.dataset['index'];
    this.data.videoList[index].upStatus = !this.data.videoList[index].upStatus;
    this.setData({
      videoList: this.data.videoList
    })
  },
  //播放视频
  videoPlay(event) {
    var length = this.data.videoList.length;
    var index = event.currentTarget.dataset['index'];

    if (!this.data.videoIndex) { // 没有播放时播放视频
      this.setData({
        videoIndex: index
      })

      setTimeout(function(){
        console.log(index);
        var videoContextCurrent = wx.createVideoContext('video' + index)
        videoContextCurrent.play()
      },500);
      
    } else {
      //停止正在播放的视频
      var videoContextPrev = wx.createVideoContext('video' + this.data.videoIndex)
      videoContextPrev.stop()
      //将点击视频进行播放
      this.setData({
        videoIndex: index
      })

      setTimeout(function(){
        console.log(index);
        var videoContextCurrent = wx.createVideoContext('video' + index)
        videoContextCurrent.play()
      },500);
    }
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
    var videoContextPrev = wx.createVideoContext('video' + this.data.videoIndex);
    videoContextPrev.stop();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var videoContextPrev = wx.createVideoContext('video' + this.data.videoIndex);
    videoContextPrev.stop();
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
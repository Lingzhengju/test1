// // pages/page3/page3.js
// const app = getApp()
// // 初始化 cloud
// wx.cloud.init();
// //1、引用数据库
// const DB = wx.cloud.database().collection("my_ZS");
// Page({
//   /**
//    * 页面的初始数据
//    */
//   data: {
//     playStatus: true,
//     audioIndex: 0,
//     progress: 0,
//     duration: 0,
//     audioList: [],
//     showList: true
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {
//     let manager = wx.getBackgroundAudioManager();
//     manager.pause();
//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
//     let manager = wx.getBackgroundAudioManager();
//     manager.pause();
//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   },

//   getData() {
//     DB.get({
//       success: res => {
//         console.log(res.data)
//         this.setData({    //收集数据到ne中并返回
//           ne: res.data
//         })
//       },
//       fail(res) {
//         console.log("查询失败", res)
//       }
//     })
//   },

//   jumpPageADD:function(){
//    wx.navigateTo({
//      url: '/pages/pageAdd/pageAdd',
//    })
//   }
// })

//新
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 0,
    ZS_name:''

  },
  ZS_name:function(e){
    this.setData({
      ZS_name: e.detail.value
   });
   console.log(this.ZS_name);
  },

  //事件处理函数

  // onLoad: function () {
  //   this.search_ZS();
  // },
    async search_ZS() {
    let name_ZS=this.data.ZS_name;
    const db = wx.cloud.database({})
    const cloudData = await db.collection('pipeiZS').where({name:name_ZS}).get()
    const articles = cloudData.data
    console.log(articles);

    this.setData({
      articleList: articles
    })
    console.log(this.data);
  },
  // gotoViewImage: function (e) {
  //   // console.log(e.currentTarget.dataset);

  //   app.globalData.viewTitle = e.currentTarget.dataset.title;
  //   app.globalData.viewDesc = e.currentTarget.dataset.desc;
  //   app.globalData.viewImageURL = e.currentTarget.dataset.imageurl;

  //   console.log(app.globalData);

  //   wx.navigateTo({
  //     url: '../viewImage/viewImage'
  //   })

  // }
})
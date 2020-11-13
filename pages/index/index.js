//index.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 0,

    /*
    imageList: [
      "https://www.et.ynu.edu.cn/appdd/uploads/20030929/8/s1.jpg",
      "https://www.et.ynu.edu.cn/appdd/uploads/20030929/8/s2.jpg",
      "https://www.et.ynu.edu.cn/appdd/uploads/20030929/8/s3.jpg"
    ],

    articleList: [{
        'id': 1,
        'title': '文章标题1',
        'desc': '大理的精髓不在古城，可以这么说，古城是游人聚集最多的，特别是跟团游的游客，都齐聚在大理古城，到大理旅游一定要环洱海，洱海才是大理的精髓，洱海是大理“风花雪月”的四大名景之一，外形如同耳朵，是由西洱河塌陷形成的高原湖泊。',
        'imageURL': 'http://t11.baidu.com/it/u=4085267230,2125084683&fm=173&app=25&f=JPEG?w=640&h=480&s=A3367084C63FCFCE4C9BADD1030050AA'
      },
      {
        'id': 2,
        'title': '文章标题2',
        'desc': '大理的主要景点也都是以洱海为中心，如果要骑行洱海，可以洱海南端的下关镇为起点，顺时针游览，依次可到达苍山、大理古城、崇圣寺三塔、喜洲、蝴蝶泉、双廊、南诏风情岛、小普陀、金梭岛等地打卡地。',
        'imageURL': 'http://t11.baidu.com/it/u=3192646651,3031867704&fm=173&app=25&f=JPEG?w=639&h=479&s=CD249454C40CFB4F543A1AD1030080BC'
      },
      {
        'id': 3,
        'title': '文章标题3',
        'desc': '而这些景点之中，最为出名的是沿湖的人气村落，有着“洱海神光”之称的双廊、还有《心花怒放》的取景地才村、以及白族民居建筑最为特色的喜洲。这三处地方，是环洱海的经典。一定要打卡地之地。如果有时间更建议找一处洱海边的客栈住上一晚。',
        'imageURL': 'http://t12.baidu.com/it/u=2533399793,3729042566&fm=173&app=25&f=JPEG?w=640&h=480&s=962661A0C6174BCCF09EA9D20300909B'
      }
    ]
    */
  },

  /**
   * current 改变时会触发 change 事件
   * @param {*} e 
   */
  swiperChange(e) {
    this.setData({
      pageIndex: e.detail.current
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.loadSwiperImages();
  },
  async loadSwiperImages() {
    const db = wx.cloud.database({})
    const cloudData = await db.collection('swiper-images').get()
    const swiperImages = cloudData.data[0].images
    console.log(swiperImages);

    this.setData({
      imageList: swiperImages
    })
    console.log(this.data);
  },
  gotoViewImage: function (e) {
    // console.log(e.currentTarget.dataset);

    app.globalData.viewTitle = e.currentTarget.dataset.title;
    app.globalData.viewDesc = e.currentTarget.dataset.desc;
    app.globalData.viewImageURL = e.currentTarget.dataset.imageurl;

    console.log(app.globalData);

    wx.navigateTo({
      url: '../viewImage/viewImage'
    })

  },
  //成绩查询界面
  grade_search:function(){
    wx.navigateTo({
      url: '/pages/grade_search/search',
    })
  },
  //证书查询界面 
  ZS_my:function(){
    wx.navigateTo({
      url: '/pages/page6/page6',
    })
  }

})
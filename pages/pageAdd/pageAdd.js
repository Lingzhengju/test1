// pages/pageAdd/pageAdd.js
const app=getApp()
const db = wx.cloud.database();//初始化数据库
var idinfolist = [
 { "code": "证书名称", "text": '' },
 { "code": "获取时间", "text": '' },
 { "code": "证书类型", "text": '' },
 { "code": "通过分数", "text": ''},

]
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    listData: idinfolist,  
    inputValue: '', //用于显示输入语句
    searchinput: '', //用户输入的查询语句

    currentPhoto: false,
    albumIndex: -1,
    albums: [],
    photosOrigin: [],
    photosNew: [],
    newphotos_url: [],
    index: '',
    //
    imgbox: [],//选择图片
    fileIDs: [],//上传云存储后的返回值
  },
  //图片二的js
  imgDelete1: function (e) {
    let that = this;
    let index = e.currentTarget.dataset.deindex;
    let imgbox = this.data.imgbox;
    imgbox.splice(index, 1)
    that.setData({
      imgbox: imgbox
    });
  },
  // 选择图片 &&&
  addPic1: function (e) {
    var imgbox = this.data.imgbox;
    console.log(imgbox)
    var that = this;
    var n = 5;
    if (5 > imgbox.length > 0) {
      n = 5 - imgbox.length;
    } else if (imgbox.length == 5) {
      n = 1;
    }
    wx.chooseImage({
      count: n, // 默认9，设置图片张数
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // console.log(res.tempFilePaths)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths

        if (imgbox.length == 0) {
          imgbox = tempFilePaths
        } else if (5 > imgbox.length) {
          imgbox = imgbox.concat(tempFilePaths);
        }
        that.setData({
          imgbox: imgbox
        });
      }
    })
  },

  //图片
  imgbox: function (e) {
    this.setData({
      imgbox: e.detail.value
    })
  },

//添加

res: function(e) {
  const db = wx.cloud.database()
  let promiseArr = [];
  for (let i = 0; i < this.data.imgbox.length; i++) {
    promiseArr.push(new Promise((reslove, reject) => {
      let item = this.data.imgbox[i];
      let suffix = /\.\w+$/.exec(item)[0];//正则表达式返回文件的扩展名
      wx.cloud.uploadFile({
        cloudPath: new Date().getTime() + suffix, // 上传至云端的路径
        filePath: item, // 小程序临时文件路径
        success: res => {
          db.collection('my_ZS').add({
            data:{
              name: e.detail.value.name,
              data:e.detail.value.data,
              type:e.detail.value.type,
              score:e.detail.value.score,
              fileIDs:this.data.fileIDs.concat(res.fileID)
            },success:res=>{
             this.setData({
              name: e.detail.value.name,
              data:e.detail.value.data,
              type:e.detail.value.type,
              score:e.detail.value.score,
              fileIDs:this.data.fileIDs.concat(res.fileID)
             })
             wx.showToast({
              title: '新增记录成功',
            })
            console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
            },
            fail: err => {
              wx.showToast({
                icon: 'none',
                title: '新增记录失败'
              })
              console.error('[数据库] [新增记录] 失败：', err)
            }
          })
          console.log(res.fileID)//输出上传后图片的返回地址
          reslove();
          //wx.hideLoading();
          wx.showToast({
            title: "上传成功",
          })
        },
        fail: res=>{
          wx.hideLoading();
          wx.showToast({
            title: "上传失败",
          })
        }
      })
    }
    ));
  }
  Promise.all(promiseArr).then(res => {//等数组都做完后做then方法
    console.log("图片上传完成后再执行")
    this.setData({
      imgbox:[]
    })
    this.addPhotos(res);
  }).catch(error=>{

  })  

  wx.showLoading({
    title: '上传中',
  })

},



})

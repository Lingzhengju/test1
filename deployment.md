部署说明
===========
###配置模板
```
{
  "pages": [
    "pages/index/index",
    "pages/page2/page2",
    "pages/page3/page3",
    "pages/page4/page4",
    "pages/page5/page5",
    "pages/logs/logs",
    "pages/splash/splash",
    "pages/pageAdd/pageAdd",
    "pages/page6/page6",
    "pages/grade_search/search"
  ],
  "requiredBackgroundModes": [
    "audio",
    "location"
  ],
  "window": {
    "backgroundTextStyle": "dark",
    "navigationBarBackgroundColor": "#1662D5",
    "navigationBarTitleText": "MyAPP",
    "navigationBarTextStyle": "black"
  },
  "tabBar": {
    "color": "#cdcdcd",
    "selectedColor": "#000000",
    "borderStyle": "black",
    "backgroundColor": "#1662D5",
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "image/标记1.png",
        "selectedIconPath": "image/标记.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/page2/page2",
        "iconPath": "image/发现.png",
        "selectedIconPath": "image/发现1.png",
        "text": "发现"
      },
      {
        "pagePath": "pages/page3/page3",
        "iconPath": "image/应用.png",
        "selectedIconPath": "image/应用1.png",
        "text": "智能匹配"
      },
      {
        "pagePath": "pages/page4/page4",
        "iconPath": "image/全部.png",
        "selectedIconPath": "image/全部1.png",
        "text": "智能认证"
      },
      {
        "pagePath": "pages/page5/page5",
        "iconPath": "image/我的.png",
        "selectedIconPath": "image/我的1.png",
        "text": "我的"
      }
    ]
  },
  "useExtendedLib": {
    "weui": true
  },
  "usingComponents": {
    "mp-icon": "/components/icon/icon"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
```
###基础信息简介
```需要修改的参数：
1、环境变量env：云开发控制平台的环境ID
2、asscee_token：Api调用参数

云数据库的需要上传的文件：
1、swiper-images集合
该集合中需要上传首页需要滚动播放的照片。
2、my_ZS集合
该集合需要提前创建，由用户在使用过程中对集合进行增、删、改、查用户自己所获得的证书。
3、pipeiZS集合
该集合中需要上传大量专业名称以及该专业所需要的证书名称。

涉及到的外部服务：
1、调用了腾讯开放平台的api进行证书的识别。
2、使用其他考试官网的网址，来进行信息的收集和处理。
```

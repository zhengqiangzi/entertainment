
/*
appkey:7a23b4824b21fa50a32685bda99f5756

http://v.juhe.cn/toutiao/index?type=top&key=APPKEY
接口地址：http://v.juhe.cn/toutiao/index
返回格式：json
请求方式：get/post
请求示例：http://v.juhe.cn/toutiao/index?type=top&key=APPKEY
接口备注：返回头条，社会，国内，娱乐，体育，军事，科技，财经，时尚等新闻信息

类型
,top(头条，默认),
shehui(社会),
guonei(国内),
guoji(国际),
yule(娱乐),
tiyu(体育)
junshi(军事),
keji(科技),
caijing(财经),
shishang(时尚)

返回数据格式如下:
{
    "reason": "成功的返回",
    "result": {
        "stat": "1",
        "data": [
      {
        "uniquekey": "6c4caa0c3ba6e05e2a272892af43c00e",
        "title": "杨幂的发际线再也回不去了么？网友吐槽像半秃",
        "date": "2017-01-05 11:03",
        "category": "yule",
        "author_name": "腾讯娱乐",
        "url": "http://mini.eastday.com/mobile/170105110355287.html?qid=juheshuju",
        "thumbnail_pic_s": "http://03.imgmini.eastday.com/mobile/20170105/20170105110355_
806f4ed3fe71d04fa452783d6736a02b_1_mwpm_03200403.jpeg",
        "thumbnail_pic_s02": "http://03.imgmini.eastday.com/mobile/20170105/20170105110355_
806f4ed3fe71d04fa452783d6736a02b_2_mwpm_03200403.jpeg",
        "thumbnail_pic_s03": "http://03.imgmini.eastday.com/mobile/20170105/20170105110355_
806f4ed3fe71d04fa452783d6736a02b_3_mwpm_03200403.jpeg"
    },
...]}}
*/

//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    news_categorys:[
      {key:"top",name:"头条",focus:true},
      { key: "shehui", name:"社会",focus:false},
      { key: "guonei", name:"国内",focus:false},
      { key: "guoji", name:"国际",focus:false},
      { key: "yule", name:"娱乐",focus:false},
      { key: "tiyu", name:"体育",focus:false},
      { key: "junshi", name:"军事",focus:false},
      { key: "keji", name:"科技",focus:false},
      { key: "caijing", name:"财经",focus:false},
      { key: "shishang", name: "时尚", focus: false}
    ]
  },
  onLoad: function () {
   
  },
  cateTitleTapHandler:function(e){

    var current = e.target.dataset.item
    var g = this.data.news_categorys.map(x=>{
        if(x.key==current.key && x.name==current.name){
          x.focus=true;
        }else{
          x.focus=false;
        }
        return x;
      })
    this.setData({ news_categorys:g})
  }

})

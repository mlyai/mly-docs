---
title: 功能简介
icon: wine-bottle
---

## 聊天插件

AI聊天，与知识库灵活搭配，让你的机器人更具多元化。

## 用户中心插件

支持自定义经验别名、金币别名、等级经验规则，等级级别名指定等等。

支持自定义经验别名、金币别名、等级经验规则，等级级别名指定等等。

```
触发：个人中心/财富榜/等级榜
```

::: warning
用户中心插件只在群环境下生效
:::

## Ultra 插件

支持自定义请求，也就是相当于可以定制其它第三方接口，该插件属于公测阶段，最终形式可能会发生变化。

可以在接入管理里面创建超级订阅，然后在机器人的插件管理里面添加订阅，开启全新的体验。

## 签到插件

我只能说签到功能很强，其它的自行体验，支持经验、金币配置，支持设置多种连签、排名奖励，支持文本模板和JSON（自定义）回复，未来还会支持图片模式。

```
触发：签到/签到榜
```

::: warning
签到插件只在群环境下生效
:::

## 天气预报

全国天气预报查询，并且会提示未来的天气变化。

```
触发：天气/武汉天气

回复：武汉天气【周五~08月13日】：小雨，24℃，东北风（0-3级 微风 <5.4m/s）；温馨提示，4小时左右天气有变化：小雨转中雨。
```

::: tip
天气预报支持多轮上下文场景对话
:::

## 手机号归属地查询

可查询全国手机号归属地信息。

```
触发：手机号/归属地/sjh/mobile/phone查询

回复：手机号前缀：1867230，归属地：湖北武汉，运营商：联通
```

::: tip
手机号归属地查询支持多轮上下文场景对话
:::

## 精选文案/一言

精选一句话。

```
触发：一言/诗词一言/动画一言/漫画一言/游戏一言/文学一言/原创一言/网络一言/影视一言/网易云一言/哲学一言/抖机灵一言/其它一言

回复：两情若是久长时，又岂在朝朝暮暮。 《鹊桥仙》 - 秦观
```

## 翻译功能

通用翻译功能，几乎支持所有语种。

```
触发：进入翻译模式/翻译hello/Translate i miss you

回复：
译文：
----------------
我想你
----------------
回复 q 退出翻译模式，回复 s:lang 切换翻译目标语种。
```

::: tip
翻译插件支持多轮上下文场景对话
:::

常见 lang 值对应的语种：

| lang | 语种   |
|------|------|
| zh   | 简体中文 |
| cht  | 繁体中文 |
| en   | 英语   |
| yue  | 粤语   |
| wyw  | 文言文  |
| jp   | 日语   |
| kor  | 韩语   |
| fra  | 法语   |
| spa  | 西班牙语 |
| th   | 泰语   |
| ara  | 阿拉伯语 |
| ru   | 泰语   |
| pt   | 葡萄牙语 |
| de   | 德语   |
| it   | 意大利语 |
| el   | 希腊语  |
| nl   | 荷兰语  |
| pl   | 波兰语  |
| dan  | 丹麦语  |
| fin  | 芬兰语  |
| vie  | 越南语  |
| san  | 梵语   |
| swe  | 瑞典语  |
| hu   | 匈牙利语 |
| lat  | 拉丁语  |
| cs   | 捷克语  |

## 成语大全，支持成语接龙，查成语

支持群成员一起成语接龙，也支持私聊接龙，还支持查询成语信息（出处、释义、举例）。

```
触发：成语接龙

回复：
成语接龙（编号23824）：
----------------------
当前的成语：随侯之珠
当前已接龙：0次
----------------------
回复【q】退出成语接龙

触发：查成语丢三落四

回复：
成语”丢三落四“信息：
----------------------
出处：清·曹雪芹《红楼梦》第六十七回咱们家没人，俗语说的‘夯雀儿先飞’，省的临时丢三落四的不齐全，令人笑话。”
释义：形容做事马虎粗心，不是丢了这个，就是忘了那个。
举例：无
----------------------
```

::: tip
成语大全插件支持多轮上下文场景对话
:::

## 笑话大全插件

有各种笑话，职场、校园、幽默、哲理、冷笑话等等。

```
触发：笑话/冷笑话/儿童笑话/哲理笑话/女人笑话/幽默笑话/恐怖笑话/文艺笑话/校园笑话/爆笑签名/爱情笑话/短信笑话/职场笑话/节日笑话

回复：
让人恍然的几句幽默箴言
----------------------
本质好的人很难做坏事，他们连自己那关都过不了。本质坏的人也很难改变，他们最多只是抑制自己一阵子罢了。所以要相信别人在做的努力，但不要尽信他们会改掉本质。
----------------------
《哲理笑话》
```

::: tip
笑话插件支持多轮上下文场景对话
:::

## 倒计时插件

支持自定义一年365天，每时每刻的倒计时，并且支持公历/农历区分设置。

触发：元旦倒计时/国庆倒计时/高考倒计时

回复：距离高考还有87天12小时26分钟

## 猜拳插件

支持自定义胜率，自定义猜拳别名等。

```
触发：猜拳石头/猜拳布/猜拳布20

回复：你出的布，机器人出的石头，你赢啦，加20金币
```

::: warning
猜拳插件只在群环境下生效
:::

## 人生重开模拟器插件

这垃圾人生，一秒也不想呆了，欢迎重开！

```
触发：人生重开

回复：
xxx，欢迎来到人生重开模拟器！
-----------------------------
1、普通10连抽（小盒子）
2、豪华20连抽（随机）
-----------------------------
请回复编号选择天赋礼包。
```

::: warning
因时间关系，此插件目前暂不支持自定义配置，后续将陆续完善各种配置，支持各种“魔改”，敬请期待！

目前发布的仅为体验版，如果您有什么好的建议，欢迎向我们反馈，交流方式请前往[关于茉莉]页面查看！
:::

## 云音乐插件

搜音乐、点歌、看评论！

```
触发：点歌刚好遇见你/搜歌刚好遇见你

回复：
💡 xxxxxx
-----------------------------
🎵 1、刚好遇见你[李玉刚/徐天意-我想和你唱 第二季 第9期]  
🎵 2、遇见你（翻自 锦零）[小呱-遇见你]  
🎵 3、遇见你（粤语版）[欧阳耀莹-遇见你]  
🎵 4、刚刚好（网剧《我与你的光年距离》主题曲）[薛之谦-初学者]  
🎵 5、谭艳-光明（王展鹏 Remix）[王展鹏-刚好遇见你]  
🎵 6、刚刚好（网剧《我与你的光年距离》主题曲）[薛之谦-我与你的光年距离 网络剧原声带]  
🎵 7、清明上河图 (2017新编版)[李玉刚-刚好遇见你]  
🎵 8、不后悔遇见你[姜云升/朴冉-不后悔遇见你]  
🎵 9、遇见你[姜云升/孟垠希-2017]  
🎵 10、逐梦令 (2017新编版)[李玉刚-刚好遇见你]
-----------------------------

🏷 当前第1页，共搜到300条结果。
-----------------------------
✨ 回复编号查看歌曲详情
✨ 回复“上一页”或“下一页”翻页
```

## 其他功能

如果你有好的想法或建议，欢迎向我们反馈，期待中（QQ群：273970059）；

其他功能陆续完善中，敬请期待，已规划功能如下：

数学计算
笑话大全 已完成
故事大全
成语接龙 已完成
ip查询
身份证基本信息解析
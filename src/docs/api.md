---
title: API
icon: file-word
---

## 接口地址（Post请求）

`https://api.mlyai.com/reply`

## 请求头（Headers）

| 参数名          | 必填  | 说明                                               |
|--------------|-----|--------------------------------------------------|
| Api-Key      | 是   | 开放接口的ApiKey，在机器人详情中获取，机器人创建时就跟随着创建，平台唯一。         |
| Api-Secret   | 是   | 开放接口的ApiSecret，在机器人详情中获取，机器人创建时会随机生成秘钥，后续可以自行修改。 |
| Content-Type | 是   | application/json;charset=UTF-8                   |

## 请求参数（Json对象）

| 参数名      | 必填  | 说明                                                         |
|----------|-----|------------------------------------------------------------|
| content  | 是   | 消息主体，跟机器人交互的文本（长度超过64个字符将被自动截取，只保留前64个字符）                  |
| type     | 是   | 对话场景，1：私聊，2：群聊（对话场景不一样，from和to参数的含义也不一样）                   |
| from     | 是   | 消息发送者标识符（ID）：群消息时，此值表示群成员；好友消息时，此值表示好友。（长度超过32个字符将被自动截取）   |
| fromName | 否   | 消息发送者名字或昵称：群消息时，此值表示群成员；好友消息时，此值表示好友。（长度超过32个字符将被自动截取）     |
| to       | 是/否 | 消息接收者标识符（ID）：群消息时此值表示群标识；好友消息时此值不用传，并且无效。（长度超过32个字符将被自动截取） |
| toName   | 否   | 消息接收者名字或昵称：群消息时此值表示群名；好友消息时此值不用传，并且无效。（长度超过32个字符将被自动截取）    |

## 接口响应结果（Json）

| 字段名     | 字段类型 | 说明                                                                |
|---------|------|-------------------------------------------------------------------|
| code    | 字符串  | 响应码，此值非00000都为异常状态码                                               |
| message | 字符串  | 接口响应的消息提示，异常状态码可以参考此值的消息提示                                        |
| plugin  | 字符串  | 此次调用的最终处理插件，有Chat、Weather、Translation等，详细见下面插件列举，如果为null则表示是万金油回复 |
| data    | 数组   | 当接口响应码为00000时，就会响应接口的正确数据                                         |

## 接口响应示例（Json）

```json
{
    "code":"00000",
    "message":"请求成功",
    "plugin":null,
    "data":[
        {
            "content":"不懂，style正在学习中，说不定下次就会回答了",
            "typed":1,
            "remark":null
        }
    ]
}
```

接口返回的是 json，code 表示状态码，message 表示本次调用情况的描述，plugin 表示提问被处理的插件，如果为 null 则表示万金油回复，data 是本次调用返回的具体数据，注意，这个 data 是一个 json 数组，表示一个提问允许有多个连续的回答；

data 数组里面的 typed 表示当前回复的类型，1：文本，2：图片，3：文档，4：音频，8：JSON 字符串，9：其它文件；

当 data 数组里面的 typed 为文本时，content 表示回答文本内容；当 data 数组里面的 typed 为非文本，比如 typed=2（图片）时，content 表示此回答的图片文件相对地址，remark 表示附件上传时的原文件名；

词库回答里面的附件（图片、文档、音频和其它文件都是附件）访问地址是：https://files.molicloud.com/ + content

比如 data 里面的 typed=2，content=lib/image/20211101/202111011822283300.jpg，则这个文件的真实访问地址是https://files.molicloud.com/lib/image/20211101/202111011822283300.jpg

::: warning
因为 Ultra 插件是第三方接口返回的内容，所以 Ultra 插件返回的文件均为绝对地址，不需要拼接茉莉云的文件地址。
:::

## 接口响应状态码

当接口返回的code值是00000的时候，表示请求成功，其他的值都表示失败的请求，不会计入调用次数，当值为C1001时表示当日调用次数已用完。

## 插件列举

Chat：Ai聊天插件  
Weather：天气预报插件  
Idiom：成语大全、接龙插件  
Phone：手机号归属地查询插件  
Cps：商城联盟插件  
Joke：笑话插件  
Poems：精美古诗词插件插件  
Translation：翻译插件  

## 调用示例

### Java(springboot)

```java
// 构建请求头
HttpHeaders headers = new HttpHeaders();
headers.setContentType(MediaType.APPLICATION_JSON);
headers.add("Api-Key", "机器人的Api-Key");
headers.add("Api-Secret", "机器人的Api-Secret");

JSONObject body = new JSONObject();
// 发送的内容
body.set("content", "你好");
// 消息类型，1：私聊，2：群聊
body.set("type", type);
body.set("from", "消息发送者标识");
body.set("fromName", "消息发送者昵称");

HttpEntity<String> formEntity = new HttpEntity<String>(body.toString(), headers);
JSONObject jsonObject = restTemplate.postForEntity("https://api.mlyai.com/reply", formEntity, JSONObject.class).getBody();
```

### Kotlin

```kotlin
val mollyUrl = "https://api.mlyai.com/reply"
val connection = URL(mollyUrl).openConnection() as HttpsURLConnection

// 设置请求
connection.requestMethod = "POST"
connection.connectTimeout = 5000
connection.doOutput = true
connection.doInput = true
connection.useCaches = false
connection.instanceFollowRedirects = true

// 设置Api请求头
connection.setRequestProperty("Api-Key", api_key)
connection.setRequestProperty("Api-Secret", api_secret)
connection.setRequestProperty("Content-Type", "application/json;charset=UTF-8")

val out = DataOutputStream(connection.outputStream)
val json = buildJsonObject {
    put("content", message)
    put("type", 2)
    put("from", userId)
    put("fromName", userName)
    put("to", groupId)
    put("toName", groupName)
}
// 将Json请求写入连接
out.use {
    it.writeChars(json.toString())
    it.flush()
}
// 尝试连接
try {
    connection.connect()
} catch (e:Exception){
    Molly.logger.error { "连接失败: $e" }
} finally {
    connection.disconnect()
}

```

### PHP

```php
<?php

$url = 'https://api.mlyai.com/reply';
$apiKey = '机器人的 Api-Key';
$apiSecret = '机器人的 Api-Secret';
$message = '你好，你叫什么名字呀？'; // 消息内容
$header = array(
    "Api-Key: {$apiKey}",
    "Api-Secret: {$apiSecret}",
);
$body = json_encode([
    'content' => $message,
    'type' => 2,
    'from' => '123456',
    'fromName' => '张三',
    'to' => '1234567',
    'toName' => '王五',
]);
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_HEADER, 0);
curl_setopt($curl, CURLOPT_TIMEOUT, 1);
curl_setopt($curl, CURLOPT_TIMEOUT_MS, 3000);
curl_setopt($curl, CURLOPT_HTTPHEADER, array_merge($header, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($body)),
));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $body);
$data = curl_exec($curl);
curl_close($curl);

$result = json_decode($data);
if ($result->code != "00000") {
    exit($result->message);
} else {
    $content = "";
    $replys = $result->data;
    for ($i = 0; $i < count($replys); $i ++) {
        if (strlen($content) > 0) {
            $content .= "\n";
        }
        $content .= $replys[$i]->content;
    }
    exit($content);
}

```

### Nodejs

- 敬请期待

### Python

```python
import http.client
import json

conn = http.client.HTTPSConnection("api.mlyai.com")
payload = json.dumps({
  "content": "555555555",
  "type": 1,
  "from": "123456",
  "fromName": "张三"
})
headers = {
  'Api-Key': 'xxxxxxxxxxx',
  'Api-Secret': 'xxxxxxxxxx',
  'Content-Type': 'application/json'
}
conn.request("POST", "/reply", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

#### 其他语言

- 其他语言请参考机器人API自行实现，如果有需要，请联系我们补充。
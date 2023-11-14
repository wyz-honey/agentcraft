
> 注：当前项目为 Serverless Devs 应用，由于应用中会存在需要初始化才可运行的变量（例如应用部署地区、服务名、函数名等等），所以**不推荐**直接 Clone 本仓库到本地进行部署或直接复制 s.yaml 使用，**强烈推荐**通过 `s init ` 的方法或应用中心进行初始化，详情可参考[部署 & 体验](#部署--体验) 。

# AgentCraft 帮助文档
<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=agentcraft&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=agentcraft" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=agentcraft&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=agentcraft" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=agentcraft&type=packageDownload">
  </a>
</p>

<description>

快速构建agent 应用的中间层服务，兼容openai规范

</description>

<codeUrl>

- [:smiley_cat: 代码](https://github.com/devsapp/agentcraft)

</codeUrl>
<preview>



</preview>


## 前期准备

使用该项目，您需要有开通以下服务：

<service>



| 服务 |  备注  |
| --- |  --- |
| 函数计算 FC |  托管核心的AgentCraft服务以及基础模型服务 |

</service>

推荐您拥有以下的产品权限 / 策略：
<auth>
</auth>

<remark>

您还需要注意：   
该项目需要前置依赖RDS PostgreSQL 作为关系型数据库和向量数据库，因此需要提前准备好相应的资源，同时需要依赖向量的算法服务，该服务可以在函数计算的应用市场获得
该项目目前还在beta开发阶段，上生产需谨慎

</remark>

<disclaimers>



</disclaimers>

## 部署 & 体验

<appcenter>
   
- :fire: 通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=agentcraft) ，
  [![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=agentcraft) 该应用。
   
</appcenter>
<deploy>
    
- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
  - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://docs.serverless-devs.com/fc/config) ；
  - 初始化项目：`s init agentcraft -d agentcraft `
  - 进入项目，并进行项目部署：`cd agentcraft && s deploy - y`
   
</deploy>

## 应用详情

<appdetail id="flushContent">

**AgentCraft** 作为LLMOps Platform的样板间，提供了基础的LLMOps Platform功能，比如
+ 基础模型管理
+ 数据集处理
+ 内容上下文向量化
+ 提示词工程
+ 知识库构建，Agent构建
+ 端侧对接
其中，端侧接入方案，Agent工具构建都是开放能力，可以被使用到类似的平台中，我们期望AgentCraft能够作为广大开发者或者企业的参考，能够基于此快速构建自己的LLMOps Platform

![AgentCraft APPs](https://img.alicdn.com/imgextra/i4/O1CN01buPNco1T8qtV4xewI_!!6000000002338-1-tps-1777-893.gif)
![AgentCraft KnowledgeBase](https://img.alicdn.com/imgextra/i1/O1CN01yvWBWA29BKu5EZgtW_!!6000000008029-1-tps-1777-893.gif)
## AgentCraft的使用场景
各种领域知识的交付场景,包括不限于以下场景：
+ 零售导购，数字人+领域知识智能体能够作为新一代的零售导购服务增强企业竞争力
+ IT/HR 系统智能问答 ，企业内部 IT/HR 使用手册构建企业领域智能体，企业内部员工可通过该知识库快速解决在 IT/HR 上遇到的问题
+ 电商平台的搜索和问答系统，商品信息构建商品数据库，消费者可通过检索+问答的方式快速了解商品的详细信息
+ 游戏社区自动问答系统，游戏的信息（例如游戏介绍，游戏攻略等）构建社区智能体，可根据该知识库自动回复社区成员提供的问题
+ 智能客户聊天机器人，通过与呼叫中心/聊天机器人服务结合，可自动基于企业领域知识智能体就客户提出的问题进行聊天回复。
+ 智能教育辅导系统，使用教材和题库构建不同教育阶段的知识库，模拟和辅助老师/家长对孩子进行教学。

AgentCraft可以快速交付领域智能体，满足上述要求


## AgentCraft的使用角色
AgentCraft既可以面向开发者做AI应用的开发交付，也可以作为企业AI能力的服务之一
+ 开发者可以基于AgentCraft定制自己的专业知识库沉淀平台或者AI业务交付中心
+ 企业可以基于AgentCraft定制自己的行业LLMOps Platform，可以进行AI能力的整合沉淀，探索AI转型
## AgentCraft使用指引
下面是不同角色在AgentCraft操作的场景，开发者进行基础模型管理和AI应用编排，最后交付给业务场景，
用户在业务场景的客户端上使用企业的AI服务
![AgentCraft Structer](https://img.alicdn.com/imgextra/i2/O1CN01phVIf61Iceu25Q6Gk_!!6000000000914-2-tps-1968-1378.png)
## AgentCraft的功能架构
![AgentCraft Structer](https://img.alicdn.com/imgextra/i4/O1CN01O9AyfH1MtqDgPLsL1_!!6000000001493-0-tps-2448-1314.jpg)

## AgentCraft的特色及核心能力
涵盖了了算法，算力，模型，数据，工具，AI交付，以及生成式UI等全方位的功能，并且提供了极简的部署方式

### 1基础模型
依托于阿里云Serverless产品函数计算，提供海量的基础模型构建托管服务，依托于基础的模型服务您可以用来构建更加丰富的AI应用形态
![AgentCraft FoundationModel](https://img.alicdn.com/imgextra/i3/O1CN01tp5Mtm1lnlM8Z6IKN_!!6000000004864-1-tps-1777-867.gif)
#### 大语言模型系列

+ **通义千问** ： qwen-plus、qwen-turbo
+ **通义千问开源**
+ **ChatGLM** 
+ **Llama2**
+ **Intern**
+ **OpenAI** : GPT4、GPT3.5-turbo

基础模型部分支持基于Hugging Face，ModelScope等开源模型的开放模型进行微调和部署

#### 文生图系列
+ **通义万相**
+ **StableDiffusion** 

#### 自然语言处理
**Bert算法模型**：text2vec-large-chinese、bge-large-zh

### 2.数据集
可视化的数据集托管和处理，支持自动和手动文本数据处理功能，支持PDF,txt，html等格式数据源，支持模糊文档类数据源以及精准QA类的数据源处理操作，为实现更加准确知识问答效果提供支持
![AgentCraft DataSet](https://img.alicdn.com/imgextra/i4/O1CN01FqjAaP1e9H1uFhHzY_!!6000000003828-1-tps-1777-893.gif)
### 3.API服务
每个知识库、Agent都提供独立的鉴权能力，可以方便的集成到应用之中，另外支持使用阿里云微服务网关进行更加专业的API管理
### 4.交互式UI
知识领域智能体进行知识交付的时候不是单纯的文本输出，而是可以支持图像，视频，可交互UI等丰富的输出方式，下面有个简单的交互式Ui展示
<video width="680" height="340" controls src="https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/437013384812.mp4" />


### 5.端侧接入
支持 web网站、钉钉机器人、站点嵌入等接入业务端侧的能力，提供一站式的引导服务，基于ServerlessDevs， Eventbridge等Serverless+EDA等云原生产品架构可以快速实现端侧的接入

### 6. 工具开发和集成
基于阿里云Serverless开发工具可以快速进行工具函数的构建和托管以及LLM Agent的安全集成



## 本地开发
需要启动后端服务和前端服务
### 后端工程 agentcraft-be

+ 配置准备：修改.env.example -> .env
填写好相关的配置，主要依赖  EMBEDDING_URL 和 数据库的配置，其中EMBEDDING_URL 可以访问
https://fcnext.console.aliyun.com/applications/create?template=fc-embedding-api，
创建后获取，
数据库可以创建一个RDS PostgreSQL实例 https://rdsbuy.console.aliyun.com/create/rds/mysql?spm=5176.19907444.0.0.64b11450FHIgeU
+ 依赖安装：
**pip install -r  requirements.txt**
+ 服务启动：
```shell
export PYTHONPATH="${PYTHONPATH}:<your project path>"
python3 -u app/main.py
```
### 前端工程 agentcraft-fe
+ 配置准备：修改.env.example -> .env，将后端服务的域名填写为baseUrl的值，获得阿里云的AK,SK并填写为.env中的值（该配置在操作云资源的时候需要，如管理基础模型服务）
+ 依赖安装：
**npm install -f**
+ 服务启动
```
npm run dev
```

## AgentCraft安装视频教程
以下是在云服务安装AgentCraft的使用教程
<video width="680" height="340" controls src="https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/436856476412.mp4" />

## AgentCraft的基本概念
### 基础模型
由函数计算提供的基础模型包含丰富的AI领域模型，包括LLM类别的通义千问，Chatglm,Llama2等，以及绘画类别的Stable Diffusion,通义万相等，以及Bert算法模型，Ocr模型
### LLM代理
LLM代理可以更好的兼容不同的LLM服务，使用相同的数据输入和输出格式，这样做的好处是，在应用侧可以无缝的切换LLM模型，而应用本身不受影响，可以更方便的对比不同的LLM模型效果
### 数据集
数据集是业务层面的高层抽象，方便业务聚合自己的业务场景，本身没有实际的数据，数据集本身分为两种类型 文档数据集和问答数据集，其中文档数据集是为了泛化知识内容，而问答数据集则是精准的问答知识
### 数据源
数据源是真实的数据，来自于markdown,pdf,text等文件，也可以手动独条录入，数据源是智能体检索的真实数据，数据源跟数据集是从属关系，一个数据集可以包含多条数据源。数据源类型同样也是分为文档类型和问答类型
### 智能应用
智能应用是一组业务高层的抽象，其包含多个智能体
### 智能体（Agent）
智能体是只能应用的核心，具备上下文记忆，工具处理，自然语言认知等能力，智能体分为领域知识智能体，工具智能体和综合智能体，其中领域知识智能体是专门针对领域的知识进行智能化的问答，通过增强检索技术
                                增加问答知识的准确率，通过生成式UI，加强知识的交付效果


## 模型列表
已有的模型列表如下：
<ModelView  />

## RoadMAP
正在进行中的开发：
+ **客户端集成** 支持 NextGpt 快速独立站点部署，钉钉机器人的一站式接入以及网站嵌入能力的生成
+ **Agent 能力** 集成主流Agent Framework 完成快速的Agent交付
+ **工具扩展** 快速的工具构建及交付，供给给Agent更丰富的场景






## 如何贡献
欢迎为AgentCraft贡献，一起推进AI应用的落地。  欢迎各种方式的贡献，提交代码、问题、新想法、或者分享你的AI应用

## 联系我们

如果您有任何问题、建议或合作意向，可以用以下方式联系我们：
+ GithubRepo 提交 Issue 或 PR
+ 加入Serverless+ AIGC 钉群讨论 
![dingtalk](https://img.alicdn.com/imgextra/i2/O1CN01zGJ4fS21GMJy6Okd8_!!6000000006957-0-tps-470-472.jpg)


## Citation

本软件使用以下开源软件
+ Nextjs  [nodejs]
+ FastApi [python]
+ LangChain

## License 开源协议
Apache2.0协议




## 扩展基本概念
### LLMOps
LLMOps(Large Language Model Operations) 是构建大语言模型应用的最佳实践，涉及开发，部署，运维等一系列过程，目的是为了高效，安全，可以扩展的构建大语言模型的应用程序，相关生态如下：
https://github.com/tensorchord/Awesome-LLMOps#llmops

### LLMOps Platform
LLMOps Platform 是将LLMOps的最佳实践进行聚合整理最终以软件产品化的方式呈现的一种LLM能力交付的中心
<usedetail id="flushContent">

## 常见问题

### 数据库连接不上？
请检查vpc网络环境，保证部署到FC 的AgentCraft服务跟数据库实例在同一个网络环境，设置数据库密码的时候请不要使用@符号

### 基础模型如何自定义
可以基于我们提供的基础镜像进行调整，使用FC托管模型服务

### 问答结果不准
AgentCraft 提供基本的RAG能力支持，但是详细的优化依然需要开发者自己调试，比如对数据进行更精准的切片处理，
对结果检索精度进行调整，优化模型本身，以及人工反馈优化结果

### 如何对接业务的系统

可以使用AgentCraft生成的API token 进行外部访问，目前对接客户端的准备有 钉钉，web，正在进行建设

### 如何加强内容安全
确保您使用的基础模型已经经过安全的评审，此外可以使用绿网等安全内容过滤服务进行内容输入输出处理




</usedetail>


<devgroup>


## 开发者社区

您如果有关于错误的反馈或者未来的期待，您可以在 [Serverless Devs repo Issues](https://github.com/serverless-devs/serverless-devs/issues) 中进行反馈和交流。如果您想要加入我们的讨论组或者了解 FC 组件的最新动态，您可以通过以下渠道进行：

<p align="center">  

| <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407298906_20211028074819117230.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407044136_20211028074404326599.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407252200_20211028074732517533.png" width="130px" > |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <center>微信公众号：`serverless`</center>                                                                                         | <center>微信小助手：`xiaojiangwh`</center>                                                                                        | <center>钉钉交流群：`33947367`</center>                                                                                           |
</p>
</devgroup>

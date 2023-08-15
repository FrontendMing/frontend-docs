# AEM开发指导手册

## 1、代码仓权限

创建Gitlab账号

1、公司内网GitLab：[http://192.168.30.241/global-website/jackery](http://192.168.30.241/global-website/jackery)（公司内网工程，临时上传，用于熟悉AEM项目，待AEM交付后再覆盖更新）

2、AEM Gitlab：[http://git.cd.adobe.com/users/sign\_up](http://git.cd.adobe.com/users/sign_up)（AEM团队当前工程，由AEM-Gary同意后加入项目，待后期交付）

![image](../../public/AEM/image0.png)

**仓库名：** ghu/jackery-cloud

## 2、关键地址清单

*   Git：http://git.cd.adobe.com/GaryHu/jackery-cloud
    
*   Dev：http://139.186.152.252:4502/（admin/admin）

*   HTML：http://139.186.152.252:48888/static/
    

**AEM相关页面链接：（admin/admin）**

*   编辑页面：[http://localhost:4502/aem/start.html](http://localhost:4502/aem/start.html)

*   全局管理界面：[http://localhost:4502/crx/de/index.jsp](http://localhost:4502/crx/de/index.jsp)

*   包管理页：[http://localhost:4502/crx/packmgr/index.jsp](http://localhost:4502/crx/packmgr/index.jsp)

*   i18n管理页：[http://localhost:4502/libs/cq/i18n/translator.html](http://localhost:4502/libs/cq/i18n/translator.html)


**官方文档：**

*   Adobe Experience Manager6.5文档：[https://experienceleague.adobe.com/docs/experience-manager-65.html?lang=zh-Hans](https://experienceleague.adobe.com/docs/experience-manager-65.html?lang=zh-Hans)

*   Adobe Experience Manager as a Cloud Service文档：[https://experienceleague.adobe.com/docs/experience-manager-cloud-service.html](https://experienceleague.adobe.com/docs/experience-manager-cloud-service.html)

*   Core Components Introduction：[https://experienceleague.adobe.com/docs/experience-manager-core-components/using/introduction.html?lang=en](https://experienceleague.adobe.com/docs/experience-manager-core-components/using/introduction.html?lang=en)


**其他学习文档：**

*   Vue SPA Editor Project:[https://www.mavice.com/blog/vue-spa-editor-project/](https://www.mavice.com/blog/vue-spa-editor-project/)


对应公司内网工程：aem-guides-wknd-spa

地址：[http://192.168.30.241/global-website/aem-guides-wknd-spa](http://192.168.30.241/global-website/aem-guides-wknd-spa)

分支：Vue/create-project-start

## 3、环境搭建相关依赖

### 3.1 开发工具：IDEA

下载：[https://www.jetbrains.com/idea/download/#section=windows](https://www.jetbrains.com/idea/download/#section=windows)

### 3.2 开发环境

JAVA JDK11（[下载](https://cfdownload.adobe.com/pub/adobe/coldfusion/java/java11/java11018/jdk-11.0.18_windows-x64_bin.exe)）

Maven 3.9.2（[下载：apache-maven-3.9.2-bin.zip](https://qr.dingtalk.com/page/yunpan?route=previewDentry&spaceId=21560794136&fileId=109098529407&type=file)）

### 3.3 AEM开发相关包清单

1.  jar包


下载：[https://qr.dingtalk.com/page/yunpan?route=previewDentry&spaceId=21560794136&fileId=107421467742&type=file](https://qr.dingtalk.com/page/yunpan?route=previewDentry&spaceId=21560794136&fileId=107421467742&type=file)

![image](../../public/AEM/image1.png)

2.  工程编译包（4个包）：


[http://139.186.152.252:4502/crx/packmgr/index.jsp](http://139.186.152.252:4502/crx/packmgr/index.jsp)（admin/admin）

![image](../../public/AEM/image2.png)

3.  站点数据包：

site-data-backup-1.0.zip（当前最新版）

[https://qr.dingtalk.com/page/yunpan?route=previewDentry&spaceId=21560794136&fileId=110708685421&type=file](https://qr.dingtalk.com/page/yunpan?route=previewDentry&spaceId=21560794136&fileId=110708685421&type=file)

4. Header和Footer组件对应包

[https://qr.dingtalk.com/page/yunpan?route=previewDentry&spaceId=21560794136&fileId=110520236654&type=file](https://qr.dingtalk.com/page/yunpan?route=previewDentry&spaceId=21560794136&fileId=110520236654&type=file)

5. 图片等资产包：（后端同事可先不安装）

[http://139.186.152.252:4502/crx/packmgr/index.jsp#/etc/packages/my\_packages/assets-backup.zip](http://139.186.152.252:4502/crx/packmgr/index.jsp#/etc/packages/my_packages/assets-backup.zip)

![image](../../public/AEM/image3.png)

## 4、AEM本地环境启动

### 4.1 确保 jdk 已安装

### 4.2 将 AEM jar包下载到规范目录

如：D:\AEM\author

![image](../../public/AEM/image4.png)
![image](../../public/AEM/image5.png)

### 4.3 双击jar包即可，等待AEM启动

crx-quickstart文件夹内会自动创建，同时出现启动画面，等待启动成功即可

![image](../../public/AEM/image6.png)

### 4.4 启动成功

![image](../../public/AEM/image7.png)

浏览器自动打开：[http://localhost:4502/](http://localhost:4502/)（admin/admin）

![image](../../public/AEM/image8.png)

### 4.5 配置站点相关包

访问：[http://localhost:4502/crx/packmgr/index.jsp](http://localhost:4502/crx/packmgr/index.jsp)

将下载的包进行上传并装载

1.  工程编译包
    
2.  数据包 site-data-backup.zip
    
3.  资产包


![image](../../public/AEM/image9.png)

### 4.6 访问站点页面目录，并预览首页

[http://localhost:4502/sites.html/content/jackery/us](http://localhost:4502/sites.html/content/jackery/us)

![image](../../public/AEM/image10.png)

![image](../../public/AEM/image11.png)

![image](../../public/AEM/image12.png)

![image](../../public/AEM/image13.png)

## 5、项目工程编译

### 5.1 确保下载IDEA、JDK11、Maven3.9.2（和IDEA2020前的版本不兼容，如出现无法刷新Maven的问题，请更好Maven版本或者IDEA版本）、项目代码

### 5.2 确保已启动AEM jar包

### 5.3 IDEA打开工程

![image](../../public/AEM/image14.png)

### 5.4 配置Maven和JDK

![image](../../public/AEM/image15.png)

![image](../../public/AEM/image16.png)

### 5.5 配置编译命令

![image](../../public/AEM/image17.png)

![image](../../public/AEM/image18.png)

### 5.6 运行编译命令

等等下载Maven依赖（需十几分钟，请耐心等待），编译工程代码成功

![image](../../public/AEM/image19.png)

![image](../../public/AEM/image20.png)

## 6、AEM同步前端代码到本地server —— 方案一

### 6.1 安装Cygin

http://www.cygwin.com/install.html

**插件清单：**

1.  binutils

2.  curl

3.  rsync

4.  unzip

5.  zip


![image](../../public/AEM/image21.png)

安装参考文档：[https://blog.csdn.net/lvsehaiyang1993/article/details/81027399](https://blog.csdn.net/lvsehaiyang1993/article/details/81027399)

![image](../../public/AEM/image22.png)

### 6.2 安装 tools-repo-1.4

下载：[https://github.com/Adobe-Marketing-Cloud/tools/releases](https://github.com/Adobe-Marketing-Cloud/tools/releases)

配置参考：[https://github.com/Adobe-Marketing-Cloud/tools/tree/master/repo](https://github.com/Adobe-Marketing-Cloud/tools/tree/master/repo)

下载tools-rep-1.4并解压到cygin的bin目录

![image](../../public/AEM/image23.png)

### 6.3 配置环境变量（配置完成后需重启电脑）

![image](../../public/AEM/image24.png)

### 6.4 IDEA配置repo工具及快捷键

![image](../../public/AEM/image25.png)

![image](../../public/AEM/image26.png)

![image](../../public/AEM/image27.png)
|  **名称**  | **Put**                                       | **Get**                                       |
| --- |-----------------------------------------------|-----------------------------------------------|
|  **程序**  | D:\MySoft\cygwin64\bin\bash                   | D:\MySoft\cygwin64\bin\bash                   |
|  **实参**  | -l repo put -f "$UnixSeparators($FilePath$)$" | -l repo get -f "$UnixSeparators($FilePath$)$" |
|  **工作目录**  | $ProjectFileDir$                              | $ProjectFileDir$                              |

配置快捷键

![image](../../public/AEM/image28.png)

### 6.5 测试前端文件推送及拉取功能

选取一个文件：ui.apps/src/main/content/jcr\_root/apps/jackery/components/banner/banner.html

执行put命令

![image](../../public/AEM/image29.png)

成功

![image](../../public/AEM/image30.png)

![image](../../public/AEM/image31.png)

## 7、AEM同步前端代码到本地server —— 方案二（推荐）

### 7.1 IDEA破解

参考文档：[https://www.exception.site/article/29](https://www.exception.site/article/29)

### 7.2 IDEA安装AEM相关插件 -- 供AEM开发使用

**插件清单**

*   AEM IDE

*   AEM Support -- 提供代码推送功能


**获取插件注册码**

地址：[https://ipfs.io/ipfs/bafybeiatyghkzrrtodzt3stm652rkrjxndg4hq2ublfdmifk7plg5k5brq/](https://ipfs.io/ipfs/bafybeiatyghkzrrtodzt3stm652rkrjxndg4hq2ublfdmifk7plg5k5brq/)

![image](../../public/AEM/image36.png)

点击复制按钮获取注册码，重启IDEA对应插件填充即可

![image](../../public/AEM/image37.png)

### 7.3 使用AEM Support的推送命令

选择目录或者在文件编辑区 鼠标右键 -- Push to Author 推送

![image](../../public/AEM/image38.png)

![image](../../public/AEM/image39.png)

![image](../../public/AEM/image40.png)

推送成功

![image](../../public/AEM/image41.png)

## 8、重要更新

特别提醒：先执行IDEA代码编译后再安装此更新

下载：cif-cloud-ready-feature-pkg-2022.09.30.00-cq-commerce-addon-authorfar.zip 并解压得到**.far**文件

[https://qr.dingtalk.com/page/yunpan?route=previewDentry&spaceId=21560794136&fileId=108266822699&type=file](https://qr.dingtalk.com/page/yunpan?route=previewDentry&spaceId=21560794136&fileId=108266822699&type=file)

![image](../../public/AEM/image32.png)

![image](../../public/AEM/image33.png)

在AEM的crx-quickstart目录下创建install目录，将上述**.far**文件放到此目录下，然后重启AEM jar包

![image](../../public/AEM/image34.png)

![image](../../public/AEM/image35.png)

## 9、 培训
### 介绍
时间：2023.07.05 16:00-17:00

讲师：Adobe-Gary 架构师

参会人：全球官网中心研发全员

### 培训内容

1.Install

    A.JDK 11 + AEM Cloud SDK 
    B.Rename to aem-author-p4502.jar
    C.java -jar aem-author-p4502.jar 

2.Pull code from git.cd.adobe.com

3.mvn clean install -PautoInstallSinglePackage

4.Development 

    A.ui.apps
    B.core
    C.ui.config
    D.ui.frontend
    
5.Development Basic Knowledge

A. [Sling resource resolver](https://experienceleague.adobe.com/docs/experience-manager-65/developing/platform/sling-cheatsheet.html?lang=en) 
    

B. [Dialog](https://developer.adobe.com/experience-manager/reference-materials/6-5/granite-ui/api/jcr_root/libs/granite/ui/index.html)

C. [HTL](https://experienceleague.adobe.com/docs/experience-manager-htl/content/getting-started.html?lang=en)

D. [Model](https://sling.apache.org/documentation/bundles/models.html)

6.Etc.


### 培训视频
链接：https://qr.dingtalk.com/page/yunpan?route=previewDentry&spaceId=21560794136&fileId=109494573915&type=file

## 10、FAQ

### 10.1 编译项目后，文件被加密，AEM页面访问404怎么办？

目前运维更新了加密策略，屏蔽了该目录下的文件D:\AEM\author\crx-quickstart，所以首先保证我们的aem-author-p4502.jar包生成的文件夹在运维屏蔽后的目录下，然后强制更新策略，再重新生成crx-quickstart即可

若发现还有其他加密问题，请联系运维：肖克处理
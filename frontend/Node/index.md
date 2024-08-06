# node版本管理

## nvm

nvm（node version manage）：node多版本管理器

~~~bash
# 查看远程可安装node版本
nvm list available

# 安装指定版本的node
nvm install latest 
nvm install lts 
nvm install 18.12.1

# 查看已安装版本以及当前正在使用的版本
nvm list

# 切换版本
nvm use 18.12.1
~~~



## nrm

nrm镜像源管理

~~~bash
# 全局安装nrm工具
npm i nrm -g

# 查看全局安装包的路径
npm list -g

# 查看远程可使用的镜像源以及当前正在使用的镜像源
nrm ls

# 切换镜像源
nrm use taobao

# 查看npm是否切换了镜像源
npm config get registry

# 设置镜像源
npm config set registry=https://registry.npm.taobao.org/

# 临时使用指定镜像源(不设置镜像源)
npm install -g cnpm --registry=https://registry.npm.taobao.org
~~~



## 查看npm配置信息

~~~bash
# nvm的根目录
nvm root

# 当前node版本的npm根目录
npm root -g

# 当前node版本的全局安装包
npm list -g

# 查看npm配置
npm config list
~~~



# npm包发布
~~~bash
# 登录，注意当前的npm源是否是官方源
npm login

# 查看登录的账号
npm whoami

# 发布
npm publish
~~~
更新已发布的包
~~~bash
# 版本号
major：主版本号（大版本）
minor：次版本号（小更新）
patch：补丁号（补丁）
premajor：预备主版本
preminor: 预备次版本
prepatch：预备补丁版本
prerelease：预发布版本

# 更新版本，默认初始版本为1.0.0
npm version patch  // 1.0.1 表示小的bug修复
npm version minor // 1.1.0 表示新增一些小功能
npm version mmajor // 2.0.0 表示大的版本或大升级
npm version preminor // 1.1.0-0 后面多了个0，表示预发布

# 发布
npm publish
~~~

# 模块化


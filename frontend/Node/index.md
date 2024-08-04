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



# 模块化


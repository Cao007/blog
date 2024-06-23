# git命令

## 配置用户信息

~~~
git config --global user.name "xxx"
git config --global user.email "xxx"
~~~



## 查看配置文件

~~~
git config --list --global
~~~



## 仓库状态

![image-20230110193452165](git.assets/image-20230110193452165.png)



## 回溯

![image-20230110202223353](git.assets/image-20230110202223353.png)



## 分支

![image-20230110200200066](git.assets/image-20230110200200066.png)



# Github

## 创建仓库

![image-20240516231849079](git.assets/image-20240516231849079.png)

创建新仓库

~~~bash
echo "# learn" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Cao007/learn.git
git push -u origin main
~~~

推送已存在的仓库

~~~bash
git remote add origin https://github.com/Cao007/learn.git
git branch -M main
git push -u origin main
~~~

使用代理服务器

![image-20240516235523967](git.assets/image-20240516235523967.png)

~~~bash
# 设置代理服务器
git config --global http.proxy http://127.0.0.1:7890

# 取消代理服务器
git config --global --unset http.proxy
git config --global --unset https.proxy

# 查看设置
git config --global --list
~~~



## 修改文件后提交

~~~bash
# 查看文件状态
git status -s

# 1.提交到暂存区
git add .

# 2.提交到本地分支
git commit -m "修改后"

# 3.提交到远程仓库的分支
git push
~~~



## 拉取最新代码

~~~bash
git pull
~~~



## clone项目

### https

~~~bash
git clone https://github.com/Cao007/learn.git
~~~

![image-20240517002357768](git.assets/image-20240517002357768.png)



### SSH

~~~bash
# 1.生成公钥、私钥。一路回车
ssh-keygen
~~~

![image-20240517003020130](git.assets/image-20240517003020130.png)

2.将公钥复制到github中的ssh中

![image-20240517003326020](git.assets/image-20240517003326020.png)

![image-20240517003456163](git.assets/image-20240517003456163.png)

3.使用ssh地址clone项目

~~~bash
git clone git@github.com:Cao007/learn.git
~~~

![image-20240517004156268](git.assets/image-20240517004156268.png)



## 项目常见操作

### 项目面板

![image-20240517021531242](git.assets/image-20240517021531242.png)

### 邀请成员

![image-20240517004746220](git.assets/image-20240517004746220.png)

![image-20240517004704825](git.assets/image-20240517004704825.png)

### fork项目

1.fork项目到自己的仓库

![image-20240517013503916](git.assets/image-20240517013503916.png)

2.clone项目到本地，修改项目

3.pull request

![image-20240517015032835](git.assets/image-20240517015032835.png)

### 删除仓库

![image-20240517004746220](git.assets/image-20240517004746220.png)

![image-20240517021655686](git.assets/image-20240517021655686.png)

## GitHub Pages

https://pages.github.com/

### 用户页面

1.创建仓库

- 用户名.github.io

![image-20240517022838823](git.assets/image-20240517022838823.png)

~~~bash
# 2.clone到本地
git clone https://github.com/username/username.github.io

# 3.本地写项目

# 4.https://username.github.io
https://Cao007.github.io
~~~



### 项目页面

![image-20240517031148036](git.assets/image-20240517031148036.png)

![image-20240517031229020](git.assets/image-20240517031229020.png)

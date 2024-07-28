# express-generator

## 创建项目

1.创建项目

~~~powershell
# 全局安装express-generator
npm i -g express-generator@4

# 创建express-generator项目
express --no-view express-api

# 在项目根目录下安装依赖
npm i
~~~

2.在routes/index.js中将响应改为json格式

~~~js
router.get('/', function(req, res, next) {
  res.json({
    "message": "Hello World"
  });
});
~~~

3.删除public/index.html

4.将var换成es6的const或let

5.热启动

~~~powershell
# 安装nodemon
npm i nodemon

# 启动
npm run start

# 可以通过 http://localhost:3000 来访问
~~~

![image-20240516125044592](index.assets/image-20240516125044592.png)



## 使用docker安装mysql

安装docker桌面版，配置镜像源

![image-20240728021026886](index.assets/image-20240728021026886.png)

![image-20240728021049289](index.assets/image-20240728021049289.png)

~~~bash
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "registry-mirrors": ["https://m96bt2rw.mirror.aliyuncs.com"]
}
~~~



2.在项目根目录下创建`docker-compose.yml`文件

3.配置内容

~~~yaml
services:
  mysql:
    image: mysql:8.3.0
    command:
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
    environment:
      - MYSQL_ROOT_PASSWORD=root1234
      - MYSQL_LOWER_CASE_TABLE_NAMES=0
    ports:
      - "3306:3306"
    volumes:
      - ./data/mysql:/var/lib/mysql
~~~

- `./data/mysql:/var/lib/mysql`映射到了宿主机Ubuntu的`/data/mysql`目录下

4.在vscode中打开终端，在项目根目录下安装并运行mysql

~~~powershell
docker-compose up -d
~~~



## navicat操作mysql

连接数据库

![image-20240728024756216](index.assets/image-20240728024756216.png)

创建数据库

![image-20240516150324478](index.assets/image-20240516150324478.png)

创建表

- 表名首字母大写
- 表名用复数形式

![image-20240516150824436](index.assets/image-20240516150824436.png)

| 类型                 | 含义   | 说明                                                         |
| :------------------- | :----- | :----------------------------------------------------------- |
| int                  | 整数   | 需要设定长度                                                 |
| decimal              | 小数   | 金额常用，需要设定长度。如 decimal(10, 2) 表示共存 10 位数，其中小数占 2 位 |
| char、varchar        | 字符串 | 文字类的常用，需要设定长度。例如身份证号、文章的标题使用。   |
| text                 | 文本   | 存储大文本，无需设定长度。一般会用文字很多的时候，例如文章的正文部分。 |
| date、time、datetime | 日期   | 记录时间                                                     |

## Sequelize操作mysql

### 安装及目录结构

~~~bash
# 安装
npm i -g sequelize-cli
npm i sequelize mysql2

# sequelize初始化
sequelize init
~~~

目录结构

~~~bash
.
├── config
│   └── config.json
├── migrations
├── models
│   └── index.js
└── seeders
~~~

- **config**：`sequelize`连接数据库的配置文件
- **models（模型）**：每个模型对应一张表，增删改查、表单验证等
- **migrations（迁移）**：新增表、修改字段、修改表模型、删除表等
- **seeders（种子）**：添加测试数据到表中



### config配置

![image-20240728111911889](index.assets/image-20240728111911889.png)



### models模型

1.删除在navicat中手动创建的Articles表

2.使用sequelize创建

~~~bash
# sequelize model:generate --name 表名单数 --attributes 字段1:类型1,字段2:类型2
sequelize model:generate --name Article --attributes title:string,content:text
~~~

- 在sequelize命令中，**表名使用单数**，创建的表是复数形式

- 执行命令后，在模型文件夹中出现了models/article.js文件，其中title是string类型，对应到 MySQL 数据库里，它就会自动变成`varchar`。content部分，则是`text`类型

  ![image-20240728113729405](index.assets/image-20240728113729405.png)

- 执行命令后，在迁移文件夹下出现了migrations/20240728032645-create-article.js文件，是表模型的相关操作

  ![image-20240728113831155](index.assets/image-20240728113831155.png)



### migrate迁移

~~~powershell
# 运行迁移文件，创建表
sequelize db:migrate
~~~

- 刷新navicat即可查看创建的表Articles（表名为复数形式）
- 另外一张表`SequelizeMeta`是我们运行迁移命令时，自动生成的。这张表里记录了当前已经跑过了哪些迁移，这样当你再次运行`sequelize db:migrate`时，已经运行过的迁移文件，就不会重复再次执行了。

![image-20240728114107639](index.assets/image-20240728114107639.png)

### seeders种子文件

~~~powershell
# 创建种子文件
# sequelize seed:generate --name 表名单数
sequelize seed:generate --name article
~~~

![image-20240728131422470](index.assets/image-20240728131422470.png)

书写生成随机数据的代码

~~~js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const articles = [];
    const counts = 100;

    for (let i = 1; i <= counts; i++) {
      const article = {
        title: `文章的标题 ${i}`,
        content: `文章的内容 ${i}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      articles.push(article);
    }

    await queryInterface.bulkInsert('Articles', articles, {});
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  }

};
~~~

~~~powershell
# 执行种子文件
# sequelize db:seed --seed 种子文件所在路径
sequelize db:seed --seed .\seeders\20240728051236-article.js

# 执行所有种子文件
sequelize db:seed:all
~~~



## 常见后台接口

### 接口规范

| 参数类型               | 形式                                      |
| ---------------------- | ----------------------------------------- |
| query参数（查询参数）  | /admin/articles?currentPage=1&pageSize=10 |
| params参数（path参数） | /admin/articles/{id}                      |
| body参数               | post请求+/admin/articles                  |

- 能同时携带多个不同的参数类型

- restful风格的api：请求的url地址`/admin/articles`不变，通过不同的请求方法完成增删改查

  - get
  - post
  - put
  - delete

  

### 配置路由

1.在routes文件夹下创建admin文件夹，存放各个路由文件

![image-20240516164632090](index.assets/image-20240516164632090.png)

2.配置路由

![image-20240516164736667](index.assets/image-20240516164736667.png)

### articles的增删改查

1.查询文章列表

~~~js
const express = require('express');
const router = express.Router();
const { Article } = require('../../models');

/**
 * 查询文章列表
 * GET /admin/articles
 */
router.get('/', async function (req, res, next) {
    try {
        const conditions = {
            order: [['id', 'DESC']],
        };

        const articles = await Article.findAll(conditions);

        res.json({
            status: true,
            message: '查询文章列表成功',
            data: articles
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: '查询文章列表失败',
            data: {
                errors: [error.message]
            }
        })
    }
});

module.exports = router;
~~~

![image-20240728141919982](index.assets/image-20240728141919982.png)

2.查询文章详情

~~~js
/**
 * 查询文章详情
 * GET /admin/articles/:id
 */
router.get('/:id', async function (req, res, next) {
    try {
        const { id } = req.params;

        const article = await Article.findByPk(id);

        if (article) {
            return res.json({
                status: true,
                message: '查询文章详情成功',
                data: article
            })
        } else {
            return res.status(404).json({
                status: false,
                message: '文章不存在',
            })
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: '查询文章详情失败',
            data: {
                errors: [error.message]
            }
        })
    }
})
~~~

![image-20240728142524951](index.assets/image-20240728142524951.png)

3.创建文章

~~~js
/**
 * 创建文章
 * POST /admin/articles
 */
router.post('/', async function (req, res, next) {
    try {
        const { title, content } = req.body;

        const article = await Article.create({
            title,
            content
        });

        // 201表示新建了资源
        res.status(201).json({
            status: true,
            message: '创建文章成功',
            data: article
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: '创建文章失败',
            data: {
                errors: [error.message]
            }
        })
    }
})
~~~

![image-20240728143347786](index.assets/image-20240728143347786.png)

![image-20240728143444350](index.assets/image-20240728143444350.png)

4.删除文章

~~~js
/**
 * 删除文章
 * DELETE /admin/articles/:id
 */
router.delete('/:id', async function (req, res, next) {
    try {
        const { id } = req.params;

        const article = await Article.findByPk(id);

        if (article) {
            await article.destroy();

            res.json({
                status: true,
                message: '删除文章成功',
            })

        } else
            res.status(404).json({
                status: false,
                message: '文章不存在',
            })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: '删除文章失败',
            data: {
                errors: [error.message]
            }
        })
    }
})
~~~

![image-20240728143705657](index.assets/image-20240728143705657.png)

5.更新文章

~~~js
/**
 * 更新文章
 * PUT /admin/articles/:id
 */
router.put('/:id', async function (req, res, next) {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const article = await Article.findByPk(id);

        if (article) {
            await article.update({
                title,
                content
            });

            res.json({
                status: true,
                message: '更新文章成功',
                data: article
            })
        } else
            res.status(404).json({
                status: false,
                message: '文章不存在',
            })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: '更新文章失败',
            data: {
                errors: [error.message]
            }
        })
    }
})
~~~

![image-20240728144717211](index.assets/image-20240728144717211.png)

![image-20240728144733905](index.assets/image-20240728144733905.png)

### 模糊查询、数据分页

![image-20240728165337869](index.assets/image-20240728165337869.png)

![image-20240728165558575](index.assets/image-20240728165558575.png)

~~~js
/**
 * 查询文章列表
 * GET /admin/articles
 */
router.get('/', async function (req, res, next) {
    try {
        // 获取查询参数（query参数）
        let { currentPage, pageSize, title } = req.query;

        // 如果没有传递这两个参数，就使用默认值
        // /admin/articles?currentPage=1&pageSize=10
        currentPage = Math.abs(Number(currentPage)) || 1;
        pageSize = Math.abs(Number(pageSize)) || 10;
        const offset = (currentPage - 1) * pageSize;

        const conditions = {
            order: [['id', 'DESC']],
            limit: pageSize,
            offset: offset,
        };

        // 如果有查询参数title，则添加模糊查询条件
        // /admin/articles?title=xxx
        if (title) {
            conditions.where = {
                title: {
                    [Op.like]: `%${title}%`
                }
            }
        };

        const { count, rows } = await Article.findAndCountAll(conditions);

        res.json({
            status: true,
            message: '查询文章列表成功',
            data: rows,
            pagination: {
                total: count,
                currentPage,
                pageSize,
            }
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: '查询文章列表失败',
            data: {
                errors: [error.message]
            }
        })
    }
});
~~~

![image-20240728170108354](index.assets/image-20240728170108354.png)

### 白名单过滤

![image-20240728170820952](index.assets/image-20240728170820952.png)

![image-20240728170650812](index.assets/image-20240728170650812.png)



### 表单验证

参数验证文档：

https://www.sequelize.cn/core-concepts/validations-and-constraints

1.在models/article.js中使用参数验证

![image-20240516223802994](index.assets/image-20240516223802994.png)

2.在routes/admin/articles.js中捕获错误，返回响应

![image-20240516224039678](index.assets/image-20240516224039678.png)



## apifox

### 新建团队、项目

![image-20240728134354028](index.assets/image-20240728134354028.png)

### 配置开发环境

![image-20240516171244289](index.assets/image-20240516171244289.png)



### 自定义响应状态码

![image-20240516173558363](index.assets/image-20240516173558363-1722094027405-18.png)
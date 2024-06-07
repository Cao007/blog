import { defineConfig } from 'vitepress'


/**
 * 站点全局配置
 * https://vitepress.dev/reference/site-config
 */
export default defineConfig({
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/blog/logo.svg' }],
  ],
  lang: 'zh-CN',
  title: "狗子吹头的知识库",
  description: "狗子吹头的知识库 前端开发html/css/javascript/vue/react/node/express 后端开发python/flask/mysql/Django",
  markdown: {
    math: true,
    image: {
      lazyLoading: true,
    }
  },

  /**
   * markdown页面配置
   * https://vitepress.dev/reference/default-theme-config
   */
  themeConfig: {
    /**
     * 主页index.md
     */
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '前端', items: [
          { text: 'HTML', link: '/frontend/1.HTML/index.md' },
          { text: 'CSS', link: '/frontend/2.CSS/index.md' },
          { text: 'JS', link: '/frontend/3.JS/index.md' },
        ]
      },
      {
        text: '后端', items: [
          { text: 'python语法', link: '/backend/1.python语法' },
          { text: 'python爬虫', link: '/backend/2.python爬虫' },
        ]
      },
      {
        text: '政治', items: [
          { text: '基础', link: '/politics/1.基础' },
        ]
      },
      {
        text: '其它', items: [
          { text: '其它1', link: '/other' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cao007' },
      // csdn
      {
        icon: {
          svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 1024C229.2224 1024 0 794.7776 0 512 0 229.2224 229.2224 0 512 0c282.7776 0 512 229.2224 512 512 0 282.7776-229.2224 512-512 512z m17.066667-413.525333c34.850133 4.352 68.778667 5.12 102.741333 2.0992 23.04-2.048 44.817067-8.362667 64.170667-21.9136 38.212267-26.794667 49.783467-85.1968 24.251733-123.050667-14.626133-21.7088-36.8128-30.344533-60.757333-35.498667-35.054933-7.543467-70.4512-5.751467-105.847467-3.413333-5.666133 0.3584-6.7584 3.072-7.236267 8.209067-3.072 32.682667-6.536533 65.314133-9.813333 97.962666-2.5088 24.814933-4.932267 49.629867-7.509333 75.605334z m53.4016-33.928534c1.962667-20.906667 3.6352-39.338667 5.4272-57.770666 1.553067-15.906133 3.413333-31.778133 4.727466-47.701334 0.3584-4.283733 1.553067-6.656 5.956267-6.382933 15.616 1.041067 31.709867 0.034133 46.728533 3.652267 36.488533 8.823467 48.725333 54.306133 23.3472 83.029333-15.8208 17.902933-36.7616 23.586133-59.255466 25.088-8.465067 0.546133-17.015467 0.085333-26.9312 0.085333zM512 434.295467c-2.184533-0.648533-3.5328-1.1776-4.932267-1.4336-37.717333-6.877867-75.690667-8.328533-113.646933-2.816-20.974933 3.037867-41.0112 9.489067-57.480533 23.330133-22.9888 19.319467-21.640533 46.848 4.4032 62.0032 13.056 7.594667 28.023467 12.509867 42.5984 17.288533 14.08 4.608 28.996267 6.826667 43.144533 11.264 12.5952 3.925333 14.011733 14.318933 3.584 22.306134-3.345067 2.56-7.441067 5.085867-11.537067 5.751466-11.195733 1.826133-22.698667 4.386133-33.826133 3.566934-24.098133-1.774933-48.042667-5.461333-72.5504-8.430934-1.365333 10.615467-2.935467 23.0912-4.5568 35.9424 4.181333 1.365333 7.68 2.730667 11.264 3.618134 33.9456 8.4992 68.386133 9.608533 102.912 5.12 20.087467-2.6112 39.4752-7.901867 56.695467-19.029334 28.603733-18.4832 36.693333-57.1904-4.676267-75.383466-14.506667-6.382933-30.190933-10.410667-45.482667-15.086934-11.4176-3.4816-23.313067-5.614933-34.525866-9.5232-9.7792-3.413333-11.144533-12.202667-3.037867-18.397866 4.6592-3.549867 10.717867-6.997333 16.384-7.3728a480.853333 480.853333 0 0 1 53.384533-0.853334c15.377067 0.699733 30.651733 3.549867 46.4896 5.5296L512 434.295467z m257.143467 2.048L750.933333 614.2976h54.152534c4.778667-45.636267 9.710933-90.7264 14.062933-135.8848 0.6144-6.365867 2.3552-8.840533 8.686933-9.0112 11.434667-0.273067 22.8864-1.979733 34.286934-1.570133 23.722667 0.853333 42.3936 9.728 38.4 43.264-2.901333 24.2688-5.597867 48.571733-8.2432 72.874666-1.092267 10.069333-1.826133 20.189867-2.730667 30.4128h55.330133c3.584-35.259733 7.9872-70.058667 10.496-104.994133 3.413333-47.4624-17.7664-73.3184-64.682666-80.213333-40.96-6.007467-81.339733-0.341333-121.5488 7.133866z m-483.498667 134.6048c-8.738133 1.297067-16.384 2.798933-24.098133 3.4816-25.6512 2.235733-51.319467 3.9424-76.305067-4.266667-13.909333-4.590933-24.6784-12.578133-29.7984-25.9584-7.901867-20.701867 0.887467-47.104 19.831467-60.3136 17.373867-12.117333 37.717333-15.9232 58.453333-15.9232 22.545067-0.017067 45.090133 2.423467 68.232533 3.84L307.2 432.298667c-15.069867-1.723733-29.4912-3.925333-43.997867-4.9152-41.0112-2.798933-80.64 2.6112-117.469866 20.462933-30.020267 14.557867-52.053333 36.010667-58.6752 68.130133-7.850667 38.144 11.537067 69.495467 51.7632 85.845334 19.1488 7.765333 39.287467 12.509867 60.0064 12.5952 24.746667 0.1024 49.493333-1.570133 74.205866-2.952534 3.106133-0.170667 8.311467-2.901333 8.669867-5.034666 1.979733-11.554133 2.730667-23.278933 3.9424-35.464534z" fill="#DD1700" /></svg>',
        },
        link: 'https://blog.csdn.net/qq_43551056?spm=1000.2115.3001.5343'
      },
      // 掘金
      {
        icon: {
          svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="155.62px" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z" fill="#1E80FF" /></svg>',
        },
        link: ''
      },
      // b站
      {
        icon: {
          svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="183.35px" viewBox="0 0 1117 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M222.859636 17.966545c-9.495273 8.936727-18.432 22.341818-20.666181 29.044364-3.909818 12.846545 13.963636 68.142545 22.341818 68.142546s32.395636 25.693091 32.395636 34.629818c0 17.873455-19.549091 28.485818-51.386182 28.485818-37.981091 0-113.943273 30.161455-140.194909 55.854545-10.053818 9.495273-28.485818 36.864-41.332363 61.44L0 339.688727v512.186182l23.458909 44.125091c26.810182 51.944727 39.098182 64.791273 90.484364 92.718545l44.683636 24.576h788.666182l44.683636-21.783272c56.413091-26.810182 79.313455-49.152 104.448-103.330909l19.549091-41.890909v-252.462546l0.558546-252.462545-19.549091-39.656728c-10.053818-22.341818-30.72-51.386182-46.359273-65.349818-34.071273-32.954182-94.394182-59.205818-133.492364-59.205818-59.205818 0-70.935273-24.576-29.044363-63.115636 22.341818-20.107636 25.134545-27.368727 25.134545-49.710546 0-21.783273-3.909818-30.72-18.432-45.800727-10.053818-10.053818-24.576-18.432-32.395636-18.432-12.846545 0-37.422545 10.053818-44.125091 18.432-1.675636 1.675636-39.098182 38.539636-82.664727 80.989091l-79.872 77.637818-91.042909-0.558545c-49.710545 0-96.069818-2.792727-102.213819-5.02691-6.144-2.792727-41.890909-34.071273-79.313454-70.935272C272.570182-7.168 256.372364-16.104727 222.859636 17.966545z m712.145455 286.533819c5.585455 0.558545 21.783273 10.053818 34.629818 22.341818l23.458909 21.783273 1.675637 236.823272c1.117091 215.04 0.558545 237.940364-9.495273 257.489455-15.639273 29.602909-37.981091 44.125091-71.493818 45.800727-15.639273 0.558545-189.346909 0.558545-385.396364 0l-355.793455-1.675636-49.152-49.152V355.886545l22.900364-24.576c17.314909-19.549091 27.927273-25.693091 45.800727-27.368727 17.873455-1.117091 692.596364-0.558545 742.865455 0.558546z" fill="#1296DB" /><path d="M304.407273 496.64c-22.341818 24.017455-22.900364 27.368727-22.900364 72.610909 0 43.566545 1.117091 48.593455 19.549091 69.818182 31.837091 36.305455 60.881455 35.188364 92.16-2.792727 12.288-13.963636 13.963636-24.017455 14.522182-69.818182 0-51.386182-0.558545-53.061818-21.783273-74.286546-29.602909-30.161455-51.944727-28.485818-81.547636 4.468364z m428.962909-3.909818c-20.666182 20.666182-21.783273 22.900364-21.783273 75.403636 0 51.944727 0.558545 54.178909 20.107636 73.169455 26.810182 25.693091 39.098182 29.044364 63.674182 15.080727 31.837091-18.432 43.566545-47.476364 40.215273-98.862545-2.792727-38.539636-5.026909-45.800727-24.017455-65.349819-27.368727-27.927273-49.710545-27.927273-78.196363 0.558546z" fill="#1296DB" /></svg>',
        },
        link: 'https://space.bilibili.com/44905663'
      },
      // QQ
      {
        icon: {
          svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.09761 957.257c-80.159 0-153.737-25.019-201.11-62.386-24.057 6.702-54.831 17.489-74.252 30.864-16.617 11.439-14.546 23.106-11.55 27.816 13.15 20.689 225.583 13.211 286.912 6.767v-3.061z" fill="#FAAD08" /><path d="M496.65061 957.257c80.157 0 153.737-25.019 201.11-62.386 24.057 6.702 54.83 17.489 74.253 30.864 16.616 11.439 14.543 23.106 11.55 27.816-13.15 20.689-225.584 13.211-286.914 6.767v-3.061z" fill="#FAAD08" /><path d="M497.12861 474.524c131.934-0.876 237.669-25.783 273.497-35.34 8.541-2.28 13.11-6.364 13.11-6.364 0.03-1.172 0.542-20.952 0.542-31.155C784.27761 229.833 701.12561 57.173 496.64061 57.162 292.15661 57.173 209.00061 229.832 209.00061 401.665c0 10.203 0.516 29.983 0.547 31.155 0 0 3.717 3.821 10.529 5.67 33.078 8.98 140.803 35.139 276.08 36.034h0.972z" fill="#000000" /><path d="M860.28261 619.782c-8.12-26.086-19.204-56.506-30.427-85.72 0 0-6.456-0.795-9.718 0.148-100.71 29.205-222.773 47.818-315.792 46.695h-0.962C410.88561 582.017 289.65061 563.617 189.27961 534.698 185.44461 533.595 177.87261 534.063 177.87261 534.063 166.64961 563.276 155.56661 593.696 147.44761 619.782 108.72961 744.168 121.27261 795.644 130.82461 796.798c20.496 2.474 79.78-93.637 79.78-93.637 0 97.66 88.324 247.617 290.576 248.996a718.01 718.01 0 0 1 5.367 0C708.80161 950.778 797.12261 800.822 797.12261 703.162c0 0 59.284 96.111 79.783 93.637 9.55-1.154 22.093-52.63-16.623-177.017" fill="#000000" /><path d="M434.38261 316.917c-27.9 1.24-51.745-30.106-53.24-69.956-1.518-39.877 19.858-73.207 47.764-74.454 27.875-1.224 51.703 30.109 53.218 69.974 1.527 39.877-19.853 73.2-47.742 74.436m206.67-69.956c-1.494 39.85-25.34 71.194-53.24 69.956-27.888-1.238-49.269-34.559-47.742-74.435 1.513-39.868 25.341-71.201 53.216-69.974 27.909 1.247 49.285 34.576 47.767 74.453" fill="#FFFFFF" /><path d="M683.94261 368.627c-7.323-17.609-81.062-37.227-172.353-37.227h-0.98c-91.29 0-165.031 19.618-172.352 37.227a6.244 6.244 0 0 0-0.535 2.505c0 1.269 0.393 2.414 1.006 3.386 6.168 9.765 88.054 58.018 171.882 58.018h0.98c83.827 0 165.71-48.25 171.881-58.016a6.352 6.352 0 0 0 1.002-3.395c0-0.897-0.2-1.736-0.531-2.498" fill="#FAAD08" /><path d="M467.63161 256.377c1.26 15.886-7.377 30-19.266 31.542-11.907 1.544-22.569-10.083-23.836-25.978-1.243-15.895 7.381-30.008 19.25-31.538 11.927-1.549 22.607 10.088 23.852 25.974m73.097 7.935c2.533-4.118 19.827-25.77 55.62-17.886 9.401 2.07 13.75 5.116 14.668 6.316 1.355 1.77 1.726 4.29 0.352 7.684-2.722 6.725-8.338 6.542-11.454 5.226-2.01-0.85-26.94-15.889-49.905 6.553-1.579 1.545-4.405 2.074-7.085 0.242-2.678-1.834-3.786-5.553-2.196-8.135" fill="#000000" /><path d="M504.33261 584.495h-0.967c-63.568 0.752-140.646-7.504-215.286-21.92-6.391 36.262-10.25 81.838-6.936 136.196 8.37 137.384 91.62 223.736 220.118 224.996H506.48461c128.498-1.26 211.748-87.612 220.12-224.996 3.314-54.362-0.547-99.938-6.94-136.203-74.654 14.423-151.745 22.684-215.332 21.927" fill="#FFFFFF" /><path d="M323.27461 577.016v137.468s64.957 12.705 130.031 3.91V591.59c-41.225-2.262-85.688-7.304-130.031-14.574" fill="#EB1C26" /><path d="M788.09761 432.536s-121.98 40.387-283.743 41.539h-0.962c-161.497-1.147-283.328-41.401-283.744-41.539l-40.854 106.952c102.186 32.31 228.837 53.135 324.598 51.926l0.96-0.002c95.768 1.216 222.4-19.61 324.6-51.924l-40.855-106.952z" fill="#EB1C26" /></svg>',
        },
        link: ''
      },
      // 微信
      {
        icon: {
          svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.3 369.4c9.8 0 19.6 0 29.4 1.6C671 245.2 536.9 152 383.2 152 211.6 152 71 269.7 71 416.8c0 85 45.8 156.9 124.2 210.9l-31.1 93.2L273.6 667c39.2 8.2 70.3 16.3 109.5 16.3 9.8 0 19.6 0 31.1-1.6-6.5-21.3-9.8-42.5-9.8-65.4 0.1-135.7 116.2-246.9 264.9-246.9z m-168.4-85c24.5 0 39.2 16.3 39.2 39.2 0 22.9-16.3 39.2-39.2 39.2-24.5 0-47.4-16.4-47.4-39.2 0-24.5 24.6-39.2 47.4-39.2z m-216.3 73.1c-24.7 0-47.8-16.2-47.8-38.8 0-24.3 24.7-38.8 47.8-38.8s39.5 16.2 39.5 38.8c0.1 22.7-16.4 38.8-39.5 38.8z" fill="#24DB5A" /><path d="M953.8 613c0-125.9-124.2-227.2-264.8-227.2-148.8 0-266.5 103-266.5 227.2 0 125.9 117.7 227.2 266.5 227.2 31.1 0 62.1-8.2 93.2-16.3l85 47.4-22.9-78.5c62.1-47.4 109.5-109.5 109.5-179.8z m-351.5-39.2c-14.7 0-31.1-14.7-31.1-31.1 0-14.7 16.3-31.1 31.1-31.1 22.9 0 39.2 16.3 39.2 31.1 0 16.4-14.7 31.1-39.2 31.1z m178-7.6c-14.8 0-31.3-14.6-31.3-30.7 0-14.6 16.5-30.7 31.3-30.7 23.1 0 39.5 16.2 39.5 30.7 0 16.2-16.4 30.7-39.5 30.7z" fill="#24DB5A" /></svg>',
        },
        link: ''
      },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消',

            },
            noResultsText: '无法找到相关结果',
            statusText: '查询状态',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchText: '搜索',
            },
          },
          results: {
            placeholder: '搜索',
            empty: '无法找到相关结果',
          }
        }
      }
    },

    footer: {
      copyright: '版权所有 © 2024-2100 狗子吹头'
    },


    /**
     * markdown详情页
     */
    sidebar: {
      '/frontend/1.HTML/': [
        {
          text: 'HTML',
          items: [
            { text: '块级元素', link: '/frontend/1.HTML/1.块级元素' },
            { text: '行内元素', link: '/frontend/1.HTML/2.行内元素' },
          ]
        }
      ],
      '/backend/1.python语法/': [
        {
          text: 'python语法',
          items: [
            { text: '数据类型', link: '/backend/1.python语法/1.数据类型' },
            { text: '输入输出', link: '/backend/1.python语法/2.输入输出' },
            { text: '运算符', link: '/backend/1.python语法/3.运算符' },
            { text: '流程控制', link: '/backend/1.python语法/4.流程控制' },
          ]
        }
      ],
      '/backend/2.python爬虫/': [
        {
          text: 'python爬虫',
          items: [
          ]
        }
      ],
      '/politics/1.基础/': [
        {
          text: '基础',
          items: [
            { text: '基础', link: '/politics/1.基础' },
          ]
        }
      ]
    },
    aside: true,
    outlineTitle: '文章目录',
    outline: [1, 6],
    lastUpdated: {
      text: '最近更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    editLink: {
      pattern: 'https://github.com/Cao007/blog/edit/main/:path',
      text: '在GitHub上编辑此页'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    returnToTopLabel: '返回顶部',
  }
})

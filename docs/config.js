const langs = [{
    title: '简体中文',
    path: '/home',
    matchPath: /^\/(home|changelog)/
  },{
    title: 'English',
    path: '/en',
    matchPath: /^\/en/
  }]
  docute.init({
    title: 'VC.js docs',
    landing: true,
    landing: '_landing.html',
    // repo: '',
    // twitter: 'apertureless',
    tocVisibleDepth: 2,
    // 'edit-link': 'https://github.com/apertureless/vue-chartjs/blob/master/docs',
    nav: {
      default: [{
        title: '首页',
        path: '/home'
      }, {
        title: '版本日志',
        path: '/changelog',
        source: ''
      },
      {
        title: 'Languages', type: 'dropdown', items: langs
      }]
    },
    plugins: [
      // evanyou(),
      // docsearch({
      //   // apiKey: 'b3544f7387612693644777553675d56a',
      //   indexName: 'vcjs',
      //   // algolia docsearch allows you to search with tag filter
      //   tags: ['en', 'zh-cn'],
      //   // this plugin does require a url too
      //   // where docsearch fetches contents
      //   url: 'https://vcjs.org'
      // })
    ],
  })
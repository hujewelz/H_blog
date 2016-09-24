//index page
module.exports = function(app) {
	//home page
	app.get('/', function(req, res) {
		res.render('index', {
			title: '首页',
			articles:[{
				article_id: 4,
				title: 'Node.js v4 LTS 成为 Ghost 推荐版本',
				author: '胡罗卜',
				date: '2016年9月21日',
				content: '运行 Ghost 必须要安装 Node.js。但是 Ubuntu 或 Debian 的软件仓库中的 Node.js 更新较慢，甚至只能等到新版本发布才能有最新的 Node.js 用。下面我们说一下从 NodeSource 提供的仓库中安装最新版本的 Node.js。 支持的操作系统。'
			},
			{
				article_id: 3,
				title: 'Node.js v4 LTS 成为 Ghost 推荐版本',
				author: '胡罗卜',
				date: '2016年9月18日',
				content: '运行 Ghost 必须要安装 Node.js。但是 Ubuntu 或 Debian 的软件仓库中的 Node.js 更新较慢，甚至只能等到新版本发布才能有最新的 Node.js 用。下面我们说一下从 NodeSource 提供的仓库中安装最新版本的 Node.js。 支持的操作系统。'
			},
			{
				article_id: 2,
				title: 'Node.js v4 LTS 成为 Ghost 推荐版本',
				author: '胡罗卜',
				date: '2016年5月23日',
				content: '运行 Ghost 必须要安装 Node.js。但是 Ubuntu 或 Debian 的软件仓库中的 Node.js 更新较慢，甚至只能等到新版本发布才能有最新的 Node.js 用。下面我们说一下从 NodeSource 提供的仓库中安装最新版本的 Node.js。 支持的操作系统。'
			},
			{
				article_id: 1,
				title: 'Node.js v4 LTS 成为 Ghost 推荐版本',
				author: '胡罗卜',
				date: '2016年3月20日',
				content: '运行 Ghost 必须要安装 Node.js。但是 Ubuntu 或 Debian 的软件仓库中的 Node.js 更新较慢，甚至只能等到新版本发布才能有最新的 Node.js 用。下面我们说一下从 NodeSource 提供的仓库中安装最新版本的 Node.js。 支持的操作系统。'
			}]
		});
	});

//detail page
	app.get('/detail/:id', function(req, res) {
		console.log('article id='+req.params.id);
		res.render('detail', {
			title: '详情页',
			article: {
				article_id: 4,
				title: 'Node.js v4 LTS 成为 Ghost 推荐版本',
				author: '胡罗卜',
				date: '2016年9月21日',
				context: '运行 Ghost 必须要安装 Node.js。但是 Ubuntu 或 Debian 的软件仓库中的 Node.js 更新较慢，甚至只能等到新版本发布才能有最新的 Node.js 用。下面我们说一下从 NodeSource 提供的仓库中安装最新版本的 Node.js。 支持的操作系统。将 Ghost(Pro) 上托管的博客全部升级之后，我们发现每个 Ghost 博客所消耗的内存都小于 100mb （注：根据你所使用的主题、内容数量、流量和运行环境的不同会有一些差异）。'+

'Node.js LTS 规划 中明确给出了 Node.js v0.10.x 版本的生命周期截止到 2016 年 10 月 1 号。Ghost 将跟随这一规划，也就是说下一次版本升级或者 10 月 1 号之后将不再支持 Node.js v0.10.x 版本。对于 Node.js 0.12.x 版本的支持也将在 2016 年 12 月 31 日截止。'+

'如果你是在自己的服务器上安装的 Ghost，并且计划未来三个月内升级 Ghost 版本，我们建议 Node.js 和 Ghost 的升级分别独立进行，这样便于查找问题。'+

'如何升级 Node.js将低版本的 Node.js 升级到 v4 版本分以下四个步骤：'+

'备份 Ghost！升级 Node.js 版本'+
'在 Ghost 安装目录内执行 npm install --production 命令，确保二进制依赖包是针对 Node.js v4 LTS 版本编译的'+
'重启 Ghost如果你正在使用 Digital Ocean 的 droplet，你可以参照 excellent Q & A post 这篇文章了解如何一键安装 Ghost 并同时升级 Node.js。'
			}
		});
	});
}
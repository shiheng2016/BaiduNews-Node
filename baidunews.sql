-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2015-09-28 16:33:22
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news_baijia`
--

CREATE TABLE IF NOT EXISTS `news_baijia` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_baijia`
--

INSERT INTO `news_baijia` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(12, '业绩与政策兼修 不能错过的“信息安全”主题周', 'http://h.hiphotos.baidu.com/news/crop%3D0%2C1%2C559%2C335%3Bw%3D638/sign=40e0e4479d504fc2b610ea45d8edcb20/d53f8794a4c27d1ebdd5538b1dd5ad6edcc43889.jpg', '上周末，多家安全企业都曝光了一起名为“XcodeGhost”的安全事件，超过1亿人信息安全遭遇威胁。就在这周，国家主席习近平访美，网络安全或将是重要议题之一。 半年报业绩逆转，政策频频助力，信息安全产业爆发在即。', '百度百家', '2015-09-21 16:15:15'),
(13, '专车新政即将发布 3种打车模式面临洗牌', 'http://g.hiphotos.baidu.com/news/crop%3D0%2C23%2C457%2C274%3Bw%3D638/sign=5e45189352e736d14c5cd648a66063f0/1b4c510fd9f9d72a86124652d22a2834349bbb0f.jpg', '神州专车目前还只是处于行业第三的位置，但专车新政的下发必将强烈冲击到滴滴快的、Uber。虽说与滴滴快的的差距较大，但若能抓住此次机会，击败Uber还是极有可能的。', '百度百家', '2015-09-21 14:56:15'),
(14, '让我们开放资产，数据，还有头脑', 'http://f.hiphotos.baidu.com/news/pic/item/4ec2d5628535e5ddc267cd9070c6a7efce1b6231.jpg', '人人共享必须达到人人受益，而人人受益则意味着地球受益，对于倡导共享经济的人来说，最后我们遇到的不仅仅...', '共享经济', '2015-09-21 14:22:15'),
(15, '小米+:毕胜造梦成本消费时代', 'http://a.hiphotos.baidu.com/news/crop%3D0%2C1%2C603%2C362%3Bw%3D638/sign=8315c87d5cafa40f2889949d96542f7e/91529822720e0cf3272f31b40c46f21fbf09aaa1.jpg', '必要商城做的事情是“互联网+制造”：用互联网模式改变制造行业，模板类似小米科技对手机行业的改造。', '毕胜 必要商城', '2015-09-21 13:09:00'),
(16, '两“马”相竞 微信的支付之路还能走多远', 'http://d.hiphotos.baidu.com/news/crop%3D0%2C2%2C914%2C549%3Bw%3D638/sign=7e3e0cacd339b600598155f7d4601918/d058ccbf6c81800a72288641b73533fa838b47ab.jpg', '微信已经推出5年了，创新速度变慢使受众兴奋点减少，积极性疲劳，参与感减少。微信未来之路，并不像看到的...', '微信', '2015-09-21 12:10:00'),
(17, '手游用户获取成本暴涨，厂商如何做好手游营销？', 'http://g.hiphotos.baidu.com/news/crop%3D40%2C1%2C402%2C241%3Bw%3D638/sign=29771f00982f07084b4a7040d41088b5/d833c895d143ad4b7fb24b8f84025aafa50f06e4.jpg', '曾几何时，移动游戏市场手游发行商花钱购买新用户1美元成本足以，可是现在看来似乎所有的游戏厂商都在为手...', '千军游戏', '2015-09-21 12:10:00'),
(18, '苹果会是TomTom地图的接盘侠吗?', 'http://b.hiphotos.baidu.com/news/crop%3D0%2C29%2C572%2C343%3Bw%3D638/sign=2221d8bbb14543a9e154a08c2327a6b0/4610b912c8fcc3ce52c5cf7c9445d688d43f2073.jpg', '当图商开始因无人驾驶汽车的发展划分阵营时，TomTom也想赶紧找到属于自己的接盘侠，组成另一方可以分...', 'AutoLab', '2015-09-21 11:27:00'),
(19, '你知道吗：iPhone 6s再次变身“小白鼠” 这就是命', 'http://g.hiphotos.baidu.com/news/crop%3D0%2C35%2C664%2C398%3Bw%3D638/sign=58d7088c3c87e9505658a92c2d087f70/7af40ad162d9f2d3b9fb23a0afec8a136227cc93.jpg', '一群特殊的艺术家以破坏iPhone手机为己任，通过对残缺的iPhone进行改造，形成艺术装置。', 'IT发条', '2015-09-21 11:25:00'),
(20, '中国科研机构、企业联手推激光显示', 'http://g.hiphotos.baidu.com/news/crop%3D0%2C77%2C1015%2C609%3Bw%3D638/sign=4a0d6fa08bb1cb132a266653e0647a79/a9d3fd1f4134970a4eeb146093cad1c8a6865de0.jpg', '全国平板显示器件标准化技术委员会激光显示标准工作组成立大会在青岛举行。', '9527', '2015-09-21 11:13:00'),
(21, '阿里越做越重“自营化”，京东却越做越轻“平台化”', 'http://d.hiphotos.baidu.com/news/crop%3D0%2C35%2C705%2C423%3Bw%3D638/sign=a0994daff103918fc39e678a6c0d0aa4/024f78f0f736afc3ba8f252ab519ebc4b64512f9.jpg', '马云说坚定不看好自营B2C模式，术业有专攻，而不是什么都自己大包干。刘强东认为用户只关注商品价格和服...', '李成东', '2015-09-21 11:06:00'),
(22, '你必须知道的SEO细分领域项目汇总', 'http://c.hiphotos.baidu.com/news/crop%3D82%2C1%2C447%2C268%3Bw%3D638/sign=bf64663526a446236a85ff22a51a4022/42a98226cffc1e1758c4907e4c90f603738de902.jpg', '因为自己也在从事网络营销业务，所以会经常分析一些的营销手法，今天卢松松整理了一下在百度体系下SEO的...', '卢松松', '2015-09-21 10:34:00');

-- --------------------------------------------------------

--
-- 表的结构 `news_entertainment`
--

CREATE TABLE IF NOT EXISTS `news_entertainment` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_entertainment`
--

INSERT INTO `news_entertainment` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(8, '娱乐-添加内容就不再重复了', 'http://s0.hao123img.com/res/img/logo/logo201509091.png', '如题，最后的效果和“推荐”、“百家”相同！', '向问天', '2015-09-20 16:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `news_internet`
--

CREATE TABLE IF NOT EXISTS `news_internet` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_internet`
--

INSERT INTO `news_internet` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(2, '互联网-添加内容就不再重复了', 'http://s0.hao123img.com/res/img/logo/logo201509091.png', '如题，最后的效果和“推荐”、“百家”相同！', '向问天', '2015-09-21 08:33:00');

-- --------------------------------------------------------

--
-- 表的结构 `news_local`
--

CREATE TABLE IF NOT EXISTS `news_local` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_local`
--

INSERT INTO `news_local` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(8, '本地-添加内容就不再重复了', 'http://s0.hao123img.com/res/img/logo/logo201509091.png', '添加内容就不再重复了，感谢理解……', '向问天', '2015-09-21 08:30:00');

-- --------------------------------------------------------

--
-- 表的结构 `news_military`
--

CREATE TABLE IF NOT EXISTS `news_military` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_military`
--

INSERT INTO `news_military` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(8, '军事-添加内容就不再重复了', 'http://s0.hao123img.com/res/img/logo/logo201509091.png', '如题，最后的效果和“推荐”、“百家”相同！', '向问天', '2015-09-20 16:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `news_picture`
--

CREATE TABLE IF NOT EXISTS `news_picture` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_picture`
--

INSERT INTO `news_picture` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(8, '图片-添加内容就不再重复了', 'http://s0.hao123img.com/res/img/logo/logo201509091.png', '如题，最后的效果和“推荐”、“百家”相同！', '向问天', '2015-09-20 16:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `news_recommend`
--

CREATE TABLE IF NOT EXISTS `news_recommend` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_recommend`
--

INSERT INTO `news_recommend` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(1, '习近平会见美国工商领袖和前高官代表和向问天', 'http://t10.baidu.com/it/u=801221748,4160447269&amp;fm=76', '习近平指出，中美关系的本质是互利共赢。中美两国在双边、地区、全球层面开展互利合作，不仅为两国和两国人民带来实实在在的利益，也为地区乃至世界和平、发展、繁荣作出重要贡献。放眼未来，中美双方应该合作和能够合作的领域将更加广阔。中美两国拥有许多重要共同利益，也存在一些分歧。只要双方从大处着眼，尊重和照顾彼此核心利益，避免战略误解误判，坚持以建设性方式妥善处理，分歧就可以得到管控，共同利益就可以得到维护。我们致力于同美方共同努力构建中美新型大国关系。能够实现这一目标，将是中美两国人民之幸，也是世界和平与发展之幸。', '网易', '2015-09-21 11:00:00'),
(2, '习近平六次访美：去过哪里，收获了什么？', 'http://y1.ifengimg.com/a/2015/0915/486dffa077da308size62_w548_h240.jpg', '国务委员杨洁篪8日接受了中央电视台英语频道的采访，着重介绍了习近平主席即将对美国进行国事访问和出席联合国成立70周年系列峰会的重要意义、主要目的和预期成果。杨洁篪表示，习近平主席此次访美将进一步加深中美两国人民的友谊，拓展双边各领域务实合作，推动中美关系取得更大发展。习近平主席出席联合国系列峰会，将全面阐述中国对国际秩序和国际关系的政策主张，充分展示中国为促进世界和平和全球发展事业作出的重要贡献。', '凤凰网', '2015-09-21 00:00:00'),
(3, '山东协警涉嫌绑架地产商之子致死 公安局里被抓', 'http://img1.cache.netease.com/catchpic/F/F1/F1A8EDF9E8FDD6490F5B8651C14ED740.jpg', '山东省潍坊市人大代表、诸城市（隶属潍坊的县级市）房地产商郑兆怀的独子郑雄（化名）死了。\n9月16日，多名诸城市公安局内部人士向澎湃新闻透露，涉嫌绑架、勒索并致郑雄死亡的嫌犯牛某和胡某某，系诸城市公安局治安大队三中队协警，已工作至少5年，两人在公安局上班时被抓获。\n据澎湃新闻调查，8月11日，这两名协警涉嫌从郑雄居住的小区将其绑走，后将郑雄扔进一口枯井，并向其父亲勒索100万元的赎金。3天之后，两人被抓。\n诸城市公安局宣传科杨姓负责人表示，案件还在侦查阶段，具体案情不便透露。', '网易', '2015-09-15 00:00:00'),
(4, '金正恩视察洪水灾区 朝鲜罕见公开受灾片段', 'http://img1.cache.netease.com/catchpic/D/D7/D786FDC80FA967E4F8A1142B8E50C137.jpg', '据报道，金正恩在当地进行指导时表示，军民团结一致，修建了几千户住宅，电力和铁路等基本上的复原建设已经结束，这是巨大的成果。', '网易', '2015-09-07 00:00:00'),
(5, '学了33天，8岁失明小鼓手开了场演唱会唱哭全场!', 'http://img1.cache.netease.com/catchpic/9/9D/9D9EFFC57998D52F568776D165F6C8BB.png', '梦想是什么？亲情是什么？爱，又是什么？\n\n他们都是人生中不可或缺的一部分，有了他们，你才有可能去做梦，有勇气去追逐，有机会去尝试那些未知的辛酸苦辣，更才有资格去爱！', '网易', '2015-09-17 00:00:00'),
(6, '董明珠：没制造业马云也完蛋！！！', 'http://img3.cache.netease.com/digi/2015/9/17/20150917173807198ad_550.jpg', '1.格力董事长董明珠日前在接受媒体采访时表示，“没制造业马云才真完蛋了”。董明珠表示：“如果实体经济不行，那一定是因为你自己无能。互联网对我们来说只有提高效率的作用，而不是一种伤害。比如说马云，他在他的轨道上，你在你的轨道上，不可能因为马云，制造业就完蛋了，反过来，没有制造业，马云他才真正完蛋了。” 董明珠还称，格力将会引入军事化管理，要留下的是认同格力文化的人，有梦想的人。', '网易', '2015-09-08 00:00:00'),
(8, '习近平访美详细日程披露', 'http://y1.ifengimg.com/a/2015/0915/486dffa077da308size62_w548_h240.jpg', '习近平1985年访问艾奥瓦州时，曾受到一户人家的招待。2012年故地重游时，时任中国国家副主席...', '热点', '2015-09-20 16:00:00'),
(15, '河南警察派出所门口枪指女子称&quot;打死你也是白打&quot;', 'http://img1.cache.netease.com/cnews/2015/9/21/201509211141401b1cb_550.png', '“河南灵宝市一民警在派出所门前用枪指向一名女子，并称‘打死你也白打’。”9月20日，一段民警在派出所外持枪指向一名女子的视频在网上传开。\n\n9月21日，灵宝警方回应澎湃新闻，警方已对上述视频进行调查核实，将针对视频内容发布声明，目前具体情况不便透露。', '网易头条', '2015-09-21 11:37:40'),
(16, '传北京国土局原局长出境被拒 携4000万现金自首', 'http://img6.cache.netease.com/cnews/2015/9/21/201509211526420d629_550.jpg', '今年初网上出现一则传言，说北京市国土资源局前局长安家盛及其夫人涉嫌严重违纪，正在接受组织调查。又有爆料者称安家盛是开车装着4000万现金，到纪委投案自首的。由于安家盛已于2008年卸任国土局长一职，并非现任厅局级官员，所以有关部门并未在第一时间通报相关情况。长安街知事获悉，虽然具体细节有点儿出入，但安家盛确实已经“进去”了。北京市政协日前免去了他的特邀委员资格。', '澎湃新闻网(上海)', '2015-09-21 15:28:06'),
(17, '人民日报:遇到困难李嘉诚不能共度难关 不必挽留', 'http://img5.cache.netease.com/cnews/2015/9/21/20150921000410afca3_550.jpg', '这几天，亚洲首富李嘉诚深陷舆论漩涡，关于他从大陆撤资的争论，仍然在唇枪舌剑地进行着。是正常的运作，还是道义的失守？是合法的进退，还是无奈的撤离？义愤填膺的道德审视、唱衰中国的负面猜测、恐慌情绪的传染效应……所有这些元素，使得李嘉诚的撤离变得十分敏感。\n\n那么，如何看待李嘉诚“投资路线图”的转向？一些人选择从感性的角度来审视。改革开放以来，大陆的优惠政策、开放环境、巨大市场，是他走到今天的重要基石；而这几年来，由于转方式、调结构，大陆经济增速主动回调，李嘉诚的选择就显得尤为扎眼。从普通人的朴素情感出发，好的时候同享福，遇到困难却不能共度难关，这在观感上确实让一些人觉得有点说不过去。', '人民日报(北京)', '2015-09-21 00:04:37'),
(18, '美媒:&quot;中国版&quot;奥巴马特型演员走红 模仿惟妙惟肖', 'http://img1.cache.netease.com/catchpic/5/51/51C0FA3E5B33BC66D6AC8543846E3FB5.jpg', '今年29岁的肖基国在走红演艺术圈之前，打过工，做过保安。他在2012年参加了一个当时很火的电视选秀大赛，从此开始在网络短剧和小电影中出头露面。他还曾为整型医院做过广告，不过他坚称自己的长相是天生的。', '参考消息网(北京)', '2015-09-21 07:51:19'),
(19, '兰州工地挖出巨大化石：头骨眼窝可放下成人拳头', 'http://img2.cache.netease.com/cnews/2015/9/21/20150921101608f1930.jpg', '每日甘肃网-西部商报讯 “嘣”的一声，余师傅手中的铁铲被弹了回来，底下有东西，还是个硬家伙！旁边的白师傅急忙走了过去，用手拨拉，这一拨可了不得了，足足让随后赶到的各方专家及民警忙活了5个多小时。\n\n昨日下午，兰州九州工地上发现“古生物化石”的消息传出后，九州派出所民警及城关区文化馆的工作人员迅速赶到。在事发现场发现了大量疑似“古生物化石”，不过，到底是何种生物遗迹，尚不能准确鉴定。今日，兰州市文物局专家将赶赴现场为其辨明真身。', '每日甘肃网(兰州)', '2015-09-21 09:13:51'),
(20, '曝外籍乘客上海地铁内喝酒打闹扯内裤荡秋千(图)', 'http://img1.cache.netease.com/catchpic/7/74/743FCDFAC22BF0429780E6A7B128CFF4.jpg', '网友爆料称，9月20日晚，一群外籍乘客在上海地铁6号线上嬉戏打闹。对此，上海地铁回应澎湃新闻记者说，尽管目前还没有来得及确定网友反映的情况究竟发生在具体哪列车上，但任何人在乘坐上海地铁时，都应该遵守公序良俗，不影响运营安全及其他乘客乘坐。\n\n网友拍摄的小视频显示，车厢内有人在喝啤酒，啤酒沫也直接洒在地铁车厢地面上；一名女子在拉扯男子的内裤，而2名男子则荡在拉杆扶手上；2名女子像“猴子”一样荡在拉杆扶手上，同时作出互相踹斗的动作。', '澎湃新闻网(上海)', '2015-09-21 12:26:38'),
(21, '郑州女生泳池内比赛抱鱼 坚持60秒可带走鱼(图)', 'http://img1.cache.netease.com/catchpic/2/2E/2EFD01CC1E9B1B38BFBF51DBD2B35E66.jpg', '2015年09月20日，河南省郑州市，一家户外温泉泳池内，几名美女着比基尼上演摸鱼大赛，摸到鱼并将其抱起60秒即可将鱼带走。活动现场，比基尼美女湿身引民众围观拍照，笑料百出。据悉，本次大赛所用鱼从信阳南湾湖运到郑州，当日2015南湾湖第三届捕鱼节开幕。', '中国新闻网(北京)', '2015-09-21 11:04:00'),
(22, '添加内容就不再重复了', 'http://s0.hao123img.com/res/img/logo/logo201509091.png', '如题，最后的效果和“推荐”、“百家”相同！', '向问天', '2015-05-19 16:00:00'),
(39, '习奥今年首次会面细节:秋夜散步 未打领带(图)', 'http://img2.cache.netease.com/cnews/2015/9/25/20150925093358b344a.png', '央广网华盛顿9月25日消息 据中国之声《新闻纵横》报道，关注习近平主席的访美之旅。北京时间今早五点半，习主席抵达了访美第二站——美国首都华盛顿，将在这里出席奥巴马总统为其举行的一系列国事活动。按计划，习主席此刻正与奥巴马共进晚宴，这是两人今年的首次会面，\n\n大约两个半小时前习主席抵达华盛顿。在酒店稍事休息后，他前往白宫，与奥巴马会面，这也是两国元首今年的首次见面。不过，这并不是一场打领带的正式会晤，习主席来到白宫，是要同奥巴马一起去布莱尔国宾馆，在那里，奥巴马为习主席准备了一场小范围的晚宴。', ' 中国广播网(北京)', '2015-09-25 02:35:53');

-- --------------------------------------------------------

--
-- 表的结构 `news_science`
--

CREATE TABLE IF NOT EXISTS `news_science` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_science`
--

INSERT INTO `news_science` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(8, '科学-添加内容就不再重复了', 'http://s0.hao123img.com/res/img/logo/logo201509091.png', '如题，最后的效果和“推荐”、“百家”相同！', '向问天', '2015-09-20 16:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `news_society`
--

CREATE TABLE IF NOT EXISTS `news_society` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_society`
--

INSERT INTO `news_society` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(8, '社会-添加内容就不再重复了', 'http://s0.hao123img.com/res/img/logo/logo201509091.png', '如题，最后的效果和“推荐”、“百家”相同！', '向问天', '2015-09-20 16:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `news_woman`
--

CREATE TABLE IF NOT EXISTS `news_woman` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `from` varchar(50) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_woman`
--

INSERT INTO `news_woman` (`id`, `title`, `img_url`, `content`, `from`, `time`) VALUES
(8, '女人-添加内容就不再重复了', 'http://s0.hao123img.com/res/img/logo/logo201509091.png', '如题，最后的效果和“推荐”、“百家”相同！', '向问天', '2015-09-20 16:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(20) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_password` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_password`) VALUES
(1, 'admin', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news_baijia`
--
ALTER TABLE `news_baijia`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_entertainment`
--
ALTER TABLE `news_entertainment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_internet`
--
ALTER TABLE `news_internet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_local`
--
ALTER TABLE `news_local`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_military`
--
ALTER TABLE `news_military`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_picture`
--
ALTER TABLE `news_picture`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_recommend`
--
ALTER TABLE `news_recommend`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_science`
--
ALTER TABLE `news_science`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_society`
--
ALTER TABLE `news_society`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_woman`
--
ALTER TABLE `news_woman`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`), ADD UNIQUE KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news_baijia`
--
ALTER TABLE `news_baijia`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `news_entertainment`
--
ALTER TABLE `news_entertainment`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `news_internet`
--
ALTER TABLE `news_internet`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `news_local`
--
ALTER TABLE `news_local`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `news_military`
--
ALTER TABLE `news_military`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `news_picture`
--
ALTER TABLE `news_picture`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `news_recommend`
--
ALTER TABLE `news_recommend`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT for table `news_science`
--
ALTER TABLE `news_science`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `news_society`
--
ALTER TABLE `news_society`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `news_woman`
--
ALTER TABLE `news_woman`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

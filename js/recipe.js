const recipeData = [
  {
    id: 1,
    name: '山药小米粥',
    image: 'images/null.png',
    description: '健脾养胃，适合日常调理',
    category: '养生粥品',
    constitutions: ['平和', '气虚', '阳虚'],
    seasons: ['春', '夏', '秋', '冬'],
    ingredients: ['山药', '小米', '大米', '红枣', '冰糖'],
    method: ['小米淘洗干净，提前浸泡30分钟', '山药去皮切块', '锅中加水烧开，放入小米煮15分钟', '加入山药和红枣，继续煮20分钟', '最后加冰糖调味即可'],
    nature: '甘、平',
    efficacy: '健脾养胃，益气养阴',
    taboos: ['山药有收涩作用，大便干结者不宜过量食用'],
    tips: ['山药容易氧化变黑，去皮后可放入清水中浸泡']
  },
  {
    id: 2,
    name: '当归生姜羊肉汤',
    image: 'images/null (17).png',
    description: '温中散寒，适合阳虚体质冬季食用',
    category: '滋补汤羹',
    constitutions: ['阳虚', '气虚'],
    seasons: ['冬'],
    ingredients: ['羊肉', '当归', '生姜', '红枣', '料酒', '盐'],
    method: ['羊肉切块，焯水去血沫', '当归洗净切片，生姜切片', '将羊肉、当归、生姜、红枣放入锅中', '加入适量清水和料酒', '大火烧开后转小火慢炖1小时', '加盐调味即可'],
    nature: '甘、温',
    efficacy: '温中散寒，补气养血',
    taboos: ['阴虚火旺者不宜食用', '感冒发热者不宜食用'],
    tips: ['羊肉焯水时加入姜片和料酒可去腥味']
  },
  {
    id: 3,
    name: '百合银耳羹',
    image: 'images/null (18).png',
    description: '滋阴润肺，适合阴虚体质',
    category: '糖水茶饮',
    constitutions: ['阴虚'],
    seasons: ['秋', '冬'],
    ingredients: ['百合', '银耳', '莲子', '冰糖', '枸杞'],
    method: ['银耳泡发后撕成小朵', '百合和莲子洗净', '将银耳、百合、莲子放入锅中，加水烧开', '转小火慢炖30分钟', '加入冰糖和枸杞，再煮10分钟即可'],
    nature: '甘、微寒',
    efficacy: '滋阴润肺，清心安神',
    taboos: ['脾胃虚寒者不宜过量食用'],
    tips: ['银耳泡发时间要足够，至少2小时以上']
  },
  {
    id: 4,
    name: '薏米红豆水',
    image: 'images/null (1).png',
    description: '利水祛湿，适合痰湿体质',
    category: '糖水茶饮',
    constitutions: ['痰湿', '湿热'],
    seasons: ['春', '夏'],
    ingredients: ['薏米', '红豆', '冰糖'],
    method: ['薏米和红豆淘洗干净', '提前浸泡4小时以上', '放入锅中，加水烧开', '转小火煮30分钟', '加冰糖调味即可'],
    nature: '甘、淡、凉',
    efficacy: '利水渗湿，健脾止泻',
    taboos: ['孕妇不宜食用薏米'],
    tips: ['可以根据喜好加入冬瓜或山药一起煮']
  },
  {
    id: 5,
    name: '红枣桂圆茶',
    image: 'images/null (12).png',
    description: '补气养血，适合气血不足',
    category: '糖水茶饮',
    constitutions: ['气虚', '阳虚', '平和'],
    seasons: ['秋', '冬'],
    ingredients: ['红枣', '桂圆', '枸杞', '红糖'],
    method: ['红枣去核，桂圆去壳', '将红枣、桂圆、枸杞放入杯中', '用沸水冲泡', '盖上盖子焖泡15分钟', '加红糖调味即可'],
    nature: '甘、温',
    efficacy: '补中益气，养血安神',
    taboos: ['体内有湿热者不宜过量饮用'],
    tips: ['可以反复冲泡，味道变淡后再换新药材']
  },
  {
    id: 6,
    name: '冬瓜海带排骨汤',
    image: 'images/null (6).png',
    description: '清热利湿，适合湿热体质夏季食用',
    category: '滋补汤羹',
    constitutions: ['湿热', '痰湿'],
    seasons: ['夏'],
    ingredients: ['排骨', '冬瓜', '海带', '姜片', '盐'],
    method: ['排骨焯水去血沫', '海带泡发后切块', '排骨和姜片放入锅中，加水烧开', '转小火煮30分钟', '加入冬瓜和海带，再煮20分钟', '加盐调味即可'],
    nature: '甘、凉',
    efficacy: '清热利湿，消肿解毒',
    taboos: ['脾胃虚寒者不宜过量食用'],
    tips: ['海带泡发时间不宜过长，以免营养流失']
  },
  {
    id: 7,
    name: '枸杞菊花茶',
    image: 'images/null (7).png',
    description: '清肝明目，适合日常保健',
    category: '糖水茶饮',
    constitutions: ['平和', '阴虚'],
    seasons: ['春', '夏', '秋'],
    ingredients: ['枸杞', '菊花', '冰糖'],
    method: ['将枸杞和菊花放入杯中', '用沸水冲泡', '盖上盖子焖泡10分钟', '加冰糖调味即可'],
    nature: '甘、苦、微寒',
    efficacy: '疏散风热，平肝明目',
    taboos: ['脾胃虚寒者不宜过量饮用'],
    tips: ['可以加入决明子一起冲泡，效果更好']
  },
  {
    id: 8,
    name: '南瓜小米粥',
    image: 'images/null (15).png',
    description: '补中益气，适合脾胃虚弱',
    category: '养生粥品',
    constitutions: ['气虚', '阳虚', '平和'],
    seasons: ['秋', '冬'],
    ingredients: ['南瓜', '小米', '大米'],
    method: ['小米淘洗干净，提前浸泡30分钟', '南瓜去皮切块', '锅中加水烧开，放入小米煮15分钟', '加入南瓜，继续煮15分钟', '搅拌均匀即可'],
    nature: '甘、温',
    efficacy: '补中益气，清热解毒',
    taboos: ['南瓜含糖量较高，糖尿病患者适量食用'],
    tips: ['南瓜煮软后可以用勺子压碎，口感更好']
  },
  {
    id: 9,
    name: '春笋木耳汤',
    image: 'images/null (3).png',
    description: '清热利湿，适合春季食用',
    category: '滋补汤羹',
    constitutions: ['平和', '湿热'],
    seasons: ['春'],
    ingredients: ['春笋', '木耳', '瘦肉', '姜片', '盐'],
    method: ['春笋去皮切块，焯水备用', '木耳泡发洗净', '瘦肉切片', '锅中加水烧开，放入姜片和肉片', '煮10分钟后加入春笋和木耳', '继续煮15分钟，加盐调味'],
    nature: '甘、微寒',
    efficacy: '清热化痰，利膈爽胃',
    taboos: ['脾胃虚寒者不宜过量食用'],
    tips: ['春笋焯水可以去除涩味']
  },
  {
    id: 10,
    name: '绿豆汤',
    image: 'images/null (8).png',
    description: '清热解毒，适合夏季消暑',
    category: '糖水茶饮',
    constitutions: ['湿热', '平和'],
    seasons: ['夏'],
    ingredients: ['绿豆', '冰糖'],
    method: ['绿豆淘洗干净，提前浸泡2小时', '放入锅中，加水烧开', '转小火煮20分钟', '加冰糖调味，放凉后饮用'],
    nature: '甘、凉',
    efficacy: '清热解毒，消暑利水',
    taboos: ['脾胃虚寒者不宜过量饮用'],
    tips: ['煮绿豆时加入几片薄荷，味道更清凉']
  },
  {
    id: 11,
    name: '银耳雪梨汤',
    image: 'images/null (13).png',
    description: '润肺止咳，适合秋季食用',
    category: '糖水茶饮',
    constitutions: ['阴虚', '平和'],
    seasons: ['秋'],
    ingredients: ['银耳', '雪梨', '冰糖', '枸杞'],
    method: ['银耳泡发后撕成小朵', '雪梨去皮去核，切块', '将银耳和雪梨放入锅中，加水烧开', '转小火煮20分钟', '加入冰糖和枸杞，再煮10分钟'],
    nature: '甘、微寒',
    efficacy: '生津润燥，清热化痰',
    taboos: ['脾胃虚寒者不宜过量食用'],
    tips: ['雪梨可以不去皮，营养更丰富']
  },
  {
    id: 12,
    name: '黄芪红枣茶',
    image: 'images/null (4).png',
    description: '补气升阳，适合气虚体质',
    category: '糖水茶饮',
    constitutions: ['气虚', '阳虚'],
    seasons: ['春', '冬'],
    ingredients: ['黄芪', '红枣', '枸杞'],
    method: ['黄芪洗净切片，红枣去核', '将黄芪、红枣、枸杞放入杯中', '用沸水冲泡', '盖上盖子焖泡20分钟即可'],
    nature: '甘、温',
    efficacy: '补气升阳，固表止汗',
    taboos: ['阴虚阳亢者不宜食用'],
    tips: ['黄芪用量不宜过多，5-10克即可']
  },
  {
    id: 13,
    name: '山楂荷叶茶',
    image: 'images/null (5).png',
    description: '活血化瘀，降脂减肥',
    category: '糖水茶饮',
    constitutions: ['血瘀', '痰湿'],
    seasons: ['春', '夏', '秋'],
    ingredients: ['山楂', '荷叶', '决明子'],
    method: ['山楂去核，荷叶洗净', '将山楂、荷叶、决明子放入杯中', '用沸水冲泡', '盖上盖子焖泡15分钟即可'],
    nature: '酸、甘、微温',
    efficacy: '活血化瘀，消食化积',
    taboos: ['孕妇不宜食用', '胃酸过多者不宜过量饮用'],
    tips: ['可以加入蜂蜜调味']
  },
  {
    id: 14,
    name: '陈皮茶',
    image: 'images/null (14).png',
    description: '理气健脾，适合气郁体质',
    category: '糖水茶饮',
    constitutions: ['气郁', '痰湿'],
    seasons: ['秋', '冬'],
    ingredients: ['陈皮', '冰糖'],
    method: ['陈皮洗净', '放入杯中，用沸水冲泡', '盖上盖子焖泡10分钟', '加冰糖调味即可'],
    nature: '辛、苦、温',
    efficacy: '理气健脾，燥湿化痰',
    taboos: ['气虚及阴虚燥咳者不宜食用'],
    tips: ['陈皮越陈越好，效果更佳']
  },
  {
    id: 16,
    name: '薄荷茶',
    image: 'images/null (10).png',
    description: '疏散风热，适合夏季',
    category: '糖水茶饮',
    constitutions: ['平和', '湿热'],
    seasons: ['夏'],
    ingredients: ['薄荷叶', '冰糖'],
    method: ['薄荷叶洗净', '放入杯中，用沸水冲泡', '盖上盖子焖泡5分钟', '加冰糖调味即可'],
    nature: '辛、凉',
    efficacy: '疏散风热，清利头目',
    taboos: ['脾胃虚寒者不宜过量饮用'],
    tips: ['新鲜薄荷叶比干薄荷效果更好']
  },
  {
    id: 17,
    name: '茯苓玫瑰糕',
    image: 'images/1781366303778.png',
    description: '健脾祛湿、疏肝理气、养心安神、润肤养颜',
    category: '时令小点',
    constitutions: ['气郁', '痰湿', '阴虚'],
    seasons: ['春', '夏'],
    ingredients: ['茯苓粉30g', '糯米粉120g', '粘米粉60g', '干玫瑰10g', '白糖适量', '温水'],
    method: ['干玫瑰取花瓣碾碎，和茯苓粉、糯米粉、粘米粉、白糖混合均匀', '分次加入温水，揉成细腻不粘手的面团，静置10分钟', '面团分成小份，按压成糕状，表面点缀玫瑰花瓣', '水开后上锅，大火蒸20分钟，放凉即可食用'],
    nature: '甘、淡、平',
    efficacy: '健脾祛湿、疏肝理气、养心安神、润肤养颜',
    taboos: ['月经量过多者经期少食', '血糖偏高者适量食用'],
    tips: ['米粉比例把控好，成品口感松软不发硬', '玫瑰不宜高温久蒸，最后点缀保留香气与营养', '可作为下午茶、餐后甜点，日常长期食补']
  },
  {
    id: 18,
    name: '山药桂花糕',
    image: 'images/1781366088207.png',
    description: '健脾益肾、宁心安神、温润养胃',
    category: '时令小点',
    constitutions: ['气虚', '阳虚', '平和'],
    seasons: ['秋', '冬'],
    ingredients: ['铁棍山药300g', '糯米粉80g', '糖桂花2勺', '白砂糖少许'],
    method: ['山药去皮切段，上锅蒸熟，取出压成细腻山药泥', '山药泥中加入糯米粉、白砂糖，揉匀成团', '面团塑形切块，摆入盘中，水开上锅蒸15分钟', '出锅后淋上糖桂花即可'],
    nature: '甘、平',
    efficacy: '健脾益肾、宁心安神、温润养胃',
    taboos: ['痰湿偏重、腹部胀满者不宜过量食用'],
    tips: ['处理山药佩戴手套，避免黏液刺激皮肤', '优先选用铁棍山药，食疗价值更高', '冷热皆可吃，冷藏后口感清甜爽口']
  },
  {
    id: 19,
    name: '雪梨桂花冻',
    image: 'images/1781366365822.png',
    description: '清心除烦、润燥安神、生津润肺',
    category: '时令小点',
    constitutions: ['阴虚', '平和'],
    seasons: ['夏', '秋'],
    ingredients: ['雪梨2个', '干桂花少许', '冰糖适量', '白凉粉20g', '清水800ml'],
    method: ['雪梨去皮去核，切小丁备用', '锅中加清水、冰糖煮至融化，放入雪梨丁煮5分钟', '倒入白凉粉搅拌至完全溶解，关火撒入干桂花', '倒入容器中，放凉后移入冰箱冷藏2小时，凝固脱模即可'],
    nature: '甘、微酸、凉',
    efficacy: '清心除烦、润燥安神、生津润肺',
    taboos: ['脾胃虚寒、畏寒、易腹泻者少食', '经期少量食用'],
    tips: ['白凉粉搅拌均匀，避免结块影响成型', '冷藏后口感冰爽Q弹，清热安神效果更佳', '不喜过甜可减少冰糖用量，突出果香与桂花香']
  },
  {
    id: 20,
    name: '五指毛桃鸡汤',
    image: 'images/1781366172219.png',
    description: '健脾化湿、行气安神、舒缓疲劳',
    category: '滋补汤羹',
    constitutions: ['气虚', '痰湿', '平和'],
    seasons: ['春', '夏'],
    ingredients: ['鸡肉半只', '五指毛桃30g', '生姜3片', '红枣3颗', '食盐少许'],
    method: ['鸡肉冷水下锅焯水，撇去浮沫，捞出洗净', '所有食材放入砂锅，加入足量清水，大火烧开', '转小火慢炖1.5小时，出锅前加盐调味'],
    nature: '甘、平',
    efficacy: '健脾化湿、行气安神、舒缓疲劳',
    taboos: ['阴虚火旺、经常上火者不宜长期饮用'],
    tips: ['五指毛桃自带清香，无需额外添加过多香料', '小火慢炖才能充分析出营养，汤味更醇厚']
  },
  {
    id: 21,
    name: '西洋参莲子乌鸡汤',
    image: 'images/1781366558727.png',
    description: '补气养阴、清心安神、缓解焦虑',
    category: '滋补汤羹',
    constitutions: ['气虚', '阴虚', '气郁'],
    seasons: ['夏'],
    ingredients: ['乌鸡半只', '西洋参6g', '干莲子60g', '姜片', '食盐'],
    method: ['乌鸡切块焯水洗净，莲子提前泡发', '食材一同入砂锅，加清水大火煮沸，转小火炖1小时20分钟', '关火前加盐调味即可'],
    nature: '甘、微苦、凉',
    efficacy: '补气养阴、清心安神、缓解焦虑',
    taboos: ['体质虚寒、畏寒腹泻者少食'],
    tips: ['西洋参清补温和，区别于人参，不易燥热', '莲子可保留莲芯，增强清心降火的效果']
  },
  {
    id: 22,
    name: '乾隆四神汤',
    image: 'images/1781366402207.png',
    description: '健脾养胃、祛湿宁心、调和气血',
    category: '滋补汤羹',
    constitutions: ['气虚', '痰湿', '平和'],
    seasons: ['春', '夏'],
    ingredients: ['茯苓', '山药', '莲子', '芡实', '瘦肉250g', '姜片', '食盐'],
    method: ['四味药材提前浸泡30分钟，瘦肉切块焯水', '全部食材放入锅中，加足量清水，大火烧开转小火炖煮1小时', '加盐调味即可出锅'],
    nature: '甘、淡、平',
    efficacy: '健脾养胃、祛湿宁心、调和气血',
    taboos: ['大便干结、便秘人群少量饮用'],
    tips: ['此方药性平和，老少皆宜，可作为家常养生汤长期饮用', '食材比例均衡，无需额外添加滋补药材']
  },
  {
    id: 23,
    name: '莲子蒸肉',
    image: 'images/1781366400221.png',
    description: '健脾养胃、养心安神、清心降火',
    category: '佐餐佳肴',
    constitutions: ['平和', '气虚', '阴虚'],
    seasons: ['夏'],
    ingredients: ['五花肉300g', '干莲子80g', '生姜', '葱段', '生抽', '料酒', '盐', '冰糖'],
    method: ['莲子温水浸泡1小时，按需去芯；五花肉切厚片', '肉片加姜片、料酒、生抽、盐抓匀，腌制20分钟', '碗底铺莲子，码上肉片，放冰糖、葱段，淋少许清水', '水开入锅，大火蒸40分钟，关火焖5分钟'],
    nature: '甘、涩、平',
    efficacy: '健脾养胃、养心安神、清心降火',
    taboos: ['便秘、腹胀、大便干结者少食'],
    tips: ['选肥瘦相间五花肉，油脂融入莲子，口感更香', '怕苦可去除莲芯，想清心火则保留']
  },
  {
    id: 24,
    name: '紫苏煎鸡蛋',
    image: 'images/1781366174266.png',
    description: '行气和胃、舒缓情绪、安神解郁',
    category: '佐餐佳肴',
    constitutions: ['气郁', '痰湿', '平和'],
    seasons: ['夏'],
    ingredients: ['新鲜紫苏叶1大把', '鸡蛋4个', '盐', '食用油'],
    method: ['紫苏叶洗净切碎，鸡蛋打入碗中，加少许盐搅匀', '放入紫苏碎，再次混合均匀', '热锅倒油，倒入蛋液，中小火煎至两面金黄即可'],
    nature: '辛、温',
    efficacy: '行气和胃、舒缓情绪、安神解郁',
    taboos: ['阴虚火旺、燥热体质不宜多食'],
    tips: ['紫苏香气浓郁，无需额外加其他调料', '全程中小火，避免煎糊影响口感与营养']
  },
  {
    id: 25,
    name: '芦笋炒百合',
    image: 'images/1781366168628.png',
    description: '清心润燥、安神助眠、清热降火',
    category: '佐餐佳肴',
    constitutions: ['阴虚', '平和'],
    seasons: ['夏', '秋'],
    ingredients: ['芦笋250g', '鲜百合150g', '蒜片', '盐', '少许食用油'],
    method: ['芦笋去老根切段，沸水焯30秒捞出；百合掰片洗净', '热锅倒油，爆香蒜片，先放入芦笋翻炒片刻', '加入百合快速翻炒，加盐调味，断生即可出锅'],
    nature: '甘、微苦、凉',
    efficacy: '清心润燥、安神助眠、清热降火',
    taboos: ['脾胃虚寒、经常腹泻者少量食用'],
    tips: ['百合易熟，大火快炒，避免炒制过烂流失营养', '焯水可去除芦笋涩味，口感更脆嫩']
  }
];

// 四季时令古方数据
const ancientPrescriptions = {
  spring: {
    title: '春季专属时令古方',
    prescriptions: [
      {
        name: '四君子汤',
        origin: '宋代经典健脾养肝名方',
        composition: '人参、白术、茯苓、甘草',
        efficacy: '益气健脾、疏肝和胃，改善春季肝郁脾虚、乏力、食欲不振',
        usage: '药材加水煎煮，分早晚温服，适合春日长期轻调养'
      },
      {
        name: '梳头发不落方',
        origin: '明代民间养发古方',
        composition: '侧柏叶、榧子肉、胡桃肉',
        efficacy: '滋养头皮、固发防脱，缓解春季肝气旺盛引发的掉发、头皮干涩',
        usage: '药材研细涂擦头皮，或是温水浸泡出药汁，用药水梳理头发'
      }
    ]
  },
  summer: {
    title: '夏季专属时令古方',
    prescriptions: [
      {
        name: '莲子清心饮',
        origin: '传统夏日养心食疗古方',
        composition: '莲子、百合、绿豆、冰糖',
        efficacy: '清心降火、安神除烦，改善夏季闷热心烦、入睡困难',
        usage: '食材一同慢炖成甜汤，日常可作加餐食用'
      },
      {
        name: '清暑醒神香方',
        origin: '清代避暑香佩古方',
        composition: '薄荷、白檀香、杭白菊、艾草',
        efficacy: '清心解暑、舒缓暑气带来的头昏犯困、心绪烦躁',
        usage: '药材混匀研细，装入香囊随身佩戴或放置室内熏香'
      }
    ]
  },
  autumn: {
    title: '秋季专属时令古方',
    prescriptions: [
      {
        name: '秋梨润肺膏方',
        origin: '传统秋燥食疗名方',
        composition: '雪梨、百合、杏仁、冰糖',
        efficacy: '滋阴润肺、生津利咽，改善秋燥干咳、咽喉干痒',
        usage: '食材慢熬收膏，日常取适量温水冲服'
      },
      {
        name: '桂花润肌香方',
        origin: '古代秋令润肤古方',
        composition: '干桂花、甜杏仁、玉竹',
        efficacy: '润燥养肤，缓解秋季皮肤干燥起皮，贴合肺燥养护需求',
        usage: '药材煮取药汁，放温后擦拭肌肤，也可做成小香包熏蒸护肤'
      }
    ]
  },
  winter: {
    title: '冬季专属时令古方',
    prescriptions: [
      {
        name: '当归生姜羊肉汤',
        origin: '《金匮要略》温阳经典方',
        composition: '羊肉、当归、生姜、红枣',
        efficacy: '温补肾阳、温中散寒，改善冬季畏寒怕冷、手脚冰凉',
        usage: '食材共同煲汤，冬季每周食用1-2次即可'
      },
      {
        name: '温肾泡脚古方',
        origin: '民间冬日温养古方',
        composition: '艾叶、生姜、肉桂、丁香',
        efficacy: '温经散寒、固本养肾，驱散下肢寒气，提升冬日睡眠质量',
        usage: '药材加水煮出浓药汤，放至适宜温度后每晚泡脚20分钟'
      }
    ]
  }
};

// 季节顺序数组
const seasonOrder = ['spring', 'summer', 'autumn', 'winter'];
const seasonNames = {
  'spring': '春季',
  'summer': '夏季',
  'autumn': '秋季',
  'winter': '冬季'
};

let currentSeasonIndex = 0;

function getSeasonKey(seasonText) {
  if (seasonText.includes('春')) return 'spring';
  if (seasonText.includes('夏')) return 'summer';
  if (seasonText.includes('秋')) return 'autumn';
  if (seasonText.includes('冬')) return 'winter';
  return 'spring';
}

// 上一季
function prevSeason() {
  currentSeasonIndex = (currentSeasonIndex - 1 + seasonOrder.length) % seasonOrder.length;
  const seasonKey = seasonOrder[currentSeasonIndex];
  const seasonText = seasonNames[seasonKey];
  renderAncientPrescriptions(seasonText);
}

// 下一季
function nextSeason() {
  currentSeasonIndex = (currentSeasonIndex + 1) % seasonOrder.length;
  const seasonKey = seasonOrder[currentSeasonIndex];
  const seasonText = seasonNames[seasonKey];
  renderAncientPrescriptions(seasonText);
}

function renderAncientPrescriptions(season) {
  const seasonKey = getSeasonKey(season);
  const data = ancientPrescriptions[seasonKey];
  
  const titleElement = document.getElementById('ancient-title');
  const container = document.getElementById('ancient-container');
  
  if (!titleElement || !container) return;
  
  titleElement.textContent = data.title;
  
  container.innerHTML = '';
  
  data.prescriptions.forEach(prescription => {
    const card = document.createElement('div');
    card.className = 'ancient-card';
    card.innerHTML = `
      <span class="ancient-tag">时令古方</span>
      <div class="ancient-name">${prescription.name}</div>
      <div class="ancient-origin">${prescription.origin}</div>
      <div class="ancient-section">
        <div class="ancient-section-title">组成</div>
        <div class="ancient-section-content">${prescription.composition}</div>
      </div>
      <div class="ancient-section">
        <div class="ancient-section-title">功效</div>
        <div class="ancient-section-content">${prescription.efficacy}</div>
      </div>
      <div class="ancient-section">
        <div class="ancient-section-title">用法</div>
        <div class="ancient-section-content">${prescription.usage}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

function getCurrentSeason() {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return { name: '春季', index: 0, short: '春' };
  if (month >= 6 && month <= 8) return { name: '夏季', index: 1, short: '夏' };
  if (month >= 9 && month <= 11) return { name: '秋季', index: 2, short: '秋' };
  return { name: '冬季', index: 3, short: '冬' };
}

function filterRecipesByConstitutionAndSeason(constitution, season) {
  const results = recipeData.map(recipe => {
    const matchConstitution = recipe.constitutions.includes(constitution);
    const matchSeason = recipe.seasons.includes(season);
    return {
      ...recipe,
      score: (matchConstitution ? 2 : 0) + (matchSeason ? 1 : 0)
    };
  });

  return results
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score);
}

function getRecommendedRecipes(constitution, season) {
  return filterRecipesByConstitutionAndSeason(constitution, season);
}

function renderRecipeCards(recipes, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  if (recipes.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #666; padding: 30px;">暂无匹配的食谱</p>';
    return;
  }

  recipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'card recipe-card';
    card.onclick = () => openRecipeModal(recipe);
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" />
      <div class="recipe-name">${recipe.name}</div>
      <div class="recipe-desc">${recipe.description}</div>
      <div class="recipe-tags">
        ${recipe.constitutions.map(c => `<span class="tag">${c}</span>`).join('')}
        ${recipe.seasons.map(s => `<span class="tag">${s}季</span>`).join('')}
      </div>
    `;
    container.appendChild(card);
  });
}

function openRecipeModal(recipe) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay active';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">${recipe.name}</div>
        <div class="modal-close" onclick="closeRecipeModal()">&times;</div>
      </div>
      <div class="modal-body">
        <img src="${recipe.image}" alt="${recipe.name}" class="modal-image" />
        <p style="color: #2d7a4e; margin-bottom: 15px;">${recipe.nature} · ${recipe.efficacy}</p>
        
        <h4 style="font-size: 1rem; margin-bottom: 10px;">食材</h4>
        <p style="color: #666; margin-bottom: 15px;">${recipe.ingredients.join('、')}</p>
        
        <h4 style="font-size: 1rem; margin-bottom: 10px;">做法</h4>
        <ol style="padding-left: 20px; color: #666; margin-bottom: 15px;">
          ${recipe.method.map((step, index) => `<li style="margin-bottom: 8px;">${index + 1}. ${step}</li>`).join('')}
        </ol>
        
        <h4 style="font-size: 1rem; margin-bottom: 10px;">禁忌</h4>
        <p style="color: #666; margin-bottom: 15px;">${recipe.taboos.join('；')}</p>
        
        <h4 style="font-size: 1rem; margin-bottom: 10px;">小贴士</h4>
        <p style="color: #666;">${recipe.tips.join('；')}</p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function closeRecipeModal() {
  const modal = document.querySelector('.modal-overlay');
  if (modal) {
    document.body.removeChild(modal);
  }
}

function renderRecommendedRecipes(constitution, seasonShort) {
  const recipes = getRecommendedRecipes(constitution, seasonShort);
  renderRecipeCards(recipes, 'recommend-container');
}

function getSeasonShort(seasonText) {
  if (seasonText.includes('春')) return '春';
  if (seasonText.includes('夏')) return '夏';
  if (seasonText.includes('秋')) return '秋';
  if (seasonText.includes('冬')) return '冬';
  return seasonText;
}

function filterBySeasonAndCategory(season, category) {
  const seasonShort = getSeasonShort(season);
  const recipeCards = document.querySelectorAll('.recipe-card');
  
  recipeCards.forEach(card => {
    const cardSeasons = card.dataset.seasons?.split(',') || [];
    const cardCategory = card.dataset.category || '';
    
    let matchSeason = seasonShort === 'all' || cardSeasons.includes(seasonShort);
    let matchCategory = category === 'all' || cardCategory === category;
    
    if (matchSeason && matchCategory) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

function renderAllRecipeCards() {
  const container = document.getElementById('recipe-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  recipeData.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'card recipe-card';
    card.dataset.id = recipe.id;
    card.dataset.seasons = recipe.seasons.join(',');
    card.dataset.category = recipe.category;
    card.onclick = () => openRecipeModal(recipe);
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" />
      <div class="recipe-name">${recipe.name}</div>
      <div class="recipe-desc">${recipe.description}</div>
      <div class="recipe-tags">
        ${recipe.constitutions.map(c => `<span class="tag">${c}</span>`).join('')}
        ${recipe.seasons.map(s => `<span class="tag">${s}季</span>`).join('')}
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('recipe-container')) {
    const seasonTabs = document.querySelectorAll('.season-tab');
    const categorySelect = document.getElementById('category-filter');
    
    renderAllRecipeCards();
    
    seasonTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        seasonTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const selectedSeason = tab.textContent;
        const selectedCategory = categorySelect?.value || 'all';
        filterBySeasonAndCategory(selectedSeason, selectedCategory);
        renderAncientPrescriptions(selectedSeason);
        currentSeasonIndex = index;
      });
    });
    
    categorySelect?.addEventListener('change', () => {
      const activeTab = document.querySelector('.season-tab.active');
      const selectedSeason = activeTab?.textContent || 'all';
      const selectedCategory = categorySelect.value;
      filterBySeasonAndCategory(selectedSeason, selectedCategory);
    });
    
    // 获取当前季节并设置初始状态
    const currentSeason = getCurrentSeason();
    currentSeasonIndex = currentSeason.index;
    
    // 激活对应季节的标签
    if (seasonTabs[currentSeasonIndex]) {
      seasonTabs.forEach(t => t.classList.remove('active'));
      seasonTabs[currentSeasonIndex].classList.add('active');
    }
    
    filterBySeasonAndCategory(seasonTabs[currentSeasonIndex]?.textContent || '春食养肝', 'all');
    renderAncientPrescriptions(currentSeason.name);
  }
});
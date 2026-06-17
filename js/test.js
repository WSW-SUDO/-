// 五行体质测评问题（10题）
const questions = [
  { question: '1. 假如周末自由安排，你更偏向哪种出行模式？' },
  { question: '2. 被朋友放鸽子后，你的第一反应是？' },
  { question: '3. 换季的时候，你身体最容易中招的问题是？' },
  { question: '4. 追剧时，你最容易代入下面哪类主角人设？' },
  { question: '5. 晚上躺在床上，你的入睡状态更接近？' },
  { question: '6. 奶茶饮品点单时，你的固定偏好是？' },
  { question: '7. 天生口味偏爱哪一类味道？' },
  { question: '8. 运动过后你的出汗状态是？' },
  { question: '9. 美食面前，你的肠胃属于哪种类型？' },
  { question: '10. 素颜状态下，你的肤色更接近？' }
];

// 五行选项对应：A=木, B=火, C=土, D=金, E=水
const fiveElements = ['木', '火', '土', '金', '水'];

// 五行相生顺序（水生木、木生火、火生土、土生金、金生水）
const birthOrder = ['水', '木', '火', '土', '金'];

// 五行体质完整信息
const constitutionInfo = {
  // 单一体质
  '木': {
    type: 'single',
    title: '木型体质（舒展通达型）',
    description: '肝木条达、气机舒畅，核心在于疏肝理气、调和情志、柔润养筋。',
    body表现: '性格开朗、精力充沛，适应力强；但容易情绪波动、易怒，偶有偏头痛、眼干、口苦，睡眠易受情绪影响。',
    reason: '肝气偏旺，气机条达，情绪敏感，易受外界影响，导致肝气郁结或过旺。',
    suggestion: [
      '作息：规律作息，避免熬夜伤肝，睡前放松情绪',
      '饮食：多吃青色食物，少吃辛辣燥热之物',
      '生活：多接触自然，多做伸展、散步，疏解情绪',
      '运动：选择瑜伽、慢跑、登山等舒展性运动，保持气机顺畅'
    ],
    tips: '多接触绿植，练习深呼吸；常喝玫瑰、菊花茶疏肝理气',
    constitutions: ['气郁'],
    recipes: {
      '春': ['山药小米粥', '枸杞菊花茶'],
      '夏': ['紫苏煎鸡蛋'],
      '秋': ['枸杞菊花茶'],
      '冬': ['陈皮茶']
    }
  },
  '火': {
    type: 'single',
    title: '火型体质（热情外向型）',
    description: '心火明亮、神气充沛，核心在于清心降火、养阴安神、调摄心志。',
    body表现: '性格热情外向，反应快，思维活跃；但容易心烦、急躁，口干舌燥，失眠多梦，易上火长痘，手心偏热。',
    reason: '心火偏旺，阳气偏盛，情绪容易激动，耗伤心阴。',
    suggestion: [
      '作息：早睡早起，避免熬夜耗阴，中午小憩养心',
      '饮食：多吃清热养阴食物，少吃辛辣温补之物',
      '生活：避免高温环境，保持心态平和，减少情绪波动',
      '运动：选择游泳、瑜伽、冥想等平缓运动，避免剧烈运动'
    ],
    tips: '多喝莲子百合粥清心降火，常听舒缓音乐平复情绪',
    constitutions: ['阴虚'],
    recipes: {
      '春': ['春笋木耳汤'],
      '夏': ['绿豆汤'],
      '秋': ['雪梨桂花冻'],
      '冬': ['百合银耳羹']
    }
  },
  '土': {
    type: 'single',
    title: '土型体质（沉稳包容型）',
    description: '脾土厚重、运化有序，核心在于健脾益气、祛湿和中、固守中焦。',
    body表现: '性格沉稳随和，耐心强，待人宽厚；但容易思虑过多，消化不良，腹胀便溏，四肢易浮肿，容易困乏。',
    reason: '脾气偏旺，运化功能偏弱，思虑过度损伤脾胃，湿气易停聚体内。',
    suggestion: [
      '作息：规律三餐，避免暴饮暴食，饭后稍作活动',
      '饮食：多吃黄色食物，少吃生冷油腻之物',
      '生活：减少久坐，避免思虑过度，多与人交流',
      '运动：选择快走、慢跑、八段锦等温和运动，促进脾胃运化'
    ],
    tips: '常吃小米山药粥健脾祛湿，按揉足三里穴增强脾胃功能',
    constitutions: ['气虚'],
    recipes: {
      '春': ['莲子蒸肉'],
      '夏': ['冬瓜海带排骨汤'],
      '秋': ['南瓜小米粥'],
      '冬': ['五指毛桃鸡汤']
    }
  },
  '金': {
    type: 'single',
    title: '金型体质（沉稳理智型）',
    description: '肺金清肃、气机宣降，核心在于润肺生津、固表御风、调畅气机。',
    body表现: '性格理智果断，做事严谨，观察力强；但容易多愁善感，情绪低落，易感冒、咳嗽，皮肤干燥，口干咽燥。',
    reason: '肺气偏旺，燥气易伤肺，情绪敏感，易受外界影响导致肺气郁结。',
    suggestion: [
      '作息：早睡早起，避免熬夜伤肺，晨起开窗通风',
      '饮食：多吃白色润肺食物，少吃辛辣燥热之物',
      '生活：保持环境湿润，避免干燥刺激，多与人交流释放情绪',
      '运动：选择太极拳、散步、慢跑等温和运动，增强肺功能'
    ],
    tips: '多喝百合银耳汤润肺生津，练习腹式呼吸增强肺气',
    constitutions: ['特禀'],
    recipes: {
      '春': ['芦笋炒百合'],
      '夏': ['薄荷茶'],
      '秋': ['银耳雪梨汤'],
      '冬': ['西洋参莲子乌鸡汤']
    }
  },
  '水': {
    type: 'single',
    title: '水型体质（沉静内敛型）',
    description: '肾水充盈、精气固藏，核心在于温补肾阳、固精养髓、温煦周身。',
    body表现: '性格沉静内敛，心思细腻，耐力强；但容易情绪低沉，怕冷畏寒，手脚冰凉，腰膝酸软，夜尿多，易疲劳。',
    reason: '肾气偏旺，阳气不足，水湿易停聚，情绪易压抑，耗伤肾阳。',
    suggestion: [
      '作息：早睡晚起，避免熬夜耗肾，注意保暖尤其是腰腹',
      '饮食：多吃黑色温补食物，少吃生冷寒凉之物',
      '生活：多晒太阳，避免长期处于阴冷潮湿环境',
      '运动：选择快走、慢跑、八段锦等温和运动，增强阳气'
    ],
    tips: '常吃黑豆黑芝麻糊补肾益精，睡前泡脚温肾散寒',
    constitutions: ['阳虚'],
    recipes: {
      '春': ['黄芪红枣茶'],
      '夏': ['薏米红豆水'],
      '秋': ['山楂荷叶茶'],
      '冬': ['当归生姜羊肉汤']
    }
  },

  // 复合体质
  '木火': {
    type: 'compound',
    title: '木火复合体质（肝郁燥热型）',
    description: '木火相生、气机偏盛，体内郁热难散，核心在于疏肝、清热、养阴。',
    body表现: '性格外向热情，思维活跃灵敏，但性情急躁、易怒易躁；常见眼干口苦、反复上火长痘、心烦失眠，情绪起伏波动较大。',
    reason: '肝气郁结内生虚火，木火相生致使心肝阳气偏盛，阴液耗损较快，内热不散。',
    suggestion: [
      '作息：杜绝熬夜，23点前入睡，午时小憩滋养心阴',
      '饮食：多食青色、白色清润滋阴食材，严格忌口辛辣、油炸、温补燥热食物',
      '生活：常亲近自然舒展身心，遇事放缓节奏，减少情绪激动',
      '运动：优选瑜伽、慢走、冥想等平缓舒展运动，禁止高强度暴汗运动'
    ],
    tips: '日常饮用玫瑰菊花茶疏肝清火，坚持腹式呼吸，平复心火燥热。',
    constitutions: ['气郁', '阴虚'],
    recipes: {
      '春': ['春笋木耳汤'],
      '夏': ['紫苏煎鸡蛋'],
      '秋': ['雪梨桂花冻'],
      '冬': ['陈皮茶']
    }
  },
  '木土': {
    type: 'compound',
    title: '木土复合体质（肝郁脾虚型）',
    description: '木克土，肝气郁结克制脾运，核心在于疏肝健脾、祛湿和中。',
    body表现: '性格敏感多虑，易烦躁生闷气，遇事反复纠结；情绪波动后立刻腹胀胃痛，饭后易胀气，生冷油腻饮食后腹泻便黏；面色发黄暗沉，生气时脸色青白；晨起身体沉重浮肿，两肋闷胀，夜里思绪纷乱难以入睡。',
    reason: '长期高压压抑、情绪无法疏泄导致肝气郁结；饮食寒凉不规律、嗜冰饮外卖损伤脾胃运化；久坐少户外，木气持续克制脾土，湿浊堆积，肝脾两脏同步失衡。',
    suggestion: [
      '作息：23点前入睡养护肝经，饭后半小时不躺卧，减轻脾胃负担',
      '饮食：多食疏肝健脾食材，忌冰饮、寒性瓜果、重油甜品',
      '生活：每日户外绿植散步舒展肝气，少独处憋闷，及时疏导负面情绪',
      '运动：选择八段锦、慢走、登山等舒展类运动，少高强度暴汗运动'
    ],
    tips: '日常冲泡陈皮玫瑰花茶疏肝祛湿，早晚按揉太冲穴、足三里各3分钟；饭后慢走10分钟，睡前扩胸舒展胸腔。',
    constitutions: ['气郁', '气虚'],
    recipes: {
      '春': ['陈皮茶'],
      '夏': ['茯苓玫瑰糕'],
      '秋': ['雪梨桂花冻'],
      '冬': ['乾隆四神汤']
    }
  },
  '火土': {
    type: 'compound',
    title: '火土复合体质（胃热痰湿型）',
    description: '心火内生、脾运不健，内热夹湿，核心在于清心火、和脾胃、清湿热。',
    body表现: '性情急躁、易心烦上火，同时脾胃功能偏弱；常有积食腹胀、口干口苦、身体困倦、大便黏腻等湿热表现。',
    reason: '心火旺盛灼伤脾津，内热郁结阻碍脾胃运化，形成内热夹湿、心脾不和的状态。',
    suggestion: [
      '作息：坚持午间小憩养护心脾，杜绝熬夜，避免内热加重',
      '饮食：以清热祛湿、健脾养阴为主，少食温补、燥热、厚重食物',
      '生活：保持居住环境干爽通透，减少焦虑思虑，避免耗伤心脾',
      '运动：低强度有氧为主，微微出汗即可，禁止大汗淋漓伤及津液'
    ],
    tips: '日常饮用莲子山药茶，清心降火、调和脾胃。',
    constitutions: ['阴虚', '气虚'],
    recipes: {
      '春': ['莲子蒸肉'],
      '夏': ['绿豆汤'],
      '秋': ['南瓜小米粥'],
      '冬': ['百合银耳羹']
    }
  },
  '土金': {
    type: 'compound',
    title: '土金复合体质（脾虚肺寒型）',
    description: '脾虚气弱、肺气失养，土不生金，核心在于补益脾胃、滋养肺气、固本御燥。',
    body表现: '性格沉稳内敛、温柔多虑，易多愁善感；脾胃气虚易疲惫乏力，换季易感冒、干咳痰多、皮肤干燥缺水。',
    reason: '脾胃气血生化不足，中土虚弱无法滋养肺金，导致肺气偏弱、抵抗力不足、燥邪易侵。',
    suggestion: [
      '作息：早睡早起养护肺气，晨起开窗通风，疏通周身气机',
      '饮食：多食黄色健脾、白色润肺食材，忌食生冷、辛辣刺激食物',
      '生活：远离干燥环境，多与人沟通，及时抒发低落情绪',
      '运动：太极拳、慢走等温和运动，先健脾益气，再滋养肺金'
    ],
    tips: '常食山药百合粥，双补脾肺、增强机体正气。',
    constitutions: ['气虚', '特禀'],
    recipes: {
      '春': ['芦笋炒百合'],
      '夏': ['冬瓜海带排骨汤'],
      '秋': ['银耳雪梨汤'],
      '冬': ['五指毛桃鸡汤']
    }
  },
  '金水': {
    type: 'compound',
    title: '金水复合体质（肾虚肺燥型）',
    description: '肾水亏虚、肺燥津少，金水互生不足，核心在于滋肾水、润肺燥、生津固本。',
    body表现: '性格沉静内敛、情绪偏低落；畏寒怕冷、腰膝酸软、体力偏弱，同时伴随咽干干咳、皮肤干燥、津液不足。',
    reason: '肾精水液不足，无法上承滋养肺脏，燥邪侵体，形成肾虚肺燥、津气两虚的状态。',
    suggestion: [
      '作息：早睡养肾固精，注重腰腹、肺部保暖，秋冬减少早晚寒凉外出',
      '饮食：以黑色补肾、白色润肺食材为主，严格忌食生冷寒凉食物',
      '生活：多晒太阳增补阳气，保持室内湿度，缓解躯体干燥',
      '运动：选择温和舒缓运动，禁止剧烈运动耗伤精气津液'
    ],
    tips: '坚持睡前温水泡脚，日常饮用黑芝麻百合茶，滋肾润肺。',
    constitutions: ['阳虚', '特禀'],
    recipes: {
      '春': ['黄芪红枣茶'],
      '夏': ['薄荷茶'],
      '秋': ['银耳雪梨汤'],
      '冬': ['西洋参莲子乌鸡汤']
    }
  },
  '水木': {
    type: 'compound',
    title: '水木复合体质（肾亏肝郁型）',
    description: '水湿偏盛、寒湿郁肝，气机不舒，核心在于温化水湿、温润护肾、舒展肝气。',
    body表现: '心思细腻、情绪内敛压抑，不擅释放压力；常年畏寒体冷、体内水湿淤积，肝气不畅、身体浮肿、循环代谢偏弱。',
    reason: '肾水寒湿偏盛，水湿停滞体内，阻滞肝气升发舒展，形成水郁木滞的失衡状态。',
    suggestion: [
      '作息：早睡养护肝肾，全身做好保暖，杜绝寒湿入体',
      '饮食：多食温阳祛湿、疏肝理气食材，远离一切寒凉食物',
      '生活：多户外晒太阳，主动排解负面情绪，减少情绪压抑',
      '运动：拉伸、登山等舒展类运动，疏通肝气、利水祛湿'
    ],
    tips: '生姜玫瑰泡水代茶饮，温阳散寒、疏肝解郁。',
    constitutions: ['阳虚', '气郁'],
    recipes: {
      '春': ['黄芪红枣茶'],
      '夏': ['紫苏煎鸡蛋'],
      '秋': ['山楂荷叶茶'],
      '冬': ['当归生姜羊肉汤']
    }
  },
  // 相克复合体质
  '土水': {
    type: 'compound',
    title: '土水复合体质（脾虚水湿型）',
    description: '土不制水，脾虚运化无力，水湿内停，核心在于健脾利水。',
    body表现: '周身沉重乏力，梅雨季节困倦明显，常年大便稀溏；小便清长、夜尿频繁，腰腿酸软怕冷，手脚常年冰凉；面黄兼暗沉发黑，下半身虚胖浮肿；腹部久凉，稍微受凉就腹痛腹泻。',
    reason: '长期嗜甜奶茶、重盐饮食滋生脾胃湿气；秋冬露腰、久吹空调损耗肾阳；缺乏运动，水湿下行持续耗损肾气，脾虚久累及肾脏，寒湿交织失衡。',
    suggestion: [
      '作息：23点前入睡固护肾气，睡前1小时减少饮水避免起夜',
      '饮食：多食温性祛湿食材，忌冰饮、甜食、生冷瓜果',
      '生活：重点护住腰腹、脚踝，阴雨天减少外出，正午晒后背补阳',
      '运动：快走、泡脚驱寒，适度轻度有氧，帮助代谢水湿'
    ],
    tips: '每周2-3次艾灸关元、阴陵泉；艾叶生姜煮水泡脚15分钟；日常饮用生姜茯苓温水，温脾暖肾。',
    constitutions: ['气虚', '阳虚'],
    recipes: {
      '春': ['山药小米粥'],
      '夏': ['薏米红豆水'],
      '秋': ['五指毛桃鸡汤'],
      '冬': ['当归生姜羊肉汤']
    }
  },
  '水火': {
    type: 'compound',
    title: '水火复合体质（心肾不交型）',
    description: '水火失济，肾水不足难制心火，核心在于清心降火、温肾散寒、调和心肾。',
    body表现: '容易心烦上火、口腔溃疡、爆痘泛红，情绪急躁；但腰腹、手脚常年冰凉，小便清长夜尿多；夜间燥热翻覆难眠，多梦易醒；吃温补立刻上火，喝寒凉下腹更冷，寒热矛盾明显。',
    reason: '长期熬夜耗损肾元，心神持续耗伤；嗜辛辣烧烤滋生心火；常年贪凉喝冷饮、下肢受凉堆积下焦寒气；思虑过度，心火上浮无法下温肾水。',
    suggestion: [
      '作息：23点前入睡敛心火养肾，正午小憩静心安神',
      '饮食：选择平和中和食材，忌极端冰饮、辛辣重油温补',
      '生活：上半身少捂，腰腹下肢做好保暖，不赤脚踩凉地面',
      '运动：瑜伽、静坐、慢走平缓运动，避免剧烈发汗耗肾水'
    ],
    tips: '手心劳宫对搓脚心涌泉穴，每次5分钟交心肾；淡莲子心配少量桂圆泡水；睡前温水泡脚引火下行。',
    constitutions: ['阴虚', '阳虚'],
    recipes: {
      '春': ['枸杞菊花茶'],
      '夏': ['绿豆汤'],
      '秋': ['百合银耳羹'],
      '冬': ['西洋参莲子乌鸡汤']
    }
  },
  '火金': {
    type: 'compound',
    title: '火金复合体质（肺热伤阴型）',
    description: '火克金，心火肺热灼伤肺津，核心在于清心润肺、生津润燥。',
    body表现: '性格冲动急躁，易脸红燥热、手心出汗，频繁口腔溃疡；常年咽喉干痒、干咳无痰，秋季皮肤起皮干痒，鼻腔嘴唇干裂；爱吃辣就大便干结，夜间燥热醒后口干舌燥。',
    reason: '长期辛辣油炸饮食、情绪易怒滋生心火；久待干燥空调房、秋冬冷风直吹耗伤肺津；熬夜损耗全身津液，心火持续灼烧肺脏，心肺同燥。',
    suggestion: [
      '作息：早睡不熬夜，减少津液耗损，午间静心平复心火',
      '饮食：多食润燥生津食材，忌辣椒、烧烤、烈酒、温补燥热食物',
      '生活：干燥环境放置加湿器，少长时间户外干冷风直吹',
      '运动：游泳、冥想、慢走平缓运动，避免暴晒剧烈出汗'
    ],
    tips: '日常麦冬玉竹泡水润燥；早晚按揉鱼际、少府穴清心肺热；每周2次蒸汽润喉缓解干咳。',
    constitutions: ['阴虚', '特禀'],
    recipes: {
      '春': ['春笋木耳汤'],
      '夏': ['薄荷茶'],
      '秋': ['芦笋炒百合'],
      '冬': ['银耳雪梨汤']
    }
  },
  '金木': {
    type: 'compound',
    title: '金木复合体质（肺燥肝郁型）',
    description: '金克木，肺燥气郁肃降太过，核心在于润肺润燥、疏肝解郁。',
    body表现: '性格内敛隐忍，习惯压抑心事，不爱倾诉，内心敏感疏远他人；秋冬皮肤干痒、干咳少痰，换季呼吸道不适；压抑情绪后胸口发紧、两肋隐痛；肤色偏白干燥，生闷气时脸色青白，夜里胡思乱想失眠。',
    reason: '长期隐忍不抒发，肝气长期郁堵；久处干燥环境、少润燥养护，肺气肃降力量过强克制肝气；缺少户外舒展运动，津液不足，肺燥肝郁同步存在。',
    suggestion: [
      '作息：23点前入睡养肝润肺，晨起开窗通风舒展气机',
      '饮食：多食疏肝润燥食材，少吃辛辣辛燥加重肺干',
      '生活：多去绿植公园散心，主动抒发情绪，避免长期独处内耗',
      '运动：瑜伽、登山、扩胸舒展运动，疏通压抑肝气'
    ],
    tips: '月季麦冬泡水疏肝润肺；交替按揉太冲穴、肺俞穴；晨起深呼吸扩胸，释放胸腔压抑感。',
    constitutions: ['特禀', '气郁'],
    recipes: {
      '春': ['陈皮茶'],
      '夏': ['山楂荷叶茶'],
      '秋': ['雪梨桂花冻'],
      '冬': ['百合银耳羹']
    }
  },

  // 五行匀和体质
  '平和': {
    type: 'balanced',
    title: '五行匀和体质',
    description: '五行均衡、阴阳平和，脏腑气机协调，是气血匀净、身心舒展的理想养生体质。',
    body表现: '身心状态稳定均衡，情绪平和、起伏极小，脏腑功能协调，无明显寒热、虚实偏颇，是绝佳的健康体质状态。',
    reason: '先天体质禀赋充足，后天作息、饮食、情志调养得当，五行阴阳平衡、气血通畅。',
    suggestion: [
      '作息：坚持早睡早起，顺应四季节气调整作息节律',
      '饮食：食材多样、五色均衡摄入，不挑食、不暴饮暴食',
      '生活：劳逸结合、心境平和，保持情绪稳定舒畅',
      '运动：多种运动交替进行，维持周身气血平衡'
    ],
    tips: '顺应二十四节气规律养生，是维持五行匀和的核心关键。',
    constitutions: ['平和'],
    recipes: {
      '春': ['山药小米粥'],
      '夏': ['薏米红豆水'],
      '秋': ['枸杞菊花茶'],
      '冬': ['百合银耳羹']
    }
  }
};

let selectedAnswers = [];

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

let currentQuestionIndex = 0;

function selectOption(questionIndex, optionIndex) {
  selectedAnswers[questionIndex] = optionIndex;

  const buttons = document.querySelectorAll('.question-card')[questionIndex].querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    btn.classList.remove('selected');
    btn.classList.remove('tea-ripple');
  });
  const selectedBtn = event.target;
  selectedBtn.classList.add('selected');
  selectedBtn.classList.add('tea-ripple');

  // 触发叶脉动画
  triggerLeafVeinAnimation(questionIndex);

  updateProgress();

  // 检查是否完成所有题目
  const answeredCount = selectedAnswers.filter(a => a !== undefined).length;
  
  // 自动切换到下一题或提交报告
  setTimeout(function() {
    if (questionIndex < questions.length - 1) {
      goToQuestion(questionIndex + 1);
    } else if (answeredCount === questions.length) {
      // 完成所有题目，自动提交报告
      submitTest();
    }
  }, 600);
}

function goToQuestion(targetIndex) {
  if (targetIndex < 0 || targetIndex >= questions.length) return;
  if (targetIndex === currentQuestionIndex) return;

  const cards = document.querySelectorAll('.question-card');
  const currentCard = cards[currentQuestionIndex];
  const nextCard = cards[targetIndex];
  const prevBtn = document.getElementById('prev-btn');

  // 判断滑动方向
  const isGoingBack = targetIndex < currentQuestionIndex;

  // 当前题滑出
  if (isGoingBack) {
    currentCard.classList.add('slide-out-right');
  } else {
    currentCard.classList.add('slide-out-left');
  }

  setTimeout(function() {
    currentCard.style.display = 'none';
    currentCard.classList.remove('slide-out-left', 'slide-out-right');
    currentCard.classList.remove('active');

    // 下一题滑入
    nextCard.style.display = 'block';
    if (isGoingBack) {
      nextCard.classList.add('slide-in-left');
    } else {
      nextCard.classList.add('slide-in-right');
    }

    setTimeout(function() {
      nextCard.classList.remove('slide-in-left', 'slide-in-right');
      nextCard.classList.add('active');
      currentQuestionIndex = targetIndex;

      // 更新进度显示
      updateProgressDisplay(targetIndex);

      // 控制上一题按钮显示/隐藏
      if (targetIndex === 0) {
        prevBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'inline-block';
      }
    }, 400);
  }, 400);
}

function updateProgressDisplay(currentIndex) {
  // 更新进度数值显示为当前题号
  const progressText = document.querySelector('.progress-text');
  if (progressText) {
    progressText.textContent = `第 ${currentIndex + 1} / ${questions.length} 题`;
  }
}

function triggerLeafVeinAnimation(questionIndex) {
  const card = document.querySelectorAll('.question-card')[questionIndex];
  if (!card) return;

  // 创建叶脉线条
  const vein = document.createElement('div');
  vein.className = 'leaf-vein-animation';
  vein.innerHTML = `
    <svg viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
      <path class="vein-main" d="M30,5 Q30,50 30,95" stroke="currentColor" fill="none" stroke-width="1.5"/>
      <path class="vein-side" d="M30,20 Q40,25 45,30" stroke="currentColor" fill="none" stroke-width="1"/>
      <path class="vein-side" d="M30,30 Q20,35 15,40" stroke="currentColor" fill="none" stroke-width="1"/>
      <path class="vein-side" d="M30,45 Q42,50 48,55" stroke="currentColor" fill="none" stroke-width="1"/>
      <path class="vein-side" d="M30,60 Q18,65 12,70" stroke="currentColor" fill="none" stroke-width="1"/>
      <path class="vein-side" d="M30,75 Q40,80 45,85" stroke="currentColor" fill="none" stroke-width="1"/>
    </svg>
  `;
  card.appendChild(vein);

  setTimeout(function() {
    if (vein.parentNode) {
      vein.parentNode.removeChild(vein);
    }
  }, 1500);
}

// 初始化：只显示第一题
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTestPage);
} else {
  initTestPage();
}

function initTestPage() {
  const cards = document.querySelectorAll('.question-card');
  cards.forEach(function(card, index) {
    if (index === 0) {
      card.style.display = 'block';
      card.classList.add('active');
    } else {
      card.style.display = 'none';
    }
  });
  currentQuestionIndex = 0;
}

function updateProgress() {
  const answeredCount = selectedAnswers.filter(a => a !== undefined).length;
  const totalCount = questions.length;
  const progress = (answeredCount / totalCount) * 100;
  
  const progressBar = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }
  
  // 进度数值显示当前题号
  if (progressText) {
    progressText.textContent = `第 ${currentQuestionIndex + 1} / ${totalCount} 题`;
  }
}

function submitTest() {
  const answeredCount = selectedAnswers.filter(a => a !== undefined).length;
  if (answeredCount < questions.length) {
    alert('请回答所有问题');
    return;
  }

  // 五行计分：统计A~E各选项的选择次数
  const elementScores = { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 };
  
  selectedAnswers.forEach(answerIndex => {
    if (answerIndex === undefined) return;
    const element = fiveElements[answerIndex];
    if (element) {
      elementScores[element]++;
    }
  });

  // 计算占比
  const rates = {};
  for (const element in elementScores) {
    rates[element] = elementScores[element] / 10 * 100;
  }

  // 判定体质类型
  const constitution = determineConstitution(elementScores, rates);

  showResult(constitution, elementScores, rates);
}

/**
 * 判定体质类型
 * 规则：
 * 1. 单一体质：最高分-次高分≥2分
 * 2. 二元复合体质：最高分与次高分差值≤1分（包括相克复合体质）
 * 3. 五行平和体质：所有选项≤2题
 * 4. 平局处理：多选项并列最高时，按五行相生关系优先判定，取"受生方"为主体质
 */
function determineConstitution(scores, rates) {
  // 将得分排序，从高到低
  const sortedScores = Object.entries(scores)
    .map(([element, score]) => ({ element, score }))
    .sort((a, b) => b.score - a.score);

  const first = sortedScores[0];
  const second = sortedScores[1];
  const diff = first.score - second.score;

  // 规则3：五行平和体质（最高分≤2题）
  if (first.score <= 2) {
    return '平和';
  }

  // 规则1：纯单一体质（最高分-次高分≥2分）
  if (diff >= 2) {
    return first.element;
  }

  // 规则2：二元复合体质（差值≤1分，包括相克复合体质）
  if (diff <= 1) {
    // 双向匹配，无论第一名、第二名顺序如何都能命中
    const e1 = first.element;
    const e2 = second.element;

    // 木土复合（木克土）双向匹配
    if ((e1 === '木' && e2 === '土') || (e1 === '土' && e2 === '木')) {
      return '木土';
    }
    // 土水复合（土克水）双向匹配
    else if ((e1 === '土' && e2 === '水') || (e1 === '水' && e2 === '土')) {
      return '土水';
    }
    // 水火复合（水克火）双向匹配
    else if ((e1 === '水' && e2 === '火') || (e1 === '火' && e2 === '水')) {
      return '水火';
    }
    // 火金复合（火克金）双向匹配
    else if ((e1 === '火' && e2 === '金') || (e1 === '金' && e2 === '火')) {
      return '火金';
    }
    // 金木复合（金克木）双向匹配
    else if ((e1 === '金' && e2 === '木') || (e1 === '木' && e2 === '金')) {
      return '金木';
    }
    // 火土复合（火生土）双向匹配
    else if ((e1 === '火' && e2 === '土') || (e1 === '土' && e2 === '火')) {
      return '火土';
    }
    // 金水复合（金生水）双向匹配
    else if ((e1 === '金' && e2 === '水') || (e1 === '水' && e2 === '金')) {
      return '金水';
    }
    // 木火复合（木生火）双向匹配
    else if ((e1 === '木' && e2 === '火') || (e1 === '火' && e2 === '木')) {
      return '木火';
    }
    // 水木复合（水生木）双向匹配
    else if ((e1 === '水' && e2 === '木') || (e1 === '木' && e2 === '水')) {
      return '水木';
    }
    // 土金复合（土生金）双向匹配
    else if ((e1 === '土' && e2 === '金') || (e1 === '金' && e2 === '土')) {
      return '土金';
    }
    // 其他复合体质（相生体质）
    else {
      return sortCompound(e1, e2);
    }
  }

  // 默认返回主要元素
  return first.element;
}

/**
 * 按字典序排列复合体质名称
 */
function sortCompound(a, b) {
  if (a > b) return b + a;
  return a + b;
}

/**
 * 从药膳库获取推荐药膳
 */
function getRecommendedRecipes(constitution) {
  const info = constitutionInfo[constitution];
  const allRecipes = [];
  
  // 遍历四季药膳
  const seasons = ['春', '夏', '秋', '冬'];
  seasons.forEach(season => {
    const recipeNames = info.recipes[season] || [];
    recipeNames.forEach(name => {
      // 从recipeData中查找对应的药膳
      const recipe = recipeData.find(r => r.name === name);
      if (recipe) {
        allRecipes.push({
          ...recipe,
          recommendSeason: season
        });
      }
    });
  });
  
  return allRecipes;
}

function showResult(constitution, elementScores, rates) {
  console.log('判定体质:', constitution);
  console.log('得分:', elementScores);
  console.log('占比:', rates);

  const info = constitutionInfo[constitution];

  // 如果没有找到对应的体质信息，显示错误
  if (!info) {
    console.error('未找到体质信息:', constitution);
    console.error('可用的体质:', Object.keys(constitutionInfo));
    alert('报告生成出错，请重新测试');
    resetTest();
    return;
  }

  const recipes = getRecommendedRecipes(constitution);
  console.log('推荐的药膳:', recipes);
  
  let resultHtml = `
    <div class="card result-card" style="text-align: center;">
      <div style="font-size: 3rem; margin-bottom: 20px; color: #A1B380;">
        <i class="fas fa-award"></i>
      </div>
      <h3 class="card-title">您的体质类型</h3>
      <p style="font-size: 1.5rem; font-weight: 600; color: #A1B380; margin-bottom: 10px;">${info.title}</p>
      ${info.description ? `<p style="font-size: 0.95rem; color: #888; line-height: 1.6; max-width: 90%; margin: 0 auto;">${info.description}</p>` : ''}
    </div>

    <div class="card result-card">
      <h3 class="card-title" style="color: #A1B380;"><i class="fas fa-heart-pulse"></i> 身体表现</h3>
      <p style="color: #666; line-height: 1.8; margin-top: 15px;">${info.body表现}</p>
    </div>

    <div class="card result-card">
      <h3 class="card-title" style="color: #A1B380;"><i class="fas fa-search"></i> 形成原因</h3>
      <p style="color: #666; line-height: 1.8; margin-top: 15px;">${info.reason}</p>
    </div>

    <div class="card result-card">
      <h3 class="card-title" style="color: #A1B380;"><i class="fas fa-lightbulb"></i> 改善建议</h3>
      <ul style="padding-left: 20px; margin-top: 15px;">
        ${info.suggestion.map(item => `<li style="color: #666; margin-bottom: 10px; line-height: 1.6;">${item}</li>`).join('')}
      </ul>
    </div>

    <div class="card result-card">
      <h3 class="card-title" style="color: #A1B380;"><i class="fas fa-star"></i> 养生小技巧</h3>
      <p style="color: #666; line-height: 1.8; margin-top: 15px;">${info.tips || '暂无特别建议'}</p>
    </div>

    <div class="card result-card">
      <h3 class="card-title" style="color: #A1B380;"><i class="fas fa-utensils"></i> 四季专属药膳</h3>
      <p style="color: #888; font-size: 0.9rem; margin-top: 10px; margin-bottom: 15px;">系统已为你从四时膳房中筛选出适合当前体质的四季食谱</p>
      <div class="recipe-grid" style="margin-top: 20px;">
        ${recipes.map((recipe) => `
          <div class="mini-recipe-card" onclick="openRecipeDetail(${recipe.id})">
            <img src="${recipe.image}" alt="${recipe.name}" class="mini-recipe-image" />
            <div class="mini-recipe-season">${recipe.recommendSeason}季</div>
            <div class="mini-recipe-name">${recipe.name}</div>
            <div class="mini-recipe-desc">${recipe.description}</div>
          </div>
        `).join('')}
      </div>
      <p style="color: #888; font-size: 0.85rem; text-align: center; margin-top: 15px;">点击卡片查看详情 · 推荐按季节食用</p>
    </div>

    <div style="text-align: center; margin-top: 30px;">
      <button class="btn btn-secondary" onclick="resetTest()">
        <i class="fas fa-redo"></i> 重新测试
      </button>
    </div>
  `;

  document.getElementById('test-container').style.display = 'none';
  document.getElementById('result-container').innerHTML = resultHtml;
  document.getElementById('result-container').className = 'test-section result-container-animate';
  document.getElementById('result-container').style.display = 'block';

  // 触发出场动画
  triggerResultAnimations();
}

function triggerResultAnimations() {
  const resultContainer = document.getElementById('result-container');
  if (!resultContainer) return;

  // 为每个结果卡片添加依次入场动画
  const cards = resultContainer.querySelectorAll('.result-card');
  cards.forEach(function(card, index) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    setTimeout(function() {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100 + index * 150);
  });

  // 触发圆环旋转动画
  const compass = resultContainer.querySelector('.compass-container, .five-element-compass');
  if (compass) {
    compass.classList.add('compass-rotate');
  }
}

function openRecipeDetail(recipeId) {
  const recipe = recipeData.find(r => r.id === recipeId);
  if (!recipe) return;
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay active';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">${recipe.name}</div>
        <div class="modal-close" onclick="closeRecipeDetail()">&times;</div>
      </div>
      <div class="modal-body">
        <img src="${recipe.image}" alt="${recipe.name}" class="modal-image" />
        <p style="color: #A1B380; margin-bottom: 15px;">${recipe.nature} · ${recipe.efficacy}</p>
        
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

function closeRecipeDetail() {
  const modal = document.querySelector('.modal-overlay');
  if (modal) {
    document.body.removeChild(modal);
  }
}

function resetTest() {
  selectedAnswers = [];
  currentQuestionIndex = 0;

  // 隐藏所有题目卡片，只显示第一题
  const cards = document.querySelectorAll('.question-card');
  cards.forEach(function(card, index) {
    card.classList.remove('selected', 'slide-out-left', 'slide-in-right');
    if (index === 0) {
      card.style.display = 'block';
      card.classList.add('active');
      // 第一题从左侧滑入
      card.classList.add('slide-in-right');
      setTimeout(function() {
        card.classList.remove('slide-in-right');
      }, 400);
    } else {
      card.style.display = 'none';
      card.classList.remove('active');
    }
  });

  // 清除所有按钮选中状态
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.classList.remove('selected', 'tea-ripple');
  });

  document.getElementById('test-container').style.display = 'block';
  document.getElementById('result-container').innerHTML = '';
  document.getElementById('result-container').className = 'test-section';
  document.getElementById('result-container').style.display = 'none';
  updateProgress();
}

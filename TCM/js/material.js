const materialData = [
  {
    id: 1,
    name: '生姜',
    image: 'images/null (20).png',
    nature: '辛、温',
    meridian: '归肺、脾、胃经',
    efficacy: '解表散寒，温中止呕，化痰止咳',
    suitable: '风寒感冒、胃寒呕吐、寒痰咳嗽者',
    taboo: '阴虚火旺者不宜过量食用'
  },
  {
    id: 2,
    name: '红枣',
    image: 'images/null (21).png',
    nature: '甘、温',
    meridian: '归脾、胃、心经',
    efficacy: '补中益气，养血安神',
    suitable: '脾胃虚弱、气血不足、失眠多梦',
    taboo: '体内有湿热、痰热咳嗽者不宜食用'
  },
  {
    id: 3,
    name: '枸杞',
    image: 'images/null (22).png',
    nature: '甘、平',
    meridian: '归肝、肾经',
    efficacy: '滋补肝肾，益精明目',
    suitable: '肝肾阴虚、视力减退、腰膝酸软',
    taboo: '脾虚便溏者不宜过量食用'
  },
  {
    id: 4,
    name: '山药',
    image: 'images/null (23).png',
    nature: '甘、平',
    meridian: '归脾、肺、肾经',
    efficacy: '益气养阴，补脾肺肾',
    suitable: '脾胃虚弱、肺虚咳嗽、肾虚遗精',
    taboo: '有实邪者不宜食用'
  },
  {
    id: 5,
    name: '当归',
    image: 'images/null (8)(1).png',
    nature: '甘、辛、温',
    meridian: '归肝、心、脾经',
    efficacy: '补血活血，调经止痛，润肠通便',
    suitable: '血虚萎黄、月经不调、肠燥便秘',
    taboo: '湿盛中满、大便溏泄者不宜食用'
  },
  {
    id: 6,
    name: '黄芪',
    image: 'images/null (7)(1).png',
    nature: '甘、微温',
    meridian: '归脾、肺经',
    efficacy: '补气升阳，固表止汗，利水消肿',
    suitable: '气虚乏力、表虚自汗、气虚水肿',
    taboo: '阴虚阳亢者不宜食用'
  },
  {
    id: 7,
    name: '茯苓',
    image: 'images/null (12)(1).png',
    nature: '甘、淡、平',
    meridian: '归心、肺、脾、肾经',
    efficacy: '利水渗湿，健脾宁心',
    suitable: '水肿尿少、脾虚食少、心神不安',
    taboo: '阴虚火旺者不宜单独使用'
  },
  {
    id: 8,
    name: '百合',
    image: 'images/null (13)(1).png',
    nature: '甘、微寒',
    meridian: '归肺、心经',
    efficacy: '养阴润肺，清心安神',
    suitable: '阴虚燥咳、劳嗽咯血、虚烦惊悸',
    taboo: '脾胃虚寒、大便溏泄者不宜食用'
  },
  {
    id: 9,
    name: '薏米',
    image: 'images/null (24).png',
    nature: '甘、淡、凉',
    meridian: '归脾、胃、肺经',
    efficacy: '利水渗湿，健脾止泻，清热排脓',
    suitable: '水肿、脚气、脾虚泄泻、肺痈',
    taboo: '孕妇不宜食用'
  },
  {
    id: 10,
    name: '红豆',
    image: 'images/null (25).png',
    nature: '甘、酸、平',
    meridian: '归心、小肠经',
    efficacy: '利水消肿，解毒排脓',
    suitable: '水肿胀满、脚气浮肿、黄疸尿赤',
    taboo: '阴虚津伤者不宜过量食用'
  },
  {
    id: 11,
    name: '桂圆',
    image: 'images/null (26).png',
    nature: '甘、温',
    meridian: '归心、脾经',
    efficacy: '补益心脾，养血安神',
    suitable: '心脾两虚、气血不足、心悸失眠',
    taboo: '体内有痰火及湿滞停饮者不宜食用'
  },
  {
    id: 12,
    name: '菊花',
    image: 'images/null (27).png',
    nature: '甘、苦、微寒',
    meridian: '归肺、肝经',
    efficacy: '疏散风热，平肝明目，清热解毒',
    suitable: '风热感冒、头痛眩晕、目赤肿痛',
    taboo: '脾胃虚寒者不宜过量饮用'
  },
  {
    id: 13,
    name: '莲子',
    image: 'images/null (28).png',
    nature: '甘、涩、平',
    meridian: '归脾、肾、心经',
    efficacy: '补脾止泻，益肾涩精，养心安神',
    suitable: '脾虚泄泻、遗精滑精、心悸失眠',
    taboo: '中满痞胀、大便燥结者不宜食用'
  },
  {
    id: 14,
    name: '陈皮',
    image: 'images/null (29).png',
    nature: '辛、苦、温',
    meridian: '归脾、肺经',
    efficacy: '理气健脾，燥湿化痰',
    suitable: '脾胃气滞、脘腹胀满、咳嗽痰多',
    taboo: '气虚及阴虚燥咳者不宜食用'
  },
  {
    id: 15,
    name: '山楂',
    image: 'images/null(1).png',
    nature: '酸、甘、微温',
    meridian: '归脾、胃、肝经',
    efficacy: '消食化积，活血化瘀',
    suitable: '肉食积滞、瘀血经闭、产后瘀阻',
    taboo: '脾胃虚弱者及孕妇不宜食用'
  },
  {
    id: 16,
    name: '蜂蜜',
    image: 'images/null (1)(1).png',
    nature: '甘、平',
    meridian: '归肺、脾、大肠经',
    efficacy: '补中润燥，止痛解毒',
    suitable: '脾胃虚弱、脘腹作痛、肠燥便秘',
    taboo: '糖尿病患者及痰湿咳嗽者不宜食用'
  },
  {
    id: 17,
    name: '梨',
    image: 'images/null (2)(1).png',
    nature: '甘、微酸、凉',
    meridian: '归肺、胃经',
    efficacy: '生津润燥，清热化痰',
    suitable: '热病津伤、烦渴、咳嗽痰多',
    taboo: '脾胃虚寒者不宜多食'
  },
  {
    id: 18,
    name: '杏仁',
    image: 'images/null (3)(1).png',
    nature: '苦、微温',
    meridian: '归肺、大肠经',
    efficacy: '止咳平喘，润肠通便',
    suitable: '咳嗽气喘、胸满痰多、肠燥便秘',
    taboo: '阴虚咳嗽及大便溏泄者不宜食用'
  },
  {
    id: 19,
    name: '麦冬',
    image: 'images/null (4)(1).png',
    nature: '甘、微苦、微寒',
    meridian: '归心、肺、胃经',
    efficacy: '养阴生津，润肺清心',
    suitable: '肺燥干咳、津伤口渴、心烦失眠',
    taboo: '脾胃虚寒、有湿痰者不宜食用'
  },
  {
    id: 20,
    name: '党参',
    image: 'images/null (5)(1).png',
    nature: '甘、平',
    meridian: '归脾、肺经',
    efficacy: '补中益气，健脾益肺',
    suitable: '脾肺气虚、食少倦怠、咳嗽虚喘',
    taboo: '实证热盛者不宜食用'
  },
  {
    id: 21,
    name: '白术',
    image: 'images/1 (1).png',
    nature: '甘、苦、温',
    meridian: '归脾、胃经',
    efficacy: '健脾益气，燥湿利水，止汗安胎',
    suitable: '脾虚食少、腹胀泄泻、痰饮眩悸',
    taboo: '阴虚内热及津液亏耗者不宜食用'
  },
  {
    id: 22,
    name: '甘草',
    image: 'images/null (11)(1).png',
    nature: '甘、平',
    meridian: '归心、肺、脾、胃经',
    efficacy: '益气补中，清热解毒，调和诸药',
    suitable: '脾胃虚弱、心悸气短、咳嗽痰多',
    taboo: '湿盛胀满、水肿者不宜食用'
  },
  {
    id: 23,
    name: '人参',
    image: 'images/null (10)(1).png',
    nature: '甘、微苦、微温',
    meridian: '归脾、肺、心经',
    efficacy: '大补元气，复脉固脱，益气健脾',
    suitable: '体虚欲脱、肢冷脉微、脾虚食少',
    taboo: '实证、热证而正气不虚者不宜食用'
  },
  {
    id: 24,
    name: '三七',
    image: 'images/null (9)(1).png',
    nature: '甘、微苦、温',
    meridian: '归肝、胃经',
    efficacy: '散瘀止血，消肿定痛',
    suitable: '各种出血证、瘀血肿痛、跌打损伤',
    taboo: '孕妇慎用'
  }
];

function renderMaterialCards() {
  const container = document.getElementById('material-container');
  if (!container) return;

  materialData.forEach(material => {
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="flip-card-image" style="background: url('${material.image}') center/cover;"></div>
          <div class="flip-card-name">${material.name}</div>
        </div>
        <div class="flip-card-back">
          <h4 style="color: #4A3728; margin-bottom: 15px;">${material.name}</h4>
          <div style="font-size: 0.9rem; line-height: 1.8; color: #5C4A3D;">
            <p><strong style="color: #4A3728;">性味：</strong>${material.nature}</p>
            <p><strong style="color: #4A3728;">归经：</strong>${material.meridian}</p>
            <p><strong style="color: #4A3728;">功效：</strong>${material.efficacy}</p>
            <p><strong style="color: #4A3728;">适用：</strong>${material.suitable}</p>
            <p><strong style="color: #A05252;">禁忌：</strong>${material.taboo}</p>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderMaterialCards);

// ===== Parallax 视差效果 - 图片从上往下展开 =====
const parallaxBanner = document.getElementById('parallax-banner');
const parallaxImage = document.getElementById('parallax-image');

window.addEventListener('scroll', () => {
  if (!parallaxBanner || !parallaxImage) return;
  
  const bannerRect = parallaxBanner.getBoundingClientRect();
  const bannerTop = bannerRect.top;
  const bannerHeight = bannerRect.height;
  
  // 图片容器高度是banner的200%，最大移动距离是banner高度的50%
  const maxTranslate = bannerHeight * 0.5;
  
  // 计算滚动进度：从banner完全可见到完全不可见
  const scrollProgress = Math.max(0, Math.min(1, 1 - (bannerTop / window.innerHeight)));
  
  // 向下滚动时，图片向上移动（负值），实现从上往下展开的效果
  const translateY = -scrollProgress * maxTranslate;
  
  parallaxImage.style.transform = `translateY(${translateY}px)`;
});

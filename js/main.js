function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  images.forEach(img => {
    imageObserver.observe(img);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function toggleAudio(button) {
  button.classList.toggle('playing');
  const icon = button.querySelector('i');
  const progressBar = button.parentElement.querySelector('.audio-progress-bar');
  
  if (button.classList.contains('playing')) {
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      progressBar.style.width = `${progress}%`;
      
      if (progress >= 100) {
        clearInterval(interval);
        button.classList.remove('playing');
        icon.classList.remove('fa-pause');        icon.classList.add('fa-play');
        progressBar.style.width = '0%';
      }
    }, 200);
    
    button.audioInterval = interval;
  } else {
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
    progressBar.style.width = '0%';
    if (button.audioInterval) {
      clearInterval(button.audioInterval);
    }
  }
}

let currentSlide = 0;
let slideInterval;
let isAutoPlaying = true;

function initCarousel() {
  const wrapper = document.getElementById('carousel-wrapper');
  const container = document.querySelector('.carousel-container');
  
  if (!wrapper) return;
  
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  
  function goToSlide(index) {
    currentSlide = index;
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(currentSlide);
  }
  
  function startAutoPlay() {
    if (!isAutoPlaying) return;
    slideInterval = setInterval(nextSlide, 4000);
  }
  
  function stopAutoPlay() {
    clearInterval(slideInterval);
  }
  
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
  window.goToSlide = goToSlide;
  
  container.addEventListener('mouseenter', () => {
    isAutoPlaying = false;
    stopAutoPlay();
  });
  
  container.addEventListener('mouseleave', () => {
    isAutoPlaying = true;
    startAutoPlay();
  });
  
  let touchStartX = 0;
  let touchEndX = 0;
  
  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    isAutoPlaying = false;
    stopAutoPlay();
  });
  
  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    isAutoPlaying = true;
    startAutoPlay();
  });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }
  
  startAutoPlay();
}

// 视频播放函数
function playVideo(videoId) {
  const modal = document.getElementById('video-modal');
  const videoIframe = document.getElementById('video-iframe');
  const modalTitle = document.getElementById('video-modal-title');
  
  const videoData = {
    video1: { title: '中医望闻问切入门', src: 'https://player.bilibili.com/player.html?bvid=BV1DJ9qYAEhH&autoplay=1' },
    video2: { title: '十二经络详解与养生', src: 'https://player.bilibili.com/player.html?bvid=BV1SJ5x6xENb&autoplay=1' },
    video3: { title: '七情与五脏的关系', src: 'https://player.bilibili.com/player.html?bvid=BV1yW4y1t7nw&autoplay=1' },
    video4: { title: '舌诊快速入门', src: 'https://player.bilibili.com/player.html?bvid=BV1dJ4m1p7pG&autoplay=1' }
  };
  
  const data = videoData[videoId];
  if (data) {
    videoIframe.src = data.src;
    modalTitle.textContent = data.title;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeVideo() {
  const modal = document.getElementById('video-modal');
  const videoIframe = document.getElementById('video-iframe');
  modal.classList.remove('active');
  videoIframe.src = '';
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  initLazyLoad();
  initSmoothScroll();
  initCarousel();
  initDailyRecommendation();
  
  // ESC键关闭视频弹窗
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideo();
    }
  });
});

// ===== 养生技巧弹窗 =====
function showHealthTip(category, title, text) {
  const modal = document.getElementById('health-tip-modal');
  const categoryEl = document.getElementById('tip-category');
  const titleEl = document.getElementById('tip-title');
  const textEl = document.getElementById('tip-text');
  
  if (modal && categoryEl && titleEl && textEl) {
    categoryEl.textContent = category;
    titleEl.textContent = title;
    textEl.textContent = text;
    modal.classList.add('active');
  }
}

function closeHealthTip() {
  const modal = document.getElementById('health-tip-modal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// ===== 分类展开/收起功能 =====
function toggleCategory(categoryId) {
  // 获取当前点击的按钮和展开区域
  const btn = document.querySelector(`[onclick="toggleCategory('${categoryId}')"]`);
  const area = document.getElementById(`area-${categoryId}`);
  
  // 获取所有按钮和展开区域
  const allBtns = document.querySelectorAll('.category-btn');
  const allAreas = document.querySelectorAll('.expand-area');
  
  // 如果当前按钮已经激活，点击则收起
  if (btn.classList.contains('active')) {
    btn.classList.remove('active');
    area.classList.remove('show');
  } else {
    // 先收起所有其他区域
    allBtns.forEach(b => b.classList.remove('active'));
    allAreas.forEach(a => a.classList.remove('show'));
    
    // 再展开当前区域
    btn.classList.add('active');
    area.classList.add('show');
  }
}

// ===== 季节古方数据 =====
const seasonalPrescriptions = {
  '春': [
    {
      name: '四君子汤',
      origin: '宋代经典健脾养肝名方',
      ingredients: '人参、白术、茯苓、甘草',
      efficacy: '益气健脾、疏肝和胃',
      suitable: '春季肝郁脾虚、乏力、食欲不振',
      usage: '药材加水煎煮，分早晚温服，适合春日长期轻调养'
    },
    {
      name: '梳头发不落方',
      origin: '明代民间养发古方',
      ingredients: '侧柏叶、榧子肉、胡桃肉',
      efficacy: '滋养头皮、固发防脱',
      suitable: '头皮干涩、日常掉发、发质干枯',
      usage: '药材研粉擦敷头皮，或煎取药汁梳理发丝'
    }
  ],
  '夏': [
    {
      name: '莲子清心饮',
      origin: '传统夏日养心食疗古方',
      ingredients: '莲子、百合、绿豆、冰糖',
      efficacy: '清心降火、安神除烦',
      suitable: '夏季闷热心烦、入睡困难',
      usage: '食材一同慢炖成甜汤，日常可作加餐食用'
    },
    {
      name: '清暑醒神香方',
      origin: '清代避暑香佩古方',
      ingredients: '薄荷、白檀香、杭白菊、艾草',
      efficacy: '清心解暑、舒缓头昏犯困',
      suitable: '暑热天气头昏、心烦、精神不振',
      usage: '药材混匀研细，装入香囊随身佩戴或放置室内熏香'
    }
  ],
  '秋': [
    {
      name: '秋梨润肺膏方',
      origin: '传统秋燥食疗名方',
      ingredients: '雪梨、百合、杏仁、冰糖',
      efficacy: '滋阴润肺、生津利咽',
      suitable: '秋燥干咳、咽喉干痒',
      usage: '食材慢熬收膏，日常取适量温水冲服'
    },
    {
      name: '桂花润肌香方',
      origin: '古代秋令润肤古方',
      ingredients: '干桂花、甜杏仁、玉竹',
      efficacy: '润燥养肤、缓解皮肤干燥',
      suitable: '秋季皮肤干燥起皮',
      usage: '药材煮取药汁，放温后擦拭肌肤，也可做成小香包熏蒸护肤'
    }
  ],
  '冬': [
    {
      name: '当归生姜羊肉汤',
      origin: '《金匮要略》温阳经典方',
      ingredients: '羊肉、当归、生姜、红枣',
      efficacy: '温补肾阳、温中散寒',
      suitable: '冬季畏寒怕冷、手脚冰凉',
      usage: '食材共同煲汤，冬季每周食用1-2次即可'
    },
    {
      name: '温肾泡脚古方',
      origin: '民间冬日温养古方',
      ingredients: '艾叶、生姜、肉桂、丁香',
      efficacy: '温经散寒、固本养肾',
      suitable: '下肢寒气重、冬日睡眠质量差',
      usage: '药材加水煮出浓药汤，放至适宜温度后每晚泡脚20分钟'
    }
  ]
};

// 获取当前季节
function getCurrentSeason() {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return '春';
  if (month >= 6 && month <= 8) return '夏';
  if (month >= 9 && month <= 11) return '秋';
  return '冬';
}

// ===== 今日推荐功能 =====
function initDailyRecommendation() {
  const container = document.getElementById('daily-herb-container');
  if (!container) return;
  
  // 从material.js获取食材数据
  if (typeof materialData !== 'undefined' && materialData.length > 0) {
    // 使用日期作为种子，确保每天显示同一内容
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const index = seed % materialData.length;
    const herb = materialData[index];
    
    // 更新药材卡片内容
    document.getElementById('daily-herb-image').src = herb.image;
    document.getElementById('daily-herb-image').alt = herb.name;
    document.getElementById('daily-herb-name').textContent = herb.name;
    document.getElementById('daily-herb-nature').textContent = `性味：${herb.nature}`;
    document.getElementById('daily-herb-meridian').textContent = `归经：${herb.meridian}`;
    document.getElementById('daily-herb-efficacy').textContent = `功效：${herb.efficacy}`;
    document.getElementById('daily-herb-desc').textContent = `适用：${herb.suitable}`;
  }
  
  // 更新古方卡片内容
  updateDailyPrescription();
}

// 更新每日古方推荐
function updateDailyPrescription() {
  const card = document.getElementById('daily-prescription-card');
  if (!card) return;
  
  // 获取当前季节的古方列表
  const season = getCurrentSeason();
  const seasonPrescriptions = seasonalPrescriptions[season];
  
  // 根据日期交替显示不同古方
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const index = seed % seasonPrescriptions.length;
  const prescription = seasonPrescriptions[index];
  
  // 更新古方卡片内容
  card.querySelector('.daily-herb-name').textContent = prescription.name;
  card.querySelector('.daily-herb-nature').textContent = `出处：${prescription.origin}`;
  card.querySelector('.daily-herb-meridian').textContent = `组成：${prescription.ingredients}`;
  card.querySelector('.daily-herb-efficacy').textContent = `功效：${prescription.efficacy}`;
  card.querySelector('.daily-herb-desc').textContent = `适用：${prescription.suitable}`;
  
  const usageEl = card.querySelector('.daily-herb-usage');
  if (usageEl) {
    usageEl.textContent = `用法：${prescription.usage}`;
  }
}

// ===== 五行体质罗盘旋转功能 =====
let isSpinning = false;

function spinCompass() {
  if (isSpinning) return;
  
  const compass = document.getElementById('compass');
  const pointer = compass.querySelector('.compass-pointer');
  
  if (!compass) return;
  
  isSpinning = true;
  
  // 添加旋转动画
  compass.classList.add('spinning');
  
  // 随机旋转指针
  const randomRotation = Math.floor(Math.random() * 360) + 720; // 随机停顿位置
  pointer.style.transform = `translate(-50%, -100%) rotate(${randomRotation}deg)`;
  
  // 动画结束后跳转到测评页面
  setTimeout(() => {
    compass.classList.remove('spinning');
    window.location.href = 'test.html';
  }, 2000);
}
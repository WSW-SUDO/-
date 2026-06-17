/**
 * 国风交互式动画系统 - JavaScript交互逻辑
 * 配色限定：赭石(#8B4513)、茶褐(#D2691E)、淡青(#7CB9E8)
 * 所有动画时长控制在400-700ms
 */

// ===== 1. 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
  initMountainBg();
  initInkTrail();
  initRippleEffect();
  initCompassRotate();
  initSeasonAnimations();
  initFormAnimations();
  initScrollAnimations();
});

// ===== 2. 山水纹理背景流动 =====
function initMountainBg() {
  // 检查是否移动端
  if (window.innerWidth <= 768) return;
  
  // 创建山水背景元素
  const mountainBg = document.createElement('div');
  mountainBg.className = 'mountain-bg';
  mountainBg.id = 'mountain-bg';
  document.body.insertBefore(mountainBg, document.body.firstChild);
}

// ===== 4. 墨迹拖尾效果（仅PC端） =====
function initInkTrail() {
  // 检查是否移动端
  if (window.innerWidth <= 768) return;
  
  let lastX = 0;
  let lastY = 0;
  let trailCount = 0;
  const maxTrails = 5;
  
  document.addEventListener('mousemove', function(e) {
    // 限制拖尾数量
    if (trailCount >= maxTrails) return;
    
    const distance = Math.sqrt(Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2));
    
    // 只有移动距离超过一定值才创建拖尾
    if (distance > 20) {
      createInkTrail(e.clientX, e.clientY);
      trailCount++;
      
      // 500ms后重置计数
      setTimeout(function() {
        trailCount = Math.max(0, trailCount - 1);
      }, 500);
      
      lastX = e.clientX;
      lastY = e.clientY;
    }
  });
}

function createInkTrail(x, y) {
  const trail = document.createElement('div');
  trail.className = 'ink-trail';
  trail.style.left = x + 'px';
  trail.style.top = y + 'px';
  document.body.appendChild(trail);
  
  // 动画结束后移除元素
  setTimeout(function() {
    trail.remove();
  }, 500);
}

// ===== 5. 按钮点击涟漪效果 =====
function initRippleEffect() {
  // 为所有按钮添加涟漪效果
  const buttons = document.querySelectorAll('button, .btn, .season-tab, .category-btn, .audio-btn');
  
  buttons.forEach(function(btn) {
    btn.classList.add('btn-ripple');
    
    btn.addEventListener('click', function(e) {
      // 移除之前的动画类
      this.classList.remove('ripple-active');
      
      // 强制重绘
      void this.offsetWidth;
      
      // 添加动画类
      this.classList.add('ripple-active');
      
      // 动画结束后移除类
      setTimeout(function() {
        btn.classList.remove('ripple-active');
      }, 600);
    });
  });
  
  // 为功能确认按钮添加草本舒展动画
  const confirmBtns = document.querySelectorAll('.submit-btn, .confirm-btn, .action-btn');
  confirmBtns.forEach(function(btn) {
    btn.classList.add('btn-herb-grow');
  });
}

// ===== 6. 五行圆环旋转动画 =====
function initCompassRotate() {
  const compass = document.querySelector('.compass-container, .five-element-compass, #compass');
  
  if (compass) {
    const startBtn = compass.querySelector('.start-btn, button');
    
    if (startBtn) {
      startBtn.addEventListener('click', function(e) {
        compass.classList.add('compass-rotate');
        
        // 动画结束后移除类
        setTimeout(function() {
          compass.classList.remove('compass-rotate');
        }, 800);
      });
    }
  }
  
  // 体质测评按钮点击时五行圆环旋转
  const testBtns = document.querySelectorAll('.test-btn, .assessment-btn');
  testBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (compass) {
        compass.classList.add('compass-rotate');
        setTimeout(function() {
          compass.classList.remove('compass-rotate');
        }, 800);
      }
    });
  });
}

// ===== 7. 四季入场动画 =====
function initSeasonAnimations() {
  const seasonSections = document.querySelectorAll('.season-section, .season-row, [data-season]');
  
  // 创建Intersection Observer
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const section = entry.target;
        const season = section.getAttribute('data-season') || getSeasonFromText(section);
        
        // 根据季节添加对应动画类
        switch(season) {
          case '春':
          case 'spring':
            section.classList.add('season-spring');
            break;
          case '夏':
          case 'summer':
            section.classList.add('season-summer');
            break;
          case '秋':
          case 'autumn':
            section.classList.add('season-autumn');
            break;
          case '冬':
          case 'winter':
            section.classList.add('season-winter');
            break;
          default:
            section.classList.add('season-spring');
        }
        
        // 移除观察
        observer.unobserve(section);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // 观察所有季节区块
  seasonSections.forEach(function(section) {
    observer.observe(section);
  });
}

function getSeasonFromText(element) {
  const text = element.textContent || '';
  if (text.includes('春') || text.includes('spring')) return '春';
  if (text.includes('夏') || text.includes('summer')) return '夏';
  if (text.includes('秋') || text.includes('autumn')) return '秋';
  if (text.includes('冬') || text.includes('winter')) return '冬';
  return '春';
}

// ===== 8. 表单交互动画 =====
function initFormAnimations() {
  const forms = document.querySelectorAll('form');
  forms.forEach(function(form) {
    // 监听提交事件
    form.addEventListener('submit', function(e) {
      const submitBtn = form.querySelector('[type="submit"], .submit-btn');

      if (submitBtn) {
        submitBtn.classList.add('submit-success');

        // 动画结束后移除类
        setTimeout(function() {
          submitBtn.classList.remove('submit-success');
        }, 1000);
      }
    });
  });

  // 输入框聚焦动画
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(function(input) {
    input.addEventListener('focus', function() {
      this.classList.add('ink-line-active');
    });

    input.addEventListener('blur', function() {
      this.classList.remove('ink-line-active');
    });
  });
}

// ===== 9. 滚动动画触发 =====
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.recipe-card, .material-card, .news-card, .course-card');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  animatedElements.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ===== 10. 中医养生页面滚动动画 =====
function initClassPageAnimations() {
  // 检查是否在class.html页面
  if (!document.querySelector('.season-health-section')) return;

  // 季节板块滚动入场
  const seasonRows = document.querySelectorAll('.season-row');
  const seasonObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // 为该季节的文本内容添加延迟动画
        const seasonText = entry.target.querySelector('.season-text');
        if (seasonText) {
          const title = seasonText.querySelector('.season-title');
          const citation = seasonText.querySelector('.season-citation');
          const meta = seasonText.querySelector('.season-meta');
          const desc = seasonText.querySelector('.season-desc');
          const detailTitles = seasonText.querySelectorAll('.detail-title');
          const detailContents = seasonText.querySelectorAll('.detail-content');

          // 依次触发动画
          if (title) title.style.animationDelay = '0s';
          if (citation) citation.style.animationDelay = '0.1s';
          if (meta) meta.style.animationDelay = '0.15s';
          if (desc) desc.style.animationDelay = '0.2s';

          // 四个板块依次上浮
          detailTitles.forEach(function(title, index) {
            title.style.animationDelay = (0.25 + index * 0.1) + 's';
          });

          detailContents.forEach(function(content, index) {
            content.style.animationDelay = (0.3 + index * 0.1) + 's';
          });
        }

        seasonObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  seasonRows.forEach(function(row) {
    seasonObserver.observe(row);
  });

  // 经络板块滚动入场
  const meridianSections = document.querySelectorAll('.meridian-section');
  const meridianObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // 经络项目依次淡入
        const items = entry.target.querySelectorAll('.meridian-item, .acupoint-item');
        items.forEach(function(item, index) {
          item.style.animationDelay = (index * 0.1) + 's';
        });

        meridianObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  meridianSections.forEach(function(section) {
    meridianObserver.observe(section);
  });

  // 课程卡片滚动入场
  const courseCards = document.querySelectorAll('.course-card');
  const courseObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        courseObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -30px 0px'
  });

  courseCards.forEach(function(card) {
    courseObserver.observe(card);
  });
}

// 页面加载完成后初始化中医养生页面动画
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(initClassPageAnimations, 100);
});

// ===== 11. 药膳卡片五行属性标记 =====
function markElementCards() {
  const cards = document.querySelectorAll('.recipe-card, .mini-recipe-card');
  cards.forEach(function(card) {
    const name = card.querySelector('.recipe-name, .mini-recipe-name');
    if (!name) return;
    
    const text = name.textContent;
    
    // 根据药膳名称判断五行属性
    if (text.includes('山药') || text.includes('小米') || text.includes('南瓜')) {
      card.setAttribute('data-element', '土');
    } else if (text.includes('绿豆') || text.includes('莲子') || text.includes('百合')) {
      card.setAttribute('data-element', '火');
    } else if (text.includes('枸杞') || text.includes('菊花') || text.includes('玫瑰')) {
      card.setAttribute('data-element', '木');
    } else if (text.includes('银耳') || text.includes('雪梨') || text.includes('百合')) {
      card.setAttribute('data-element', '金');
    } else if (text.includes('黑豆') || text.includes('当归') || text.includes('羊肉')) {
      card.setAttribute('data-element', '水');
    }
  });
}

// 页面加载完成后标记卡片
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(markElementCards, 100);
});

// ===== 11. 响应式处理 =====
window.addEventListener('resize', function() {
  // 移动端关闭特效
  if (window.innerWidth <= 768) {
    const vineProgress = document.getElementById('vine-progress');
    const mountainBg = document.getElementById('mountain-bg');
    
    if (vineProgress) vineProgress.style.display = 'none';
    if (mountainBg) mountainBg.style.display = 'none';
    
    // 移除所有墨迹拖尾
    document.querySelectorAll('.ink-trail').forEach(function(trail) {
      trail.remove();
    });
  } else {
    const vineProgress = document.getElementById('vine-progress');
    const mountainBg = document.getElementById('mountain-bg');
    
    if (vineProgress) vineProgress.style.display = 'block';
    if (mountainBg) mountainBg.style.display = 'block';
  }
});

// ===== 12. 导出函数（供其他模块调用） =====
window.TCMAnimation = {
  createInkTrail: createInkTrail,
  triggerRipple: function(element) {
    element.classList.remove('ripple-active');
    void element.offsetWidth;
    element.classList.add('ripple-active');
    setTimeout(function() {
      element.classList.remove('ripple-active');
    }, 600);
  },
  triggerCompassRotate: function() {
    const compass = document.querySelector('.compass-container, .five-element-compass, #compass');
    if (compass) {
      compass.classList.add('compass-rotate');
      setTimeout(function() {
        compass.classList.remove('compass-rotate');
      }, 800);
    }
  },
  triggerSteamFeedback: function(element) {
    element.classList.add('submit-success');
    setTimeout(function() {
      element.classList.remove('submit-success');
    }, 1000);
  }
};
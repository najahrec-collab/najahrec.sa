const defaultResumes = [
  {
    fullname: "سارة م.",
    nationality: "ethiopia",
    job: "maid",
    experience: 5,
    age: 28,
    salary: 1200,
    photo: "images/cv_sara.jpg",
    religion: "مسيحية",
    education: "ثانوي",
    marital: "عزباء",
    height: "160 سم",
    weight: "58 كجم",
    skills: "الطهي، التنظيف العالي، الكي، الغسيل",
    languages: "العربية (ممتاز)، الأمهرية (اللغة الأم)",
    prevExp: "3 سنوات بالرياض، سنتين ببيروت",
    status: "available"
  },
  {
    fullname: "ماري ك.",
    nationality: "kenya",
    job: "maid",
    experience: 0,
    age: 24,
    salary: 900,
    photo: "images/cv_mary.jpg",
    religion: "مسيحية",
    education: "ثانوي",
    marital: "متزوجة (طفلين)",
    height: "158 سم",
    weight: "62 كجم",
    skills: "العناية بالأطفال، التنظيف، الغسيل والترتيب",
    languages: "الإنجليزية (ممتاز)، السواحيلية (اللغة الأم)",
    prevExp: "حديثة التخرج (لا توجد خبرة سابقة في الخليج)",
    status: "available"
  },
  {
    fullname: "جون أ.",
    nationality: "uganda",
    job: "driver",
    experience: 4,
    age: 32,
    salary: 900,
    photo: "images/cv_john.jpg",
    religion: "مسيحي",
    education: "ثانوي + رخصة قيادة معتمدة",
    marital: "أعزب",
    height: "175 سم",
    weight: "70 كجم",
    skills: "القيادة الآمنة، صيانة المركبات الخفيفة، استخدام الـ GPS",
    languages: "الإنجليزية (جيد جداً)، السواحيلية",
    prevExp: "٤ سنوات في كمبالا وسنتين بالدمام",
    status: "available"
  },
  {
    fullname: "جريس ب.",
    nationality: "philippines",
    job: "babysitter",
    experience: 6,
    age: 35,
    salary: 1500,
    photo: "images/cv_grace.jpg",
    religion: "مسيحية",
    education: "دبلوم جامعي",
    marital: "متزوجة (طفل واحد)",
    height: "155 سم",
    weight: "55 كجم",
    skills: "رعاية الرضع، المساعدة في الواجبات، الإسعافات الأولية، طهي طعام أطفال",
    languages: "الإنجليزية (ممتاز)، التغالوغ، مبادئ العربية",
    prevExp: "4 سنوات بدبي، سنتين بمانيلا",
    status: "available"
  },
  {
    fullname: "كومار س.",
    nationality: "india",
    job: "driver",
    experience: 8,
    age: 39,
    salary: 1500,
    photo: "images/cv_kumar.jpg",
    religion: "هندوسي",
    education: "متوسط",
    marital: "متزوج (٣ أطفال)",
    height: "170 سم",
    weight: "75 كجم",
    skills: "خبرة قيادة في الخليج، معرفة تامة بشوارع الرياض، قيادة سيارات فاخرة",
    languages: "العربية (ممتاز)، الهندية",
    prevExp: "٦ سنوات بالرياض، سنتين بمومباي",
    status: "available"
  },
  {
    fullname: "فاطمة ب.",
    nationality: "ethiopia",
    job: "chef",
    experience: 7,
    age: 33,
    salary: 1200,
    photo: "images/cv_fatima.jpg",
    religion: "مسلمة",
    education: "شهادة مهنية طهي",
    marital: "عزباء",
    height: "162 سم",
    weight: "60 كجم",
    skills: "طهي الأكلات الشعبية السعودية، المعجنات والمخبوزات، تنظيم وإدارة المطبخ",
    languages: "العربية (ممتاز)، الأمهرية",
    prevExp: "٥ سنوات بالدمام، سنتين بأديس أبابا",
    status: "available"
  },
  {
    fullname: "أنيشا د.",
    nationality: "srilanka",
    job: "maid",
    experience: 4,
    age: 31,
    salary: 1200,
    photo: "images/cv_mary.jpg",
    religion: "بودية",
    education: "ثانوي",
    marital: "متزوجة",
    height: "156 سم",
    weight: "58 كجم",
    skills: "تنظيف المنزل، الكي والغسيل، رعاية الأطفال وتجهيز لوازم المطبخ",
    languages: "الإنجليزية (جيد جداً)، العربية (مبادئ)",
    prevExp: "سنتين بالمنامة، سنتين بكولومبو",
    status: "available"
  },
  {
    fullname: "أحمد ع.",
    nationality: "sudan",
    job: "driver",
    experience: 5,
    age: 34,
    salary: 1500,
    photo: "images/cv_john.jpg",
    religion: "مسلم",
    education: "ثانوي + رخصة نقل خفيف",
    marital: "متزوج",
    height: "178 سم",
    weight: "75 كجم",
    skills: "القيادة الآمنة، مهارات الميكانيكا الخفيفة، معرفة تامة بالخرائط والـ GPS",
    languages: "العربية (اللغة الأم)، الإنجليزية (مبادئ)",
    prevExp: "3 سنوات بجدة، سنتين بالخرطوم",
    status: "available"
  },
  {
    fullname: "بيوم م.",
    nationality: "tanzania",
    job: "maid",
    experience: 2,
    age: 26,
    salary: 900,
    photo: "images/cv_sara.jpg",
    religion: "مسيحية",
    education: "متوسط",
    marital: "عزباء",
    height: "160 سم",
    weight: "57 كجم",
    skills: "التنظيف، الكي، الغسيل، ترتيب وتنسيق الحدائق المنزلية",
    languages: "السواحيلية (اللغة الأم)، الإنجليزية (مبادئ)",
    prevExp: "سنتين بعُمان",
    status: "available"
  },
  {
    fullname: "محمد ر.",
    nationality: "bangladesh",
    job: "houseboy",
    experience: 3,
    age: 29,
    salary: 1000,
    photo: "images/cv_kumar.jpg",
    religion: "مسلم",
    education: "ثانوي",
    marital: "متزوج",
    height: "168 سم",
    weight: "65 كجم",
    skills: "رعاية الحديقة، صيانة خفيفة، تنظيف مجالس وضيافة خارجية",
    languages: "العربية (جيد جداً)، البنغالية",
    prevExp: "3 سنوات بالرياض",
    status: "available"
  },
  {
    fullname: "كريستيان ن.",
    nationality: "burundi",
    job: "maid",
    experience: 0,
    age: 25,
    salary: 900,
    photo: "images/cv_sara.jpg",
    religion: "مسيحية",
    education: "ثانوي",
    marital: "عزباء",
    height: "155 سم",
    weight: "54 كجم",
    skills: "التنظيف الشامل، الكي والغسيل، رعاية الأطفال والمساعدة المنزلية العامة",
    languages: "الفرنسية (جيد)، الكيروندية (اللغة الأم)",
    prevExp: "حديثة التخرج (لا توجد خبرة سابقة في الخليج)",
    status: "available"
  }
];

function getResumes() {
  let stored = localStorage.getItem('alnajah_resumes');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed.length > 0 && !('salary' in parsed[0])) {
        localStorage.removeItem('alnajah_resumes');
        stored = null;
      }
    } catch(e) {
      localStorage.removeItem('alnajah_resumes');
      stored = null;
    }
  }
  if (!stored) {
    localStorage.setItem('alnajah_resumes', JSON.stringify(defaultResumes));
  }
  return JSON.parse(localStorage.getItem('alnajah_resumes') || '[]');
}

let activeResumes = getResumes();

function renderResumes() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const nat = document.getElementById('nationalityFilter').value;
  const job = document.getElementById('jobFilter').value;
  const exp = document.getElementById('experienceFilter').value;
  const sort = document.getElementById('sortSelector').value;
  
  let filtered = activeResumes.filter(cv => {
    const matchQuery = !query || 
                       cv.fullname.toLowerCase().includes(query) ||
                       cv.skills.toLowerCase().includes(query) ||
                       cv.religion.toLowerCase().includes(query);
    const matchNat = !nat || cv.nationality === nat;
    const matchJob = !job || cv.job === job;
    
    let matchExp = true;
    if (exp === "fresh") matchExp = cv.experience === 0;
    else if (exp === "1-5") matchExp = cv.experience >= 1 && cv.experience <= 5;
    else if (exp === "5+") matchExp = cv.experience > 5;
    
    return matchQuery && matchNat && matchJob && matchExp;
  });
  
  if (sort === "age-asc") filtered.sort((a, b) => a.age - b.age);
  else if (sort === "age-desc") filtered.sort((a, b) => b.age - a.age);
  else if (sort === "exp-desc") filtered.sort((a, b) => b.experience - a.experience);
  
  const container = document.getElementById('resumesGrid');
  container.innerHTML = "";
  
  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px; font-weight: 700; color: var(--text-muted);">عذرًا، لا توجد سير ذاتية مطابقة لخيارات التصفية الحالية.</div>`;
    return;
  }
  
  filtered.forEach(cv => {
    let jobLabel = "عاملة منزلية";
    if (cv.job === 'driver') jobLabel = "سائق خاص";
    else if (cv.job === 'babysitter') jobLabel = "مربية أطفال";
    else if (cv.job === 'chef') jobLabel = "طباخ/ة منزلي";
    else if (cv.job === 'houseboy') jobLabel = "عامل منزلي";
    else if (cv.job === 'nurse') jobLabel = "ممرض/ة منزلي";
    else if (cv.job === 'elderly') jobLabel = "رعاية كبار السن";
    else if (cv.job === 'guard') jobLabel = "حارس منزلي";
    else if (cv.job === 'gardener') jobLabel = "مزارع/بستاني";
    
    let flagUrl = "https://flagcdn.com/w40/sa.png";
    let natLabel = "المملكة العربية السعودية";
    if (cv.nationality === 'ethiopia') { natLabel = "إثيوبيا"; flagUrl = "https://flagcdn.com/w40/et.png"; }
    else if (cv.nationality === 'kenya') { natLabel = "كينيا"; flagUrl = "https://flagcdn.com/w40/ke.png"; }
    else if (cv.nationality === 'uganda') { natLabel = "أوغندا"; flagUrl = "https://flagcdn.com/w40/ug.png"; }
    else if (cv.nationality === 'philippines') { natLabel = "الفلبين"; flagUrl = "https://flagcdn.com/w40/ph.png"; }
    else if (cv.nationality === 'tanzania') { natLabel = "تنزانيا"; flagUrl = "https://flagcdn.com/w40/tz.png"; }
    else if (cv.nationality === 'bangladesh') { natLabel = "بنغلاديش"; flagUrl = "https://flagcdn.com/w40/bd.png"; }
    else if (cv.nationality === 'srilanka') { natLabel = "سريلانكا"; flagUrl = "https://flagcdn.com/w40/lk.png"; }
    else if (cv.nationality === 'india') { natLabel = "الهند"; flagUrl = "https://flagcdn.com/w40/in.png"; }
    else if (cv.nationality === 'sudan') { natLabel = "السودان"; flagUrl = "https://flagcdn.com/w40/sd.png"; }
    else if (cv.nationality === 'burundi') { natLabel = "بوروندي"; flagUrl = "https://flagcdn.com/w40/bi.png"; }
    
    const badgeText = cv.status === 'reserved' ? 'محجوزة' : 'متاحة للحجز';
    const badgeClass = cv.status === 'reserved' ? 'cv-badge-status reserved' : 'cv-badge-status available';
    
    const card = document.createElement('div');
    card.className = "cv-card";
    card.innerHTML = `
      <div class="cv-photo-wrapper">
        <span class="${badgeClass}"><span class="dot"></span> ${badgeText}</span>
        <img src="${cv.photo}" alt="${cv.fullname}" onerror="this.src='images/logo.jpg'" />
      </div>
      <div class="cv-details-box">
        <div class="cv-title-row">
          <h3 class="cv-name">${cv.fullname}</h3>
          <span class="cv-nationality-badge"><img src="${flagUrl}" alt="${natLabel}" style="width: 20px; border-radius: 2px;" /> ${natLabel}</span>
        </div>
        <table class="cv-table">
          <tr><td>المهنة</td><td>${jobLabel}</td></tr>
          <tr><td>العمر</td><td>${cv.age} عاماً</td></tr>
          <tr><td>الديانة</td><td>${cv.religion}</td></tr>
          <tr><td>الخبرة</td><td>${cv.experience === 0 ? 'حديثة تخرج' : cv.experience + ' سنوات'}</td></tr>
          <tr><td>الراتب الشهري</td><td>${cv.salary ? cv.salary.toLocaleString('en-US') + ' ر.س' : 'حسب الاتفاق'}</td></tr>
        </table>
        <div class="cv-card-actions">
          <button type="button" class="btn-cv details" onclick="showCvDetails('${cv.fullname}')">التفاصيل الكاملة</button>
          <a href="https://wa.me/966555021298?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8a%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B3%D9%8A%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B0%D8%A7%D8%AA%D9%8A%D8%A9%20%D9%84%D9%84%D9%85%D8%B1%D8%B4%D8%AD%D8%A9%20(${encodeURIComponent(cv.fullname)})" target="_blank" rel="noopener noreferrer" class="btn-cv reserve">حجز واستفسار</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

window.showCvDetails = function(name) {
  const cv = activeResumes.find(c => c.fullname === name);
  if (!cv) return;
  
  let jobLabel = "عاملة منزلية";
  if (cv.job === 'driver') jobLabel = "سائق خاص";
  else if (cv.job === 'babysitter') jobLabel = "مربية أطفال";
  else if (cv.job === 'chef') jobLabel = "طباخ/ة منزلي";
  
  let flagUrl = "https://flagcdn.com/w40/sa.png";
  let natLabel = "المملكة العربية السعودية";
  if (cv.nationality === 'ethiopia') { natLabel = "إثيوبيا"; flagUrl = "https://flagcdn.com/w40/et.png"; }
  else if (cv.nationality === 'kenya') { natLabel = "كينيا"; flagUrl = "https://flagcdn.com/w40/ke.png"; }
  else if (cv.nationality === 'uganda') { natLabel = "أوغندا"; flagUrl = "https://flagcdn.com/w40/ug.png"; }
  else if (cv.nationality === 'philippines') { natLabel = "الفلبين"; flagUrl = "https://flagcdn.com/w40/ph.png"; }
  
  const modalHtml = `
    <div id="cvModal" class="modal open">
      <div class="modal-backdrop" onclick="closeCvModal()"></div>
      <div class="modal-container" style="max-width: 750px;">
        <div class="modal-header" style="background-color: var(--primary-color);">
          <h3 class="modal-header-title">تفاصيل السيرة الذاتية — ${cv.fullname}</h3>
          <button type="button" class="modal-close" onclick="closeCvModal()">&times;</button>
        </div>
        <div class="modal-body" style="padding: 30px;">
          <div class="cv-modal-body-grid">
            <div class="cv-modal-photo">
              <img src="${cv.photo}" alt="${cv.fullname}" onerror="this.src='images/logo.jpg'" />
            </div>
            <div class="cv-modal-info">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                <img src="${flagUrl}" alt="${natLabel}" style="width: 28px; border-radius: 3px;" />
                <h4 style="font-size: 1.4rem; font-weight: 800; color: var(--primary-color);">${cv.fullname} (${natLabel})</h4>
              </div>
              <div class="cv-info-grid">
                <div class="cv-info-item"><b>المهنة:</b> ${jobLabel}</div>
                <div class="cv-info-item"><b>العمر:</b> ${cv.age} عاماً</div>
                <div class="cv-info-item"><b>الديانة:</b> ${cv.religion}</div>
                <div class="cv-info-item"><b>التعليم:</b> ${cv.education}</div>
                <div class="cv-info-item"><b>الحالة الاجتماعية:</b> ${cv.marital}</div>
                <div class="cv-info-item"><b>الخبرة:</b> ${cv.experience === 0 ? 'حديثة تخرج' : cv.experience + ' سنوات'}</div>
                <div class="cv-info-item"><b>الراتب الشهري:</b> ${cv.salary ? cv.salary.toLocaleString('en-US') + ' ر.س' : 'حسب الاتفاق'}</div>
                <div class="cv-info-item"><b>الطول:</b> ${cv.height}</div>
                <div class="cv-info-item"><b>الوزن:</b> ${cv.weight}</div>
              </div>
              <div style="background-color: var(--bg-light); padding: 15px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 0.9rem; font-weight: 600;">
                <b>اللغات:</b> ${cv.languages}<br/>
                <b>المهارات:</b> ${cv.skills}<br/>
                <b>الخبرة السابقة:</b> ${cv.prevExp}
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a href="https://wa.me/966555021298?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8a%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B3%D9%82%20(${encodeURIComponent(cv.fullname)})" target="_blank" rel="noopener noreferrer" class="btn-gold" style="padding: 10px 40px;">حجز هذه السيرة الذاتية عبر واتساب</a>
        </div>
      </div>
    </div>
  `;
  
  const div = document.createElement('div');
  div.id = "cvModalWrapper";
  div.innerHTML = modalHtml;
  document.body.appendChild(div);
  document.body.style.overflow = 'hidden';
};

window.closeCvModal = function() {
  const wrapper = document.getElementById('cvModalWrapper');
  if (wrapper) {
    wrapper.remove();
    document.body.style.overflow = '';
  }
};

document.getElementById('searchInput').addEventListener('input', renderResumes);
document.getElementById('nationalityFilter').addEventListener('change', renderResumes);
document.getElementById('jobFilter').addEventListener('change', renderResumes);
document.getElementById('experienceFilter').addEventListener('change', renderResumes);
document.getElementById('sortSelector').addEventListener('change', renderResumes);

renderResumes();

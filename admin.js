const ADMIN_PASSWORD_HASH = "alnajah_admin";

document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('admin_logged') === 'true') {
    showDashboard();
  } else {
    showLogin();
  }
});

window.attemptLogin = function() {
  const passwordField = document.getElementById('adminPassword');
  const errorField = document.getElementById('loginError');
  if (passwordField.value.trim() === ADMIN_PASSWORD_HASH) {
    sessionStorage.setItem('admin_logged', 'true');
    errorField.style.display = 'none';
    passwordField.value = '';
    showDashboard();
  } else {
    errorField.style.display = 'block';
    passwordField.focus();
  }
};

window.togglePasswordVisibility = function(e) {
  const passwordField = document.getElementById('adminPassword');
  const toggleBtn = e.currentTarget;
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    toggleBtn.textContent = '🙈';
  } else {
    passwordField.type = 'password';
    toggleBtn.textContent = '👁️';
  }
};

document.getElementById('adminPassword').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') attemptLogin();
});

window.logout = function() {
  sessionStorage.removeItem('admin_logged');
  showLogin();
};

function showLogin() {
  document.getElementById('loginSection').style.display = 'flex';
  document.getElementById('dashboardSection').style.display = 'none';
}

function showDashboard() {
  document.getElementById('loginSection').style.display = 'none';
  document.getElementById('dashboardSection').style.display = 'block';
  loadTableData();
  loadPricingTable();
}

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

function saveResumes(data) {
  localStorage.setItem('alnajah_resumes', JSON.stringify(data));
  loadTableData();
}

function loadTableData() {
  const resumes = getResumes();
  const tbody = document.getElementById('resumesTableBody');
  tbody.innerHTML = '';
  
  let availableCount = 0;
  let reservedCount = 0;
  
  resumes.forEach((cv, idx) => {
    if (cv.status === 'available') availableCount++;
    else reservedCount++;
    
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
    
    const badgeText = cv.status === 'reserved' ? 'محجوزة' : 'متاحة';
    const badgeClass = cv.status === 'reserved' ? 'status-badge reserved' : 'status-badge available';
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${cv.photo}" class="table-avatar" onerror="this.src='images/logo.jpg'" /></td>
      <td style="font-weight: 800; color: #fff;">${cv.fullname}</td>
      <td>${jobLabel}</td>
      <td><span style="display: inline-flex; align-items: center; gap: 6px;"><img src="${flagUrl}" alt="${natLabel}" style="width: 20px; border-radius: 2px;" /> ${natLabel}</span></td>
      <td>${cv.age} عاماً</td>
      <td>${cv.experience === 0 ? 'جديدة' : cv.experience + ' سنوات'}</td>
      <td>${cv.religion}</td>
      <td style="font-weight: 700; color: var(--gold-light);">${cv.salary ? cv.salary.toLocaleString('en-US') + ' ر.س' : 'حسب الاتفاق'}</td>
      <td><span class="${badgeClass}" onclick="toggleStatus(${idx})">${badgeText}</span></td>
      <td>
        <div class="row-actions">
          <button type="button" class="btn-row edit" onclick="editCv(${idx})">تعديل</button>
          <button type="button" class="btn-row delete" onclick="deleteCv(${idx})">حذف</button>
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });
  
  document.getElementById('statTotal').innerText = resumes.length;
  document.getElementById('statAvailable').innerText = availableCount;
  document.getElementById('statReserved').innerText = reservedCount;
  const occupancyPercent = resumes.length > 0 ? Math.round((reservedCount / resumes.length) * 100) : 0;
  document.getElementById('statPercent').innerText = `${occupancyPercent}%`;
}

window.toggleStatus = function(index) {
  const resumes = getResumes();
  resumes[index].status = resumes[index].status === 'available' ? 'reserved' : 'available';
  saveResumes(resumes);
};

window.deleteCv = function(index) {
  const resumes = getResumes();
  const fullname = resumes[index].fullname;
  if (confirm(`هل أنت متأكد من حذف السيرة الذاتية للمرشح/ة (${fullname}) نهائياً؟`)) {
    resumes.splice(index, 1);
    saveResumes(resumes);
  }
};

window.resetToDefaults = function() {
  if (confirm("تحذير: سيؤدي هذا الإجراء إلى حذف جميع التعديلات الحالية واستعادة السير الـ 6 الافتراضية، هل تريد المتابعة؟")) {
    localStorage.removeItem('alnajah_resumes');
    loadTableData();
  }
};

window.exportData = function() {
  const resumes = getResumes();
  const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resumes, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", jsonString);
  downloadAnchor.setAttribute("download", `alnajah_resumes_backup_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
};

window.triggerImport = function() {
  document.getElementById('importFileInput').click();
};

window.importData = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        if (confirm(`تم قراءة ${imported.length} سيرة ذاتية من الملف. هل ترغب في اعتمادها واستبدال البيانات الحالية؟`)) {
          saveResumes(imported);
        }
      } else {
        alert("خطأ: الملف المختار لا يحتوي على مصفوفة سير ذاتية صحيحة!");
      }
    } catch(err) {
      alert("خطأ في قراءة ملف الـ JSON!");
    }
  };
  reader.readAsText(file);
  event.target.value = '';
};

window.openAddModal = function() {
  document.getElementById('modalFormTitle').innerText = "إضافة سيرة ذاتية جديدة";
  document.getElementById('editIndex').value = "";
  document.getElementById('cvForm').reset();
  syncPhotoInput("images/cv_sara.jpg");
  document.getElementById('cvEditorModal').classList.add('open');
};

window.editCv = function(index) {
  const resumes = getResumes();
  const cv = resumes[index];
  document.getElementById('modalFormTitle').innerText = `تعديل سيرة ذاتية — ${cv.fullname}`;
  document.getElementById('editIndex').value = index;
  document.getElementById('fullname').value = cv.fullname;
  document.getElementById('job').value = cv.job;
  document.getElementById('nationality').value = cv.nationality;
  document.getElementById('age').value = cv.age;
  document.getElementById('experience').value = cv.experience;
  document.getElementById('salary').value = cv.salary || "";
  document.getElementById('religion').value = cv.religion;
  document.getElementById('education').value = cv.education;
  document.getElementById('marital').value = cv.marital;
  document.getElementById('height').value = cv.height;
  document.getElementById('weight').value = cv.weight;
  document.getElementById('languages').value = cv.languages;
  document.getElementById('skills').value = cv.skills;
  document.getElementById('prevExp').value = cv.prevExp;
  document.getElementById('status').value = cv.status;
  
  const selectPhoto = document.getElementById('photoSelect');
  const pathPhoto = document.getElementById('photoPath');
  pathPhoto.value = cv.photo;
  let found = false;
  for (let i = 0; i < selectPhoto.options.length; i++) {
    if (selectPhoto.options[i].value === cv.photo) {
      selectPhoto.value = cv.photo;
      found = true;
      break;
    }
  }
  if (!found) {
    selectPhoto.value = "custom";
  }
  syncPhotoInput(selectPhoto.value, cv.photo);
  document.getElementById('cvEditorModal').classList.add('open');
};

window.closeEditorModal = function() {
  document.getElementById('cvEditorModal').classList.remove('open');
};

window.syncPhotoInput = function(selectValue, customPath = "") {
  const pathInput = document.getElementById('photoPath');
  if (selectValue === "custom") {
    pathInput.removeAttribute('readonly');
    pathInput.value = customPath || "images/";
    pathInput.focus();
  } else {
    pathInput.setAttribute('readonly', 'true');
    pathInput.value = selectValue;
  }
};

window.saveCvForm = function(event) {
  event.preventDefault();
  const index = document.getElementById('editIndex').value;
  const resumes = getResumes();
  const cvData = {
    fullname: document.getElementById('fullname').value.trim(),
    job: document.getElementById('job').value,
    nationality: document.getElementById('nationality').value,
    age: parseInt(document.getElementById('age').value, 10),
    experience: parseInt(document.getElementById('experience').value, 10),
    salary: parseInt(document.getElementById('salary').value, 10) || 0,
    religion: document.getElementById('religion').value.trim(),
    education: document.getElementById('education').value.trim(),
    marital: document.getElementById('marital').value.trim(),
    height: document.getElementById('height').value.trim(),
    weight: document.getElementById('weight').value.trim(),
    languages: document.getElementById('languages').value.trim(),
    skills: document.getElementById('skills').value.trim(),
    prevExp: document.getElementById('prevExp').value.trim(),
    status: document.getElementById('status').value,
    photo: document.getElementById('photoPath').value.trim()
  };
  if (index === "") {
    resumes.push(cvData);
  } else {
    resumes[parseInt(index, 10)] = cvData;
  }
  saveResumes(resumes);
  closeEditorModal();
};


// === إدارة أسعار الاستقدام للحاسبة ===

const defaultPricingData = {
  // الفلبين
  "philippines_maid": { total: 14500, base: 12609, vat: 1891, salary: 1500, time: 89, label: "الفلبين" },
  "philippines_nanny": { total: 14500, base: 12609, vat: 1891, salary: 1500, time: 89, label: "الفلبين" },
  "philippines_cook": { total: 14500, base: 12609, vat: 1891, salary: 1500, time: 89, label: "الفلبين" },
  "philippines_houseboy": { total: 12000, base: 10435, vat: 1565, salary: 1500, time: 89, label: "الفلبين" },
  "philippines_driver": { total: 12000, base: 10435, vat: 1565, salary: 1500, time: 89, label: "الفلبين" },
  "philippines_server": { total: 11119, base: 9669, vat: 1450, salary: 1500, time: 89, label: "الفلبين" },
  
  // بوروندي
  "burundi_maid": { total: 4530, base: 3939, vat: 591, salary: 900, time: 85, label: "بوروندي" },
  "burundi_nanny": { total: 4530, base: 3939, vat: 591, salary: 900, time: 85, label: "بوروندي" },
  "burundi_cook": { total: 4530, base: 3939, vat: 591, salary: 900, time: 85, label: "بوروندي" },
  
  // إثيوبيا
  "ethiopia_maid": { total: 3530, base: 3070, vat: 460, salary: 900, time: 89, label: "إثيوبيا" },
  "ethiopia_nanny": { total: 3530, base: 3070, vat: 460, salary: 900, time: 89, label: "إثيوبيا" },
  "ethiopia_cook": { total: 3530, base: 3070, vat: 460, salary: 900, time: 89, label: "إثيوبيا" },
  "ethiopia_houseboy": { total: 4188, base: 3642, vat: 546, salary: 900, time: 85, label: "إثيوبيا" },
  "ethiopia_driver": { total: 4344, base: 3777, vat: 567, salary: 900, time: 85, label: "إثيوبيا" },
  "ethiopia_guard": { total: 3970, base: 3452, vat: 518, salary: 900, time: 85, label: "إثيوبيا" },
  
  // كينيا
  "kenya_maid": { total: 4530, base: 3939, vat: 591, salary: 900, time: 89, label: "كينيا" },
  "kenya_nanny": { total: 4530, base: 3939, vat: 591, salary: 900, time: 89, label: "كينيا" },
  "kenya_cook": { total: 4530, base: 3939, vat: 591, salary: 900, time: 89, label: "كينيا" },
  
  // أوغندا
  "uganda_maid": { total: 4990, base: 4339, vat: 651, salary: 900, time: 85, label: "أوغندا" },
  "uganda_nanny": { total: 4990, base: 4339, vat: 651, salary: 900, time: 85, label: "أوغندا" },
  "uganda_cook": { total: 4990, base: 4339, vat: 651, salary: 900, time: 85, label: "أوغندا" },
  
  // بنجلاديش
  "bangladesh_maid": { total: 7070, base: 6148, vat: 922, salary: 1000, time: 89, label: "بنجلاديش" },
  "bangladesh_nanny": { total: 7070, base: 6148, vat: 922, salary: 1000, time: 89, label: "بنجلاديش" },
  "bangladesh_cook": { total: 7070, base: 6148, vat: 922, salary: 1000, time: 89, label: "بنجلاديش" },
  "bangladesh_houseboy": { total: 3402, base: 2958, vat: 444, salary: 1000, time: 89, label: "بنجلاديش" },
  "bangladesh_driver": { total: 3450, base: 3000, vat: 450, salary: 1000, time: 89, label: "بنجلاديش" },
  
  // سريلانكا
  "srilanka_maid": { total: 8000, base: 6957, vat: 1043, salary: 1200, time: 89, label: "سريلانكا" },
  "srilanka_nanny": { total: 8000, base: 6957, vat: 1043, salary: 1200, time: 89, label: "سريلانكا" },
  "srilanka_cook": { total: 8000, base: 6957, vat: 1043, salary: 1200, time: 89, label: "سريلانكا" },
  "srilanka_houseboy": { total: 4500, base: 3913, vat: 587, salary: 1200, time: 89, label: "سريلانكا" },
  "srilanka_driver": { total: 3000, base: 2609, vat: 391, salary: 1200, time: 89, label: "سريلانكا" },
  
  // الهند
  "india_maid": { total: 5665, base: 4926, vat: 739, salary: 1200, time: 55, label: "الهند" },
  "india_nanny": { total: 5665, base: 4926, vat: 739, salary: 1200, time: 55, label: "الهند" },
  "india_cook": { total: 5665, base: 4926, vat: 739, salary: 1200, time: 55, label: "الهند" },
  "india_houseboy": { total: 4059, base: 3530, vat: 529, salary: 1200, time: 89, label: "الهند" },
  "india_driver": { total: 4070, base: 3539, vat: 531, salary: 1500, time: 89, label: "الهند" },
  
  // السودان
  "sudan_houseboy": { total: 4057, base: 3528, vat: 529, salary: 1500, time: 85, label: "السودان" },
  "sudan_driver": { total: 3672, base: 3193, vat: 479, salary: 1500, time: 85, label: "السودان" },
  "sudan_gardener": { total: 2228, base: 1937, vat: 291, salary: 1500, time: 85, label: "السودان" },
  
  // مصر
  "egypt_houseboy": { total: 3940, base: 3426, vat: 514, salary: 1500, time: 89, label: "مصر" },
  "egypt_driver": { total: 3115, base: 2709, vat: 406, salary: 1500, time: 89, label: "مصر" },
  
  // اليمن
  "yemen_houseboy": { total: 3345, base: 2909, vat: 436, salary: 1500, time: 89, label: "اليمن" },
  "yemen_driver": { total: 4069, base: 3538, vat: 531, salary: 1500, time: 89, label: "اليمن" },
  
  // باكستان
  "pakistan_driver": { total: 2230, base: 1939, vat: 291, salary: 1500, time: 85, label: "باكستان" },
  "pakistan_gardener": { total: 3615, base: 3143, vat: 472, salary: 1500, time: 89, label: "باكستان" }
};

const jobLabels = {
  maid: "عاملة منزلية",
  houseboy: "عامل منزلي",
  driver: "سائق خاص",
  cook: "طباخ / طباخة",
  nanny: "مربية أطفال",
  gardener: "مزارع منزلي",
  guard: "حارس منزلي",
  server: "سفرجي منزلي"
};

const natLabels = {
  philippines: "الفلبين",
  burundi: "بوروندي",
  ethiopia: "إثيوبيا",
  kenya: "كينيا",
  uganda: "أوغندا",
  bangladesh: "بنجلاديش",
  srilanka: "سريلانكا",
  india: "الهند",
  sudan: "السودان",
  egypt: "مصر",
  yemen: "اليمن",
  pakistan: "باكستان"
};

function getPricingData() {
  const data = localStorage.getItem('alnajah_pricing_data');
  if (data) {
    return JSON.parse(data);
  }
  localStorage.setItem('alnajah_pricing_data', JSON.stringify(defaultPricingData));
  return defaultPricingData;
}

window.loadPricingTable = function() {
  const pricingData = getPricingData();
  const tbody = document.getElementById('pricingTableBody');
  if (!tbody) return;
  
  tbody.innerHTML = "";
  
  for (const key in pricingData) {
    if (pricingData.hasOwnProperty(key)) {
      const item = pricingData[key];
      const parts = key.split('_');
      const nat = parts[0];
      const job = parts[1];
      
      const natText = natLabels[nat] || nat;
      const jobText = jobLabels[job] || job;
      
      const tr = document.createElement('tr');
      tr.style.borderBottom = "1px solid var(--border-color)";
      tr.innerHTML = `
        <td style="padding: 12px 15px; font-weight: 700;">${natText}</td>
        <td style="padding: 12px 15px; font-weight: 600; color: var(--text-muted);">${jobText}</td>
        <td style="padding: 12px 15px; font-family: monospace;">${item.base.toLocaleString('en-US')} ريال</td>
        <td style="padding: 12px 15px; font-family: monospace;">${item.vat.toLocaleString('en-US')} ريال</td>
        <td style="padding: 12px 15px; font-weight: 700; color: var(--gold-color); font-family: monospace;">${item.total.toLocaleString('en-US')} ريال</td>
        <td style="padding: 12px 15px;">${item.time} يوم</td>
        <td style="padding: 12px 15px; font-family: monospace;">${item.salary.toLocaleString('en-US')} ريال</td>
        <td style="padding: 12px 15px;">
          <button type="button" class="btn-action" style="padding: 5px 12px; font-size: 0.85rem;" onclick="editPricing('${key}')">تعديل ⚙️</button>
        </td>
      `;
      tbody.appendChild(tr);
    }
  }
};

window.editPricing = function(key) {
  const pricingData = getPricingData();
  const item = pricingData[key];
  if (!item) return;
  
  const parts = key.split('_');
  const natText = natLabels[parts[0]] || parts[0];
  const jobText = jobLabels[parts[1]] || parts[1];
  
  document.getElementById('pricingKey').value = key;
  document.getElementById('pricingLabel').value = `${natText} — ${jobText}`;
  document.getElementById('pricingTotal').value = item.total;
  document.getElementById('pricingTime').value = item.time;
  document.getElementById('pricingSalary').value = item.salary;
  
  document.getElementById('pricingEditorModal').classList.add('open');
};

window.closePricingModal = function() {
  document.getElementById('pricingEditorModal').classList.remove('open');
};

window.savePricingForm = function(event) {
  event.preventDefault();
  const key = document.getElementById('pricingKey').value;
  const total = parseInt(document.getElementById('pricingTotal').value, 10) || 0;
  const time = parseInt(document.getElementById('pricingTime').value, 10) || 1;
  const salary = parseInt(document.getElementById('pricingSalary').value, 10) || 0;
  
  const pricingData = getPricingData();
  const item = pricingData[key];
  if (item) {
    const base = Math.round(total / 1.15);
    const vat = total - base;
    
    item.total = total;
    item.base = base;
    item.vat = vat;
    item.time = time;
    item.salary = salary;
    
    localStorage.setItem('alnajah_pricing_data', JSON.stringify(pricingData));
    loadPricingTable();
    closePricingModal();
  }
};

window.resetPricingToDefaults = function() {
  if (confirm("هل أنت متأكد من رغبتك في إعادة تعيين كافة أسعار ومدد الحاسبة إلى قيمها الافتراضية؟")) {
    localStorage.setItem('alnajah_pricing_data', JSON.stringify(defaultPricingData));
    loadPricingTable();
    alert("تمت إعادة تعيين الأسعار بنجاح!");
  }
};

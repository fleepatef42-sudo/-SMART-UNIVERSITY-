// Global State
const state = {
    students: [
        { id: '#ST-001', name: 'أحمد محمد علي', college: 'كلية الهندسة', year: 'السنة الثالثة', status: 'active' },
        { id: '#ST-002', name: 'سارة أحمد خليل', college: 'كلية الطب', year: 'السنة الرابعة', status: 'active' },
        { id: '#ST-003', name: 'محمود ياسين', college: 'كلية الحاسبات والذكاء الاصطناعي', year: 'السنة الثانية', status: 'active' },
    ],
    courses: [
        { id: '#C-101', name: 'هندسة البرمجيات 1', doctor: 'د. خالد عبدالله', hours: 3, status: 'متاح' },
        { id: '#C-102', name: 'مقدمة في الذكاء الاصطناعي', doctor: 'د. سناء محمد', hours: 4, status: 'متاح' },
    ],
    faculty: [
        { id: '#F-001', name: 'د. خالد عبدالله', dept: 'علوم الحاسب', degree: 'أستاذ مشارك', status: 'active' },
        { id: '#F-002', name: 'د. سناء محمد', dept: 'الذكاء الاصطناعي', degree: 'أستاذ', status: 'active' },
    ],
    admissions: [
        { id: '#APP-992', name: 'ياسر جلال', score: 95.5, choice: 'الطب البشري', status: 'pending' },
        { id: '#APP-993', name: 'منى جمال', score: 88.0, choice: 'هندسة البرمجيات', status: 'accepted' }
    ],
    library: [
        { id: '#B-101', title: 'أساسيات الذكاء الاصطناعي', author: 'ستيوارت راسل', status: 'available' },
        { id: '#B-102', title: 'خوارزميات هياكل البيانات', author: 'توماس كورمن', status: 'borrowed' }
    ],
    exams: [
        { id: '#EX-01', course: 'هندسة البرمجيات 1', date: '2026-05-27', time: '10:00 AM', hall: 'القاعة الكبرى A' },
        { id: '#EX-02', course: 'مقدمة في الذكاء الاصطناعي', date: '2026-05-30', time: '01:00 PM', hall: 'معمل الحاسبات 3' }
    ],
    financials: [
        { id: '#INV-001', student: 'أحمد محمد علي', amount: '5000$', type: 'رسوم دراسية', status: 'paid' },
        { id: '#INV-002', student: 'ياسر جلال', amount: '1200$', type: 'رسوم تسجيل', status: 'unpaid' }
    ],
    notifications: [
        { id: 1, title: 'طلب قبول جديد', text: 'تقدم ياسر جلال بطلب التحاق بكلية الطب', time: 'منذ دقيقتين', icon: 'fa-user-plus', color: '#00F0FF' },
        { id: 2, title: 'تحديث الجدول', text: 'تم تعديل موعد امتحان الذكاء الاصطناعي', time: 'منذ ساعة', icon: 'fa-calendar-alt', color: '#BF00FF' },
        { id: 3, title: 'رسوم متأخرة', text: 'هناك 5 طلاب لم يسددوا الرسوم الدراسية', time: 'منذ 3 ساعات', icon: 'fa-exclamation-triangle', color: '#EF4444' }
    ]
};

// Utilities
const getAvatar = (name) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&bold=true`;

// Render Functions
const renderViews = () => ({
    dashboard: `
        <div class="animated-view">
            <div class="section-header"><h2><i class="fas fa-th-large"></i> لوحة التحكم المركزية</h2></div>
            <div class="dashboard-grid">
                <div class="stat-card" style="animation-delay: 0.1s">
                    <div class="stat-icon" style="color: #00F0FF"><i class="fas fa-user-graduate"></i></div>
                    <div class="stat-details"><h3>إجمالي الطلاب</h3><p>${state.students.length + 1240}</p></div>
                    <div class="mini-chart">
                        <div class="chart-bar" style="height: 40%"></div>
                        <div class="chart-bar" style="height: 60%"></div>
                        <div class="chart-bar" style="height: 50%"></div>
                        <div class="chart-bar" style="height: 80%"></div>
                        <div class="chart-bar" style="height: 70%"></div>
                    </div>
                </div>
                <div class="stat-card" style="animation-delay: 0.2s">
                    <div class="stat-icon" style="color: #BF00FF"><i class="fas fa-book"></i></div>
                    <div class="stat-details"><h3>المقررات النشطة</h3><p>${state.courses.length + 86}</p></div>
                    <div class="mini-chart">
                        <div class="chart-bar" style="height: 30%"></div>
                        <div class="chart-bar" style="height: 50%"></div>
                        <div class="chart-bar" style="height: 90%"></div>
                        <div class="chart-bar" style="height: 40%"></div>
                        <div class="chart-bar" style="height: 60%"></div>
                    </div>
                </div>
                <div class="stat-card" style="animation-delay: 0.3s">
                    <div class="stat-icon" style="color: #10B981"><i class="fas fa-chalkboard-teacher"></i></div>
                    <div class="stat-details"><h3>هيئة التدريس</h3><p>${state.faculty.length + 142}</p></div>
                </div>
                <div class="stat-card" style="animation-delay: 0.4s">
                    <div class="stat-icon" style="color: #F59E0B"><i class="fas fa-wallet"></i></div>
                    <div class="stat-details"><h3>التحصيل المالي</h3><p>$1.8M</p></div>
                </div>
            </div>
            
            <div class="section-header" style="margin-top: 30px;"><h2><i class="fas fa-history"></i> آخر النشاطات في النظام</h2></div>
            <div class="table-container">
                <table>
                    <thead><tr><th>المستخدم</th><th>العملية</th><th>القسم</th><th>الوقت</th><th>الحالة</th></tr></thead>
                    <tbody>
                        <tr>
                            <td style="display: flex; gap: 12px; align-items: center;"><img src="${getAvatar(state.students[0].name)}" style="width:36px; height:36px; border-radius:10px"> <strong>${state.students[0].name}</strong></td>
                            <td>تسجيل جديد</td><td>شؤون الطلاب</td><td>منذ قليل</td>
                            <td><span class="status active">مكتمل</span></td>
                        </tr>
                        <tr>
                            <td style="display: flex; gap: 12px; align-items: center;"><div class="stat-icon" style="width:36px; height:36px; font-size:14px;"><i class="fas fa-book"></i></div> <strong>${state.library[0].title}</strong></td>
                            <td>إضافة مورد</td><td>المكتبة</td><td>منذ ساعة</td>
                            <td><span class="status active">متاح</span></td>
                        </tr>
                        <tr>
                            <td style="display: flex; gap: 12px; align-items: center;"><div class="stat-icon" style="width:36px; height:36px; font-size:14px; color:var(--secondary-neon)"><i class="fas fa-clock"></i></div> <strong>${state.exams[0].course}</strong></td>
                            <td>جدولة امتحان</td><td>الامتحانات</td><td>منذ ساعتين</td>
                            <td><span class="status warning">معلق</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    students: `
        <div class="animated-view">
            <div class="section-header">
                <h2><i class="fas fa-user-graduate"></i> إدارة شؤون الطلاب</h2>
                <div style="display:flex; gap:10px;">
                    <button class="btn-primary" style="background:var(--surface-light); box-shadow:none;" onclick="exportData('students')"><i class="fas fa-download"></i> تصدير</button>
                    <button class="btn-primary" onclick="openModal('student-modal')"><i class="fas fa-plus"></i> إضافة طالب</button>
                </div>
            </div>
            <div class="table-container">
                <table>
                    <thead><tr><th>الطالب</th><th>رقم القيد</th><th>الكلية</th><th>المرحلة</th><th>الحالة</th><th>إجراء</th></tr></thead>
                    <tbody>
                        ${state.students.map(s => `
                            <tr>
                                <td style="display:flex; align-items:center; gap:12px;"><img src="${getAvatar(s.name)}" style="width:40px; height:40px; border-radius:12px;"> <div><strong>${s.name}</strong><br><small style="color:var(--text-muted)">انتظام</small></div></td>
                                <td style="color: var(--primary-neon); font-family: monospace; font-weight:bold;">${s.id}</td><td>${s.college}</td><td>${s.year}</td>
                                <td><span class="status ${s.status}">${s.status === 'active' ? 'منتظم' : 'موقف'}</span></td>
                                <td>
                                    <button onclick="deleteItem('students', '${s.id}')" class="icon-btn" style="color:var(--accent-red); width:32px; height:32px;"><i class="fas fa-trash"></i></button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `,
    courses: `
        <div class="animated-view">
            <div class="section-header">
                <h2><i class="fas fa-book-open"></i> دليل المقررات الدراسية</h2>
                <button class="btn-primary" onclick="openModal('course-modal')"><i class="fas fa-plus"></i> إضافة مقرر</button>
            </div>
            <div class="dashboard-grid">
                ${state.courses.map(c => `
                    <div class="stat-card" style="flex-direction: column; align-items: flex-start; gap: 10px;">
                        <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
                            <span style="color: var(--primary-neon); font-size: 11px; font-weight: 800; text-transform: uppercase;">${c.id}</span>
                            <span class="status active" style="font-size:10px; padding:2px 8px;">نشط</span>
                        </div>
                        <h3 style="color: #fff; font-size: 18px; font-weight: 900; margin: 5px 0;">${c.name}</h3>
                        <p style="color: var(--text-muted); font-size: 13px;"><i class="fas fa-user-tie" style="color: var(--secondary-neon); margin-left:8px;"></i> ${c.doctor}</p>
                        <div style="display: flex; justify-content: space-between; width: 100%; border-top: 1px solid var(--border-subtle); padding-top: 15px; margin-top: 10px;">
                            <span style="color: #fff; font-weight:800; font-size:13px;"><i class="fas fa-clock" style="color:var(--primary-neon)"></i> ${c.hours} ساعات</span>
                            <button onclick="deleteItem('courses', '${c.id}')" style="background:none; border:none; color:var(--accent-red); cursor:pointer;"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    faculty: `
        <div class="animated-view">
            <div class="section-header">
                <h2><i class="fas fa-chalkboard-teacher"></i> هيئة التدريس</h2>
                <button class="btn-primary" onclick="openModal('faculty-modal')"><i class="fas fa-plus"></i> إضافة عضو</button>
            </div>
            <div class="table-container">
                <table>
                    <thead><tr><th>الاسم</th><th>الرقم الوظيفي</th><th>القسم</th><th>الدرجة العلمية</th><th>الحالة</th><th>إجراء</th></tr></thead>
                    <tbody>
                        ${state.faculty.map(f => `
                            <tr>
                                <td style="display:flex; align-items:center; gap:12px;"><img src="${getAvatar(f.name)}" style="width:40px; border-radius:10px"> <strong>${f.name}</strong></td>
                                <td style="color: var(--secondary-neon); font-family:monospace;">${f.id}</td><td>${f.dept}</td><td>${f.degree}</td>
                                <td><span class="status active">حاضر</span></td>
                                <td><button onclick="deleteItem('faculty', '${f.id}')" class="icon-btn" style="color:var(--accent-red); width:32px; height:32px;"><i class="fas fa-trash"></i></button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `,
    admissions: `
        <div class="animated-view">
            <div class="section-header">
                <h2><i class="fas fa-file-signature"></i> طلبات القبول</h2>
                <button class="btn-primary" onclick="openModal('admission-modal')"><i class="fas fa-plus"></i> تسجيل طلب</button>
            </div>
            <div class="table-container">
                <table>
                    <thead><tr><th>رقم الطلب</th><th>اسم المتقدم</th><th>المعدل</th><th>الكلية المطلوبة</th><th>الحالة</th><th>إجراء</th></tr></thead>
                    <tbody>
                        ${state.admissions.map(a => `
                            <tr>
                                <td style="font-weight:900; color:var(--primary-neon)">${a.id}</td>
                                <td><strong>${a.name}</strong></td>
                                <td><span style="color:var(--accent-green); font-weight:bold">%${a.score}</span></td>
                                <td>${a.choice}</td>
                                <td><span class="status ${a.status === 'accepted' ? 'active' : 'warning'}">${a.status === 'accepted' ? 'تم القبول' : 'قيد الانتظار'}</span></td>
                                <td>
                                    ${a.status !== 'accepted' ? `<button onclick="acceptAdmission('${a.id}')" class="icon-btn" style="color:var(--accent-green); margin-left:8px;" title="قبول"><i class="fas fa-check"></i></button>` : ''}
                                    <button onclick="deleteItem('admissions', '${a.id}')" class="icon-btn" style="color:var(--accent-red);" title="رفض"><i class="fas fa-times"></i></button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `,
    exams: `
        <div class="animated-view">
            <div class="section-header">
                <h2><i class="fas fa-poll-h"></i> جدول الامتحانات</h2>
                <button class="btn-primary" onclick="openModal('exam-modal')"><i class="fas fa-plus"></i> جدولة امتحان</button>
            </div>
            <div class="table-container">
                <table>
                    <thead><tr><th>كود</th><th>المقرر</th><th>التاريخ</th><th>الوقت</th><th>القاعة</th><th>إجراء</th></tr></thead>
                    <tbody>
                        ${state.exams.map(e => `
                            <tr>
                                <td style="color:var(--secondary-neon); font-weight:bold">${e.id}</td>
                                <td><strong>${e.course}</strong></td>
                                <td>${e.date}</td>
                                <td>${e.time}</td>
                                <td><i class="fas fa-location-dot" style="color:var(--primary-neon); margin-left:8px;"></i>${e.hall}</td>
                                <td><button onclick="deleteItem('exams', '${e.id}')" class="icon-btn" style="color:var(--accent-red); width:32px; height:32px;"><i class="fas fa-trash"></i></button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `,
    library: `
        <div class="animated-view">
            <div class="section-header">
                <h2><i class="fas fa-book-reader"></i> المكتبة الرقمية</h2>
                <button class="btn-primary" onclick="openModal('book-modal')"><i class="fas fa-plus"></i> إضافة كتاب</button>
            </div>
            <div class="dashboard-grid">
                ${state.library.map(b => `
                    <div class="stat-card" style="flex-direction: column; align-items: flex-start; padding: 25px;">
                        <div class="stat-icon" style="margin-bottom:15px; background:rgba(0, 240, 255, 0.1); border-color:var(--primary-neon);"><i class="fas fa-book"></i></div>
                        <h3 style="color: #fff; font-size: 16px; font-weight: 900; margin-bottom: 5px;">${b.title}</h3>
                        <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 15px;">بواسطة: ${b.author}</p>
                        <div style="width: 100%; border-top: 1px solid var(--border-subtle); padding-top: 15px; display:flex; justify-content:space-between; align-items:center;">
                            <span class="status ${b.status === 'available' ? 'active' : 'warning'}" style="font-size:10px;">${b.status === 'available' ? 'متاح' : 'مستعار'}</span>
                            <button onclick="deleteItem('library', '${b.id}')" style="background:none; border:none; color:var(--accent-red); cursor:pointer;"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    financials: `
        <div class="animated-view">
            <div class="section-header">
                <h2><i class="fas fa-file-invoice-dollar"></i> الشؤون المالية</h2>
                <button class="btn-primary" onclick="openModal('invoice-modal')"><i class="fas fa-file-invoice"></i> إصدار فاتورة</button>
            </div>
            <div class="table-container">
                <table>
                    <thead><tr><th>رقم الفاتورة</th><th>اسم الطالب</th><th>النوع</th><th>المبلغ</th><th>الحالة</th><th>إجراء</th></tr></thead>
                    <tbody>
                        ${state.financials.map(f => `
                            <tr>
                                <td style="color:var(--primary-neon); font-weight:bold; font-family:monospace;">${f.id}</td>
                                <td><strong>${f.student}</strong></td>
                                <td>${f.type}</td>
                                <td style="font-weight:900; color:var(--accent-green)">${f.amount}</td>
                                <td><span class="status ${f.status === 'paid' ? 'active' : 'danger'}">${f.status === 'paid' ? 'مدفوعة' : 'غير مسددة'}</span></td>
                                <td><button onclick="deleteItem('financials', '${f.id}')" class="icon-btn" style="color:var(--accent-red); width:32px; height:32px;"><i class="fas fa-trash"></i></button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `,
    profile: `
        <div class="animated-view">
            <div class="section-header"><h2>إعدادات الحساب</h2></div>
            <div class="stat-card" style="max-width: 600px; flex-direction: column; align-items: center; padding: 40px; margin: 0 auto;">
                <img src="https://ui-avatars.com/api/?name=Admin&background=00F0FF&color=000&size=128&bold=true" style="width:120px; border-radius:30px; border:4px solid var(--primary-neon); margin-bottom:20px;">
                <h2 style="color:#fff; margin-bottom:5px;">مدير النظام</h2>
                <p style="color:var(--text-muted); margin-bottom:30px;">admin@smart-university.edu</p>
                <div style="width:100%; display:grid; gap:15px;">
                    <button class="btn-primary" style="justify-content:center;"><i class="fas fa-edit"></i> تعديل البيانات</button>
                    <button class="btn-primary" style="justify-content:center; background:var(--surface-light); box-shadow:none;"><i class="fas fa-shield-alt"></i> تغيير كلمة المرور</button>
                    <button class="btn-primary" style="justify-content:center; background:rgba(239, 68, 68, 0.1); color:var(--accent-red); box-shadow:none;"><i class="fas fa-sign-out-alt"></i> تسجيل الخروج</button>
                </div>
            </div>
        </div>
    `
});

// App Core Logic
function loadView(viewName) {
    const views = renderViews();
    const container = document.getElementById('view-container');
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.innerHTML = views[viewName] || '<h2 style="color:white; text-align:center; margin-top:50px;">قريباً...</h2>';
        container.style.opacity = '1';
        
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        const activeNav = document.querySelector(`[data-view="${viewName}"]`);
        if(activeNav) activeNav.classList.add('active');
        
        // Update Scroll
        container.scrollTop = 0;
    }, 200);
}

// Modals
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

// Notifications logic
function toggleNotifications() {
    const dropdown = document.getElementById('notif-dropdown');
    dropdown.classList.toggle('active');
    if(dropdown.classList.contains('active')) {
        renderNotifications();
    }
}

function renderNotifications() {
    const dropdown = document.getElementById('notif-dropdown');
    dropdown.innerHTML = `
        <div style="padding:10px; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
            <h4 style="color:#fff; font-size:14px;">التنبيهات</h4>
            <small style="color:var(--primary-neon); cursor:pointer;">تحديد الكل كمقروء</small>
        </div>
        ${state.notifications.map(n => `
            <div class="notif-item">
                <div class="notif-icon" style="background: ${n.color}20; color: ${n.color}">
                    <i class="fas ${n.icon}"></i>
                </div>
                <div class="notif-content">
                    <h4>${n.title}</h4>
                    <p>${n.text}</p>
                    <small style="color:var(--text-muted); font-size:10px;">${n.time}</small>
                </div>
            </div>
        `).join('')}
        <div style="padding:10px; text-align:center;">
            <small style="color:var(--text-muted); cursor:pointer;">عرض كافة التنبيهات</small>
        </div>
    `;
}

// Global Search
const globalSearch = document.getElementById('global-search');
const searchResults = document.getElementById('search-results');

globalSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if(query.length < 2) {
        searchResults.classList.remove('active');
        return;
    }

    const results = [];
    // Search in students
    state.students.forEach(s => {
        if(s.name.toLowerCase().includes(query)) results.push({ name: s.name, type: 'طالب', icon: 'fa-user-graduate', view: 'students' });
    });
    // Search in courses
    state.courses.forEach(c => {
        if(c.name.toLowerCase().includes(query)) results.push({ name: c.name, type: 'مقرر', icon: 'fa-book-open', view: 'courses' });
    });

    if(results.length > 0) {
        searchResults.innerHTML = results.map(r => `
            <div class="search-item" onclick="loadView('${r.view}'); document.getElementById('search-results').classList.remove('active');">
                <i class="fas ${r.icon}"></i>
                <div class="search-item-info">
                    <h4>${r.name}</h4>
                    <p>${r.type}</p>
                </div>
            </div>
        `).join('');
        searchResults.classList.add('active');
    } else {
        searchResults.innerHTML = '<div class="search-item">لا توجد نتائج</div>';
        searchResults.classList.add('active');
    }
});

// Close search/notif on click outside
document.addEventListener('click', (e) => {
    if(!e.target.closest('.search-bar')) searchResults.classList.remove('active');
    if(!e.target.closest('.icon-btn') && !e.target.closest('.notif-dropdown')) {
        document.getElementById('notif-dropdown').classList.remove('active');
    }
});

// Clock & Date
function updateClock() {
    const now = new Date();
    document.getElementById('live-clock').innerText = now.toLocaleTimeString('ar-EG');
    document.getElementById('live-date').innerText = now.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// Notifications toast
function showNotification(msg, type='success') {
    const notif = document.createElement('div');
    const color = type === 'success' ? 'var(--gradient-glow)' : '#EF4444';
    notif.style.cssText = `position:fixed; bottom:30px; left:30px; background:${color}; color:#fff; padding:18px 28px; border-radius:18px; box-shadow:0 15px 40px rgba(0,0,0,0.5); z-index:9999; font-weight:bold; opacity:0; transform:translateY(50px); transition:0.5s cubic-bezier(0.4, 0, 0.2, 1); display:flex; align-items:center; gap:12px; backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,0.1);`;
    notif.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}" style="font-size:20px;"></i> ${msg}`;
    document.body.appendChild(notif);
    setTimeout(() => { notif.style.opacity=1; notif.style.transform='translateY(0)'; }, 10);
    setTimeout(() => { notif.style.opacity=0; notif.style.transform='translateY(50px)'; setTimeout(()=>notif.remove(), 500); }, 3500);
}

// Expose functions
window.loadView = loadView;
window.openModal = openModal;
window.closeModal = closeModal;
window.toggleNotifications = toggleNotifications;
window.deleteItem = (collection, id) => {
    if(confirm('هل أنت متأكد من رغبتك في حذف هذا العنصر؟')) {
        state[collection] = state[collection].filter(item => item.id !== id);
        loadView(collection);
        showNotification('تم الحذف بنجاح من النظام');
    }
};
window.acceptAdmission = (id) => {
    const ad = state.admissions.find(a => a.id === id);
    if(ad) {
        ad.status = 'accepted';
        loadView('admissions');
        showNotification('تم قبول طلب الطالب بنجاح!');
    }
};
window.exportData = (type) => {
    showNotification(`جاري تحضير ملف ${type}...`, 'success');
    setTimeout(() => showNotification('تم تصدير البيانات بنجاح!', 'success'), 1500);
};

// Lifecycle
document.addEventListener('DOMContentLoaded', () => {
    loadView('dashboard');
    setInterval(updateClock, 1000);
    updateClock();

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            loadView(item.getAttribute('data-view'));
        });
    });

    // Form Event Listeners
    const setupForm = (id, collection, callback) => {
        document.getElementById(id).addEventListener('submit', (e) => {
            e.preventDefault();
            const data = callback(e.target);
            state[collection].unshift(data);
            closeModal(id.replace('add-', '').replace('-form', '-modal'));
            e.target.reset();
            loadView(collection);
            showNotification('تمت العملية بنجاح!');
        });
    };

    setupForm('add-student-form', 'students', (form) => ({
        id: '#ST-' + Math.floor(Math.random()*9000+1000),
        name: form.querySelector('#s-name').value,
        college: form.querySelector('#s-college').value,
        year: form.querySelector('#s-year').value,
        status: 'active'
    }));

    setupForm('add-course-form', 'courses', (form) => ({
        id: '#C-' + Math.floor(Math.random()*900+100),
        name: form.querySelector('#c-name').value,
        doctor: form.querySelector('#c-doctor').value,
        hours: form.querySelector('#c-hours').value,
        status: 'متاح'
    }));

    setupForm('add-faculty-form', 'faculty', (form) => ({
        id: '#F-' + Math.floor(Math.random()*900+100),
        name: form.querySelector('#f-name').value,
        dept: form.querySelector('#f-dept').value,
        degree: form.querySelector('#f-degree').value,
        status: 'active'
    }));

    setupForm('add-admission-form', 'admissions', (form) => ({
        id: '#APP-' + Math.floor(Math.random()*9000+1000),
        name: form.querySelector('#a-name').value,
        score: form.querySelector('#a-score').value,
        choice: form.querySelector('#a-choice').value,
        status: 'pending'
    }));

    setupForm('add-exam-form', 'exams', (form) => ({
        id: '#EX-' + Math.floor(Math.random()*90+10),
        course: form.querySelector('#e-course').value,
        date: form.querySelector('#e-date').value,
        time: form.querySelector('#e-time').value,
        hall: form.querySelector('#e-hall').value
    }));

    setupForm('add-book-form', 'library', (form) => ({
        id: '#B-' + Math.floor(Math.random()*900+100),
        title: form.querySelector('#b-title').value,
        author: form.querySelector('#b-author').value,
        status: 'available'
    }));

    setupForm('add-invoice-form', 'financials', (form) => ({
        id: '#INV-' + Math.floor(Math.random()*900+100),
        student: form.querySelector('#i-student').value,
        type: form.querySelector('#i-type').value,
        amount: form.querySelector('#i-amount').value + '$',
        status: 'unpaid'
    }));
});

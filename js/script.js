const header = document.getElementById("main-header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Language toggle
const btn = document.getElementById("lang-toggle");
const elements = document.querySelectorAll("[data-en]");

document.body.setAttribute("dir", "rtl");
btn.textContent = "EN";
elements.forEach((el) => {
  el.textContent = el.getAttribute("data-ar");
});
btn.addEventListener("click", () => {
  const currentLang = btn.textContent.trim();

  if (currentLang === "EN") {
    elements.forEach((el) => {
      el.textContent = el.getAttribute("data-en");
    });
    btn.textContent = "AR";
    document.body.setAttribute("dir", "ltr");
  } else {
    elements.forEach((el) => {
      el.textContent = el.getAttribute("data-ar");
    });
    btn.textContent = "EN";
    document.body.setAttribute("dir", "rtl");
  }
});

// Dark mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const requestsData = [
  {
    id: 1,
    name: "محمود مصطفى",
    status: "rejected",
    email: "m.youssef@wten.com.sa",
    phone: "0534444445",
    dob: "2/2/1997",
    nationality: "سعودي",
    idLabel: "السعودية",
    qualification: "بكالوريوس",
    avatar: "./images/Ellipse 54.svg",
    gender: "ذكر",
    startData: "2015",
    endData: "2019",
    degree: 150,
    levelExperience: "متوسط",
    iTSkills: "متوسط",
    expectedSalary: " 5000 ر.س",
    languages: "العربية, الإنجليزية",
  },
  {
    id: 2,
    name: "محمود مصطفى",
    status: "approved",
    email: "m.youssef@wten.com.sa",
    phone: "0534444445",
    dob: "2/2/1997",
    nationality: "سعودي",
    idLabel: "السعودية",
    qualification: "بكالوريوس",
    avatar: "./images/Ellipse 54.svg",
    gender: "ذكر",
    startData: "2015",
    endData: "2019",
    degree: 150,
    levelExperience: "متوسط",
    iTSkills: "متوسط",
    expectedSalary: " 5000 ر.س",
    languages: "العربية, الإنجليزية",
  },
  {
    id: 3,
    name: "رغد المالكي",
    status: "rejected",
    email: "m.youssef@wten.com.sa",
    phone: "0534444445",
    dob: "2/2/1997",
    nationality: "سعودي",
    idLabel: "السعودية",
    qualification: "بكالوريوس",
    avatar: "./images/Ellipse 54 (1).svg",
    gender: "انثى",
    startData: "2015",
    endData: "2019",
    degree: 150,
    levelExperience: "متوسط",
    iTSkills: "متوسط",
    expectedSalary: " 5000 ر.س",
    languages: "العربية, الإنجليزية",
  },
  {
    id: 4,
    name: "محمود محمّدى",
    status: "approved",
    email: "m.youssef@wten.com.sa",
    phone: "0534444445",
    dob: "2/2/1997",
    nationality: "سعودي",
    idLabel: "السعودية",
    qualification: "بكالوريوس",
    avatar: "./images/Ellipse 54 (2).svg",
    gender: "ذكر",
    startData: "2015",
    endData: "2019",
    degree: 150,
    levelExperience: "متوسط",
    iTSkills: "متوسط",
    expectedSalary: " 5000 ر.س",
    languages: "العربية, الإنجليزية",
  },
  {
    id: 5,
    name: "زيد المالكـي",
    status: "rejected",
    email: "m.youssef@wten.com.sa",
    phone: "0534444445",
    dob: "2/2/1997",
    nationality: "سعودي",
    idLabel: "السعودية",
    qualification: "بكالوريوس",
    avatar: "./images/Ellipse 54 (3).svg",
    gender: "انثى",
    startData: "2015",
    endData: "2019",
    degree: 150,
    levelExperience: "متوسط",
    iTSkills: "متوسط",
    expectedSalary: " 5000 ر.س",
    languages: "العربية, الإنجليزية",
  },
  {
    id: 6,
    name: "محمود مصطفى",
    status: "rejected",
    email: "m.youssef@wten.com.sa",
    phone: "0534444445",
    dob: "2/2/1997",
    nationality: "سعودي",
    idLabel: "السعودية",
    qualification: "بكالوريوس",
    avatar: "./images/Ellipse 54 (4).svg",
    gender: "ذكر",
    startData: "2015",
    endData: "2019",
    degree: 150,
    levelExperience: "متوسط",
    iTSkills: "متوسط",
    expectedSalary: " 5000 ر.س",
    languages: "العربية, الإنجليزية",
  },
];

const grid = document.getElementById("req-grid");
const selectedSet = new Set();

function renderCard(item) {
  const card = document.createElement("article");
  card.className = "req-card";
  card.dataset.id = item.id;

  card.innerHTML = `
    <div class="top">
      <label class="req-check select">
        <input type="checkbox" class="req-item-check" data-id="${item.id}">
        <span class="box"></span>
      </label>
      <div class="menu">
       <img src="./images/filter.png" alt="Filter">
      </div>
    </div>

    <div class="header">
      <div class="avatar">
        <img src="${item.avatar}" alt="صورة ${item.name}"
         onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#eee,#ddd)';">
      </div>
      <div class="name">${item.name}</div>
      <div class="status ${item.status}">
        <span class="dot"></span>${
          item.status === "approved" ? "مقبول" : "مرفوض"
        }
      </div>
    </div>

    <div class="row">
      <a href="mailto:${item.email}" class="email">${item.email}</a>
      <img src="./images/mail.svg" alt="email">
    </div>
    <div class="row">
      <a href="tel:${item.phone}" class="phone">${item.phone}</a>
      <img src="./images/phone.svg" alt="phone"> 
    </div>

    <div class="meta">
      <span>الجنسية:<strong>${item.nationality}</strong></span>
      <span>تاريخ الميلاد:<strong>${item.dob}</strong></span>
      <span>محل الإقامة:<strong>${item.idLabel}</strong></span>
      <span>المؤهل:<strong>${item.qualification}</strong></span>
    </div>

    <div class="links">
      <a href="#">السيرة الذاتية</a>
      <a href="#">الملف التعريفي</a>
    </div>

    <div class="cta">
      <button class="btn btn--details">عرض التفاصيل</button>
    </div>
  `;

  grid.appendChild(card);
}
requestsData.forEach(renderCard);
const countEl = document.getElementById("req-selected-count");
function updateCount() {
  countEl.textContent = selectedSet.size;
}
grid.addEventListener("change", (e) => {
  const chk = e.target.closest(".req-item-check");
  if (!chk) return;
  const id = Number(chk.dataset.id);
  if (chk.checked) {
    selectedSet.add(id);
    chk.closest(".req-card").classList.add("selected");
  } else {
    selectedSet.delete(id);
    chk.closest(".req-card").classList.remove("selected");
  }
  updateCount();
  const allChecks = [...grid.querySelectorAll(".req-item-check")];
  const allChecked = allChecks.every((c) => c.checked);
  document.getElementById("req-select-all").checked = allChecked;
});

//  تحديد الكل
document.getElementById("req-select-all").addEventListener("change", (e) => {
  const checked = e.target.checked;
  grid.querySelectorAll(".req-item-check").forEach((chk) => {
    chk.checked = checked;
    const id = Number(chk.dataset.id);
    if (checked) {
      selectedSet.add(id);
      chk.closest(".req-card").classList.add("selected");
    } else {
      selectedSet.delete(id);
      chk.closest(".req-card").classList.remove("selected");
    }
  });
  updateCount();
});
// Modal Logic 
const modal = document.getElementById("detail-modal");
const modalAvatar = document.getElementById("modal-avatar");
const modalName = document.getElementById("modal-title");
const modalStatusText = document.getElementById("modal-status-text");
const modalEmail = document.getElementById("modal-email");
const modalPhone = document.getElementById("modal-phone");
const modalNationality = document.getElementById("modal-nationality");
const modalResidence = document.getElementById("modal-residence");
const modalStartData = document.getElementById("modal-startData");
const modalEndData = document.getElementById("modal-endData");
const modalGender = document.getElementById("modal-gender");
const modalDegree = document.getElementById("modal-degree");
const modalLanguages = document.getElementById("modal-languages");
const modalExpectedSalary = document.getElementById("modal-expectedSalary");
const modalITSkills = document.getElementById("modal-iTSkills");
const modalLevelExperience = document.getElementById("modal-levelExperience");
const modalDob = document.getElementById("modal-dob");
const modalQualification = document.getElementById("modal-qualification");

let currentModalId = null;

function openModal(item) {
  currentModalId = item.id;
  modalAvatar.src = item.avatar;
  modalAvatar.alt = `صورة ${item.name}`;
  modalName.textContent = item.name;

  modalEmail.href = `mailto:${item.email}`;
  modalEmail.querySelector("span").textContent = item.email;
  modalPhone.href = `tel:${item.phone}`;
  modalPhone.querySelector("span").textContent = item.phone;

  modalNationality.textContent = item.nationality || "—";
  modalResidence.textContent = item.idLabel || "—";
  modalStartData.textContent = item.startData || "—";
  modalEndData.textContent = item.endData || "—";
  modalDegree.textContent = item.degree || "—";
  modalGender.textContent = item.gender || "—";
  modalDob.textContent = item.dob || "—";
  modalQualification.textContent = item.qualification || "—";
  modalLevelExperience.textContent = item.levelExperience || "—";
  modalITSkills.textContent = item.iTSkills || "—";
  modalExpectedSalary.textContent = item.expectedSalary || "—";
  modalLanguages.textContent = item.languages || "—";
  modal.classList.add("show");
  document.body.classList.add("modal-open");

  modal.querySelector(".modal__close").focus();
}

function closeModal() {
  modal.classList.remove("show");
  document.body.classList.remove("modal-open");
  currentModalId = null;
}

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn--details");
  if (!btn) return;
  const card = btn.closest(".req-card");
  const id = Number(card.dataset.id);
  const item = requestsData.find((x) => x.id === id);
  if (item) openModal(item);
});
modal.addEventListener("click", (e) => {
  if (e.target.dataset.close !== undefined || e.target.closest("[data-close]"))
    closeModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) closeModal();
});

document.getElementById("modal-approve").addEventListener("click", () => {
  if (currentModalId == null) return;
  updateCardStatus(currentModalId, "approved");
  closeModal();
});
document.getElementById("modal-reject").addEventListener("click", () => {
  if (currentModalId == null) return;
  updateCardStatus(currentModalId, "rejected");
  closeModal();
});

function updateCardStatus(id, status) {
  const item = requestsData.find((x) => x.id === id);
  if (item) item.status = status;

  const card = grid.querySelector(`.req-card[data-id="${id}"]`);
  if (!card) return;
  const st = card.querySelector(".status");
  st.classList.remove("approved", "rejected");
  st.classList.add(status);
  st.innerHTML = `<span class="dot"></span>${
    status === "approved" ? "مقبول" : "مرفوض"
  }`;
}

document.getElementById("filter-toggle").addEventListener("click", function() {
  let section = document.getElementById("filter-section");
  section.classList.toggle("hidden");
});
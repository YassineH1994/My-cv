// تغيير الوضع الليلي/النهاري
const toggleBtn = document.getElementById("themeToggle");

// تحقق من الوضع الحالي
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ الوضع النهاري";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // حفظ الوضع في localStorage
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ الوضع النهاري";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 الوضع الليلي";
    localStorage.setItem("theme", "light");
  }
});

// تحريك العناصر عند التمرير
const fadeElements = document.querySelectorAll('.fade-in');

const showOnScroll = () => {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// التنقل السلس بين الأقسام
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// رسالة الترحيب للمرة الأولى
if (!localStorage.getItem("visited")) {
  alert("👋 مرحبا بك في سيرتي الذاتية! تصفح واستمتع 🎉");
  localStorage.setItem("visited", true);
}

// حساب عدد سنوات الخبرة
const startYear = 2020;
const currentYear = new Date().getFullYear();
document.querySelector("#experienceYears span").textContent = currentYear - startYear;

// تغيير الخطوط بناءً على الاختيار
const fontSelector = document.getElementById("fontSelector");
fontSelector.addEventListener("change", (e) => {
  document


const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset*(-0.25)-300 + "px";
})


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4000;
    parallax1.style.backgroundPositionY = offset*(0.1) + "px";
})

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4800;
    parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
})

function myFunction() {
    document.getElementById("check").checked = false;
  }


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);

// Language switching functionality
let currentLanguage = localStorage.getItem('language') || 'en';

const translations = {
  en: {
    "nav-story": "OUR STORY",
    "nav-stay": "TRAVEL & STAY",
    "nav-pictures": "MORE WEDDING PICTURES",
    "getting-married": "We're getting married",
    "date-location": "Saturday, Feb. 22, 2025\nTan Hung, Long An",
    "ceremony-title": "01. Ceremony",
    "ceremony-time": "Saturday, Feb. 22, 2025\nAt 7:00AM",
    "reception-title": "02. Reception",
    "reception-time": "Saturday, Feb. 22, 2025\nAt 9:00AM and 5:00PM",
    "story-title": "Not Just an\nOrdinary Love Story",
    "story-text": "For us, love doesn't happen instantly at first sight, but develops gradually as we get to know each other better over a period of time.",
    "travel-stay": "Travel and Stay",
    "getting-there": "01. Getting There",
    "getting-there-text": "Driving or biking to Tan Hung and explore the area on your own, or\n\nTaking a van we've arranged, which will leave the city at 11AM and arrive around 2PM.",
    "map-details": "MAP & DETAILS",
    // Add more translations as needed
  },
  vi: {
    "nav-story": "CÂU CHUYỆN",
    "nav-stay": "DI CHUYỂN & LƯU TRÚ",
    "nav-pictures": "HÌNH ẢNH CƯỚI",
    "getting-married": "Chúng tôi sắp cưới",
    "date-location": "Thứ bảy, ngày 22/02/2025\nTân Hưng, Long An",
    "ceremony-title": "01. Lễ Cưới",
    "ceremony-time": "Thứ bảy, ngày 22/02/2025\nLúc 7:00 sáng",
    "reception-title": "02. Tiệc Cưới",
    "reception-time": "Thứ bảy, ngày 22/02/2025\nLúc 9:00 sáng và 5:00 chiều",
    "story-title": "Không Chỉ Là\nMột Câu Chuyện Tình Thường",
    "story-text": "Đối với chúng tôi, tình yêu không phải là tình yêu sét đánh, mà là tình cảm được vun đắp theo thời gian khi chúng tôi hiểu nhau nhiều hơn.",
    "travel-stay": "Di Chuyển & Lưu Trú",
    "getting-there": "01. Đến Nơi",
    "getting-there-text": "Tự lái xe hoặc xe máy đến Tân Hưng và khám phá vùng đất này, hoặc\n\nĐi xe đưa đón mà chúng tôi đã sắp xếp, khởi hành lúc 11 giờ sáng và đến nơi khoảng 2 giờ chiều.",
    "map-details": "BẢN ĐỒ & CHI TIẾT",
    // Add more translations as needed
  }
};

function toggleLanguage() {
  const currentLangEl = document.querySelector('.current-lang');
  const otherLangEl = document.querySelector('.other-lang');
  
  // Toggle language
  currentLanguage = currentLanguage === 'en' ? 'vi' : 'en';
  
  // Update button text
  currentLangEl.textContent = currentLanguage.toUpperCase();
  otherLangEl.textContent = currentLanguage === 'en' ? 'VI' : 'EN';
  
  // Save preference
  localStorage.setItem('language', currentLanguage);
  
  // Update all translations
  updateContent();
}

function updateContent() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  // Set initial button state
  const currentLangEl = document.querySelector('.current-lang');
  const otherLangEl = document.querySelector('.other-lang');
  currentLangEl.textContent = currentLanguage.toUpperCase();
  otherLangEl.textContent = currentLanguage === 'en' ? 'VI' : 'EN';
  
  // Update content with saved language
  updateContent();
});
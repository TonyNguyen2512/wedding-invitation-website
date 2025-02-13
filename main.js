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
    "celebrating": "Celebrating Our Love\nWith Those We Love",
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
    "hope-see-you": "Hope to See You!",
    "more-pictures": "Click here to watch more of our wedding pictures",
    "contact-us": "Contact us"
  },
  vi: {
    "nav-story": "CHUYỆN TÌNH CHÚNG TÔI",
    "nav-stay": "THÔNG TIN DI CHUYỂN",
    "nav-pictures": "HÌNH ẢNH CƯỚI",
    "getting-married": "Chúng tôi kết hôn",
    "date-location": "Thứ bảy, ngày 22 tháng 02 năm 2025\nTân Hưng, Long An",
    "celebrating": "Chia Sẻ Niềm Hạnh Phúc\nCùng Người Thân Yêu",
    "ceremony-title": "01. Lễ Vu Quy",
    "ceremony-time": "Thứ bảy, ngày 22 tháng 02 năm 2025\nVào lúc 7 giờ sáng",
    "reception-title": "02. Tiệc Cưới",
    "reception-time": "Thứ bảy, ngày 22 tháng 02 năm 2025\nBuổi sáng: 9 giờ\nBuổi chiều: 5 giờ",
    "story-title": "Câu Chuyện Tình Yêu\nCủa Chúng Tôi",
    "story-text": "Tình yêu của chúng tôi không phải là tình yêu sét đánh, mà là tình cảm được vun đắp qua thời gian, khi chúng tôi dần hiểu nhau nhiều hơn.",
    "travel-stay": "Thông Tin Di Chuyển",
    "getting-there": "01. Phương Tiện Di Chuyển",
    "getting-there-text": "Quý khách có thể tự di chuyển bằng xe máy hoặc ô tô đến Tân Hưng,\n\nHoặc đi chung xe đưa đón mà chúng tôi đã sắp xếp. Xe sẽ khởi hành lúc 11 giờ sáng và đến nơi khoảng 2 giờ chiều.",
    "map-details": "XEM BẢN ĐỒ",
    "hope-see-you": "Rất Mong Được Đón Tiếp!",
    "more-pictures": "Xem thêm hình ảnh cưới của chúng tôi",
    "contact-us": "Thông Tin Liên Hệ"
  },
  es: {
    "nav-story": "NUESTRA HISTORIA",
    "nav-stay": "VIAJE Y ALOJAMIENTO",
    "nav-pictures": "MÁS FOTOS DE LA BODA",
    "getting-married": "Nos vamos a casar",
    "date-location": "Sábado, 22 de febrero de 2025\nTan Hung, Long An",
    "celebrating": "Celebrando Nuestro Amor\nCon Los Que Amamos",
    "ceremony-title": "01. Ceremonia",
    "ceremony-time": "Sábado, 22 de febrero de 2025\nA las 7:00 AM",
    "reception-title": "02. Recepción",
    "reception-time": "Sábado, 22 de febrero de 2025\nA las 9:00 AM y 5:00 PM",
    "story-title": "No Es Solo\nUna Historia de Amor Común",
    "story-text": "Para nosotros, el amor no sucede instantáneamente a primera vista, sino que se desarrolla gradualmente a medida que nos conocemos mejor con el tiempo.",
    "travel-stay": "Viaje y Alojamiento",
    "getting-there": "01. Cómo Llegar",
    "getting-there-text": "Conduciendo o en moto a Tan Hung y explorando el área por tu cuenta, o\n\nTomando una van que hemos organizado, que saldrá de la ciudad a las 11 AM y llegará alrededor de las 2 PM.",
    "map-details": "MAPA Y DETALLES",
    "hope-see-you": "¡Esperamos Verte!",
    "more-pictures": "Haz clic aquí para ver más fotos de nuestra boda",
    "contact-us": "Contáctanos"
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

function cycleLanguage() {
  const languages = ['en', 'vi', 'es'];
  const currentIndex = languages.indexOf(currentLanguage);
  const nextIndex = (currentIndex + 1) % languages.length;
  currentLanguage = languages[nextIndex];
  
  // Update button text
  const currentLangEl = document.querySelector('.current-lang');
  const otherLangsEl = document.querySelector('.other-langs');
  
  currentLangEl.textContent = currentLanguage.toUpperCase();
  
  // Show other available languages
  const otherLangs = languages.filter(lang => lang !== currentLanguage);
  otherLangsEl.textContent = otherLangs.map(lang => lang.toUpperCase()).join(' ');
  
  // Save preference and update content
  localStorage.setItem('language', currentLanguage);
  updateContent();
}

// Add this near the top of your main.js file
function selectLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update content
  updateContent();
  
  // Hide the prompt
  document.getElementById('language-prompt').classList.add('hidden');
}

// Update your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
  // Check if language was previously selected
  const savedLanguage = localStorage.getItem('language');
  
  if (!savedLanguage) {
    // Show language prompt if no language was previously selected
    document.getElementById('language-prompt').classList.remove('hidden');
  } else {
    // Hide prompt if language was previously selected
    document.getElementById('language-prompt').classList.add('hidden');
    currentLanguage = savedLanguage;
  }
  
  // Update the language switcher in navbar
  const currentLangEl = document.querySelector('.current-lang');
  const otherLangsEl = document.querySelector('.other-langs');
  
  currentLangEl.textContent = currentLanguage.toUpperCase();
  const otherLangs = ['en', 'vi', 'es'].filter(lang => lang !== currentLanguage);
  otherLangsEl.textContent = otherLangs.map(lang => lang.toUpperCase()).join(' ');
  
  updateContent();
});
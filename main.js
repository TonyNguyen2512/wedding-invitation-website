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

const translations = {
  en: {
    ourStory: "OUR STORY",
    travelStay: "TRAVEL & STAY",
    morePhotos: "MORE WEDDING PICTURES",
    gettingMarried: "We're getting married",
    location: "Saturday, Feb. 22, 2025 \nTan Hung, Long An",
    celebratingLove: "Celebrating Our Love",
    withThoseLove: "With Those We Love",
    ceremony: "Ceremony",
    reception: "Reception",
    ceremonyTime: "Saturday, Feb. 22, 2025\nAt 7:00AM",
    receptionTime: "Saturday, Feb. 22, 2025\nAt 9:00AM and 5:00PM",
    story: "Not Just an\nOrdinary Love Story",
    storyText: "For us, love doesn't happen instantly at first sight, but develops gradually as we get to know each other better over a period of time.",
    quote: "To the world you are one person, but to one person you are the world",
    author: "Anonymous",
    travelStayTitle: "Travel and Stay",
    gettingThereTitle: "01. Getting There",
    gettingThereText: "Driving or biking to Tan Hung and explore the area on your own, or\n\nTaking a van we've arranged, which will leave the city at 11AM and arrive around 2PM.",
    mapDetails: "MAP & DETAILS",
    onceThereTitle: "02. Once You're There",
    whereToStayTitle: "03. Where to Stay",
    whereToStayText: "Motel to check out",
    lodgingOption: "LODGING OPTION",
    hopeSeeYou: "Hope to See You!",
    morePhotosBtn: "Click here to watch more of our wedding pictures",
    contact: "Contact us",
    quyenPhone: "Quyền: +84 911439756",
    enricPhone: "Enric: +84 93 8302704"
  },
  vi: {
    ourStory: "CÂU CHUYỆN",
    travelStay: "DI CHUYỂN & LƯU TRÚ",
    morePhotos: "THÊM HÌNH ẢNH",
    gettingMarried: "Chúng tôi sắp cưới",
    location: "Thứ Bảy, ngày 22 tháng 2 năm 2025 \nTân Hưng, Long An",
    celebratingLove: "Chào Mừng Tình Yêu",
    withThoseLove: "Cùng Những Người Thân Yêu",
    ceremony: "Lễ Cưới",
    reception: "Tiệc Cưới",
    ceremonyTime: "Thứ Bảy, ngày 22 tháng 2 năm 2025\nLúc 7:00 sáng",
    receptionTime: "Thứ Bảy, ngày 22 tháng 2 năm 2025\nLúc 9:00 sáng và 5:00 chiều",
    story: "Không Chỉ Là Một\nCâu Chuyện Tình Thường",
    storyText: "Đối với chúng tôi, tình yêu không đến ngay từ cái nhìn đầu tiên, mà phát triển dần dần khi chúng tôi hiểu nhau hơn theo thời gian.",
    quote: "Với thế giới, bạn chỉ là một người, nhưng với một người, bạn là cả thế giới",
    author: "Vô Danh",
    travelStayTitle: "Di Chuyển và Lưu Trú",
    gettingThereTitle: "01. Cách Đến",
    gettingThereText: "Lái xe hoặc đi xe máy đến Tân Hưng và khám phá khu vực, hoặc\n\nĐi xe van chúng tôi đã sắp xếp, xe sẽ khởi hành lúc 11 giờ sáng và đến nơi khoảng 2 giờ chiều.",
    mapDetails: "BẢN ĐỒ & CHI TIẾT",
    onceThereTitle: "02. Khi Bạn Ở Đó",
    whereToStayTitle: "03. Nơi Lưu Trú",
    whereToStayText: "Nhà nghỉ để tham khảo",
    lodgingOption: "LỰA CHỌN LƯU TRÚ",
    hopeSeeYou: "Hẹn Gặp Bạn!",
    morePhotosBtn: "Nhấn vào đây để xem thêm ảnh cưới của chúng tôi",
    contact: "Liên hệ",
    quyenPhone: "Quyền: +84 911439756",
    enricPhone: "Enric: +84 93 8302704"
  },
  es: {
    ourStory: "NUESTRA HISTORIA",
    travelStay: "VIAJE Y ALOJAMIENTO",
    morePhotos: "MÁS FOTOS",
    gettingMarried: "Nos casamos",
    location: "Sábado, 22 de febrero de 2025 \nTan Hung, Long An",
    celebratingLove: "Celebrando Nuestro Amor",
    withThoseLove: "Con Los Que Amamos",
    ceremony: "Ceremonia",
    reception: "Recepción",
    ceremonyTime: "Sábado, 22 de febrero de 2025\nA las 7:00",
    receptionTime: "Sábado, 22 de febrero de 2025\nA las 9:00 y 17:00",
    story: "No Es Solo Una\nHistoria de Amor Común",
    storyText: "Para nosotros, el amor no sucede instantáneamente a primera vista, sino que se desarrolla gradualmente a medida que nos conocemos mejor con el tiempo.",
    quote: "Para el mundo eres alguien, pero para alguien eres el mundo",
    author: "Anónimo",
    travelStayTitle: "Viaje y Alojamiento",
    gettingThereTitle: "01. Cómo Llegar",
    gettingThereText: "Conducir o ir en moto a Tan Hung y explorar el área por tu cuenta, o\n\nTomar una furgoneta que hemos organizado, que saldrá de la ciudad a las 11:00 y llegará alrededor de las 14:00.",
    mapDetails: "MAPA Y DETALLES",
    onceThereTitle: "02. Una Vez Allí",
    whereToStayTitle: "03. Dónde Alojarse",
    whereToStayText: "Motel para consultar",
    lodgingOption: "OPCIÓN DE ALOJAMIENTO",
    hopeSeeYou: "¡Esperamos Verte!",
    morePhotosBtn: "Haz clic aquí para ver más fotos de nuestra boda",
    contact: "Contáctanos",
    quyenPhone: "Quyền: +84 911439756",
    enricPhone: "Enric: +84 93 8302704"
  }
};

let currentLang = 'en';

function switchLanguage() {
  const langs = ['en', 'vi', 'es'];
  const currentIndex = langs.indexOf(currentLang);
  currentLang = langs[(currentIndex + 1) % langs.length];
  
  // Update all translatable elements
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key].replace(/\n/g, '<br>');
    }
  });

  // Update the button text
  const langButton = document.querySelector('.lang-switch');
  langButton.textContent = currentLang.toUpperCase();
}

document.addEventListener('DOMContentLoaded', function() {
  // Hide the main content initially
  document.body.style.overflow = 'hidden';
  
  // Check if language is already selected
  if (!localStorage.getItem('selectedLanguage')) {
    document.getElementById('language-modal').classList.remove('hidden');
  } else {
    // If language was previously selected, use it
    currentLang = localStorage.getItem('selectedLanguage');
    document.getElementById('language-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    updateContent();
  }
});

function selectLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('selectedLanguage', lang);
  document.getElementById('language-modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
  updateContent();
}

function updateContent() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLang][key]) {
      if (element.tagName.toLowerCase() === 'a' || element.tagName.toLowerCase() === 'button') {
        // For navigation items, preserve the original HTML structure
        element.textContent = translations[currentLang][key];
      } else {
        // For other elements, allow HTML formatting
        element.innerHTML = translations[currentLang][key].replace(/\n/g, '<br>');
      }
    }
  });
  
  // Update the language switch button
  const langButton = document.querySelector('.lang-switch');
  if (langButton) {
    langButton.textContent = currentLang.toUpperCase();
  }
}
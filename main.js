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
    story: "Not Just an Ordinary Love Story",
    storyText: "For us, love doesn't happen instantly at first sight, but develops gradually as we get to know each other better over a period of time.",
    travelStay: "Travel and Stay",
    gettingThere: "Getting There",
    onceYoureThere: "Once You're There",
    whereToStay: "Where to Stay",
    // Add more translations as needed
  },
  vi: {
    story: "Không Chỉ Là Một Câu Chuyện Tình Yêu Bình Thường",
    storyText: "Đối với chúng tôi, tình yêu không xảy ra ngay lập tức từ cái nhìn đầu tiên, mà phát triển dần dần khi chúng tôi hiểu nhau hơn theo thời gian.",
    travelStay: "Di Chuyển và Lưu Trú",
    gettingThere: "Cách Đến",
    onceYoureThere: "Khi Bạn Ở Đó",
    whereToStay: "Nơi Lưu Trú",
    // Add more translations
  },
  es: {
    story: "No Es Solo Una Historia de Amor Común",
    storyText: "Para nosotros, el amor no sucede instantáneamente a primera vista, sino que se desarrolla gradualmente a medida que nos conocemos mejor con el tiempo.",
    travelStay: "Viaje y Alojamiento",
    gettingThere: "Cómo Llegar",
    onceYoureThere: "Una Vez Allí",
    whereToStay: "Dónde Alojarse",
    // Add more translations
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
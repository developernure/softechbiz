// Typing Script JS
var typed = new Typed(".typing",{
  strings: ["Web Design Services", "Ecommerce Development Services", "Content Writing Services", "Graphics Design Services"],
  typeSpeed:80,
  backSpeed:80,
  loop:true,
});

var typed = new Typed(".typing-2",{
  strings: ["Digital Marketing | Web Design and Development | Virtual Assistant"],
  typeSpeed:80,
  backSpeed:80,
  loop:true,
});

// Show/Hide FAQs answer

const faqs =document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    const icon = faq.querySelector('.faq_icon i');
    if(icon.className === 'fa-solid fa-plus'){
      icon.className = 'fa-solid fa-minus';
    }
    else{
      icon.className = 'fa-solid fa-plus';
    }

  })
})

// Show/Hide Nav Menu

const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);
})
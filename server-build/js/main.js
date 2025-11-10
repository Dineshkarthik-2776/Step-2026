window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    const icon = hamburger.querySelector("img");
    icon.src = navLinks.classList.contains("show")
      ? "./assets/icons/xmark-solid-full.svg"
      : "./assets/icons/bars-solid-full.svg";
  });
}
// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const answer = item.querySelector('.faq-answer');
    const icon = question.querySelector('.icon');

    const open = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-answer').style.display = 'none';
      i.querySelector('.icon').src = './assets/icons/plus-solid-full.svg';
    });

    if (!open) {
      item.classList.add('active');
      answer.style.display = 'block';
      icon.src = './assets/icons/minus-solid-full.svg';
    } else {
      icon.src = './assets/icons/plus-solid-full.svg';
    }
  });
});

// Copy button
function copyText(text, button) {
  navigator.clipboard.writeText(text);
  button.textContent = 'Copied!';
  button.style.background = 'rgba(0, 173, 74, 0.15)';  
  button.style.color = '#0a6f2e';                      

  setTimeout(() => {
    button.textContent = 'Copy';
    button.style.background = 'rgba(0, 74, 173, 0.08)'; 
    button.style.color = '#003070';                     
  }, 1500);
}

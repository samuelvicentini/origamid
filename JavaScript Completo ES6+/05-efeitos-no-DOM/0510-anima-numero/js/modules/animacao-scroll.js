export default function initAnimScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const window60percent = window.innerHeight * 0.6;

    function AnimScroll() {

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisible = (sectionTop - window60percent) < 0;

        if (isVisible) {
          section.classList.add('ativo');
        } else if(section.classList.contains('ativo')){
          section.classList.remove('ativo');
        }
      });
    }

    AnimScroll();
    window.addEventListener('scroll', AnimScroll);
  }
}
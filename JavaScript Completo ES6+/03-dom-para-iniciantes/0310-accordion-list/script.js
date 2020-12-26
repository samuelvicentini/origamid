function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    //Sempre vir com a class ativo
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach(content => {
        content.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}
initTabNav();

function initAccordion() {
  const accordionListe = document.querySelectorAll('.js-accordion dt');

  if(accordionListe.length) {
    accordionListe[0].classList.add('ativo');
    accordionListe[0].nextElementSibling.classList.toggle('ativo')
  
    function actveAccordion() {
      this.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo')
    }
  
    accordionListe.forEach(item => {
      item.addEventListener('click', actveAccordion)
    })
  }
}
initAccordion();
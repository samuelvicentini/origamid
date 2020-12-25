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
const navLinks = document.querySelectorAll('.nav > li');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu, .dropdown-menuu');
    dropdownMenu.classList.toggle('hidden');
  });


  link.addEventListener('click', (event) => {
    const arrowIcon = event.currentTarget.querySelector('img');
    arrowIcon.src = arrowIcon.src.includes('down') ? 'images/icon-arrow-up.svg' : 'images/icon-arrow-down.svg';
  });
});


document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav > li') && !event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-menuu')) {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu, .dropdown-menuu');
    dropdownMenus.forEach((menu) => menu.classList.remove('hidden'));
  }
  
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav > li') && !event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-menuu')) {
      const arrowIcons = document.querySelectorAll('.nav > li > img');
      arrowIcons.forEach((icon) => icon.src = 'images/icon-arrow-down.svg');
  

 
    }
  });
});


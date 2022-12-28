const hamburger = document.querySelector('.hamburger');
const hamburgerX = document.querySelector('.hamburger-x');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const dropdown = document.querySelector('.dropdown')
const dropdown2 = document.querySelector('.dropdown2')
const features = document.querySelector('.features')
const company = document.querySelector('.company')
const desktopnav = document.querySelector('.desktop-nav')
const desktopnav2 = document.querySelector('.desktop-nav2')
const dekstop_features = document.querySelector('.desktop-features')
const desktop_company = document.querySelector('.desktop-company')
const featuresArrow = document.querySelector('.desktop-features img');
const companyArrow = document.querySelector('.desktop-company img');
const mobileFeaturesArrow = document.querySelector('.features img')
const mobileCompanyArrow = document.querySelector('.company img')

document.addEventListener('click', (event) => {
  if (!dekstop_features.contains(event.target))  {
    desktopnav.style.display = 'none';
    featuresArrow.src = 'images/icon-arrow-down.svg';
  } 
  if (!desktop_company.contains(event.target)) {
    desktopnav2.style.display = 'none';
    companyArrow.src = 'images/icon-arrow-down.svg';
  }
});


hamburger.addEventListener('click', () => {
  hamburger.style.display = 'none';
  hamburgerX.style.display = 'block';
  mobileNav.classList.toggle('is-active')
  overlay.style.visibility = 'visible';
});

hamburgerX.addEventListener('click', () => {
  hamburger.style.display = 'block';
  hamburgerX.style.display = 'none';
  mobileNav.classList.toggle('is-active')
  overlay.style.visibility = 'hidden';
});

features.addEventListener('click', () => {
    const dropdown = features.nextElementSibling;
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
      mobileFeaturesArrow.src = 'images/icon-arrow-down.svg';
    } else {
      dropdown.style.display = 'block';
      mobileFeaturesArrow.src = 'images/icon-arrow-up.svg';
    }
  });

  company.addEventListener('click', () => {
    const dropdown = company.nextElementSibling;
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
      mobileCompanyArrow.src = 'images/icon-arrow-down.svg';
    } else {
      dropdown.style.display = 'block';
      mobileCompanyArrow.src = 'images/icon-arrow-up.svg';
      
    }
  });

  dekstop_features.addEventListener('click', () => {
    const desktopnav = dekstop_features.nextElementSibling;
    if (desktopnav.style.display === 'flex') {
      desktopnav.style.display = 'none';
      featuresArrow.src = 'images/icon-arrow-down.svg';
    } else {
      desktopnav.style.display = 'flex';
      featuresArrow.src = 'images/icon-arrow-up.svg';
    }
  });

  desktop_company.addEventListener('click', () => {
    const desktopnav2 = desktop_company.nextElementSibling;
    if (desktopnav2.style.display === 'flex') {
      desktopnav2.style.display = 'none';
      companyArrow.src = 'images/icon-arrow-down.svg';
    } else {
      desktopnav2.style.display = 'flex';
      companyArrow.src = 'images/icon-arrow-up.svg';
    }
  })
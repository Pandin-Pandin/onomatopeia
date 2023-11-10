import { useEffect } from 'react';

function Menu() {
  useEffect(() => {
    const menuBtn = document.getElementsByClassName('menu-btn')[0];
    const disableNone = 'disable';
    const navLinks = document.getElementsByClassName('nav-links')[0];
    const showNavLinks = 'show-nav-links';
    const closeNavLinks = document.getElementsByClassName('close')[0];

    const handleClickOutside = (event) => {
      if (navLinks && 
      !navLinks.contains(event.target) && 
      menuBtn &&
      !menuBtn.contains(event.target)) {
        menuBtn.classList.remove(disableNone);
        navLinks.classList.remove(showNavLinks);
      }
    };

    const handleMenuBtnClick = () => {
      menuBtn.classList.add(disableNone);
      navLinks.classList.add(showNavLinks);
    };

    const handleCloseNavLinksClick = () => {
      menuBtn.classList.remove(disableNone);
      navLinks.classList.remove(showNavLinks);
    };

    const handleDocumentClick = (event) => {
      handleClickOutside(event);
    };

    if (menuBtn && closeNavLinks && navLinks) {
      menuBtn.addEventListener('click', handleMenuBtnClick);
      closeNavLinks.addEventListener('click', handleCloseNavLinksClick);
      document.addEventListener('click', handleDocumentClick);
    }

    return () => {
      if (menuBtn && closeNavLinks && navLinks) {
        menuBtn.removeEventListener('click', handleMenuBtnClick);
        closeNavLinks.removeEventListener('click', handleCloseNavLinksClick);
        document.removeEventListener('click', handleDocumentClick);
      }
    };
  }, []);
  return null;
}

export default Menu;
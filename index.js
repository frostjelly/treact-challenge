const openMenu = () => {
  document.body.classList += " menu--open";
  console.log("Opened Menu!");
};

const closeMenu = () => {
  document.body.classList.remove("menu--open");
  console.log("Closed Menu");
};
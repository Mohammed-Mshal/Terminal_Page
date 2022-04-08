let imgIpad = document.querySelector(`.landing .ipad img`);
imgIpad.addEventListener(`mouseenter`, () => {
  document.querySelector(`.landing `).style.marginBottom = `56px`;
});
imgIpad.addEventListener(`mouseleave`, () => {
  document.querySelector(`.landing `).style.marginBottom = `0`;
});


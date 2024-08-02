function mountElm(callback) {
  if (typeof Elm !== 'undefined') {
      callback();
  } else {
      setTimeout(() => mountElm(callback), 50);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  mountElm(() => {
    Elm.Main.init({ node: document.body });
      // Any other initialization code...
  });
});

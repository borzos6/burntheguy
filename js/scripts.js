function launch(element) {
  let rocketFlame = document.getElementById("rocket-flame");
  rocketFlame.classList.remove('rocket-flame');
  rocketFlame.classList.add('rocket-flame-flying');

  let rocketBody = document.getElementById("rocket-body");
  rocketBody.classList.remove('rocket-body');
  rocketBody.classList.add('rocket-body-flying');

  element.classList.remove('button-launch');
  element.classList.add('disappear');
}
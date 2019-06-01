function launch(element) {
  let rocketFlame = document.getElementById("rocket-flame");
  rocketFlame.classList.remove('rocket-flame');
  rocketFlame.classList.add('rocket-flame-flying');

  let rocketBody = document.getElementById("rocket-body");
  rocketBody.classList.remove('rocket-body');
  rocketBody.classList.add('rocket-body-flying');

  let rocketSmoke = document.getElementById("rocket-smoke");
  rocketSmoke.classList.remove('rocket-smoke');
  rocketSmoke.classList.add('rocket-smoke-flying');

  element.classList.remove('button-launch');
  element.classList.add('disappear');
}
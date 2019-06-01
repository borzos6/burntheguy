function launch(element) {
  // Launch rocket
  let rocketFlame = document.getElementById("rocket-flame");
  rocketFlame.classList.remove('rocket-flame');
  rocketFlame.classList.add('rocket-flame-flying');

  let rocketBody = document.getElementById("rocket-body");
  rocketBody.classList.remove('rocket-body');
  rocketBody.classList.add('rocket-body-flying');

  let rocketSmoke = document.getElementById("rocket-smoke");
  rocketSmoke.classList.remove('rocket-smoke');
  rocketSmoke.classList.add('rocket-smoke-flying');

  // Hide button
  element.classList.remove('button-launch');
  element.classList.add('disappear');

  // Show success
  let successContainer = document.getElementById("success");
  setTimeout(() => {
    successContainer.classList.add('appear');
  }, 1500);
}
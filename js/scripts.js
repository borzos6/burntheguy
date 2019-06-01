/**
 * @param element The button
 */
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

  // Hide form
  let launchForm = document.getElementById("launch-form");
  launchForm.classList.add('disappear');

  // Show success
  let successContainer = document.getElementById("success");
  setTimeout(() => {
    successContainer.classList.add('appear');
  }, 2500);

  // Show next steps
  let nextStepsTitles = document.getElementById("next-steps-titles");
  setTimeout(() => {
    nextStepsTitles.classList.add('appear');
  }, 3500);
}

/**
 *
 * @param {string} id The selector id
 */
function showById(id) {
  let element = document.getElementById(id);
  element.classList.add('show');
}
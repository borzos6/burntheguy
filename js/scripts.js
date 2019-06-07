const ACTION_LAUNCH = 'launch';
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxTu73yAGRDFG-_2vPVavkONL2zeLjR77btVb5id0kknIjfowA/exec';

/**
 * @param {String} action The action
 */
function handleAction(action) {
  /* Data validation */
  const websiteInput = document.getElementById("website");
  if (!websiteInput.value) {
    /* Shake input */
    shakeElement(websiteInput);
  } else if (websiteInput.value.toLowerCase().indexOf('napbalonem.hu')  > -1){
    /* Summon black hole */
    summonBlackHole();
    /* Handle input form */
    handleInputForm(action);
    /* Show end of the world */
    showEndOfTheWorld();

  } else {
    /* Launch rocket */
    if (action === ACTION_LAUNCH) {
      launchRocket();
    }

    /* Handle input form */
    handleInputForm(action);

    /* Show success */
    showSuccess(action);

    /* Show next steps */
    showNextSteps(action);
  }
}

/**
 * Handles the rocket launch
 */
const launchRocket = function () {
  const rocketFlame = document.getElementById("rocket-flame");
  rocketFlame.classList.remove('rocket-flame');
  rocketFlame.classList.add('rocket-flame-flying');

  const rocketBody = document.getElementById("rocket-body");
  rocketBody.classList.remove('rocket-body');
  rocketBody.classList.add('rocket-body-flying');

  const rocketSmoke = document.getElementById("rocket-smoke");
  rocketSmoke.classList.remove('rocket-smoke');
  rocketSmoke.classList.add('rocket-smoke-flying');
};

/**
 * Handles the rocket launch
 */
const summonBlackHole = function () {
  const blackHole = document.getElementById("black-hole");
  blackHole.classList.add('grow');
};

/**
 * @param {Object} element The element
 */
const shakeElement = function (element) {
  /* Shake the input */
  element.classList.add('shake');
  setTimeout(function () {
    element.classList.remove('shake');
  }, 800);
};

/**
 * @param {String} action The action
 */
const handleInputForm = function (action) {
  /* Change hidden inputs */
  if (action === ACTION_LAUNCH) {
    const burnInput = document.getElementById("burn");
    burnInput.value = 'TRUE';
  } else {
    const fixInput = document.getElementById("fix");
    fixInput.value = 'TRUE';
  }

  /* Hide form */
  const inputForm = document.getElementById("input-form");
  inputForm.classList.add('disappear');

  /* Send data */
  fetch(SHEETS_URL, { method: 'POST', body: new FormData(inputForm) })
    .then(() => console.log('Website saved'))
    .catch(error => console.error('Error!', error.message))
};

/**
 * Shows the success block
 * @param {String} action The action
 */
const showSuccess = function (action) {
  let timeoutInMilliSeconds = 100;

  /* Hide the unnecessary container */
  if (action === ACTION_LAUNCH) {
    const successFix = document.getElementById("success-fix");
    successFix.classList.add('is-hidden');
    const endOfTheWorld = document.getElementById("end-of-the-world");
    endOfTheWorld.classList.remove('is-hidden');
    /* Add timeout */
    timeoutInMilliSeconds = 2500;
  } else {
    const successLaunch = document.getElementById("success-launch");
    successLaunch.classList.add('is-hidden');
    const endOfTheWorld = document.getElementById("end-of-the-world");
    endOfTheWorld.classList.remove('is-hidden');
  }

  /* Fade in the whole block */
  const successContainer = document.getElementById("success");
  setTimeout(() => {
    successContainer.classList.add('appear');
  }, timeoutInMilliSeconds);
};

/**
 * Shows the next steps block
 * @param {String} action The action
 */
const showNextSteps = function (action) {
  let timeoutInMilliSeconds = 1000;

  /* Hide the unnecessary container */
  if (action === ACTION_LAUNCH) {
    const detailsFix = document.getElementById("details-fix");
    detailsFix.classList.add('is-hidden');
    /* Add timeout */
    timeoutInMilliSeconds = 3500;
  } else {
    const detailsLaunch = document.getElementById("details-launch");
    detailsLaunch.classList.add('is-hidden');
  }

  /* Fade in the whole block */
  const nextStepsContent = document.getElementById("next-steps-content");
  setTimeout(() => {
    nextStepsContent.classList.add('appear');
  }, timeoutInMilliSeconds);
};


/**
 * Shows the end of the world block
 */
const showEndOfTheWorld = function () {
  let timeoutInMilliSeconds = 100;

  /* Hide the unnecessary container */
  const successFix = document.getElementById("success-fix");
  successFix.classList.add('is-hidden');
  const successLaunch = document.getElementById("success-launch");
  successLaunch.classList.add('is-hidden');

  /* Show the container */
  const endOfTheWorld = document.getElementById("end-of-the-world");
  endOfTheWorld.classList.remove('is-hidden');

  /* Fade in the whole block */
  const successContainer = document.getElementById("success");
  setTimeout(() => {
    successContainer.classList.add('appear');
  }, timeoutInMilliSeconds);
};

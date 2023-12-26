let spamCounter = 0;
let hamCounter = 0;

document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const message = document.getElementById('messageField').value.trim().toLowerCase();
  const isSpam = message.includes('spam');
  const fileInput = document.getElementById('fileField');
  const attachment = fileInput.files[0]; 

  if (isSpam) {
    spamCounter++;
    document.getElementById('spamCount').textContent = spamCounter;
    document.getElementById('spamButton').classList.add('red-button');
    document.getElementById('hamButton').classList.remove('green-button');
  } else {
    hamCounter++;
    document.getElementById('hamCount').textContent = hamCounter;
    document.getElementById('hamButton').classList.add('green-button');
    document.getElementById('spamButton').classList.remove('red-button');
  }
});

document.getElementById('spamButton').addEventListener('click', function() {
  spamCounter++;
  document.getElementById('spamCount').textContent = spamCounter;
  document.getElementById('spamButton').classList.add('red-button');
  document.getElementById('hamButton').classList.remove('green-button');
});

document.getElementById('hamButton').addEventListener('click', function() {
  hamCounter++;
  document.getElementById('hamCount').textContent = hamCounter;
  document.getElementById('hamButton').classList.add('green-button');
  document.getElementById('spamButton').classList.remove('red-button');
});






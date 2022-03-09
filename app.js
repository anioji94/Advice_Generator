console.log('hi')

var newAdviceButton = document.querySelector('.new-advice')
var adviceID = document.querySelector('.advice-id') 
var adviceBody = document.querySelector('.advice-body')

newAdviceButton.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      adviceID.innerText = data.slip.id
      adviceBody.innerText = `"${data.slip.advice}"`;
    });
})
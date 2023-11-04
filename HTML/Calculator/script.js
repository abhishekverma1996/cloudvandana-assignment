function clearAnswer() {
  const answerField = document.querySelector('.result');
  answerField.value = '';
}


function appendToAnswer(value) {
  const answerField = document.querySelector('.result');
  answerField.value += value;
}

function calculateResult() {
  const answerField = document.querySelector('.result');
  try {
    answerField.value = eval(answerField.value);
  } catch (error) {
    answerField.value = 'Error';
  }
}


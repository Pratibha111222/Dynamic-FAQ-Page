function checkAnswer(selectedOption, correctAnswer) {
  const options = selectedOption.parentElement.children;

  // Highlight the correct answer in green
  Array.from(options).forEach(option => {
    if (option.textContent.trim() === correctAnswer.trim()) {
      option.classList.add('correct'); // Highlight correct answer
    } else {
      option.classList.remove('correct'); // Reset any existing correct styles
    }
  });

  // Mark the selected option as incorrect if it’s not the correct answer
  if (selectedOption.textContent.trim() !== correctAnswer.trim()) {
    selectedOption.classList.add('incorrect');
  }

  // Disable further clicks on the current question
  Array.from(options).forEach(option => {
    option.style.pointerEvents = 'none';
  });
}

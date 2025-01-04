
    function checkAnswer(selectedOption, correctAnswer) {
      let options = selectedOption.parentElement.children;
      
      // Remove previous correct/incorrect styles
      for (let option of options) {
        option.classList.remove('correct', 'incorrect');
      }

      // Check if selected answer is correct
      if (selectedOption.innerHTML === correctAnswer) {
        selectedOption.classList.add('correct');
      } else {
        selectedOption.classList.add('incorrect');
        
        // Highlight correct answer
        for (let option of options) {
          if (option.innerHTML === correctAnswer) {
            option.classList.add('green-answer');
          }
        }
      }
    }
  

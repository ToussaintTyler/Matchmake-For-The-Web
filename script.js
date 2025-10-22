document.getElementById("loveForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const desiredAnswers = [2, 5, 1, 1, 3]; // your ideal “true love” answers
  const inputs = Array.from(document.querySelectorAll("input[type='number']"));
      const errors = document.querySelectorAll(".error");
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = ""; // clear previous result

    let valid = true;
      let userAnswers = [];

  inputs.forEach((input, index) => {
        const value = parseInt(input.value);
        if (isNaN(value) || value < 1 || value > 5) {
          errors[index].textContent = "Please enter a number between 1 and 5.";
          valid = false;
        } else {
          errors[index].textContent = "";
          userAnswers.push(value);
        }
      });

let totalDifference = 0;
      let summaryHTML = "<div class='score-summary'><h3>💬 Question Breakdown</h3><ul>";
      for (let i = 0; i < desiredAnswers.length; i++) {
        const diff = Math.abs(desiredAnswers[i] - userAnswers[i]);
        const questionScore = 20 - (diff * 4); // Each question worth max 20 points
        totalDifference += diff;
        summaryHTML += `<li>Question ${i + 1}: Your answer = ${userAnswers[i]}, Ideal = ${desiredAnswers[i]} → Compatibility: ${questionScore}%</li>`;
      }
      summaryHTML += "</ul></div>";

  const compatibility = Math.max(0, 100 - totalDifference * 5); // max = 100, min = 0

  let message = "";
  if (compatibility >= 80) {
    message = `💖 Score: ${compatibility}% — We’re soulmates! ❤️`;
  } else if (compatibility >= 60) {
    message = `😊 Score: ${compatibility}% — We could be great friends!`;
  } else {
    message = `😬 Score: ${compatibility}% — Uh oh… better run away! 🏃‍♂️💨`;
  }

  document.getElementById("result").innerHTML = message;
});

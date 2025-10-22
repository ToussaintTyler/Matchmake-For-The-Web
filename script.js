document.getElementById("loveForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const desiredAnswers = [5, 2, 5, 4, 3]; // your ideal “true love” answers
  const userAnswers = Array.from(document.querySelectorAll("input[type='number']")).map(input => parseInt(input.value));
  
  let totalDifference = 0;
  for (let i = 0; i < desiredAnswers.length; i++) {
    totalDifference += Math.abs(desiredAnswers[i] - userAnswers[i]);
  }

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

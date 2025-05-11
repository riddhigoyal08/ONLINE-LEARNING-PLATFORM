// === Mobile Menu Toggle ===
const menuBtn = document.getElementById("menu-btn");
const menuClose = document.getElementById("menu-close");
const navMenu = document.querySelector(".navigation ul");

menuBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
  menuBtn.style.display = "none";
  menuClose.style.display = "inline";
});

menuClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
  menuClose.style.display = "none";
  menuBtn.style.display = "inline";
});

// === Quiz Evaluation ===
document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const result = document.getElementById("quiz-result");

  const answer = document.querySelector('input[name="q1"]:checked');
  if (answer) {
    if (answer.value === "b") {
      result.textContent = "Correct! Great job.";
      result.style.color = "green";
    } else {
      result.textContent = "Oops! That's not right. Try again.";
      result.style.color = "red";
    }
  } else {
    result.textContent = "Please select an answer!";
    result.style.color = "orange";
  }
});

// === Progress Update Example ===
// (For demonstration, you can trigger this manually or connect with lesson tracking)
function updateProgress(value) {
  const progressBar = document.querySelector("#progress progress");
  progressBar.value = value;
}

// Example: Update progress to 60%
updateProgress(60);

// === Contact Form Submission (Mock) ===
document.querySelector("#contact form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you shortly.");
  this.reset();
});

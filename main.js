const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const choice4 = document.getElementById("choice-4");
const feedback = document.getElementById("feedback");

choice1.onclick = function () {
  feedback.textContent = "残念！3番目に好きな色です";
};

choice2.onclick = function () {
  feedback.textContent = "残念！4番目に好きな色です";
};

choice3.onclick = function () {
  feedback.textContent = "正解！1番好きな色です！！";
};

choice4.onclick = function () {
  feedback.textContent = "残念！2番目に好きな色です";
};

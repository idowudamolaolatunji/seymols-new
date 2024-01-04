const spinner = document.querySelector('.spinner-box');
document.addEventListener("DOMContentLoaded", function() {
  spinner.style.visibility = "visible";
});

window.addEventListener("load", function() {
  spinner.style.visibility = "hidden";
});

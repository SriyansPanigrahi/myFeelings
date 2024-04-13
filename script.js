const show_btn = document.getElementById("show_btn");
const hide_btn = document.getElementById("hide_btn");

show_btn.addEventListener("click", function () {
  document.getElementById("show_container").style.cssText = "display: none;";
  document.getElementById("hidden_container").style.cssText = "display: flex;";
});

hide_btn.addEventListener("click", function () {
  document.getElementById("show_container").style.cssText = "display: flex;";
  document.getElementById("hidden_container").style.cssText = "display: none;";
});

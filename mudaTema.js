function mudaTema() {
  document.body.classList.toggle("light");
  const el = document.querySelector(".codepen");
  el.setAttribute("data-theme-id", "light");
}

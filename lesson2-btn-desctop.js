const btnClick = document.querySelector(".j-btn-Click");

btnClick.addEventListener("click", () => {
  let alertSting = `width your desctop: ${window.screen.width}px.\nheightc your desctop: ${window.screen.height}px.`;
  alert(alertSting);
})
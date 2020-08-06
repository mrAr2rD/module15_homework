  
const btnClick = document.querySelector(".j-btn-click");

btnClick.addEventListener("click", () => {
  let arrowIcon = document.querySelector(".btn_icon1");
  let hoverArrowIcon = document.querySelector(".btn_icon2");
        if (arrowIcon.style.display === "none") {
            arrowIcon.style.display = "";
            hoverArrowIcon.style.display = "none";
        } else {
            arrowIcon.style.display = "none";
            hoverArrowIcon.style.display = "";
        }
})

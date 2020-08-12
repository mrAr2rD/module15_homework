  
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

// Задание выполнено почти верно, единственное замечание - в самом начале при загрузке страницы видны обе иконки, так быть не должно. Чтобы этого избежать, надо в html коде изначально проставить одной из иконок стиль display: none. Поправила в lesson1.html
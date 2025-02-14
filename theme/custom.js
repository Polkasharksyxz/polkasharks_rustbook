console.log("📌 JavaScript Loaded!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("📌 JavaScript Running!");

    let items = document.querySelectorAll(".book-summary li");

    console.log("📌 Found items:", items.length); // 檢查是否找到項目

    items.forEach((item) => {
        let subList = item.querySelector("ol, ul"); // 兼容 <ol> 和 <ul>
        if (subList) {
            let toggleBtn = document.createElement("span");
            toggleBtn.innerHTML = "▶";
            toggleBtn.classList.add("toggle");
            toggleBtn.style.cursor = "pointer";
            toggleBtn.style.marginRight = "8px";

            toggleBtn.onclick = function () {
                subList.style.display = subList.style.display === "none" ? "block" : "none";
                toggleBtn.innerHTML = subList.style.display === "none" ? "▶" : "▼";
            };

            item.insertBefore(toggleBtn, item.firstChild);
            subList.style.display = "none"; // 預設隱藏
        }
    });
});

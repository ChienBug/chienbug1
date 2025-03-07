const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Thay đổi vị trí nút "No"
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight);

  noBtn.style.position = "absolute"; // Đảm bảo nút có thể di chuyển
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Xử lý khi bấm "Yes"
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.classList.add("show"); // Thêm class hiển thị
    console.log(gifResult); // Kiểm tra xem có lấy được video không
    gifResult?.play(); // Chạy video nếu tồn tại
  }, 3000);
});

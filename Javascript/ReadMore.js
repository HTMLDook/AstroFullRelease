function readMoreFunction(button) {
    var dots = button.previousElementSibling.querySelector(".dots");
    var moreText = button.previousElementSibling.querySelector(".more");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      button.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      button.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
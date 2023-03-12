function openTab(tabName, buttonName) {
    makeActive(buttonName);
    var i;
    var x = document.getElementsByClassName("tab-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";  
  }

function makeActive(buttonName) {
    // Remove active class from any other active tabs
    var x = document.getElementsByClassName("btn")
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active")
    }
  
    // Add active class to the selected tab
    document.getElementById(buttonName).classList.add("active");
}
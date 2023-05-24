// Adding deffirent Style to nav-bar when you scroll-Y-Axis
window.onscroll = function () {
  var link = document.getElementById("my-stylesheet");
  if (window.scrollY !== 0 && !link) {
    // If scroll is not at top and the link tag is not already added
    link = document.createElement("link");
    link.id = "my-stylesheet";
    link.rel = "stylesheet";
    link.href = "../css/navOnScroll.css";
    document.head.appendChild(link);
  } else if (window.scrollY === 0 && link) {
    // If scroll returns to top and the link tag is already added
    document.head.removeChild(link);
  }
};

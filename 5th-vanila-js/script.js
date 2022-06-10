const title = document.querySelector("h1");
const bodyColor = document.querySelector("body");

function handleWindowResize() {
  const windowFrame = window.innerWidth;
  const titleColor = title.classList;

  if (windowFrame > 1200) {
    title.innerText = "Desktop Device";
    bodyColor.className = "desktop";
    titleColor.remove("font-white");
  } else if (windowFrame > 800) {
    title.innerText = "Laptop Device";
    bodyColor.className = "laptop";
    titleColor.add("font-white");
  } else if (windowFrame > 600) {
    title.innerText = "Tablet Device";
    bodyColor.className = "tablet";
    titleColor.remove("font-white");
  } else {
    title.innerText = "Mobile Device";
    bodyColor.className = "mobile";
    titleColor.add("font-white");
  }
}

window.addEventListener("resize", handleWindowResize);
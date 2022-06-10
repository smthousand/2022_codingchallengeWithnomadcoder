// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

// first, we declarative a Constant(Variable) and Value
const title = document.querySelector("h2");

// and "superEventHandler" Variable is a Object that contain a function
const superEventHandler = {
  mouseOver: function () {
    title.style.color = colors[0]; // this is Array
    title.innerText = "The Mouse is here!";
  },

  mouseLeave: function () {
    title.style.color = colors[1];
    title.innerText = "The Mouse is Gone!";
  },

  windowResize: function () {
    title.style.color = colors[2];
    title.innerText = "You just resized!";
  },

  windowContextmenu: function () {
    title.style.color = colors[4];
    title.innerText = "That was a right click!";
  }
};

title.addEventListener("mouseover", superEventHandler.mouseOver);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);

window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.windowContextmenu); // click to window not title

// last we added event!!!!!!

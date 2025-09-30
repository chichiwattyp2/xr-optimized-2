window.onload = () => {
  [...document.querySelectorAll('input')].forEach((input) => input.checked = false);
};

/* Update start building anchor href location based on radioState */
function radioOnclick(self) {
  const radioState = self.getAttribute("id");
  let startBuilding = document.getElementById("start-building");

  if (radioState === "marker") {
    startBuilding.href = "/marker"; // ✅ Next.js route
  } else if (radioState === "location") {
    startBuilding.href = "/location"; // ✅ Next.js route
  } else {
    // Display error message
    const error = document.getElementById("error");
    if (error) error.style.visibility = "visible";
  }
}

function anchorOnclick(self) {
  const href = self.getAttribute("href");
  if (!href) {
    const error = document.getElementById("error");
    if (error) error.style.visibility = "visible";
  }
}


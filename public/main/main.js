window.onload = () => {
  [...document.querySelectorAll("input")].forEach((input) => (input.checked = false));
};

// Route mapping: id -> Next.js route
const routeMap = {
  marker: "/marker",
  location: "/location",
  publish: "/publish",
  "publish-confirm": "/publish-confirm",
  shop: "/shop",
  webar: "/webar",
  xrlabs: "/xrlabs",
  xrtest: "/XRTest"
};

/* Update start building anchor href location based on radioState */
function radioOnclick(self) {
  const radioState = self.getAttribute("id");
  let startBuilding = document.getElementById("start-building");

  if (routeMap[radioState]) {
    startBuilding.href = routeMap[radioState]; // ✅ dynamic route lookup
    // Hide error if previously shown
    const error = document.getElementById("error");
    if (error) error.style.visibility = "hidden";
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

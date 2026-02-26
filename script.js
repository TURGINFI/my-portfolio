function addRecommendation() {
  const recommendation = document.getElementById("new_recommendation");

  if (recommendation.value != null && recommendation.value.trim() !== "") {
    showPopup(true);

    const element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

    document.getElementById("all_recommendations").appendChild(element);

    recommendation.value = "";
  }
}

function showPopup(show) {
  const popup = document.getElementById("popup");
  popup.style.visibility = show ? "visible" : "hidden";
  popup.setAttribute("aria-hidden", show ? "false" : "true");
}
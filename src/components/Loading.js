import React from "react";

const Loading = () => {
  window.onload = function () {
    const spinner = document.getElementById("loading");
    spinner.classList.add("loaded");
  };
  return (
    <div id="loading">
      <div class="half-circle-spinner">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>
    </div>
  );
};

export default Loading;

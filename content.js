// Adds a button to save the current timestamp
function addTimestampButton() {
    const timestampButton = document.createElement("button");
    timestampButton.innerHTML = "Save Timestamp";
    timestampButton.style.position = "fixed";
    timestampButton.style.bottom = "10px";
    timestampButton.style.right = "10px";
    timestampButton.style.zIndex = "9999";

    document.body.appendChild(timestampButton);

    timestampButton.addEventListener("click", () => {
        const video = document.querySelector("video");
        const currentTime = video.currentTime;
        const videoUrl = window.location.href.split('&')[0];  // Only keep base URL

        chrome.runtime.sendMessage({
            action: "saveTimestamp",
            time: currentTime,
            url: videoUrl
        });
    });
}

// Ensure button is added on page load
window.onload = addTimestampButton;

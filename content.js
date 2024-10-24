// content.js
function addTimestampButton() {
    if (document.getElementById('youtube-timestamp-saver-button')) {
        return; // Button already exists, no need to add it again
    }

    const timestampButton = document.createElement("button");
    timestampButton.id = 'youtube-timestamp-saver-button';
    timestampButton.innerHTML = "Save Timestamp";
    timestampButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        padding: 10px 15px;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s;
    `;

    document.body.appendChild(timestampButton);

    timestampButton.addEventListener("click", () => {
        const video = document.querySelector("video");
        if (video) {
            const currentTime = video.currentTime;
            const videoUrl = window.location.href.split('&')[0];  // Only keep base URL

            const note = prompt("Add a note for this timestamp:", "");

            chrome.runtime.sendMessage({
                action: "saveTimestamp",
                time: currentTime,
                url: videoUrl,
                note: note
            }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                    alert("Error saving timestamp. Please try again.");
                } else if (response && response.success) {
                    alert("Timestamp saved successfully!");
                }
            });
        } else {
            alert("No video found on this page.");
        }
    });
}

// Function to check if we're on a YouTube watch page
function isYouTubeWatchPage() {
    return window.location.pathname === '/watch';
}

// Add button when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (isYouTubeWatchPage()) {
            addTimestampButton();
        }
    });
} else {
    if (isYouTubeWatchPage()) {
        addTimestampButton();
    }
}

// Listen for YouTube's navigation events
document.addEventListener('yt-navigate-finish', () => {
    if (isYouTubeWatchPage()) {
        addTimestampButton();
    } else {
        const button = document.getElementById('youtube-timestamp-saver-button');
        if (button) {
            button.remove();
        }
    }
});
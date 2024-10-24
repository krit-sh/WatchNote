// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "saveTimestamp") {
        chrome.storage.sync.get({ timestamps: [] }, (data) => {
            const timestamps = data.timestamps;
            timestamps.push({
                url: message.url,
                time: message.time,
                note: message.note
            });
            chrome.storage.sync.set({ timestamps }, () => {
                sendResponse({success: true});
            });
        });
        return true;  // Indicates that the response is sent asynchronously
    }
});
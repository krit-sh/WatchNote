chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "saveTimestamp") {
        chrome.storage.sync.get({ timestamps: [] }, (data) => {
            const timestamps = data.timestamps;
            timestamps.push({
                url: message.url,
                time: message.time
            });
            chrome.storage.sync.set({ timestamps });
        });
    }
});

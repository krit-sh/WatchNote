document.addEventListener('DOMContentLoaded', function () {
    const timestampList = document.getElementById('timestampList');
    const clearButton = document.getElementById('clearButton');

    // Function to load saved timestamps
    function loadTimestamps() {
        timestampList.innerHTML = '';  // Clear the list first
        chrome.storage.sync.get({ timestamps: [] }, (data) => {
            const timestamps = data.timestamps;
            if (timestamps.length === 0) {
                timestampList.innerHTML = '<p>No timestamps saved</p>';
            } else {
                timestamps.forEach((entry) => {
                    const timestampElement = document.createElement('button');
                    const timeFormatted = new Date(entry.time * 1000).toISOString().substr(11, 8);

                    timestampElement.textContent = `Go to ${timeFormatted}`;
                    timestampElement.addEventListener('click', () => {
                        chrome.tabs.create({
                            url: `${entry.url}&t=${Math.floor(entry.time)}s`
                        });
                    });

                    timestampList.appendChild(timestampElement);
                });
            }
        });
    }

    // Call the function to load timestamps on popup open
    loadTimestamps();

    // Add event listener for the "Clear All Timestamps" button
    clearButton.addEventListener('click', () => {
        chrome.storage.sync.set({ timestamps: [] }, () => {
            // Once cleared, reload the list to reflect the change
            loadTimestamps();
            alert("All timestamps have been cleared.");
        });
    });
});

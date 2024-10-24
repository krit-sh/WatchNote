// popup.js
document.addEventListener('DOMContentLoaded', function () {
    const timestampList = document.getElementById('timestampList');
    const clearButton = document.getElementById('clearButton');

    function loadTimestamps() {
        timestampList.innerHTML = '';  // Clear the list first
        chrome.storage.sync.get({ timestamps: [] }, (data) => {
            const timestamps = data.timestamps;
            if (timestamps.length === 0) {
                timestampList.innerHTML = '<p>No timestamps saved</p>';
            } else {
                timestamps.forEach((entry, index) => {
                    const timestampElement = document.createElement('div');
                    timestampElement.className = 'timestamp-item';
                    const timeFormatted = new Date(entry.time * 1000).toISOString().substr(11, 8);

                    timestampElement.innerHTML = `
                        <p><strong>Time:</strong> ${timeFormatted}</p>
                        <p><strong>Note:</strong> ${entry.note || 'No note'}</p>
                        <button class="goToButton" data-index="${index}">Go to Timestamp</button>
                        <button class="deleteButton" data-index="${index}">Delete</button>
                    `;

                    timestampList.appendChild(timestampElement);
                });

                // Add event listeners for "Go to Timestamp" buttons
                document.querySelectorAll('.goToButton').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const index = e.target.getAttribute('data-index');
                        chrome.tabs.create({
                            url: `${timestamps[index].url}&t=${Math.floor(timestamps[index].time)}s`
                        });
                    });
                });

                // Add event listeners for "Delete" buttons
                document.querySelectorAll('.deleteButton').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const index = e.target.getAttribute('data-index');
                        timestamps.splice(index, 1);
                        chrome.storage.sync.set({ timestamps }, loadTimestamps);
                    });
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
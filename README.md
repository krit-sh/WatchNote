# WatchNote - YouTube Timestamp Saver

**WatchNote** is a browser extension designed to enhance your YouTube watching experience by allowing you to easily save, manage, and take notes on specific timestamps of any video. Whether you're watching a tutorial, a lecture, or just your favorite content, WatchNote ensures you can quickly jump back to the moments that matter.

## Features

- **Save Timestamps**: While watching any YouTube video, simply save your favorite moments or important sections with a click.
- **Add Notes**: For each saved timestamp, you can write a personalized note, helping you remember why that moment was significant.
- **View Saved Timestamps**: WatchNote provides an easy-to-use interface to view all your saved timestamps and notes for each video.
- **Quick Navigation**: Instantly navigate back to any saved timestamp with a single click.
- **Responsive Design**: The UI is designed to be clean, minimalistic, and highly responsive across different screen sizes and devices.

## How It Works

1. Install the **WatchNote** extension from the browser’s extension store.
2. While watching a YouTube video, click the WatchNote icon in the toolbar.
3. Select the **Save Timestamp** button to capture the current time in the video.
4. Add a note (optional) to describe the timestamp, e.g., "Important tip about CSS."
5. View all saved timestamps and notes within the extension popup.

## File Structure

- **HTML**: Defines the structure of the popup window for saving and displaying timestamps.
- **CSS**: Handles the styling of the extension to ensure a clean, modern interface.
- **JavaScript**: Implements the core functionality of saving timestamps, handling user inputs (notes), and managing saved data.
- **JSON**: Manages settings and metadata, including manifest files required for the browser extension.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/krit-sh/WatchNote.git
   ```
2. Open your browser and navigate to the Extensions page (e.g., `chrome://extensions/` in Chrome).
3. Enable **Developer Mode**.
4. Click **Load Unpacked** and select the directory where you cloned the repository.
5. Pin WatchNote to your toolbar for easy access.

## Usage

- Open a YouTube video.
- Click the WatchNote icon in your browser toolbar.
- Save timestamps by pressing the **Save Timestamp** button.
- View and manage your saved timestamps and notes from within the extension.

## Tech Stack

- **HTML**: Structure of the extension popup.
- **CSS**: Styling and layout.
- **JavaScript**: Functionality for capturing and managing timestamps.
- **JSON**: Extension manifest and configuration.

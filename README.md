**Exchange Rate Calculator**

![Exchange Rate Calculator Demo](./assets/screenshot.png)

A simple, responsive web application to convert currencies in real-time, featuring audio feedback and swap functionality.

---

## Table of Contents

1. [Features](#features)
2. [Demo](#demo)
3. [Technologies](#technologies)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Project Structure](#project-structure)
8. [API Configuration](#api-configuration)
9. [Customization](#customization)
10. [Testing](#testing)
11. [Future Enhancements](#future-enhancements)
12. [License](#license)
13. [Contact](#contact)

---

## Features

- 🌐 **Real-time Conversion**: Fetches up-to-date exchange rates from a public API.
- 🔁 **Swap Currencies**: Easily reverse source and target currencies.
- 🎧 **Audio Feedback**: Click, calculate, and swap sounds enhance UX.
- 📱 **Responsive Design**: Optimized for desktop and mobile viewports.
- 🎨 **Modern UI**: Gradient backgrounds, glassmorphism container, and smooth hover effects.

## Demo

Live demo coming soon! You can view a local preview by opening `index.html` in your browser.

## Technologies

- **HTML5**
- **CSS3** (Flexbox, CSS Variables, Backdrop Filter)
- **JavaScript (ES6+)**
- **Google Fonts** (Poppins)

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for fetching exchange rates)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/exchange-rate-calculator.git
   cd exchange-rate-calculator
   ```

2. **Serve or open**
   - Open `index.html` directly in your browser, or
   - Use a simple HTTP server (e.g., VSCode Live Server, Python's `http.server`).

## Usage

1. Select source and target currencies from the dropdown menus.
2. Enter an amount in the first input field.
3. View the converted amount instantly.
4. Click **Swap Currencies** to reverse the conversion.
5. Enjoy audio cues on every interaction.

## Project Structure

```
├── index.html      # Main HTML file
├── style.css       # Styling rules
├── script.js       # Conversion logic and event handling
├── assets/
│   ├── screenshot.png  # Demo image
│   ├── click-sound.mp3 # Audio feedback files
│   ├── swap-sound.mp3
│   └── calculate-sound.mp3
└── README.md       # Project overview and instructions
```

## API Configuration

By default, the app uses the free `https://open.exchangerate-api.com/v6/latest` endpoint. To switch to a different API:

1. Open `script.js`.
2. Update the `fetch` URL to your desired endpoint.
3. If an API key is required, append it to the URL or configure headers accordingly.

```js
fetch("https://api.example.com/latest?access_key=YOUR_API_KEY")
  .then(res => res.json())
  // …
```

## Customization

- **Theme Colors**: Modify CSS variables in `style.css` under `:root`.
- **Fonts**: Change the Google Fonts link in `index.html`.
- **Audio**: Replace audio sources in the HTML `<audio>` tags.
- **Background Image**: Update the URL in `body { background: ... }`.

## Testing

- **Functional**: Test currency pairs for plausibility, swap button, and audio playback.
- **Responsive**: Resize the browser or use device emulation to check layout.
- **Error Handling**: Disable network to observe fallback behavior (consider adding custom messages).

## Future Enhancements

- 📊 **Historical Charts**: Display exchange rate trends over time.
- 💾 **Local Storage**: Remember last-used currencies between sessions.
- 🌗 **Dark Mode**: Toggle between light and dark themes.
- 🌐 **Localization**: Add multi-language support.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Created by [Your Name](https://github.com/your-username). Feel free to open issues or submit pull requests!


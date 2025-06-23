# Dog Album - Breed Image Explorer

A React application that displays random dog images and allows breed-specific exploration using the Dog CEO API.

## Features
- 🐶 Display 5 random dog images on initial load
- 🎯 Breed selection dropdown with sub-breed support
- 🖼️ Responsive 3-column image grid display
- 🔄 Refresh button for new random images
- 🎨 Styled with Tailwind CSS
- 🌟 Hover effects on image cards

## Usage
1. Select any breed from the dropdown to see 20 images
2. Sub-breeds appear in "Subbreed Breed" format (e.g., "Afghan Hound")
3. Click Refresh button to get new random images
4. Images scale on hover with orange border effect

## Tech Stack
- React + Vite
- Dog CEO API (https://dog.ceo/)
- Tailwind CSS for styling
- Axios-free implementation (uses native fetch API)

## Development Setup
```bash
npm install
npm run dev
```

- Note: Requires Node.js v16+ installed 

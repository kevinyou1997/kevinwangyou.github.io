# Frank Zhang-Zheng - Personal Website

A modern, responsive personal website built with TypeScript, Express.js, and Bootstrap. Features a single-page application design with dynamic content switching and a beautiful gradient background.

## Features

- 🎨 Modern design with radial gradient background
- 📱 Responsive layout using Bootstrap 5
- ⚡ Single-page application with dynamic content switching
- 🔤 Custom Raleway font integration
- 📄 Direct PDF resume viewing
- 🌐 Contact links with direct email and social media integration

## Tech Stack

- **Frontend**: HTML5, CSS3, Bootstrap 5, TypeScript
- **Backend**: Node.js, Express.js
- **Build Tool**: TypeScript Compiler
- **Dev Tools**: Nodemon for hot reloading
- **Fonts**: Google Fonts (Raleway)

## Project Structure

```
personal-website/
├── src/
│   ├── index.ts          # Express server
│   └── navigation.ts     # Client-side navigation logic
├── dist/                 # Compiled JavaScript files
├── files/
│   └── resume.pdf        # PDF resume file
├── img/
│   └── profile_picture.jpg
├── index.html            # Main HTML file
├── styles.css            # Custom CSS styles
├── package.json
├── tsconfig.json         # TypeScript config for server
├── tsconfig.navigation.json  # TypeScript config for client
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone git@github.com:fzhangzheng/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

### Building the Project

Build both server and client TypeScript files:
```bash
npm run build
```

Or build them separately:
```bash
# Build server only
npm run build:server

# Build client-side navigation only
npm run build:client
```

### Running the Website Locally

#### Development Mode (with hot reloading)
```bash
npm run dev
```
This starts the development server with nodemon, which automatically restarts when you make changes to TypeScript files.

#### Production Mode
```bash
# First build the project
npm run build

# Then start the server
npm run start
```

### Viewing the Website

Once the server is running, open your browser and navigate to:
```
http://localhost:3000
```

## Customization

### Adding Your Content

1. **Profile Picture**: Replace `img/profile_picture.jpg` with your own image
2. **Resume**: Replace `files/resume.pdf` with your resume
3. **Contact Information**: Update the contact details in `index.html`
4. **Personal Information**: Modify the intro text in the Home section

### Styling

- **Colors**: Modify the gradient in `styles.css`
- **Fonts**: Change the Google Fonts link in `index.html` and update `font-family` in `styles.css`
- **Layout**: Adjust container dimensions and spacing in `index.html`

## Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build both server and client TypeScript
- `npm run build:server` - Build server TypeScript only  
- `npm run build:client` - Build client TypeScript only
- `npm run start` - Start production server (requires build first)

## Navigation

The website features a fixed bottom navigation with:
- **HOME**: Main landing page with profile and introduction
- **RESUMÉ**: Direct link to PDF resume (opens in new tab)
- **CONTACT**: Contact information with clickable links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal website project. Feel free to fork and adapt for your own use!

## License

This project is open source and available under the [MIT License](LICENSE).
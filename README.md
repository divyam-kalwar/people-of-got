# People of GOT

A responsive Game of Thrones character browser built with vanilla JavaScript and Vite. Browse characters by house or search for a character by name.

## Features

- Filter characters by house
- Search characters by name
- Responsive card layout for desktop, tablet, and mobile
- Direct links to character pages on the Game of Thrones Wiki

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

From the repository root:

```bash
cd people-of-got
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
people-of-got/
├── index.html          # Application HTML
├── package.json        # npm scripts and dependencies
└── src/
    ├── got-data.js     # Houses and character data
    ├── main.js         # Rendering and interactions
    └── style.css       # Application styles
```

## Built With

- HTML
- CSS
- Vanilla JavaScript
- Vite

## Contributing

Contributions are welcome. Please open an issue to discuss a significant change before submitting a pull request.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
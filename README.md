# D&D Dashboard

## Summary

The **D&D Dashboard** is a web application designed for fans of Dungeons & Dragons (D&D) to explore game-related resources like spells, monsters, items, and game rules. It provides an intuitive and organized way to navigate various aspects of D&D game play. Built with React, Tailwind CSS, and Playwright, the dashboard serves as a user-friendly interface for players and Dungeon Masters alike.

**[D&D 5e API](https://www.dnd5eapi.co/)**  
   A free and open API for Dungeons & Dragons 5th Edition. It provides data like spells, classes, monsters, equipment, etc.

- Documentation: [D&D 5e API Docs](https://www.dnd5eapi.co/docs/)

---

## Getting Started

To set up the project on your local machine, follow the steps below.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or above)
- **npm** (v7 or above)

### Clone the Repository

Clone the repository using the following command:

```bash
git clone https://github.com/AightA/D-D-5E-API.git
```

### Navigate into the project directory

```bash
cd dnd-dashboard
npm install
```

### Running the Application to start the development server, use

```bash
npm run dev
```

You can now visit the application at [http://localhost:5173](http://localhost:5173).

### Running Tests

End-to-end tests are handled using Playwright. You can run the test suite with the following command:

```bash
npm run pw
```

Unit tests are using Vitest, you can run the test with the following command:

```bash
npm run test
```

## Tech Stack

### Frontend

React, React Router, Tailwind CSS

### Build Tool

Vite

### Testing

Playwright (for end-to-end testing), Vitest (for unit testing)

### Icons

React Icons

## MVP Features Implemented

### Dashboard Overview

Displays key sections (Spells, Monsters, Items, Rules).

### Responsive Sidebar Navigation

Allows easy navigation between sections.

### Data Integration

Pulls information about spells, monsters, and other D&D resources.

### Playwright End-to-End Testing

Ensures the application loads properly and key sections are visible.

### Mobile and Desktop Compatibility

Optimized for different screen sizes.

## Future Work

### Character Creation Tool

Allow users to create and save their own characters with attributes, spells, and equipment.

### Equipment Builder

Enable users to customize equipment and magical items for characters

### Dark Mode Support

Add a toggle for dark mode.

### Search Functionality

Implement search across spells, monsters, and items.

### Enhanced Monster Information

Provide more detailed descriptions and images of monsters.

### User Authentication

Allow users to save their progress, custom characters, and game settings.

### Expanded Testing

Add more unit and integration tests to cover edge cases.

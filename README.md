# Modern Tetris Game

A modern implementation of the classic Tetris game built with React, TypeScript, and Vite. Features a clean, responsive UI with smooth animations and modern design elements.

## 🎮 Features

- Classic Tetris gameplay mechanics
- Next block preview
- High score tracking
- Responsive design
- Modern UI with smooth animations
- Keyboard controls

## 🛠️ Technologies Used

- React 18
- TypeScript
- Vite
- CSS3 (with modern features)
- Custom React Hooks

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tetris.git
cd tetris
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎯 Project Structure

```
tetris/
├── src/
│   ├── components/          # React components
│   │   ├── Board.tsx       # Main game board
│   │   ├── Cell.tsx        # Individual cell component
│   │   ├── HighScores.tsx  # High scores display
│   │   └── UpcomingBlocks.tsx # Next block preview
│   ├── hooks/              # Custom React hooks
│   │   ├── useInterval.ts  # Timer hook
│   │   ├── useTetris.ts    # Main game logic
│   │   └── useTetrisBoard.ts # Board management
│   ├── __tests__/          # Test files
│   ├── App.tsx             # Main App component
│   ├── index.css           # Global styles
│   ├── main.tsx            # Entry point
│   └── types.ts            # TypeScript type definitions
├── public/                 # Static assets
└── [config files]          # Various configuration files
```

## 🎹 Controls

- **Left Arrow**: Move piece left
- **Right Arrow**: Move piece right
- **Down Arrow**: Soft drop
- **Up Arrow**: Rotate piece
- **Space**: Hard drop
- **P**: Pause game

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📝 File Formats

- `.tsx` - TypeScript React components
- `.ts` - TypeScript files
- `.css` - Stylesheets
- `.json` - Configuration files

## 🎨 Styling

The project uses modern CSS features:
- CSS Variables for theming
- Flexbox and Grid for layout
- CSS Transitions for animations
- Modern color schemes with transparency

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Inspired by the classic Tetris game
- Built with modern web technologies
- Special thanks to the React and TypeScript communities

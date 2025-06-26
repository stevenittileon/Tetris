import React, { type FC } from 'react';
import Board from './components/Board';
import UpcomingBlocks from './components/UpcomingBlocks';
import HighScores from './components/HighScores';
import { useTetris } from './hooks/useTetris';

const App: FC = () => {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

  return (
    <div className="app">
      <h1>Tetris</h1>
      <Board currentBoard={board} />
      <div className="controls">
        {isPlaying ? (
          <>
            <div className="score-display">
              <h2>Score</h2>
              <div className="score-value">{score}</div>
            </div>
            <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
          </>
        ) : (
          <>
            <button onClick={startGame}>New Game</button>
            <HighScores />
          </>
        )}
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import { getHighScores } from '../hooks/useTetris';

function HighScores() {
  const highScores = getHighScores().slice(0, 10);
  
  if (highScores.length === 0) {
    return (
      <div className="high-scores">
        <h2>High Scores</h2>
        <p style={{ textAlign: 'center', opacity: 0.7 }}>No high scores yet!</p>
      </div>
    );
  }

  return (
    <div className="high-scores">
      <h2>High Scores</h2>
      <ul className="high-scores-list">
        {highScores.map((score: number, index: number) => (
          <li key={index} className="high-score-item">
            <span>#{index + 1}</span>
            <span className="score">{score.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HighScores;

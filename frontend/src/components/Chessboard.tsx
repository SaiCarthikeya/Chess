import React from 'react';

const Chessboard = ({ board }: { board: string }) => {
  const lines = board.split('\n');
  const rows = lines
    .filter(line => /^\s*[1-8]/.test(line))
    .map(line => {
      const parts = line.split('|')[1];
      return parts.trim().split(/\s+/);
    });

    console.log(lines)
    console.log(board)
    console.log(rows)
  return (
    <div className="grid grid-cols-8 w-fit border-4 border-gray-600">
      {rows.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isDark = (rowIndex + colIndex) % 2 === 1;
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-12 h-12 flex items-center justify-center text-xl font-bold ${
                isDark ? 'bg-cyan-700' : 'bg-green-200'
              }`}
            >
              {cell !== '.' && <p>{cell}</p>}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Chessboard;

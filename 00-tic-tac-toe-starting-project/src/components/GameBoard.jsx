

export default function GameBoard({onSelectSquare, board}) {
    
    

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     const updatedGameBoard = [...gameBoard];
    //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //     setGameBoard(updatedGameBoard);

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                    {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button className="square" onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={!!board[rowIndex][colIndex]}>
                                    {playerSymbol}
                                </button>
                            </li>
                            ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
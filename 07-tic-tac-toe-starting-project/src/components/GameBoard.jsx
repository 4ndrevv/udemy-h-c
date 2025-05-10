

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {
    
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     const updatedGameBoard = [...gameBoard];
    //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //     setGameBoard(updatedGameBoard);

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                    {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button className="square" onClick={onSelectSquare}>
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
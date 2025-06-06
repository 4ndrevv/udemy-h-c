export default function Log({ turns = [] }) {
    return (
      <ol id="log">
        {turns.length === 0 ? (
          <li>No turns yet</li>
        ) : (
          turns.map((turn) => (
            <li key={`${turn.square.row}${turn.square.col}`}>
              {turn.player} selected {turn.square.row}, {turn.square.col}
            </li>
          ))
        )}
      </ol>
    );
  }
  
import React, { useState } from 'react';
import { calculateWinner} from '../function';
import Board from './Board';

const styles = {
    width: '200px',
    margin: '20px auto'
}
const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);

    const winner = calculateWinner(board);

    const handleClick = i => {
        const board2 = [...board];
        //if user click an occupied square or if game is won, return
        if (winner || board2[i]) return;
        // Put an X or an O in the clicked square
        board2[i] = xIsNext ? 'X' : 'O';
        setBoard(board2);
        setXisNext(!xIsNext);

    }
    
    const jumpTo = () => {
    
    
    
    }
    
    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
                Start Game
        </button>
        )
        
    
    return (
        <>
         <Board squares={board} onClick={handleClick} />
         <div style={styles}>
             <p>
                 {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
                 {renderMoves()}
             </p>

         </div>

       </>
    )
}

export default Game

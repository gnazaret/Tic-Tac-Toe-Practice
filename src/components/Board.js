import React from 'react'
import Square from './Square';

const style = {
    border: '5px solid darkblue',
    borderRadius: '10px',
    width: '300px',
    height: '300px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({ squares, onClick }) => {
    return (
        <div style={style}>
            {squares.map((square, i) => {
                return (
                    <Square key={i} value={square} onClick={() => onClick(i)}/>
                )
               
            })}
            
        </div>
    )
}

export default Board

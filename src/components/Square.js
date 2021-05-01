import React from 'react'

const style = {
    background: 'grey',
    border: '3px solid lightblue',
    fontSize: '40px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};


const Square = ({value, onClick}) => {
    return (
        <button style={style} onClick={onClick}>
            {value}

        </button>
    )
}

export default Square

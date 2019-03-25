import React from 'react';

const Buttons = (props) => (
    <div>
        <button value={0} onClick={(e) => props.score(e)}>0</button>
        <button value={1} onClick={(e) => props.score(e)}>1</button>
        <button value={2} onClick={(e) => props.score(e)}>2</button>
        <button value={3} onClick={(e) => props.score(e)}>3</button>
        <button value={4} onClick={(e) => props.score(e)}>4</button>
        <button value={5} onClick={(e) => props.score(e)}>5</button>
        <button value={6} onClick={(e) => props.score(e)}>6</button>
        <button value={7} onClick={(e) => props.score(e)}>7</button>
        <button value={8} onClick={(e) => props.score(e)}>8</button>
        <button value={9} onClick={(e) => props.score(e)}>9</button>
        <button value={10} onClick={(e) => props.score(e)}>10</button>
    </div>
);

export default Buttons;
import React from 'react';

const Rules = (props) => {
    return (
        <div className = {props.generation === 0? "rules-setup": "rules-playing"}>
            <h2>There are four rules:</h2>
            <ul>
                <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                <liv>Any live cell with more than three live neighbours dies, as if by overpopulation.</liv>
                <li>Any dead cell with three live neighbours becomes a live cell, as if by reproduction.</li>
            </ul>
            <h3>With each generation, the app evaluates each cell in the grid and pronounces it either living or dead.</h3>
        </div>
    );
};

export default Rules;
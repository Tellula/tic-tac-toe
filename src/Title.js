import React from "react";
import './Title.css'
import tictactoe from './tictactoe.png'

class Title extends React.Component {
    render() {
        return (
            <div className="container"><img className='title' src={tictactoe} alt="tic tac toe" /></div>
        )
    }
}

export default Title;
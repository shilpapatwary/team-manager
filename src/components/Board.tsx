/* eslint-disable no-dupe-class-members */
import React, { Component } from 'react';
import {BoardData} from '../types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faWindowClose } from '@fortawesome/free-solid-svg-icons';
 interface BoardProps{
    board: BoardData,
    onBoardUpdate: any,
    removeBoard: any
}

interface BoardState{
    boardName: string
}
class Board  extends Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);
        this.state = {
            boardName: this.props.board.name
        }
        this.updateBoardName = this.updateBoardName.bind(this);
        this.setBoardName = this.setBoardName.bind(this);
        this.removeBoard = this.removeBoard.bind(this);
    }

    updateBoardName(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        event.preventDefault();
        this.props.onBoardUpdate(this.props.board.id, this.state.boardName);
    }

    setBoardName(event:React.ChangeEvent<HTMLInputElement>) {
        this.setState({boardName: event.target.value});
    }

    removeBoard() {
        this.props.removeBoard(this.props.board.id);
    }

    render() {
      return (
            <li className="board" id={this.props.board.id} >
                <form id={`boardUpdate${this.props.board.id}`}>
                    <div className="boardHeader">
                            <input type="text" id={`boardTitle${this.props.board.id}`} className="boardTitle" value={this.state.boardName} onChange={this.setBoardName} />
                            <span id={`update${this.props.board.id}`} className={`updateboard  `} onClick={this.updateBoardName}><FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></span>
                            <span className="deleteboard" onClick={this.removeBoard}><FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon></span>
                    </div>  
                    <Link to={`/board/${this.props.board.id}`}><div className="boardBody"></div></Link>
                </form>
            </li>
      );
    }
  }
  
  export default Board;
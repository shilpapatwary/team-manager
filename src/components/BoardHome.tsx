import React, { Component } from 'react';
import Board from './Board';
import {BoardData, BoardState} from '../types';
import {editBoardAction, deleteBoardAction, setBoardAction, addBoardAction} from '../actions';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

interface BoardHomeProps {
    boards?: BoardData[],
    updateBoard: any,
    removeBoard: any,
    createBoard: any
}

export class BoardHome  extends Component<BoardHomeProps, any> {
    constructor(props: BoardHomeProps) {
        super(props);
        this.createBoard = this.createBoard.bind(this);
    }
    createBoard() {
        const board = {
         id:Math.random() * 10000000,
         name:"New Board",
          "lists": []
        }
        this.props.createBoard(board);
      }
    
    render() {
      return this.props.boards ? (
        <section id="boards" style={{margin: "3%"}}>
            <section className="addboard"><span id="createBoardIcon" onClick={this.createBoard}><FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon><span className="addBoardText">Create a Board</span></span></section>
            <ul id="boardsContainer">
            {
            this.props.boards.map(board => {
                return <Board board={board} key={board.id} onBoardUpdate={this.props.updateBoard} removeBoard={this.props.removeBoard}/>
            })
            }  
            </ul>
        </section>
      ) : <h1>Loading....</h1>;
    }
  }

  export default BoardHome;
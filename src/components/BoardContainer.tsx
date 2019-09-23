import React, { Component } from 'react';
import Board from './Board';
import {BoardData, BoardState} from '../types';
import {editBoardAction, deleteBoardAction, setBoardAction, addBoardAction} from '../actions';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Layout from './Layout';
import BoardHome from './BoardHome';
interface BoardContainerProps{
    boards?: BoardData[],
    setSelectedBoard: any,
    updateBoard: any,
    showSuccess: any,
    removeBoard: any,
    createBoard: any
}

export class BoardContainer  extends Component<BoardContainerProps, any> {
    constructor(props: BoardContainerProps) {
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
        <Layout component={<BoardHome boards={this.props.boards} createBoard={this.props.createBoard} updateBoard={this.props.updateBoard} removeBoard={this.props.removeBoard}></BoardHome>}></Layout>
      ) : <h1>Loading....</h1>;
    }
  }

  const mapStateToProps = (state: BoardState) => {
    return {
        boards: state.boards
    }
  }
  const mapDispatchToProps = (dispatch:Dispatch) => {
      return {
          updateBoard: (id: string, name: string) => { dispatch(editBoardAction(id, name)) },
          removeBoard: (boardId: string) => { dispatch(deleteBoardAction(boardId)) },
          //setSelectedBoard: (board: BoardData) => { dispatch(setBoardAction(board)) },
          createBoard: (board: BoardData) => {dispatch(addBoardAction(board))}
      }
  }
  export default connect (mapStateToProps, mapDispatchToProps) (BoardContainer);
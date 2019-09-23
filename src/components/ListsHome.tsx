import React, { Component } from 'react';
import Lists from './Lists';
import {BoardData, ListData, BoardState, CardData} from '../types';
import {addCardAction, addListAction, moveCardAction, moveListAction, editCardAction, editListAction, setCurrentViewAction} from '../actions';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface ListContainerProps{
    board?: BoardData,
    addCardToList: any,
    onAddList: any,
    onlistNameEdited: any,
    editCardName: any,
    moveCard: any,
    moveList: any
}

export class ListHome  extends Component<ListContainerProps, any> {
    constructor(props: ListContainerProps) {
        super(props);
    }

    render() {
      return this.props.board ? (
        <section id='Lists'>
            <section className="breadcrumb">
               <Link to="/"><span id="linkBoards"><FontAwesomeIcon icon={faArrowAltCircleLeft} style={{marginRight:"1rem", color: "#fff"}}></FontAwesomeIcon><span style={{borderBottom: "1px solid #ffffff"}}>Back to boards</span></span></Link> 
            </section>
            <section id={this.props.board.id} className="listSection">
                <Lists lists={this.props.board.lists} addCardToList={this.props.addCardToList} moveList={this.props.moveList} addListToBoard={this.props.onAddList} editListName={this.props.onlistNameEdited} editCardName={this.props.editCardName} moveCard={this.props.moveCard}></Lists> 
            </section>
    </section>
      ) : <div>Loading...</div>;
    }
  }
  
  export default ListHome;
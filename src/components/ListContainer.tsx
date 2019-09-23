import React, { Component } from 'react';
import Lists from './Lists';
import { BoardData, ListData, BoardState, CardData } from '../types';
import { addCardAction, addListAction, moveCardAction, moveListAction, editCardAction, editListAction, setCurrentViewAction, setBoardAction } from '../actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Layout from './Layout';
import ListsHome from './ListsHome';
interface ListContainerProps{
    board?: BoardData,
    showBoards: any,
    addCardToList: any,
    onAddList: any,
    onlistNameEdited: any,
    editCardName: any,
    moveCard: any,
    moveList: any,
    match: any,
    setCurrentBoard : any
}

export class ListContainer  extends Component<ListContainerProps, any> {
    constructor(props: ListContainerProps) {
        super(props);
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.setCurrentBoard(params.id)
    }
    render() {
        return this.props.board ? (
            <Layout component={<ListsHome board={this.props.board}
                addCardToList={this.props.addCardToList}
                onAddList={this.props.onAddList}
                onlistNameEdited={this.props.onlistNameEdited}
                editCardName={this.props.editCardName}
                moveCard={this.props.moveCard}
                moveList={this.props.moveList}></ListsHome>}></Layout>
        ) : <div>Loading...</div>;
    }
  }
  
  const mapStateToProps = (state: BoardState) => {
    return {
        board: state.selectedBoard
    }
  }
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addCardToList: (listId:string, card: CardData) => {dispatch(addCardAction(listId, card))},
        moveList: (listId: string, index: number) => {dispatch(moveListAction(listId, index))},
        onAddList: (list: ListData) => {dispatch(addListAction(list))},
        onlistNameEdited: (listId: String, listName: String) => {dispatch(editListAction(listId, listName))},
        editCardName: (listId: String, cardId:String, name: String) => {dispatch(editCardAction(listId, cardId, name))},
        moveCard: (listId: string, cardId: string, index: number) => {dispatch(moveCardAction(listId, cardId,index))},
        showBoards: () => {dispatch(setCurrentViewAction(true, false))},
        setCurrentBoard: (id: string) => {dispatch(setBoardAction(id))}
    }
  }
  export default connect (mapStateToProps, mapDispatchToProps) (ListContainer);
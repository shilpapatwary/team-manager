import React, { Component } from 'react';
import Card from './Card';
import {ListData, CardData} from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

interface ListProps{
    list: ListData,
    editCardName: any,
    editListName: any,
    addCardToList: any,
    moveCard: any,
    moveList: any
}

interface ListState{
    list: ListData,
    listName: any,
    listId?: string,
    cards?: CardData[]
}
class List  extends Component<ListProps, ListState> {
    constructor(props: ListProps) {
        super(props);
        
        this.addCardToList = this.addCardToList.bind(this);
        this.editListName = this.editListName.bind(this);
        this.setListName = this.setListName.bind(this);
        this.editCardName = this.editCardName.bind(this);
        this.moveCard = this.moveCard.bind(this);
        this.moveList = this.moveList.bind(this);
    }

    addCardToList(event: any) {
        this.props.addCardToList(this.props.list.id, {
            id: `${Math.floor(Math.random() * 100000)}`,
            name: ' sample card'
        });
    }

    setListName(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({listName: event.target.value});
    }

    editListName(event: React.KeyboardEvent<HTMLInputElement>) {
        if(event.keyCode === 13) {
            this.props.editListName(this.props.list.id, this.state.listName);
        }
    }

    editCardName(cid: string, name: string) {
        this.props.editCardName(this.props.list.id, cid, name);
    }

    moveCard(cardId: string,index: number) {
        this.props.moveCard(this.props.list.id, cardId, index);
    }

    moveList() {
        this.props.moveList(this.props.list.id, this.props.list.index);
    }
    render() {
      return (
          <div id={this.props.list.id} className="list">
              <div className="listHeader"><input className="listTitle" type='text' value={this.props.list.name} onChange={this.setListName} onKeyDown={this.editListName} />
                  <span className="moveList" onClick={this.moveList}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
              </div>
              <div className="cards">{
                  this.props.list.cards ? this.props.list.cards.map((card) => {
                      return <Card card={card} key={card.id} moveCard={this.moveCard} editCardName={this.editCardName}></Card>
                  }) : <h2>loading...</h2>
              }</div>
              <div className="addCard" onClick={this.addCardToList}><FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon> Add card</div>
          </div>
      );
    }
  }
  
  export default List;
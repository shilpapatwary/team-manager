import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import List from '../components/List';
import Card from '../components/Card';
import * as React from 'react';
import { should } from 'chai';
import sinon from 'sinon';
should();

Enzyme.configure({ adapter: new Adapter() });

describe('<List/ >', function() {
    it('should render cards and dispatch add cards action', function() {
        const data = {
            id: "list1",
            name: "Alaska",
            index: 1,
            cards: [{
                id: "560bf4dd7139286471dc009c",
                name: "Grand Canyon National Park",
                index: 1
              }]
        }
        const addCardToList = sinon.fake();
        const editCardName=sinon.fake();
        const editListName=sinon.fake();
        const moveCard=sinon.fake();
        const moveList=sinon.fake();
        const listWrapper = shallow(<List list={data} addCardToList={addCardToList} editCardName={editCardName} editListName={editListName} moveCard={moveCard} moveList={moveList}/>);
        listWrapper.find('input').length.should.equal(1);
        listWrapper.find(Card).length.should.equal(1);
        listWrapper.find('.addCard').length.should.equal(1);
        addCardToList.calledOnce.should.be.false;

        listWrapper.find('.addCard').simulate('click');
        addCardToList.calledOnce.should.be.true;
    });
    it('should edit list name and dispatch editList action', function() {
        const data = {
            id: "list1",
            name: "Alaska",
            index: 1,
            cards: [{
                id: "560bf4dd7139286471dc009c",
                name: "Grand Canyon National Park",
                index: 1
              }]
        }
        const addCardToList = sinon.fake();
        const editCardName=sinon.fake();
        const editListName=sinon.fake();
        const moveCard=sinon.fake();
        const moveList=sinon.fake();
        const listWrapper = shallow(<List list={data} addCardToList={addCardToList} editCardName={editCardName} editListName={editListName} moveCard={moveCard} moveList={moveList}/>);
        listWrapper.find('.listTitle').length.should.equal(1);
        listWrapper.setState({listName: 'new list name'});
        listWrapper.find('.listTitle').simulate('keydown', {keyCode: 13});
        editListName.called.should.be.true;
    });
    it('should move list name and dispatch moveList action', function() {
        const data = {
            id: "list1",
            name: "Alaska",
            index: 1,
            cards: [{
                id: "560bf4dd7139286471dc009c",
                name: "Grand Canyon National Park",
                index: 1
              }]
        }
        const addCardToList = sinon.fake();
        const editCardName=sinon.fake();
        const editListName=sinon.fake();
        const moveCard=sinon.fake();
        const moveList=sinon.fake();
        const listWrapper = shallow(<List list={data} addCardToList={addCardToList} editCardName={editCardName} editListName={editListName} moveCard={moveCard} moveList={moveList}/>);
        listWrapper.find('.moveList').length.should.equal(1);
        listWrapper.find('.moveList').simulate('click');
        moveList.called.should.be.true;
    });
})
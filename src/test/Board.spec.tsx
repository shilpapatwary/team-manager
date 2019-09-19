import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import sinon from 'sinon';
import {Provider} from 'react-redux';
import { AnyAction, createStore } from 'redux';
import  BoardContainer from '../components/BoardContainer';
import Board from '../components/Board';
import initialState from '../../src/initialState.json';
import { TrelloActionTypes, BoardData } from '../types';
import List from '../components/List';

should();

Enzyme.configure({ adapter: new Adapter() });

describe('<Board/ >', function() {
    it('should dispatch edit board action', function() {
        const board: BoardData = {
            id:"5bdaeff0bee9dc6b70afed0d",
            name:"board2",
            lists: [{
                id: "560bf446f17023a3710658fb",
                name: "Alaska",
                index:1,
                cards:[{
                    id: "560bf4dd7139286471dc009c",
                    name: "Grand Canyon National Park",
                    index: 1
                  }]
              }]
        };
        const onBoardUpdate= sinon.fake();
        const onBoardSelect= sinon.fake();
        const removeBoard= sinon.fake();
        const showSuccess = sinon.fake();
        const wrapper = mount(<Board showSuccess="" onBoardUpdate={onBoardUpdate} onBoardSelect={onBoardSelect} board={board} removeBoard={removeBoard}/>);
        wrapper.find("input").length.should.equal(1);
        wrapper.setState({boardName: 'new board Name'});
        wrapper.find('.updateboard').simulate('click');
        onBoardUpdate.calledOnce.should.be.true;
    });

    it('should dispatch delete board action', function() {
        const board: BoardData = {
            id:"5bdaeff0bee9dc6b70afed0d",
            name:"board2",
            lists: [{
                id: "560bf446f17023a3710658fb",
                name: "Alaska",
                index:1,
                cards:[{
                    id: "560bf4dd7139286471dc009c",
                    name: "Grand Canyon National Park",
                    index: 1
                  }]
              }]
        };
        const onBoardUpdate= sinon.fake();
        const onBoardSelect= sinon.fake();
        const removeBoard= sinon.fake();
        const showSuccess = sinon.fake();
        const wrapper = mount(<Board onBoardUpdate={onBoardUpdate} onBoardSelect={onBoardSelect} board={board} showSuccess="" removeBoard={removeBoard}/>);
       wrapper.find('.deleteboard').simulate('click');
       removeBoard.calledOnce.should.be.true;
    });

})
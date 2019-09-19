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
import { TrelloActionTypes } from '../types';

should();

Enzyme.configure({ adapter: new Adapter() });

describe('<BoardContainer/ >', function() {
    it('should render Boards', function() {
        const reducer = sinon.fake( (currState: any, action: AnyAction) => {
            return currState;
        });
        const store = createStore(reducer, initialState);
        const wrapper = mount(<Provider store={store}><BoardContainer showSuccess="" ></BoardContainer></Provider>);
         wrapper.find(Board).length.should.equal(5);
        reducer.calledOnce.should.be.true;
    });

    it('should dispatch set selected Board action', function() {
        const reducer = sinon.fake( (currState: any, action: AnyAction) => {
            if(action.type.indexOf('@@redux/INIT') === 0){
                return currState;
            }
            (action.type).should.equal(TrelloActionTypes.SET_BOARD);
            return currState;
        });
        const store = createStore(reducer, initialState);
        const setSelectedBoard=sinon.fake();
        const updateBoard= sinon.fake();
        const showSuccess= sinon.fake();
        const removeBoard= sinon.fake();
        const wrapper = mount(<Provider store={store}><BoardContainer showSuccess=""/></Provider>);
        wrapper.find('.boardBody').first().simulate('click');
        reducer.calledTwice.should.be.true;
    });
    
})
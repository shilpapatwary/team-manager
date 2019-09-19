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
     it('should edit card name and dispatch editCard action', function() {
        const data = {
                id: "560bf4dd7139286471dc009c",
                name: "Grand Canyon National Park",
                index: 1
              };
        const editCardName=sinon.fake();
        const moveCard=sinon.fake();
        const wrapper = shallow(<Card card={data} editCardName={editCardName} moveCard={moveCard}/>);
        wrapper.find('input').length.should.equal(1);
        wrapper.setState({cardName: 'new card name'});
        wrapper.find('input').simulate('keydown', {keyCode: 13});
        editCardName.called.should.be.true;
    });
    it('should move card  and dispatch moveCard action', function() {
        const data = {
                id: "560bf4dd7139286471dc009c",
                name: "Grand Canyon National Park",
                index: 1
              };
        const editCardName=sinon.fake();
        const moveCard=sinon.fake();
        const wrapper = shallow(<Card card={data} editCardName={editCardName} moveCard={moveCard}/>);
        wrapper.find('.moveCard').length.should.equal(1);
        wrapper.find('.moveCard').simulate('click');
        moveCard.called.should.be.true;
    });
});
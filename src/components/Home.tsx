import React, { Component } from 'react';
import BoardContainer from './BoardContainer';
import ListContainer from './ListContainer';
import { BoardData } from '../types';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { store } from '..';
import { Provider } from 'react-redux';

interface HomeState{ 
    boards?: BoardData[],
    selectedBoard?: BoardData,
    showBoards?: boolean,
    showLists?: boolean,
    showSuccess: boolean
}

class Home  extends Component<any, HomeState> {
  constructor (props: any) {
    super (props);
    this.state = {
      boards: store.getState().boards,
      selectedBoard: store.getState().selectedBoard,
      showBoards: store.getState().showBoards ,
      showLists: store.getState().showLists ,
      showSuccess: false
    };
    
  }
  
 
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        boards: store.getState().boards,
        selectedBoard: store.getState().selectedBoard,
        showBoards: store.getState().showBoards,
        showLists: store.getState().showLists
      })
    })
  } 

    render() {
      return (
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={BoardContainer}></Route>
              <Route exact path="/board/:id" component={ListContainer}></Route>
            </Switch>
          </Router>
        </Provider>
      );
    }
  }
  
  export default Home;
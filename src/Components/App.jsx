import React, {Component} from 'react';
import './App.css';
import NamesList from './NamesList/NamesList';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
        };
    }

    render(){
        return(
                <NamesList listOfNames={this.state.names}/>
        )
    }
}

export default App;
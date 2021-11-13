import React, {Component} from 'react';
import './App.css';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondarAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondarAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondarAbility: 'Shoots web'
                }
            ]
        };
    }

    render(){
        return(
                <SuperHeroTable arrayOfSuperHeroes={this.state.superheroes}/>
        )
    }
}

export default App;
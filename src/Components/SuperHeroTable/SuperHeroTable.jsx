import React from 'react';

const SuperHeroTable = (props) => {
    let superHeroes = props.arrayOfSuperHeroes.map((element) => {
        return Object.values(element)
    });
    let superHeroesValues = superHeroes.map((element) => {
        return(
            <tr>
                <td>{element[0]}</td>
                <td>{element[1]}</td>
                <td>{element[2]}</td>
                <td>{element[3]}</td>
            </tr>
        )
    });
    let superHeroes2 = Object.keys(props.arrayOfSuperHeroes[0])
    let superHeroesKeys = superHeroes2.map((element) => {
        return(
                <th>{element}</th>
        )
    });




    return (
        <table>
            <tr>
                {superHeroesKeys}
            </tr>
            {superHeroesValues}
        </table>
    );
}
 
export default SuperHeroTable;
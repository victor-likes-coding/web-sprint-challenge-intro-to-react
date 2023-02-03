import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";
import "./App.css";

const CharacterList = styled.div`
    width: 66%;
    margin: 0 auto;
`;

const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
    const [characters, setCharacters] = useState([]);
    const makeCharacters = (chars = []) => {
        return chars.map((char, index) => <Character character={char} key={index} />);
    };

    // Fetch characters from the API in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("https://swapi.dev/api/people/");
            setCharacters(data);
        })(); // IIFE
    }, []);

    console.log(characters);

    return (
        <div className="App">
            <h1 className="Header">Characters</h1>
            <CharacterList>{characters?.length && makeCharacters(characters)}</CharacterList>
        </div>
    );
};

export default App;

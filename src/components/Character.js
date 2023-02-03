import React, { useState } from "react";
import styled from "styled-components";
// Write your Character component here

const styles = {
    base: 0.8,
    remSize: function (multiplier) {
        return `${this.base * multiplier}rem`;
    },
    text: {
        header: "#443e3e",
        background: "#443e3e",
    },
};

const CharWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    background-color: ${styles.text.background};
    color: white;
    padding: 0 ${styles.remSize(2)};
    margin-bottom: ${styles.remSize(2)};
    box-shadow: 0px 0px 5px white;
    border-radius: 3px;
    font-size: ${styles.remSize(2)};
    flex-flow: wrap;
`;

const CharHeader = styled.header`
    padding: ${styles.padding} 0;
    display: flex;
    align-items: center;
`;

const CharPara = styled.p`
    padding: ${styles.remSize(2)} 0;
`;

const HiddenContent = styled.div`
    width: 100%;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s ease-in;
    text-align: left;
`;

const Character = ({ character }) => {
    const [isHidden, setIsHidden] = useState(true);

    const handleOnClick = (event) => {
        setIsHidden(!isHidden);
        event.stopPropagation();
    };

    return (
        <CharWrapper className="character" onClick={handleOnClick}>
            <CharHeader className="character__name">{character.name}</CharHeader>
            <CharPara className="character__birth">{character.birth_year}</CharPara>
            {/* <HiddenContent className={!isHidden ? "show" : ""}>
                <div className="info">
                    <p>
                        {character.name} was born in the year {character.birth_year}. {character?.gender !== "n/a" && `They identify as ${character.gender}.`}{" "}
                        They star in {character.films.length} films:
                    </p>
                    {character.films.map((film, index) => (
                        <li key={index}>{film}</li>
                    ))}
                </div>
            </HiddenContent> */}
        </CharWrapper>
    );
};

export default Character;

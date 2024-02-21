import React from "react";
import styled from "styled-components";
//dispalays title and quick description of the app. No state, just presentational.
const HeaderStyle = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const Header = (prop) => {
    const { date } = prop
    return (
        <HeaderStyle>
            <h1>Astronomy Picture of the Day</h1>
            <p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
            <p>{date}</p>
        </HeaderStyle>
    )
}
export default Header;
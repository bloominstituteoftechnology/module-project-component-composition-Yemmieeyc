import React from "react";
import styled from "styled-components";
const FooterStyle = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const Footer = (prop) => {
    const { explanation, title, copyright } = prop;
    return (
        <FooterStyle>
            <h3>{title}</h3>
            <h3>Image Credit & Copyright: {copyright}</h3>
            <p>Explanation: {explanation}</p>
        </FooterStyle>
    )
}
export default Footer
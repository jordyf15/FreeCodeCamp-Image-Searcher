import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
    display: flex;
    flex-direction: row;
    border: 4px solid #246390;
    box-shadow: 0 0 0 2px #2eafdc;
    color: #30a2bc;
    background-color: #0f1422;
    margin-bottom: 20px;
    border-radius: 10px;
    word-break: break-all;

     @media (max-width: 550px) {
    flex-direction: column;
    }
`;

const ImageContainer=styled.div`
    border-right: 6px solid #246390;
    @media (max-width: 550px) {
        border-bottom: 6px solid #246390;
    }
`;

const AltTextContainer=styled.div`
    height: 50%;
`;

const PageUrlContainer=styled.div`
    height: 50%;
`;

const Label=styled.div`
    border-bottom: 2px solid #15607f;
    padding-right: 20px;
    color: #edbd5b;
    display: inline;
`;


const Image=({data})=>{
    return(
        <Container>
            <ImageContainer>
                <img src={data.imageUrl} alt={data.altText} width='300' height='300'/>
            </ImageContainer>
            <div>
                <AltTextContainer>
                    <Label>Alternate Text :<br/></Label>
                    <br/>
                    {data.altText}<br/>
                </AltTextContainer>
                <PageUrlContainer>
                   <Label>Page's Url :<br/></Label>
                   <br/>
                    {data.pageUrl}
                </PageUrlContainer>
            </div>
        </Container>
    )

};

export default Image;
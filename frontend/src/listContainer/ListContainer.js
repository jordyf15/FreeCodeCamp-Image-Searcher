import React from 'react';
import Image from './Image';
import History from './History';
import styled from 'styled-components';
import {v4} from 'uuid';

const ListContainerDiv=styled.div`
  max-width: 70vw;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
`;

const HistoryListContainer=styled.div`
    background-color: #08354a;
    border: 4px solid #095e85;
    text-align: left;
`;

const Title=styled.h2`
    color: #3ed2f3;
`;

const ListContainer=({show,images,history})=>{
    if(show==='image' && images){
        return(
            <>
            <Title>Image Search</Title>
            <ListContainerDiv>
                {images.map(image=><Image key={v4()} data={image}/>)}
            </ListContainerDiv>
            </>
        )
    }
    if(show==='history' && history){
        return(
            <>
            <Title>Search History</Title>
            <HistoryListContainer>
                {history.map(h=><History key={v4()} data={h}/>)}
            </HistoryListContainer>
            </>
        )
    }
        return null;

};

export default ListContainer;
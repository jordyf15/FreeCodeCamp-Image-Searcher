import React,{useState} from 'react';
import SearchForm from './searchForm/SearchForm';
import {imageSearch} from './services/imgSrcService';
import {historySearch} from './services/srcHistory';
import ListContainer from './listContainer/ListContainer';
import styled from 'styled-components';

const Container=styled.div`
  text-align: center;
`;

const Button=styled.button`
    background-color: #0a3e5e;
    border: 2px solid #1b84ab;
    border-radius: 5px;
    color: #7ec9e8;
    font-family: Orbitron;
`;

const App=()=>{
  const [show,setShow]=useState(null);
  const [images,setImages]=useState(null);
  const [history,setHistory]=useState(null);

  const handleSearch=async(query,offset)=>{
    setShow('image');
    const {data}=await imageSearch(query,offset);
    setImages(data);
    setHistory(null);
  }
  const getHistory=async()=>{
    setShow('history');
    const{data}=await historySearch();
    setImages(null)
    setHistory(data);
  }

  return(
    <Container>
        <h1>Image Search Abstration Layer</h1>
      <SearchForm handleSearch={handleSearch}/>
      <Button onClick={getHistory}>Search History</Button>
      <ListContainer show={show} images={images} history={history}/>
    </Container>
  )
}

export default App;

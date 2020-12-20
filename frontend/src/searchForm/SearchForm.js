import React,{useState} from 'react';
import styled from 'styled-components';

const InputQuery=styled.input`
    background-color: #0a3e5e;
    border: 2px solid #1b84ab;
    margin-right: 2px;
    border-radius: 5px;
    color: #7ec9e8;
    font-family: Orbitron;
    text-align: center;
`;
const InputSearch=styled.input`
    background-color: #0a3e5e;
    border: 2px solid #1b84ab;
    margin-right: 2px;
    border-radius: 5px;
    color: #7ec9e8;
    font-family: Orbitron;
`;
const Form=styled.form`
    margin-bottom: 20px;
    position: relative;
`;

const Button=styled.button`
    background-color: #0a3e5e;
    border: 2px solid #1b84ab;
    border-radius: 5px;
    color: #7ec9e8;
    font-family: Orbitron;
`;

const Icon=styled.i`
    margin-left: 3px;
    position:absolute;
    color: #3ed2f3;
    top: 4px;
`;

const SearchForm=({handleSearch})=>{
    const [query,setQuery]=useState('');
    const [offset,setOffset]=useState(10);

    const submitHandler=(event)=>{
        event.preventDefault();
        handleSearch(query,offset);
    }
    return(
        <Form onSubmit={submitHandler}>
            <Icon className="fas fa-search" onClick={()=>handleSearch(query,offset)}></Icon>
            <InputQuery type='text' value={query} onChange={({target})=>setQuery(target.value)}/>
            <InputSearch type='number' value={offset} min='1' max='10' onChange={({target})=>setOffset(target.value)}/>
            <Button type='submit'>Search</Button>
        </Form>
    )
}

export default SearchForm;
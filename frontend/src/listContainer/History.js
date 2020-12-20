import React from 'react';
import styled from 'styled-components';

const Date=styled.span`
    color: #a6eafd;
`;

const Query=styled.span`
    color: #28b3c6;
`;


const HistoryContainer=styled.div`
    // width: 100%;
    color: #a3d5f8;
    border-bottom: 2px solid #155173;
    margin-top: 5px;
`;

const timeFormatter=(time)=>{
    return time<10
    ?`0${time}`
    :time
}

const History=({data})=>{
    const {time,query}=data;
    const date=new window.Date(time);
    const dateString=`${timeFormatter(date.getDate())}-${timeFormatter(date.getMonth()+1)}-${date.getFullYear()} ${timeFormatter(date.getHours())}:${timeFormatter(date.getMinutes())}`
    return(
        <HistoryContainer>
            <Date>{dateString} </Date> &gt;&gt;&gt; <Query> {query}</Query>
        </HistoryContainer>
    )
};

export default History;
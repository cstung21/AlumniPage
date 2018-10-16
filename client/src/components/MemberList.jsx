import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: inline-block;
  position: relative;
  left: 25px;
`
const Member = styled.a`
  cursor: pointer;
`

const MemberList = (props) => {
  return (
    <ListContainer>
      {
        props.users.map(user => 
          <div key={user.id}>
            <Member onClick={props.handleClick} name={user.id}>{user.firstName + ' ' + user.lastName}</Member>
            <br />
          </div>
        )
      }
    </ListContainer>
  );
};


export default MemberList;
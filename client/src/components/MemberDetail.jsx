import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  width: 900px;
  height: 900px;
  position: absolute;

`;

const Picture = styled.img`
  max-width: 500px;
  max-height: 500px;
  display: inline-block;
  position: relative;
  left: 100px;
  top: 75px;
`;

const DetailContainer = styled.div`
  display: inline-block;
  position: relative;
  left: 150px;
  top: 20px;
`

const MemberDetail = (props) => {
  const { image, firstName, lastName, hometown, email, linkedIn, gitHub, hobbies, techInterests, proTip} = props.selectedUserDetails;
  return (
    <Container>
      <Picture src={image} />
      <DetailContainer>
        <div>Name: {firstName + ' ' + lastName}</div>
        <br />
        <div>Hometown: {hometown}</div>
        <br />
        <div>Email: {email}</div>
        <br />
        <div>LinkedIn: {linkedIn}</div>
        <br />
        <div>GitHub: {gitHub}</div>
        <br />
        <div>Hobbies: {hobbies}</div>
        <br />
        <div>Tech Interests: {techInterests}</div>
        <br />
        <div>Tips for surviving Hack Reactor: {proTip} </div>
      </DetailContainer>
    </Container>
  );
};

export default MemberDetail;
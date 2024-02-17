
import styled from 'styled-components';

const MainContainer = styled.div`
text-align: center;
color: #333;
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url(https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80);
background-size: cover;
background-position: center;
background-attachment: fixed;

@media (min-width: 320px) {
  padding: 0 10px;
}

@media (min-width: 768px) {
  padding: 0 20px;
}

@media (min-width: 1024px) {
  padding: 0 40px;
}
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 3rem;
`;

const Paragraph = styled.p`
  max-width: 52ch;
  line-height: 1.5;
  padding: 1em;
`;

const CustomLink = styled.a`
  display: inline-block;
  padding: 1em 3.5em;
  background-color: var(--color);
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0.3em;
  font-weight: 700;
  letter-spacing: .5px;
  font-size: .875rem;
`;

const BlankDiv = styled.div`
  width: 100%;
  min-height: 60vh;
  background-color: var(--color);
`;

const SecondContainer = styled.div`
background-image:url(https://images.unsplash.com/photo-1514496959998-c01c40915c5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80);
background-attachment: fixed;
// height: 1200px;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 100px;

// &:last-child { 
  
// }

@media (min-width: 768px) {
  display: flex;
    gap: 30px;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    justify-content: center;
}
`;

const ItemContainer = styled.div`
display: flex;
  max-width: 310px;
  background-color: white;
  flex-direction: column;
  align-items: center;
  border-radius: .5em;
  box-shadow: 0px 29px 38px -15px rgba(0,0,0,0.43);
  margin: 20px;

  &:last-child { 
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    margin: 20px 0;
  }
`;

const CardHeading = styled.h3`
  font-weight: 700;
  font-size: 1.6rem;
  margin-top: 1em;
`;

const CardLink = styled.a`
display: inline-block;
    padding: 13px;
    background-color: #31cd31;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 0.3em;
    font-weight: 700;
    letter-spacing: .5px;
    font-size: .875rem;
`;

const Card = styled.div`
  margin-bottom: 2em;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 90%;
  height: 200px;
  background-color: lightgrey;
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  border-radius: .3em;
`;

const FirstImage = styled(ImageContainer)`
  background-image: 
  url(https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1606&q=80);
`;

const SecondImage = styled(ImageContainer)`
  background-image: 
  url(https://images.unsplash.com/photo-1628746404106-4d3843b231b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F2aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60);
`;

const ThirdImage = styled(ImageContainer)`
  background-image:
   url(https://images.unsplash.com/photo-1632853073412-782bf0279d65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
`;

export {
  Card,
  ThirdImage, SecondImage, FirstImage, ImageContainer, BlankDiv, SecondContainer,
  CardLink, CardHeading, ItemContainer, CustomLink, MainContainer, Heading, Paragraph
}
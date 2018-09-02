import styled from 'styled-components'

const Heading = styled.h3`
  font-family: 'Titillium Web', sans-serif;
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #111111;
  margin: 0;
`

const SubHeading = styled.h5`
  font-family: 'Titillium Web', sans-serif;
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 1px;
  color: #555555;
  text-transform: uppercase;
  margin: 0;

  & > h1 {
    margin-bottom: 20px;
  }
`

export { Heading, SubHeading }

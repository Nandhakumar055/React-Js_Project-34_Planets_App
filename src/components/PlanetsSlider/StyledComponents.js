import styled from 'styled-components'

export const PlanetsAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png');
  min-height: 100vh;
  padding: 20px;
`

export const PlanetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 600px;
  padding: 20px;
`

export const Heading = styled.h1`
  text-align: center;
  color: #05acff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`

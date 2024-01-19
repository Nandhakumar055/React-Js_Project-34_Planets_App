import styled from 'styled-components/macro'

export const PlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  @media screen and (min-width: 576px) {
    margin: 0px 30px;
  }
  @media screen and (min-width: 768px) {
    margin: 0px 50px;
  }
`

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
`
export const Name = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-top: 40px;
  }
`
export const Description = styled.p`
  text-align: center;
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 30px;
  @media screen and (min-width: 768px) {
    font-size: 19px;
    line-height: 35px;
    margin-bottom: 40px;
  }
`

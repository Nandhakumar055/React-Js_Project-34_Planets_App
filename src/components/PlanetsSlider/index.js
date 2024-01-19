import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import {
  PlanetsAppContainer,
  PlanetsContainer,
  Heading,
} from './StyledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <PlanetsAppContainer data-testid="planets">
      <PlanetsContainer>
        <Heading>PLANETS</Heading>
        <Slider>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
          ))}
        </Slider>
      </PlanetsContainer>
    </PlanetsAppContainer>
  )
}

export default PlanetsSlider

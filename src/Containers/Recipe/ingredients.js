import React from 'react' 
import { IngredientWrapper } from './styles'

export const Ingredients = ({ingredient}) => {
  return (
    <IngredientWrapper>
      <h4>
        {ingredient.name.toUpperCase()}
      </h4>
      <h5>
        {ingredient.amount}
      </h5>
      <h5>
        {ingredient.unit}
      </h5>
    </IngredientWrapper>
  )
}
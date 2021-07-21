// TODO: Create styled component styles if needed
import styled from "styled-components"

export const RecipeWrapper = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center
`

export const IngredientsWrapper = styled.div`
  display: flex;
  border: black 2px solid;
  box-shadow: 1px 2px gray;
  border-radius: 14px;
  margin: 10px
`

export const IngredientWrapper = styled.div`
  padding: 10px;
  margin: 5px;
`
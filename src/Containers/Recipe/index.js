// TODO Create a connected component to render a fetched recipe
import React from "react"
import { useDispatch,useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Ingredients } from "./ingredients"
import { HeaderContainer, IngredientsWrapper, RecipeWrapper } from "./styles"

export const Recipe = ({recipeId}) => {
  const dispatch = useDispatch()
  const recipe = useSelector(state => state.recipe)
  return(
    <RecipeWrapper>
      <HeaderContainer>
        <IngredientsWrapper>
          {recipe.recipe?.ingredients.map((ingredient,index) => <Ingredients key={ingredient + index} ingredient={ingredient}/>)}
        </IngredientsWrapper>
        <h1>{recipe.recipe?.name}</h1>
      </HeaderContainer>
      <h2>{recipe.recipe?.instructions}</h2>
    </RecipeWrapper>
  )
} 
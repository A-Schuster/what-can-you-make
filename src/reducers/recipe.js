/*
  TODO: Create reducer and state updates here for recipe
*/
import { SET_RECIPE, RECIPE_LOADING, RECIPE_FAILED, RESET_RECIPE } from "../actions"

export const initialState = {
  loading: false,
  error: null,
  recipe: null
}

const setRecipe = (state,action) => {
  console.log("success")
  return {...state, loading: false, recipe: action.payload, error: null}
}
const recipeFailed = (state,action) => {
  return {...state, loading: false, recipe: null, error: action.payload}
}

export default (state = initialState, action) => {
  switch(action.type){
  case SET_RECIPE:
    return setRecipe(state,action)
  case RECIPE_FAILED:
    return recipeFailed(state,action)
  default:
    return state
  }
}

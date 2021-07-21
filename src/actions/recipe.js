/* TODO: create recipe fetch actions, creators, and constants
  API: use /api/recipe/:id as a get request to fetch the recipe info
*/
export const SET_RECIPE = "SET_RECIPE"
export const RECIPE_FAILED = "RECIPE_FAILED"
export const RECIPE_LOADING = "RECIPE_LOADING"
export const RESET_RECIPE = "RESET RECIPE"

const loadingRecipe = () => ({
  type: RECIPE_LOADING
})

const fetchedRecipe = (payload) => ({
  type: SET_RECIPE,
  payload
})

const failedRecipe = (payload) => ({
  type: RECIPE_FAILED,
  payload
})

export const fetchRecipe = async (id) => {
  const response = await fetch(`/api/recipe/${id}`, {
  })
  return await response.json()
}

export const selectRecipe = (recipeId) => {
  return (dispatch) => {
    dispatch(loadingRecipe())
    fetchRecipe(recipeId).then(
      res => dispatch(fetchedRecipe(res))
    ).catch(
      err => dispatch(failedRecipe(err))
    )
  }
}

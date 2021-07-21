import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { HomeWrapper } from "./styles"
import Input from '@material-ui/core/Input'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import List from '@material-ui/core/List'
import { Link, withRouter, Route } from 'react-router-dom'
import ListItemText from '@material-ui/core/ListItemText'
import * as actions from '../../actions'
import { Recipe } from '../Recipe'

const ingredientList = [
  "flour", "sugar", "salt", "butter", "milk"
]

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleIngredient = this.handleIngredient.bind(this)
    this.fetchSearch = this.fetchSearch.bind(this)
    this.state = {
      term: "",
      ingredients: ["milk"]
    }
  }
  componentDidMount(){
    const pathname = this.props.location?.pathname
    if(pathname.length > 1){
      this.props.selectRecipe(pathname.split('').slice(1).join(''))
    }
  }
  handleRecipe(recipeId){
    this.props.selectRecipe(recipeId)
  }
  fetchSearch() {
    const {term, ingredients} = this.state
    this.props.searchRecipes(term,ingredients)
  }
  handleSearch(event) {
    const term = event.target.value
    this.setState({term})
  }
  handleIngredient(ingredient, event) {
    const {ingredients} = {...this.state}
    if (event.target.checked) {
      ingredients.push(ingredient)
    } else {
      const foundIngredient = ingredients.indexOf(ingredient)
      ingredients.splice(foundIngredient, 1)
    }
    this.setState({ingredients})
  }
  render () {
    const {term, ingredients} = this.state
    const {recipes, isLoading,recipe} = this.props
    return (
      <HomeWrapper>
        <Route path={["/:id","/"]}>
          <Input
            placeholder="Search Terms"
            autoFocus={true}
            fullWidth={true}
            onChange={this.handleSearch}
            value={term}
          />
          <div>
            <h3>Ingredients on hand</h3>
            {ingredientList.map(
              ingredient => (
                <FormControlLabel
                  key={ingredient}
                  control={
                    <Checkbox
                      checked={ingredients.includes(ingredient)}
                      onChange={this.handleIngredient.bind(this, ingredient)}
                      value={ingredient}
                    />
                  }
                  label={ingredient}
                />
              )
            )}
          </div>
          <Button onClick={this.fetchSearch}>
            search
          </Button>
          <Divider />
          {
            recipes && (
              <List>
                {recipes.map( recipe =>
                  <Link to={`/${recipe.id}`} onClick={() => this.handleRecipe(recipe.id)} key={recipe.id}>
                    <ListItemText primary={recipe.name} />
                  </Link>
                )}
              </List>
            )
          }
          {isLoading || recipe.loading &&  <LinearProgress />}
          <Divider />
          {recipe.recipe && <Recipe />}
        </Route>
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { search,recipe } = state
  return {...search,recipe}
}

const mapDispatchToProps = dispatch => bindActionCreators({
  searchRecipes: actions.searchRecipes,
  selectRecipe: actions.selectRecipe,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))

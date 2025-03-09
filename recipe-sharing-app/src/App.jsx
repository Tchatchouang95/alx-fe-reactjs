import AddRecipeForm from "./components/AddRecipeForm"
import RecipeList from "./components/RecepeList"

function App() {

  return (
    <div className="recipe-app">
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr />
      <RecipeList />
    </div>
  )
}

export default App

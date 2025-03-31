import React from "react";
import data from "../data.json";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function RecipeDetail() {

    const { id } = useParams(); //Get recipe ID from URL
    const [recipes, setRecipes] = useState([]);

    //UseEffect does not fetch for the data so as to mount it to recipes hook, i used the data directly after importing before my code could work
    useEffect(() => {
        const fetchData = async () => {
            setRecipes(data);
        }
        fetchData();
    }, [])
    

    const recipe = data.find((x) => x.id == parseInt(id)); // Find the recipe by ID

  return (
    <div className="max-w-250 mx-auto bg-gray-100">
        <h1 className="text-4xl font-bold text-center p-4 shadow-sm text-gray-600">Recipe Details</h1>
        <Link to={"/"}>
            <div className="flex text-gray-600 p-4  w-28 rounded-sm m-2 shadow-sm hover:shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M200-160v-366L88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-112-86v366H520v-240h-80v240H200Zm80-80h80v-240h240v240h80v-347L480-739 280-587v347Zm120-319h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Zm-40 319v-240h240v240-240H360v240Z"/></svg>
                <button className="pl-1">Home</button>
            </div>
        </Link>
        <h2 className="text-2xl pt-2 pl-4 text-gray-600 font-bold">{recipe.title}</h2>
        <img className="w-full p-4" src={recipe.image} alt={recipe.title} />
        <p className='text-gray-500 m-4'>{recipe.summary}</p>
        <h3 className="text-2xl pt-2 pl-4 text-gray-600 font-bold">Ingredients:</h3>
        <ul className="list-disc ml-15 pt-4">
            {
            recipe.details.ingredients.map((ingredient, index) => (
                <li className="text-gray-600 leading-8" key={index}>{ingredient}</li>
            ))
            }
        </ul>
        <h3 className="text-2xl pt-2 pl-4 text-gray-600 font-bold">Instructions:</h3>
        <ol className="list-[roman] ml-15 pt-4 pb-4">
            {
            recipe.details.instructions.map((instruction, index) => (
                <li className="text-gray-600 leading-8" key={index}>{instruction}</li>
            ))
            }
        </ol>
        <h3 className="text-2xl text-gray-700 text-center">Enjoy Your delicious {recipe.title}!!</h3>
    </div>
  )
}

export default RecipeDetail;
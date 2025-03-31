import React from 'react';
import { useState, useEffect } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';

function HomePage() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setRecipes(data);
        }
        fetchData();
    }, [])

  return (
    <div className='mx-auto max-w-250 bg-gray-100'>
        <h1 className='text-4xl font-bold text-center p-4 shadow-sm text-gray-600'>Recipe Sharing App</h1>
        <h3 className='font-bold text-gray-500 ml-2 mt-5 text-2xl'>Recipe List</h3>
        <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-5 gap-2'>
            {recipes.map(recipe => (
                <div key={recipe.id} className='bg-white m-2 rounded overflow-hidden shadow-md hover:shadow-2xl'>
                    <Link to={`/recipe/${recipe.id}`}>
                        <img src= {recipe.image} className='w-full hover:scale-110 transition-transform duration-300 ease-in-out' alt={recipe.title} />
                        <h3 className='font-bold text-2xl text-gray-600 m-4'>{recipe.title}</h3>
                        <p className='text-gray-500 m-4 text-sm'>{recipe.summary}</p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HomePage;
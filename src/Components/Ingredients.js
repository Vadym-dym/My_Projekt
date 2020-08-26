import React, { useState } from "react";

const APP_ID = "e67d0e21";
const APP_KEY = "343d0cb1b453df9b5c9c0e3c3d80a343";

const Survey = () => {
  const [ingredient, setIngredient] = useState("");
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  const [ingredientsArray, setIngredientsArray] = useState([]);

  const getApi = async () => {
    const responce = await fetch(
      `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${ingredient}`
    );
    const data = await responce.json();
    console.log(data);
    const ingredientCalories = data.calories;
    const ingredientWeight = data.totalWeight;
    const ingredientCautions = data.cautions;
    const diet = data.dietLabels;
    const totalKCal = data.totalNutrientsKCal;
    setTotalCalories(totalCalories + parseInt(ingredientCalories));
    setTotalWeight(totalWeight + parseInt(ingredientWeight));

    const ingredientInfo = {
      name: ingredient,
      calories: ingredientCalories,
      weight: ingredientWeight,
      cautions: ingredientCautions,
      dietLabels: diet,
      totalNutrientsKCal: totalKCal,
    };
    setIngredientsArray([...ingredientsArray, ingredientInfo]);
    setIngredient("");
  };

  return (
    <>
      <div className="radius"></div>
      <header>
        <div className="top">
          <input
            className="input_search"
            placeholder="Enter some ingredient"
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <button className="button_search" onClick={() => getApi()}>Search</button>
        </div>
      </header>

      <section className="total">
        <h3 className="total_weight">Total Weight: {totalWeight}</h3>
        <h3 className="total_calories">Total Calories: {totalCalories}</h3>
      </section>

      <div className="container">
        {ingredientsArray.map((item, key) => (
          <div className="card" key={key}>
            <h2>Name: {item.name}</h2>
            <h2>Calories: {Math.round(item.calories)}</h2>
            <h2>Weight: {Math.round(item.weight)}</h2>
            <h2>Cautions: {item.cautions}</h2>
            <h2>Diet Labels: {item.dietLabels}</h2>
            <h2>Calories from carbohydrates: {item.totalNutrientsKCal.CHOCDF_KCAL.quantity}</h2>
            <h2>Calories from fat: {item.totalNutrientsKCal.FAT_KCAL.quantity}</h2>
            <h2>Calories from protein: {item.totalNutrientsKCal.PROCNT_KCAL.quantity}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Survey;

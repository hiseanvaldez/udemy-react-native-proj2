import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

export default FavoritesScreen = (props) => {
  const matchingMeals = MEALS;

  return <MealList listData={matchingMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

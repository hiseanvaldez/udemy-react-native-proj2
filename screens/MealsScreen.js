import React from "react";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export default MealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const matchingMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={matchingMeals} navigation={props.navigation} />;
};

MealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const currentCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: currentCategory.title,
  };
};

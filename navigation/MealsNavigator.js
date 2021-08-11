import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const MealsNavigator = createStackNavigator({
  Categories: { screen: CategoriesScreen },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetails: {
    screen: MealDetailsScreen,
  },
});

export default createAppContainer(MealsNavigator);

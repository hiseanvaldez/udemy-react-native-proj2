import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

export default MealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const matchingMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (matchingMeals.length === 0 || !matchingMeals) {
    return (
      <View style={styles.content}>
        <Text style={styles.header}>No Meals Found</Text>
        <DefaultText>Check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList listData={matchingMeals} navigation={props.navigation} />;
};

MealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const currentCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: currentCategory.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
});

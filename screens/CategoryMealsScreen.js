import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const listItem = (itemData) => {
  return (
    <View>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

export default CategoryMealsScreen = (props) => {
  const navigation = props.navigation;
  const categoryId = navigation.getParam("categoryId");

  const matchingMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList data={matchingMeals} renderItem={listItem} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const currentCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: currentCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

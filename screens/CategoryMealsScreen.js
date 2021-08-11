import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

export default CategoryMealsScreen = (props) => {
  const navigation = props.navigation;
  const categoryId = navigation.getParam("categoryId");
  const currentCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("MealDetails")}
      />
      <Button title={"Go Back"} onPress={() => navigation.goBack()} />
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

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default CategoryMealsScreen = (props) => {
  const navigation = props.navigation;
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("MealDetails")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

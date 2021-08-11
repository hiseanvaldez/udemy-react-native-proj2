import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default MealDetailsScreen = (props) => {
  const navigation = props.navigation;
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen</Text>
      <Button
        title={"Go Back to Categories"}
        onPress={() => navigation.popToTop()}
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

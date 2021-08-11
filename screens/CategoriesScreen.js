import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default CategoriesScreen = (props) => {
  const navigation = props.navigation;
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title={"Go To Meals"}
        onPress={() => navigation.navigate({ routeName: "CategoryMeals" })}
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

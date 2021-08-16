import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealListItem from "./MealListItem";

export default MealList = (props) => {
  const listItem = (itemData) => {
    return (
      <MealListItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        style={styles.list}
        data={props.listData}
        renderItem={listItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "100%",
    padding: 15,
  },
});

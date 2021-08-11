import React from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

export default CategoriesScreen = (props) => {
  const navigation = props.navigation;

  const listItem = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
        style={{ ...styles.gridItem, backgroundColor: itemData.item.color }}
      >
        <Text>{itemData.item.title}</Text>
      </TouchableOpacity>
    );
  };

  return <FlatList data={CATEGORIES} numColumns={2} renderItem={listItem} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

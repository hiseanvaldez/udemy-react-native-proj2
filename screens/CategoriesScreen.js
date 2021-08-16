import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import { CATEGORIES } from "../data/dummy-data";
import CategoryListItem from "../components/CategoryListItem";

export default CategoriesScreen = (props) => {
  const navigation = props.navigation;

  const listItem = (itemData) => {
    return (
      <CategoryListItem
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          navigation.navigate({
            routeName: "Meals",
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
      />
    );
  };

  return <FlatList data={CATEGORIES} numColumns={2} renderItem={listItem} />;
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsLoaded(true)}
        onError={(err) => console.error(err)}
      />
    );
  }

  return <MealsNavigator />;
}

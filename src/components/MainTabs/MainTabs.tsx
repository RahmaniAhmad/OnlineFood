import * as React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import DrinkTabs from "./DrinkTabs";
import FoodTabs from "./FoodTabs";
import SaladTabs from "./SaladTabs";
const FirstRoute = () => (
  <View style={{ flex: 1 }}>
    <DrinkTabs />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1 }}>
    <FoodTabs />
  </View>
);
const ThirdRoute = () => (
  <View style={{ flex: 1 }}>
    <SaladTabs />
  </View>
);
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute
});

export default function MainTabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "drink" },
    { key: "second", title: "food" },
    { key: "third", title: "salad" }
  ]);

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        swipeEnabled={true}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{
              backgroundColor: "red"
            }}
            indicatorStyle={{
              backgroundColor: "#2e2e2e",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              height: "100%"
            }}
            activeColor="white"
          />
        )}
      />
    </>
  );
}

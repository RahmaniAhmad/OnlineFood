import * as React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={{ flex: 1 }}>
    <div style={{ height: "100vh" }}>Meat & poultry</div>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1 }}>
    <div style={{ height: "100vh" }}>Fish & seafood</div>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute
});

export default function FoodTabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Meat & poultry" },
    { key: "second", title: "Fish & seafood" }
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
            tabStyle={{ backgroundColor: "#2e2e2e" }}
            style={{ backgroundColor: "##2e2e2e" }}
            indicatorStyle={{
              backgroundColor: "#2e2e2e",
              height: "100%"
            }}
            indicatorContainerStyle={{
              backgroundColor: "red"
            }}
            activeColor="white"
          />
        )}
      />
      {/* <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        swipeEnabled={true}
        initialLayout={{ width: layout.width }}
      /> */}
    </>
  );
}

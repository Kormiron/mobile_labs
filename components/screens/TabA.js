import React from "react";
import { View, Text, Dimensions } from "react-native";

import { LineChart } from "react-native-chart-kit";

const TabA = () => {
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
      <Text>Bezier Line Chart</Text>
      <Text>y = x^2</Text>
      <Text>x ∈ [-5; 5]</Text>
      <LineChart
        data={{
          datasets: [
            {
              data: [-5, 0, 1, 5],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        fromZero={true}
        wit
        withHorizontalLabels={false}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          backgroundColor: "white",
        }}
      />
    </View>
  );
};

export default TabA;

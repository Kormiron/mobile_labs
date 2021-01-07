import React from "react";
import { View, Text, Dimensions } from "react-native";
import { ProgressChart, PieChart } from "react-native-chart-kit";

const TabB = () => {
  const data = [
    {
      sector: 15,
      color: "yellow",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      sector: 25,
      color: "brown",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      sector: 50,
      color: "grey",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      sector: 10,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  return (
    <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
      <Text>Section chart</Text>
      <Text>15% (yellow), 25% (brown), 50% (grey), 10% (red)</Text>

      <PieChart
        data={data}
        width={Dimensions.get("window").width}
        height={300}
        chartConfig={{ color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})` }}
        accessor={"sector"}
        backgroundColor={"transparent"}
        center={[80, 0]}
        absolute
        hasLegend={false}
      />
    </View>
  );
};

export default TabB;

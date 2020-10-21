import React from "react";
import Blog from "../components/Blog";
import { View, FlatList } from "react-native";

export default function Data({ navigation }) {
  const BlogData = [
    {
      text1: "Does dry in January ",
      text2: "Actually Improve Your",
      text3: "Health ?",
      src: require("../assets/sharon-pittaway-iMdsjoiftZo-unsplash.jpg"),
      profileImage: require("../assets/parrot.jpg"),
      name: "Michael Park",
      time: "4 min read",
      key: 45344668,
    },

    {
      text1: "How to Seem Like You ",
      text2: "Always Have A Shot ",
      text3: "Together ",
      src: require("../assets/masaaki-komori-NoXUQ54pDac-unsplash.jpg"),
      profileImage: require("../assets/redleather.jpg"),
      name: "Luigi Ramone",
      time: "4 min read",
      key: 453657686,
    },

    {
      text1: "Is CrossPlatform  ",
      text2: "The Future Of",
      text3: "Mobile ?",
      src: require("../assets/ulker-mammadova-xl8nyIXM9X8-unsplash.jpg"),
      profileImage: require("../assets/insert1.jpg"),
      name: "Donald Dean",
      time: "3 min read",
      key: 446776868,
    },

    {
      text1: "The Most Beautiful",
      text2: "Flowers Smell The",
      text3: "Worst",
      src: require("../assets/jessie-daniella-QLuleNy8LMM-unsplash.jpg"),
      profileImage: require("../assets/insert8.jpg"),
      name: "Johnson Milan",
      time: "6 min read",
      key: 4576878690,
    },
  ];
  return (
    <View>
      <FlatList
        data={BlogData}
        renderItem={({ item }) => {
          return (
            <Blog
              text1={item.text1}
              text2={item.text2}
              text3={item.text3}
              src={item.src}
              profileImage={item.profileImage}
              name={item.name}
              time={item.time}
              navigation={navigation}
              item={item}
            />
          );
        }}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

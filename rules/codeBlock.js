import React from "react";
import {
  Text,
} from "react-native";

const style = {
  fontFamily: "Courier",
  fontWeight: "500",
};

export default {
  react(node, output, state) {
    state.withinText = true;
    return React.createElement(Text, {
      key: state.key,
      style: style,
    }, null);
  },
};
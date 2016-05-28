import React from "react";
import {
  Text,
} from "react-native";

const style = {
  fontWeight: "200",
};

export default {
  react(node, output, state) {
    state.withinText = true;
    return React.createElement(Text, {
      key: state.key,
      style: style,
    }, output(node.content, state));
  },
};

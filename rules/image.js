import React from "react";
import {
  Image,
} from "react-native";

const style = {};

export default {
  react(node, output, state) {
    return React.createElement(Image, {
      key: state.key,
      source: { uri: node.target },
      style: style,
    });
  },
};

import React from "react";
import {
  View,
} from "react-native";
import SimpleMarkdown from "simple-markdown";

const headerCellTextStyle = {
  color: "#ffffff",
  fontWeight: "bold",
};

const headerCellStyle = {
  padding: 5,
};

const headerRowStyle = {
  backgroundColor: "#222222",
  flexDirection: "row",
  justifyContent: "space-around",
};

const cellStyle = {
  padding: 5,
};

const rowStyle = {
  borderBottomWidth: 1,
  borderColor: "#222222",
  flexDirection: "row",
  justifyContent: "space-around",
};

const lastRowStyle = {
  borderColor: "transparent",
};

const style = {
  borderWidth: 1,
  borderColor: "#222222",
  borderRadius: 3,
};

function renderHeaderCells(headerCells, output, state) {
  return headerCells.map(function(content) {
    const newState = {
      ...state,
      textStyle: {
        ...state.textStyle,
        ...headerCellTextStyle,
      },
    };
    return (
      <View style={headerCellStyle}>
        {output(content, newState)}
      </View>
    );
  });
}

function renderHeader(header, output, state) {
  return (
    <View style={headerRowStyle}>
      {renderHeaderCells(header, output, state)}
    </View>
  );
}

function renderCells(cells, output, state) {
  return cells.map(function(content, columnIndex) {
    return (
      <View key={columnIndex} style={cellStyle}>
        {output(content, state)}
      </View>
    );
  });
}

function renderRows(rows, output, state) {
  return rows.map(function(cells, rowIndex) {
    const rowStyles = [rowStyle];
    if (rowIndex === rows.length - 1) {
      rowStyles.push(lastRowStyle);
    }
    return (
      <View key={rowIndex} style={rowStyles}>
        {renderCells(cells, output, state)}
      </View>
    );
  });
}

export default {
  ...SimpleMarkdown.defaultRules.table,
  react(node, output, state) {
    return (
      <View key={state.key} style={style}>
        {renderHeader(node.header, output, state)}
        {renderRows(node.cells, output, state)}
      </View>
    );
  },
};

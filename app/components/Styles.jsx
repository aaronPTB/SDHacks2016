import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

var Styles = StyleSheet.create({
  bar: {
    topBarStyle: {
      position: "fixed",
      height: "50px",
      width: "100%",
      backgroundColor: "#002A3B",
      color: "#EEEEEE",
      boxShadow: "1px 1px",
    },

    logoContainerStyle: {
      float: "left",
    },

    navigationContainerStyle: {
      float: "right",
    },
  },
  main: {
    bigDivStyle: {
      height: "calc(100vh - 50px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

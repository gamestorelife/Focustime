
/** import React from 'react';
import { StyleSheet, TouchableOpacity, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
   
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text style = {[styles(size).text, textStyle]}>
      {props.title}
      </Text>
    </TouchableOpacity>
   
    
  );
};


const Styles = (size) => 
StyleSheet.create({
  radius: {
    borderRadius : size /2,
    width: size ,
    height: size,
    alignItems: 'center',
    borderWidth: 2,
    color: '#ffff'
  },
  text: {
    color: '#ffff', fontSize: 20
  }
}) */
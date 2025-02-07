import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ title,handlePress, containerStyles, textStyle, isLoad  }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoad ? 'opacity-50' : ''}`}
      disabled={isLoad}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

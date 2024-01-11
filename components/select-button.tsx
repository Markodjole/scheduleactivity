import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {arrowDownIcon} from '../assets';
import {serchIcon} from '../assets';
import {colors} from '../theme/colors';

type SelectButtonProps = {
  selectedValue: string;
  onPress: () => void;
  arrow?: boolean;
};

const SelectButton = ({selectedValue, onPress, arrow}: SelectButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.buttonText}>{selectedValue}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={arrow ? arrowDownIcon : serchIcon} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderTopStartRadius: 6,
    borderBottomStartRadius: 6,
    borderTopEndRadius: 6,
    borderBottomEndRadius: 6,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 16,
    color: colors.darkGrey,
    fontWeight: '300',
  },
  iconContainer: {
    height: '100%',
    backgroundColor: colors.brown,
    borderTopEndRadius: 6,
    borderBottomEndRadius: 6,
    padding: 15,
  },
  icon: {
    tintColor: colors.white,
    resizeMode: 'contain',
  },
});

export default SelectButton;

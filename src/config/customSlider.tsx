import React, { useRef, useState } from 'react';
import { View, Text, PanResponder, StyleSheet, Dimensions, Image } from 'react-native';
import { image } from './utils/images';

const { width } = Dimensions.get('window');
const SLIDER_WIDTH = 340;
const THUMB_SIZE = 20;

const CustomSlider = ({ min = 0, max = 100, initialValue = 0, onValueChange }) => {
  const [value, setValue] = useState(initialValue);
  const [thumbLeft, setThumbLeft] = useState((initialValue - min) / (max - min) * SLIDER_WIDTH);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newLeft = Math.min(Math.max(0, gestureState.moveX - e.nativeEvent.locationX), SLIDER_WIDTH);
        const newValue = Math.round((newLeft / SLIDER_WIDTH) * (max - min) + min);

        setThumbLeft(newLeft);
        setValue(newValue);
        onValueChange && onValueChange(newValue);
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.sliderTrack} />
      <View style={[styles.sliderFilledTrack, { width: thumbLeft }]} />

      <Text style={[styles.valueText, { left: thumbLeft - THUMB_SIZE / 2 }]}>
        {value}
      </Text>

      <Image
        source={image.customThumb}
        {...panResponder.panHandlers}
        style={[
          styles.sliderThumb,
          { left: thumbLeft - THUMB_SIZE / 2 }
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SLIDER_WIDTH,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  sliderTrack: {
    position: 'absolute',
    width: '100%',
    height: 6,
    backgroundColor: '#B0C4B1',
    borderRadius: 3,
  },
  sliderFilledTrack: {
    position: 'absolute',
    height: 6,
    backgroundColor: '#004225',
    borderRadius: 3,
  },
  sliderThumb: {
    position: 'absolute',
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    zIndex: 1,
  },
  valueText: {
    position: 'absolute',
    top: -20,
    fontSize: 12,
    color: '#004225',
    textAlign: 'center',
  },
});

export default CustomSlider;

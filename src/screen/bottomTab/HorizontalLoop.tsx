import React, { useRef, useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Slider } from '@react-native-assets/slider';
import { colors } from '../../config/utils/colors';
import { image } from '../../config/utils/images';

// Dummy data for demonstration
const items = [
  { id: '1', text: 'Breakfast' },
  { id: '2', text: 'Lunch' },
  { id: '3', text: 'Dinner' },
];

const HorizontalScrollWithLoop = () => {
  const [diners, setDiners] = useState(2);
  const [time, setTime] = useState(10);
  const [level, setLevel] = useState(1); // Use index or value as needed
  const [mood, setMood] = useState(1); // Use index or value as needed
  const { width } = Dimensions.get('window');
  const ITEM_WIDTH = width * 0.8; // Width of each item (adjust as needed)
  const scrollViewRef = useRef(null);

 

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      onContentSizeChange={() => {
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ x: ITEM_WIDTH, animated: false });
        }
      }}
      onScroll={(event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        if (contentOffsetX === 0) {
          scrollViewRef.current.scrollTo({ x: ITEM_WIDTH * (items.length - 1), animated: false });
        } else if (contentOffsetX === ITEM_WIDTH * items.length) {
          scrollViewRef.current.scrollTo({ x: ITEM_WIDTH, animated: false });
        }
      }}
    >
      {items.concat(items).map((item, index) => (
        <View key={item.id} style={[styles.item,{  width: ITEM_WIDTH,}]}>
          <View style={styles.card}>
            <Text style={[styles.sliderLabel, { alignSelf: 'center', color: colors.btnColor, marginVertical: 10 }]}>{item.text}</Text>
            <TouchableOpacity onPress={() => { }} style={styles.expandableHeader}>
              <Text style={{ color: colors.btnColor, fontWeight: '600' }}>Cuisine style, preferences</Text>
              <Image style={{ height: 25, width: 25 }} source={image.circleDot} />
            </TouchableOpacity>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>{item.text}</Text>
              <Text style={{ fontSize: 12, color: "#777777" }}>Set number of diners</Text>
              <Slider
                minimumValue={1}
                maximumValue={10}
                step={1}
                maximumTrackTintColor='#b7cbc0'
                minimumTrackTintColor='#0E522D'
                value={diners}
                onValueChange={value => setDiners(value)}
                style={styles.slider}
                thumbImage={image.customThumb}
              />
              <Text>{diners}</Text>
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>Time</Text>
              <Text style={{ fontSize: 12, color: "#777777" }}>Set your cooking time to fit your schedule</Text>
              <Slider
                minimumValue={1}
                maximumValue={10}
                step={1}
                maximumTrackTintColor='#b7cbc0'
                minimumTrackTintColor='#0E522D'
                value={time}
                onValueChange={value => setTime(value)}
                style={styles.slider}
                thumbImage={image.customThumb}
              />
              <Text>{time}</Text>
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>Level</Text>
              <Text style={{ fontSize: 12, color: "#777777" }}>Define the level of details provided in the recipe instruction</Text>
              <Slider
                minimumValue={1}
                maximumValue={3} // Adjust based on your level options
                step={1}
                maximumTrackTintColor='#b7cbc0'
                minimumTrackTintColor='#0E522D'
                value={level}
                onValueChange={value => setLevel(value)}
                style={styles.slider}
                thumbImage={image.customThumb}
              />
              <Text>{['Beginner', 'Home Cooker', 'Chef'][level]}</Text>
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>Mood</Text>
              <Text style={{ fontSize: 12, color: "#777777" }}>Define the creativity level of the recipe</Text>
              <Slider
                minimumValue={1}
                maximumValue={3} // Adjust based on your mood options
                step={1}
                maximumTrackTintColor='#b7cbc0'
                minimumTrackTintColor='#0E522D'
                value={mood}
                onValueChange={value => setMood(value)}
                style={styles.slider}
                thumbImage={image.customThumb}
              />
              <Text>{['Classic', 'Gourmet', 'Artisan'][mood]}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {

    paddingHorizontal:30,

    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  expandableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#C8DBCE',
    borderRadius: 30,
    paddingVertical:8,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  sliderContainer: {
    marginBottom:5,
    marginTop:5,
  },
  sliderLabel: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '700',
    color: '#000',
  },
  slider: {
    width: '100%',
  },
  item: {
  width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HorizontalScrollWithLoop;

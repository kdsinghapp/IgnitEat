import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { image } from '../config/utils/images'; // Ensure you have your logo image here
import { colors } from '../config/utils/colors';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.tabBar}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            let iconSource;
            switch (route.name) {
              case 'Desired dish':
                iconSource = isFocused ? image.Desired : image.inDesired;
                break;
              case 'Recipe From a Picture':
                iconSource = isFocused ? image.tphoto : image.intphoto;
                break;
              case 'Recipe From Ingredients':
                iconSource = isFocused ? image.Recipe : image.inRecipe;
                break;
              case 'MealPlanning':
                iconSource = isFocused ? image.Meal : image.inMeal;
                break;
              case 'Cook Book':
                iconSource = isFocused ? image.Cook : image.inCook;
                break;
              case 'Grocery List':
                iconSource = isFocused ? image.grocery : image.ingrocery;
                break;
              default:
                iconSource = isFocused ? image.Desired : image.inDesired;
            }

            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[
                  styles.tabItem,

                ]}
              >
                <Image
                  source={iconSource}
                  style={[
                    styles.icon,
                    { tintColor: isFocused ? colors.txtColor : '#9E9E9E' },
                  ]}
                />

                <Text style={[styles.label, { color: isFocused ? colors.txtColor : '#9E9E9E' }]}>
                  {route.name?.substring(0,12)}
                </Text>
                <Text style={[styles.label, { color: isFocused ? colors.txtColor : '#9E9E9E' }]}>
                  {route.name?.substring(12,50)}
                </Text>

              </TouchableOpacity>
            );
          })}
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  tabBar: {
    flexDirection: 'row',
    height:100,
    backgroundColor: '#fff',

  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:20,
    marginBottom: 0

  },
  tabItemFocused: {
    backgroundColor: '#ffe4fa',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,

    height: 50,
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '600',
    marginTop: 5,
    marginLeft: 5,

  },
});

export default CustomTabBar;

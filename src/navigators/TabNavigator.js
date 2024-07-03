import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from './CustomTabBar';
import DesiredDish from '../screen/bottomTab/DesiredDish';

import TurnPhotoIntoRecipe from '../screen/bottomTab/TurnPhotoIntoRecipe';
import RecipeFromIngredients from '../screen/bottomTab/RecipeFromIngredients';
import MealPlanning from '../screen/bottomTab/MealPlanning';
import CookBook from '../screen/bottomTab/CookBook';
import GroceryList from '../screen/bottomTab/GroceryList';
import { image } from '../config/utils/images';
import { colors } from '../config/utils/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Desired dish"
        component={DesiredDish}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? image.Desired : image.inDesired}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#7756FC' : color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Recipe From a Picture"
        component={TurnPhotoIntoRecipe}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? image.tphoto : image.intphoto}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#7756FC' : color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Recipe From Ingredients"
        component={RecipeFromIngredients}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? image.Recipe : image.inRecipe}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#7756FC' : color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MealPlanning"
        component={MealPlanning}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? image.Meal : image.inMeal}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#7756FC' : color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cook Book"
        component={CookBook}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? image.Cook : image.inCook}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#7756FC' : color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Grocery List"
        component={GroceryList}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? image.grocery : image.ingrocery}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? colors.backgroundColor : color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

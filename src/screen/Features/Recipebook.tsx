
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { image } from '../../config/utils/images';
import { useNavigation } from '@react-navigation/native';
import { colors, marginTop } from '../../config/utils/utils';
import Alram from '../../assets/svg/alrm.svg'
import Downgreen from '../../assets/svg/right.svg'
import ScreenNameEnum from '../../routes/screenName.enum';
const recipes = [
    { id: 1, title: 'Beef And Eggplant Casserole- A Nice Dish For Noon Time...' },
    { id: 2, title: 'Beef And Eggplant Casserole- A Great Dish For Breakfast' },
    { id: 3, title: 'Beef And Eggplant Casserole A Great Dish With A Wine' },
];

const similarItems = [
    { id: 1, title: 'The Recipe Critic', time: '07 m', icon: image.book }, // Assuming you have this image in your assets
    { id: 2, title: 'The Recipe Critic', time: '07 m', icon: image.book },
    { id: 3, title: 'The Recipe Critic', icon: image.book},
];

const RecipeList = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack(); }}>
        <Image source={image.back} style={styles.logo} />
        </TouchableOpacity>
            <Text style={styles.headerText}>Hack Aplate</Text>
            <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
              <Image source={image.menu} style={styles.menuIcon} />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
           
            <Text style={styles.heading}>Here Are Possible Recipes</Text>
            <Text style={styles.heading}>Which Recipe Would You Like To Explore?</Text>
            
            {recipes.map((recipe) => (
                <TouchableOpacity key={recipe.id} style={styles.recipeItem}>
                    <Text style={styles.recipeText}>{recipe.title}</Text>
                </TouchableOpacity>
            ))}
            
            <Text style={styles.similarHeaderText}>Similar In Cookbook</Text>
            
            {similarItems.map((item) => (
                <View key={item.id} style={styles.similarItem}>
                    <Image source={item.icon} style={styles.similarIcon} />
                    <Text style={styles.similarText}>{item.title}</Text>
                    {item.time && <Text style={styles.timeText}><Alram  height={15} />{item.time}</Text>}
                 {!item.time && <Downgreen style={styles.arrowIcon} />} 
                </View>
            ))}
            
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate(ScreenNameEnum.IngredientScreen)
            }}
            style={styles.createButton}>
                <Text style={styles.createButtonText}>Create</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: marginTop
      },
      logo: {
        width: 30,
        height: 30,
      },
      headerText: {
        fontSize: 24,
        fontWeight: '500',
        fontFamily: 'anaktoria',
        color: colors.txtColor
      },
      menuIcon: {
        width: 24,
        height: 24,
      },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    subHeaderText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    recipeItem: {
        marginVertical: 10,
    },
    recipeText: {
        fontSize: 16,
        color: colors.txtColor, // Adjust this color as per your requirement
       
        fontWeight:'600'
    },
    similarHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    similarItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
    },
    similarIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    similarText: {
        flex: 1,
        fontSize: 16,
    },
    timeText: {
        fontSize: 12,
        color: colors.txtColor,
    },
    arrowIcon: {
        width: 20,
        height: 20,
        
    },
    createButton: {
        backgroundColor:colors.btnColor, // Adjust this color as per your requirement
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    createButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RecipeList;

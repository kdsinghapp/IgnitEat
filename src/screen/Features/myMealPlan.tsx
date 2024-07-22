
    import React, { useState } from 'react';
    import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
    import { image } from '../../config/utils/images'; // Make sure to import your images correctly
    import { colors } from '../../config/utils/colors'; // Import your color configuration
import { marginTop } from '../../config/utils/utils';
    import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Edit from '../../assets/svg/clearEdit.svg'
import MealPlanModal from '../modals/MealPlanModal';
import AddGroceryModal from '../modals/AddGroceryModal';
import MealGroceryModal from '../modals/MealGroceryModal';
import ScreenNameEnum from '../../routes/screenName.enum';
import AddtoCookBook from '../modals/AddtoCookBook';
import CookBookEditName from '../modals/CookBooknameModal';
   
    
    const MyMealPlan = () => {
        const [OpenRecipeModal, setOpenRecipeModal] = useState(false);
        const [OpenGroceryModal, setOpenGroceryModal] = useState(false);
        const [OpenCookBookModal, setOpenCookBookModal] = useState(false);
        const [ChangeMealName, setChangeMealName] = useState(false);
        const navigation = useNavigation()
        const renderMeals = ({ item }) => (
            <View style={styles.dayContainer}>
                <View style={styles.dayHeader}>
                    <Text style={styles.dayText}>{item.day}</Text>
                    <TouchableOpacity 
                    onPress={()=>{
                        setOpenCookBookModal(true)
                    }}
                    style={{marginLeft:10}}>
                       <Edit />
                    </TouchableOpacity>
                </View>
                <View 
                
                style={styles.mealsContainer}>
                    {item.meals.map((meal, index) => (
                        <View key={index} style={[styles.mealItem,{}]}>
                            <Text style={styles.mealText}>{meal.name}</Text>
                           <TouchableOpacity
                           onPress={()=>{
                            setOpenRecipeModal(true)
                        }}
                           style={{flexDirection:'row',
                           alignItems:'center',justifyContent:'space-between',paddingHorizontal:12,
                           backgroundColor:colors.txtColor,borderRadius:30,width:75,height:40,marginTop:10}}>
                            <Image 
                            resizeMode='contain'
                            source={meal.icon} style={styles.mealIcon} />
                            <Image source={image.close} 
                            
                            style={{height:20,width:20}} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        );
    
        return (
            <View style={styles.container}>
                        <View style={styles.header}>
            <TouchableOpacity onPress={() => { navigation.goBack(); }}>
            <Image source={image.back} style={styles.logo} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Hack Aplate</Text>
            <TouchableOpacity onPress={() => { setOpenGroceryModal(true) }}>
              <Image source={image.menu} style={styles.menuIcon} />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Meal Plan</Text>
                    <View style={styles.headerIcons}>
                    <TouchableOpacity onPress={() => {setChangeMealName(true)}}>
                        <Image source={image.CircleEdit} style={styles.headerIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setOpenGroceryModal(true) }}>
                        <Image source={image.grocery} style={styles.headerIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={mealData}
                    renderItem={renderMeals}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.listContent}
                />
                </ScrollView>
                <MealPlanModal modalVisible={OpenRecipeModal} setModalVisible={() => setOpenRecipeModal(false)} />
                <MealGroceryModal modalVisible={OpenGroceryModal} setModalVisible={() => setOpenGroceryModal(false)} />
                <AddtoCookBook modalVisible={OpenCookBookModal} setModalVisible={() => setOpenCookBookModal(false)} />
                <CookBookEditName modalVisible={ChangeMealName} setModalVisible={() => setChangeMealName(false)} />

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
            width:30,
            height:30,
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
            backgroundColor: '#fff',
            padding: 16,
        },
        heading: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
            marginTop:hp(5),
            alignSelf:'center'

        },
      headingText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
        },
        headerIcons: {
            flexDirection: 'row',
        },
        headerIcon: {
            width: 24,
            height: 24,
            marginLeft: 16,
        },
        listContent: {
            paddingBottom: 16,
        },
        dayContainer: {
            marginBottom: 16,
            padding: 16,
            backgroundColor: '#f0f0f0',
            borderRadius: 8,
        },
        dayHeader: {
            flexDirection: 'row',
            
            alignItems: 'center',
            marginBottom: 8,
        },
        dayText: {
            fontSize: 18,
            fontWeight: 'bold',
            color:'#000',
        },
        editIcon: {
            width: 16,
            height: 16,
        },
        mealsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        mealItem: {
            alignItems: 'center',
        },
        mealIcon: {
            width:20,
            height:20,
           
        },
        mealText: {
            fontSize: 14,
            color: '#000',
        },
    });
    
    export default MyMealPlan;
    const mealData = [
        {
            day: 'Day 1',
            meals: [
                { name: 'Breakfast', icon: image.breakfast },
                { name: 'Lunch', icon: image.lunch },
                { name: 'Snacks', icon: image.snacks },
                { name: 'Dinner', icon: image.dinner2x },
            ],
        },
        {
            day: 'Day 2',
            meals: [
                { name: 'Breakfast', icon: image.breakfast },
                { name: 'Lunch', icon: image.lunch },
                { name: 'Snacks', icon: image.snacks },
                { name: 'Dinner', icon: image.dinner2x },
            ],
        },
        {
            day: 'Day 3',
            meals: [
                { name: 'Breakfast', icon: image.breakfast },
                { name: 'Lunch', icon: image.lunch },
                { name: 'Snacks', icon: image.snacks },
                { name: 'Dinner', icon: image.dinner2x },
            ],
        },
        {
            day: 'Day 4',
            meals: [
                { name: 'Breakfast', icon: image.breakfast },
                { name: 'Lunch', icon: image.lunch },
                { name: 'Snacks', icon: image.snacks },
                { name: 'Dinner', icon: image.dinner2x },
            ],
        },
        // Add more days as needed
    ];
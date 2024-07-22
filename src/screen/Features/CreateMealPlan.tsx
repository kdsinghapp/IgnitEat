import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import CheckBox from 'react-native-check-box';
import { image } from '../../config/utils/images';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../config/utils/colors';
import { marginTop } from '../../config/utils/utils';
import ScreenNameEnum from '../../routes/screenName.enum';

const healthGoals = [
    { id: '1', title: 'Lose weight' },
    { id: '2', title: 'Maintain weight' },
    { id: '3', title: 'Gain muscle' },
    { id: '4', title: 'Improve overall health' },
    { id: '5', title: 'Increase energy levels' },
];

const activityLevels = [
    { id: '1', title: 'Sedentary (little or no exercise)' },
    { id: '2', title: 'Lightly active (light exercise or sports 1-3 days a week)' },
    { id: '3', title: 'Moderately active (moderate exercise or sports 3-5 days a week)' },
    { id: '4', title: 'Very active (hard exercise or sports 6-7 days a week)' },
    { id: '5', title: 'Super active (very hard exercise or physical job)' },
];

const nutritionalFocuses = [
    { id: '1', title: 'High protein' },
    { id: '2', title: 'Low carb' },
    { id: '3', title: 'Low fat' },
    { id: '4', title: 'High fiber' },
    { id: '5', title: 'Balanced diet' },
    { id: '6', title: 'Low sugar' },
];

const CreateMealPlan = () => {
    const [selectedGoals, setSelectedGoals] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState([]);
    const [selectedFocuses, setSelectedFocuses] = useState([]);

    const toggleSelection = (list, setList, id) => {
        setList(prevList =>
            prevList.includes(id) ? prevList.filter(item => item !== id) : [...prevList, id]
        );
    };

    const navigation = useNavigation();

    const renderItem = ({ item }, list, setList) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => toggleSelection(list, setList, item.id)}
        >
            <View style={styles.itemIndicator} />
            <Text style={styles.itemText}>{item.title}</Text>
            <CheckBox
                isChecked={list.includes(item.id)}
                onClick={() => toggleSelection(list, setList, item.id)}
                checkedCheckBoxColor='#000'
                uncheckedCheckBoxColor='#000'
            />
        </TouchableOpacity>
    );

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
                <Text style={styles.heading}>3 Days Meal Plan</Text>

                <Text style={styles.sectionHeader}>Breakfast options: Select 3</Text>
                <View style={styles.listContainer}>
                    <FlatList
                        data={healthGoals}
                        renderItem={(item) => renderItem(item, selectedGoals, setSelectedGoals)}
                        keyExtractor={item => item.id}
                    />
                </View>

                <Text style={styles.sectionHeader}>Lunch options: Select 3</Text>
                <View style={styles.listContainer}>
                    <FlatList
                        data={activityLevels}
                        renderItem={(item) => renderItem(item, selectedActivity, setSelectedActivity)}
                        keyExtractor={item => item.id}
                    />
                </View>

                <Text style={styles.sectionHeader}>Dinner options: Select 3</Text>
                <View style={styles.listContainer}>
                    <FlatList
                        data={nutritionalFocuses}
                        renderItem={(item) => renderItem(item, selectedFocuses, setSelectedFocuses)}
                        keyExtractor={item => item.id}
                    />
                </View>

                <TouchableOpacity 
                    onPress={()=>{
                        navigation.navigate(ScreenNameEnum.MealPlan)
                    }}
                style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Create</Text>
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
        marginTop: marginTop,
    },
    logo: {
        width: 30,
        height: 30,
    },
    headerText: {
        fontSize: 24,
        fontWeight: '500',
        fontFamily: 'anaktoria',
        color: colors.txtColor,
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
    sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        color: colors.txtColor,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 14,
        width: '80%',
        color: colors.txtColor,
        fontWeight: '600',
    },
    itemIndicator: {
        backgroundColor: colors.txtColor,
        height: 4,
        width: 4,
        borderRadius: 2,
    },
    listContainer: {
        backgroundColor: '#C8DBCE',
        padding: 20,
        borderRadius: 20,
    },
    nextButton: {
        backgroundColor: colors.txtColor,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CreateMealPlan;

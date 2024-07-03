
    import React, { useState } from 'react';
    import { NavigationContainer, useNavigation } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
    import { image } from '../../config/utils/images';
    import { colors } from '../../config/utils/colors';
    import { marginTop } from '../../config/utils/utils';
    import Time from '../../assets/svg/time.svg'
    import Alram from '../../assets/svg/alrm.svg'
    import AddGroceryModal from '../modals/AddGroceryModal';
    import ShareListModal from '../modals/ShareListModal';
    import { inlineStyles } from 'react-native-svg';
    import TimePickerModal from '../modals/TimePickerModal';
    
    const EditMeals = () => {
        const navigation = useNavigation();
        const [GroceryModal, setGroceryModal] = useState(false);
        const [ShareModal, setShareModal] = useState(false);
        const [TimeModalVisible, setTimeModalVisible] = useState(false);
        const [selectedTime, setSelectedTime] = useState(null);
    
        const [TabValiue, setTabValiue] = useState('Ingredients');
        const handleCloseModal = () => {
            setTimeModalVisible(false);
        };
    
        const handleConfirmTime = (date) => {
            setSelectedTime(date);
            setTimeModalVisible(false);
        };
    
        return (
            <View style={styles.screen}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={image.back} style={styles.logo} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Hack Aplate</Text>
                    <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
                        <Image source={image.menu} style={styles.menuIcon} />
                    </TouchableOpacity>
                </View>
    
                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                    <Text style={styles.title}>Beef And Eggplant Casserole- A Nice Dish For Noon Time...</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => { setTabValiue('Ingredients') }}
                            style={[styles.button, { backgroundColor: TabValiue === 'Ingredients' ? colors.btnColor : '#fff' }]}
                        >
                            <Text style={[styles.buttonText, { color: TabValiue === 'Ingredients' ? '#fff' : colors.btnColor }]}>Ingredients</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { setTabValiue('Instruction') }}
                            style={[styles.button, { backgroundColor: TabValiue === 'Instruction' ? colors.btnColor : '#fff' }]}
                        >
                            <Text style={[styles.buttonText, { color: TabValiue === 'Instruction' ? '#fff' : colors.btnColor }]}>Instruction</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { setTabValiue('Nutrition') }}
                            style={[styles.button, { backgroundColor: TabValiue === 'Nutrition' ? colors.btnColor : '#fff' }]}
                        >
                            <Text style={[styles.buttonText, { color: TabValiue === 'Nutrition' ? '#fff' : colors.btnColor }]}>Nutrition</Text>
                        </TouchableOpacity>
                    </View>
    
                    {TabValiue === 'Ingredients' && (
                        <View style={styles.ingredientContainer}>
                            <View style={styles.editIconContainer}>
                                <Image style={styles.editIcon} source={image.CircleEdit} />
                            </View>
                            {ingredientList.map((item, index) => (
                                <View key={index} style={styles.ingredientRow}>
                                    <Text style={styles.ingredientText}>{item.name}</Text>
                                    <Text style={styles.ingredientText}>{item.amount}</Text>
                                </View>
                            ))}
                        </View>
                    )}
    
                    {TabValiue === 'Instruction' && (<>
                        <View style={styles.instructionContainer}>
                            <Text style={styles.instructionText}>Here are the instructions...</Text>
                        </View>
    
                        <FlatList
                            data={instruction}
                            renderItem={({ item }) => (
                                <View style={styles.instructionContainer}>
                                    <Text style={styles.instructionText}>{item.instruction}</Text>
    
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                        <TouchableOpacity
    
                                            onPress={() => {
                                                setTimeModalVisible(true)
                                            }}
                                            style={{
                                                backgroundColor: '#c8dbce', borderRadius: 30, padding: 5,
                                                paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center'
                                            }}>
                                            <Alram height={20} />
                                            <Text style={{ marginLeft: 5, color: colors.txtColor, fontWeight: '600' }}>{item.time}</Text>
                                        </TouchableOpacity>
                                        <View style={{ marginLeft: 5 }}>
                                            <Time height={20} />
                                        </View>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
    
                    </>
                    )}
    
                    {TabValiue === 'Nutrition' && (
                        <View style={styles.nutritionContainer}>
                            <Image source={image.dish} style={styles.foodImage} resizeMode='contain' />
                            <Text style={styles.nutritionHeader}>Nutrition</Text>
                            <View style={styles.nutritionRow}>
                                <View style={styles.nutritionItem}>
                                    <Text style={styles.nutritionLabel}>Calories</Text>
                                    <Text style={styles.nutritionValue}>385</Text>
                                </View>
                                <View style={styles.nutritionItem}>
                                    <Text style={styles.nutritionLabel}>Carbon</Text>
                                    <Text style={styles.nutritionValue}>31g</Text>
                                </View>
                                <View style={styles.nutritionItem}>
                                    <Text style={styles.nutritionLabel}>Protein</Text>
                                    <Text style={styles.nutritionValue}>16g</Text>
                                </View>
                                <View style={styles.nutritionItem}>
                                    <Text style={styles.nutritionLabel}>Fat</Text>
                                    <Text style={styles.nutritionValue}>20g</Text>
                                </View>
                            </View>
                        </View>
                    )}
    
                    <View style={styles.bottomSpacer} />
                </ScrollView>
    
                <View style={styles.actionContainer}>
                    <TouchableOpacity onPress={() => setGroceryModal(true)}>
                        <Image source={image.Meal} style={styles.actionIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShareModal(true)}>
                        <Image source={image.bookmark} style={styles.actionIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShareModal(true)}>
                        <Image source={image.share} style={styles.actionIcon} />
                    </TouchableOpacity>
                </View>
                <TimePickerModal
                    isVisible={TimeModalVisible}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirmTime}
                />
                <AddGroceryModal modalVisible={GroceryModal} setModalVisible={() => setGroceryModal(false)} />
                <ShareListModal modalVisible={ShareModal} setModalVisible={() => setShareModal(false)} />
            </View>
        );
    };
    
    export default EditMeals;
    
    const instruction = [
        {
            instruction: 'L. Preheat the oven to 375°F (190 Cl. Scout on the inside of the eggplant halves, leaving a shell about Inch thick. Chop the scooped flesh'
            , time: '07'
        },
        {
            instruction: 'L. Preheat the oven to 375°F (190 Cl. Scout on the inside of the eggplant halves, leaving a shell about Inch thick. Chop the scooped flesh'
            , time: '07'
        },
        {
            instruction: 'L. Preheat the oven to 375°F (190 Cl. Scout on the inside of the eggplant halves, leaving a shell about Inch thick. Chop the scooped flesh'
            , time: '07'
        },
    ]
    
    const ingredientList = [
        { name: 'Ground Beef', amount: '1 lb' },
        { name: 'Large Eggplants, Halved', amount: '2' },
        { name: 'Lengthwise', amount: 'Few' },
        { name: 'Tomatoes, Finely Chopped', amount: '2' },
        { name: 'Onion, Diced', amount: '1' },
        { name: 'Cloves Garlic, Minced', amount: '2' },
        { name: 'Dried Thyme', amount: '1 Tsp' },
        { name: 'Dried Rosemary', amount: '1 Tsp' },
        { name: 'Salt And Pepper To Taste', amount: '' },
        { name: 'Olive Oil For Cooking', amount: '200 ml' },
        { name: 'Grated Parmesan', amount: '1 Cup' },
        { name: 'Cheese', amount: '200 g' },
        { name: 'Parsley For Garnish', amount: 'Few' },
    ];
    
    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            padding: 16,
            backgroundColor: '#fff',
        },
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
            width: 20,
            height: 20,
        },
        container: {
            flex: 1,
            paddingVertical: 16,
            backgroundColor: '#fff',
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 16,
            textAlign: 'center',
            color: colors.txtColor,
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 16,
        },
        button: {
            padding: 5,
            borderRadius: 30,
            borderWidth: 2,
            borderColor: colors.btnColor,
        },
        buttonText: {
            color: colors.btnColor,
            paddingHorizontal: 8,
        },
        ingredientContainer: {
            backgroundColor: '#F9F9F9',
            borderRadius: 8,
            padding: 16,
        },
        ingredientRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
            height: 60,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: colors.btnColor,
        },
        ingredientText: {
            fontSize: 16,
            color: colors.btnColor,
            fontWeight: '500',
        },
        instructionContainer: {
            backgroundColor: '#F9F9F9',
            borderRadius: 8,
            padding: 16,
            marginTop: 10
        },
        instructionText: {
            fontSize: 16,
            color: colors.btnColor,
        },
        nutritionContainer: {
            backgroundColor: '#F9F9F9',
            borderRadius: 8,
            padding: 16,
            alignItems: 'center',
        },
        foodImage: {
            width: 200,
            height: 150,
            marginBottom: 16,
        },
        nutritionHeader: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 16,
            color: colors.btnColor,
        },
        nutritionRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: 8,
        },
        nutritionItem: {
            alignItems: 'center',
            width: '25%',
        },
        nutritionLabel: {
            fontSize: 16,
            color: colors.btnColor,
        },
        nutritionValue: {
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.btnColor,
        },
        bottomSpacer: {
            height: 50,
        },
        actionContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '20%',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: 20,
            right: 30,
        },
        actionIcon: {
            height: 20,
            width: 20,
        },
        editIconContainer: {
            alignSelf: 'flex-end',
            marginVertical: 5,
        },
        editIcon: {
            height: 25,
            width: 25,
        },
    });
    
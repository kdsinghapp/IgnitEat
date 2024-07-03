import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { image } from '../../config/utils/images';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../config/utils/colors';
import { marginTop } from '../../config/utils/utils';
import ScreenNameEnum from '../../routes/screenName.enum';
import Edit from '../../assets/svg/clearEdit.svg';

const GroceryDetailsEdit = () => {
    const navigation = useNavigation();



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
                <TouchableOpacity
                    style={styles.button}
                    
                >
                    <Image source={image.G_list} style={styles.addButtonImage} />
                    <Text style={[styles.buttonText, styles.addButtonText]}>
                    grocery list name 41
                    </Text>
                    <View>
                        <TouchableOpacity style={styles.deleteButton}>
                            <Image source={image.close} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.editButton}>
                            <Edit height={20} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <View style={styles.ingredientContainer}>
                    <View style={styles.editIconContainer}>
                        <Text style={styles.sectionTitle}>My July Dietary Plan</Text>
                        <TouchableOpacity onPress={() => {
                        navigation.navigate(ScreenNameEnum.GroceryListForm)
                    }}>
                        <Edit style={styles.editIcon} />
                        </TouchableOpacity>
                    </View>
                    {ingredientList.map((item, index) => (
                        <View key={index} style={styles.ingredientRow}>
                            <Text style={styles.ingredientText}>{item.name}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
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
    sectionTitle: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '600',
        color: colors.txtColor,
    },
    ingredientContainer: {
        backgroundColor: '#F9F9F9',
        borderRadius: 8,
        padding: 16,
        marginTop: 20,
    },
    editButton: {
        padding: 10,
        marginRight: 10,
    },
    deleteButton: {
        padding: 10,
    },
    container: {
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
        width: 24,
        height: 24,
    },
    button: {
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    addButtonImage: {
        width: 50,
        height: 50,
    },
    buttonText: {
        fontSize: 14,
        color: colors.txtColor,
        marginLeft: 5,
        fontWeight: '600',
        width: '63%',
    },
    editIconContainer: {
        alignSelf: 'center',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    editIcon: {
        marginLeft: 10,
    },
});

export default GroceryDetailsEdit;

const ingredientList = [
    { name: '1 ib ground beef', amount: '1 lb' },
    { name: 'Large Eggplants, Halved', amount: '2' },
    { name: 'lengthwise', amount: 'Few' },
    { name: 'Tomatoes, Finely Chopped', amount: '2' },
    { name: '1 Onion, Diced', amount: '1' },
    { name: 'Cloves Garlic, Minced', amount: '2' },
    { name: 'Dried Thyme', amount: '1 Tsp' },
    { name: 'Dried Rosemary', amount: '1 Tsp' },
    { name: 'Salt And Pepper To Taste', amount: '' },
    { name: 'Olive Oil For Cooking', amount: '200 ml' },
    { name: 'Grated Parmesan', amount: '1 Cup' },
    { name: 'Cheese', amount: '200 g' },
    { name: 'Parsley For Garnish', amount: 'Few' },
];

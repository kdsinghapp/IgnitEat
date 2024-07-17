import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { image } from '../../config/utils/images';
import { colors } from '../../config/utils/colors';
import { marginTop } from '../../config/utils/utils';
import Edit from '../../assets/svg/clearEdit.svg';
import AddGroceryModal from '../modals/AddGroceryModal';
import ShareListModal from '../modals/ShareListModal';

const ViewmealPlaning = () => {
    const navigation = useNavigation();
    const [GroceryModal, setGroceryModal] = useState(false);
    const [ShareModal, setShareModal] = useState(false);

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

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={image.back} style={styles.logo} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Hack Aplate</Text>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={image.menu} style={styles.menuIcon} />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Image source={image.changepass} style={styles.icon} />
                    <Text style={styles.planTitle}>My July Dietary Plan</Text>
                </View>

                <View style={styles.ingredientContainer}>
                    <View style={styles.editIconContainer}>
                        <Text style={styles.sectionTitle}>My July Dietary Plan</Text>
                        <Edit style={styles.editIcon} />
                    </View>
                    {ingredientList.map((item, index) => (
                        <View key={index} style={styles.ingredientRow}>
                            <Text style={styles.ingredientText}>{item.name}</Text>
                        </View>
                    ))}
                </View>

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

            <AddGroceryModal modalVisible={GroceryModal} setModalVisible={() => setGroceryModal(false)} />
            <ShareListModal modalVisible={ShareModal} setModalVisible={() => setShareModal(false)} />
        </View>
    );
};

export default ViewmealPlaning;

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
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        height: 50,
        width: 50,
    },
    planTitle: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '600',
        color:colors.txtColor
    },
    ingredientContainer: {
        backgroundColor: '#F9F9F9',
        borderRadius: 8,
        padding: 16,
        marginTop: 20,
    },
    sectionTitle: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '600',
        color: colors.txtColor,
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
        alignSelf: 'center',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    editIcon: {
        marginLeft: 10,
    },
});

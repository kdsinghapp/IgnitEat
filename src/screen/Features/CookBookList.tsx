import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput, FlatList } from 'react-native';
import { image } from '../../config/utils/images';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../config/utils/colors';
import { marginTop } from '../../config/utils/utils';
import Search from '../../assets/svg/search.svg';
import Alrm from '../../assets/svg/alrm.svg';
import BlackClose from '../../assets/svg/BlackClose.svg';
import ScreenNameEnum from '../../routes/screenName.enum';

const CookBookList = () => {
    const navigation = useNavigation();

    const cookBook = [
        {
            name: 'The Recipe Critic',
            logo: image.book,
            time: '07'
        },
        {
            name: 'The Recipe Critic',
            logo: image.book,
            time: '07'
        },
    ];

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
                <Text style={styles.heading}>CookBooks</Text>
                <View style={styles.searchContainer}>
                    <Search />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Type Cookbook Name To Search Or Create A New One"
                    />
                    <BlackClose />
                </View>
                <View style={styles.cookBookListContainer}>
                    <FlatList
                        data={cookBook}
                        keyExtractor={(item, index) => index.toString()}
                        ListFooterComponent={<View style={{ height: 20 }} />}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                            
                                style={[styles.button,
                                    
                                    ]}
                                onPress={() => {

                                    navigation.navigate(ScreenNameEnum.CookBookDetails)
                                }}
                            >
                                <Image source={item.logo} style={styles.addButtonImage} />
                                <Text style={[styles.buttonText, styles.addButtonText]}>
                                    {item.name}
                                </Text>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Alrm />
                                <Text style={[styles.buttonText,]}>
                                    {item.time} m
                                </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
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
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    searchContainer: {
        marginTop: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 10,
        alignItems: 'center',
        shadowColor: "#000",
        marginHorizontal: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    searchInput: {
        width: '70%',
        borderColor: '#ccc',
    },
    cookBookListContainer: {
        flex: 1,
        marginTop: 20,
    },
    button: {
        borderRadius:50,
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor:'#fff',
       marginHorizontal:5,

        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    addButton: {
        justifyContent: 'center',
    },
    addButtonImage: {
        width:50,
        height:50,
       
    },
    buttonText: {
        fontSize: 14,
        color:colors.txtColor,
      marginLeft:5,
        fontWeight: '600',
        width:'63%',
   
    },
    addButtonText: {
       
    },
});

export default CookBookList;

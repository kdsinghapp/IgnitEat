
// App.js
import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, FlatList, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { image } from '../../config/utils/images';
import Edit from '../../assets/svg/clearEdit.svg';
import Search from '../../assets/svg/search.svg';
import BlackClose from '../../assets/svg/BlackClose.svg';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../config/utils/colors';
import { marginTop } from '../../config/utils/utils';
import BookingDetailsModal from '../modals/BookingDetailsModal';
import ScreenNameEnum from '../../routes/screenName.enum';
const data = [
  { id: '1', name: 'Drumstick', image: image.fin },
  { id: '2', name: 'Cherry Tomatoes',image:image.tam  },
  { id: '3', name: 'Sweet Potato', image: image.alu  },
  { id: '4', name: 'Onions', image: image.on },
  { id: '5', name: 'Mustard Leaves',image:image.cab },
];

const CookBookDetails = () => {
    const [DotModal,setDotModal] = useState(false)
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
            <ScrollView>
      <View style={styles.heading}>
        <View style={{flexDirection:'row',alignItems:'center',marginVertical:10}}>

        <Text style={styles.title}>Fish Cookbook</Text>
        <TouchableOpacity 
        onPress={()=>{
            setDotModal(true)
        }}
        >

        <Image  source={image.circleDot}  style={{height:20,width:20,marginLeft:10}}/>
        </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Shared By @UserName - View And Edit</Text>
      </View>
      <View style={styles.searchContainer}>
                    <Search />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Type Cookbook Name To Search Or Create A New One"
                    />
                    <BlackClose />
                </View>
                <View style={{marginTop:20}}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate(ScreenNameEnum.IngredientScreen)
        }}
          style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.name}</Text>
            <View>
            <TouchableOpacity style={styles.deleteButton}>
             <Image  source={image.close} style={{height:20,width:20}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton}>
            <Edit  height={20}/>
            </TouchableOpacity>
            
            </View>
          </TouchableOpacity>
        )}
      />
      </View>
      </ScrollView>

      <BookingDetailsModal   modalVisible={DotModal} setModalVisible={()=>{
        setDotModal(false)
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({
    searchContainer: {
       
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
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
  heading: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
   
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#000',
    marginTop: 5,
    fontWeight:'600',
    marginVertical:10
  },
  searchBar: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height:70,
    backgroundColor: '#fff',
    marginHorizontal:5,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  editButton: {
    padding: 10,
    marginRight: 10,
  },
  editText: {
    fontSize: 18,
    color: '#007AFF',
  },
  deleteButton: {
    padding: 10,
  },
  deleteText: {
    fontSize: 18,
    color: '#FF3B30',
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
});

export default CookBookDetails;

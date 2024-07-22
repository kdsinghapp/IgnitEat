
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { image } from '../../config/utils/images';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors, marginTop } from '../../config/utils/utils';
import Search from '../../assets/svg/search.svg'
import BlackClose from '../../assets/svg/BlackClose.svg';
import CookBookModal from '../modals/CookBookModal';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';
const cookbooks = [
  { id: '1', name: 'Salads', type: 'Private' },
  { id: '2', name: 'Cakes', type: 'Shared' },
  { id: '3', name: 'Fish', type: 'Private' },
  { id: '4', name: 'Meat', type: 'Shared With Me' },
  { id: '5', name: 'Pastas', type: 'Shared With Me' },
  { id: '6', name: 'My Diet', type: 'Shared' },
];




const CookBook = () => {

  const [OpenCookBookModal, setOpenCookBookModal] = useState(false)
const navigation = useNavigation()
  const CookbookItem = ({ name, type }) => (
    <TouchableOpacity 
    onPress={()=>{
navigation.navigate(ScreenNameEnum.CookBookDetails)
    }}
    
    style={styles.item}>
      <Text style={styles.type}>{type}</Text>
      <Text style={[styles.name,{marginTop:30}]}>{name}</Text>
      {/* <TouchableOpacity
      onPress={()=>{
        setOpenCookBookModal(true)
      }}
      style={styles.iconButton}>
        <Image source={image.circleDot} style={{ height: 20, width: 20 }} />
      </TouchableOpacity> */}
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={image.appLogo} style={styles.logo} />
        <Text style={styles.headerText}>Hack Aplate</Text>
        <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
          <Image source={image.menu} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
      <View style={{
        marginTop: 30, backgroundColor: '#fff', borderRadius: 10, height: 50, paddingHorizontal: 10,
        alignItems: 'center', shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        justifyContent: 'space-between', flexDirection: 'row'
      }}>

        <Search />
        <TextInput
          style={styles.searchInput}
          placeholder="Type Cookbook Name To Search Or Create A New One"
        />
        <BlackClose />
      </View>
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={cookbooks}
          renderItem={({ item }) => <CookbookItem name={item.name} type={item.type} />}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
      <CookBookModal modalVisible={OpenCookBookModal} setModalVisible={() => {
        setOpenCookBookModal(false)
      }} />
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
    width: 40,
    height: 40,
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
  searchInput: {
    width: '70%',
    borderColor: '#ccc',


  },
  item: {
    flex: 1,
    margin: 8,
    padding: 16,
    height: hp(16),
    borderRadius: 8,
    backgroundColor: '#C8DBCE',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#0E522D'
  },
  type: {
    fontSize: 14,
    color: '#9DB2BF',
  },
  iconButton: {
    marginTop: 30

  },
});

export default CookBook;

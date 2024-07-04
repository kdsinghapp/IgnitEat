import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { image } from '../../config/utils/images';
import { useNavigation } from '@react-navigation/native';
import BlackClose from '../../assets/svg/BlackClose.svg'
import { colors } from '../../config/utils/colors';
const ChnageUsername = () => {
  const navigation = useNavigation();
const [IsEdit,setisEdit] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={image.back} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hack Aplate</Text>
        <Image source={image.appLogo} style={styles.menuIcon} resizeMode='contain' />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Change Username</Text>
        <TouchableOpacity
        onPress={()=>{
          setisEdit(IsEdit=>!IsEdit)
        }}
        style={{
          backgroundColor: '#F9F9F9',
          flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
          borderRadius: 20, padding: 15
        }}>
          <View>
            <Text style={{ fontSize: 18, color: "#000", fontWeight: '600' }}>Angel Schleifer</Text>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: '500' }}>Username Already exits</Text>
          </View>
          <BlackClose />
        </TouchableOpacity>
     
      </ScrollView>
     {IsEdit && <View
      
        style={{
          width:'100%',alignSelf:'center',paddingHorizontal:20,
          backgroundColor: '#F9F9F9',
          flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
          borderRadius: 20, padding: 10,position:'absolute',bottom:20,
        }}>
          <View>
          <TextInput  placeholder='type name'  />
          </View>
<TouchableOpacity 
 onPress={()=>{
  setisEdit(IsEdit=>!IsEdit)
}}
style={{padding:5,backgroundColor:colors.txtColor,paddingHorizontal:15,borderRadius:20}}>
          <Text style={{fontSize:14,color:'#fff',fontWeight:'600'}}>Save</Text>
          </TouchableOpacity>
        </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  logo: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'anaktoria',
    color: '#000',
    marginLeft: 20,
  },
  menuIcon: {
    width: 50,
    height: 40,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
    marginVertical: 20,
  },
  scrollView: {
    flex: 1,
  },
});

export default ChnageUsername;

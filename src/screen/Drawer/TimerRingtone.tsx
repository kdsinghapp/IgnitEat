
  import React, { useState } from 'react';
  import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
  import { RadioButton } from 'react-native-paper';
import { colors } from '../../config/utils/colors';
import { image, marginTop } from '../../config/utils/utils';
import { useNavigation } from '@react-navigation/native';
  
  const TimerRingtone = () => {
    const [checked, setChecked] = useState('first');
  const navigation = useNavigation()
    const ringtones = [
      'Select Internal Storage',
      'Aspen',
      'Lydia',
      'Makenna',
      'Ann',
      'Kaylynn',
      'Terry',
      'Kadin',
      'Omar',
      'Hanna',
      'Cristofer',
      'Kasey',
    ];
  
    return (
      <View style={styles.container}>
          <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={image.back} style={styles.logo} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Hack Aplate</Text>
          <Image source={image.appLogo} style={styles.menuIcon} resizeMode='contain' />
      </View>
        <Text style={styles.title}>Select Timer Ringtone</Text>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {ringtones.map((ringtone, index) => (
            <View key={index} style={styles.radioContainer}>
              <Text style={styles.label}>{ringtone}</Text>
              <RadioButton
                value={ringtone}
                status={checked === ringtone ? 'checked' : 'unchecked'}
                onPress={() => setChecked(ringtone)}
                color="#2c6e49" // Change color as needed
              />
            </View>
          ))}
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
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color:'#000',
      marginVertical:20
    },
    scrollView: {
      flex: 1,
    },
    radioContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,

      borderBottomColor: '#ccc',
    },
    label: {
      fontSize: 16,
      color:colors.btnColor,
      fontWeight:'600'
    },
  });
  
  export default TimerRingtone;
  
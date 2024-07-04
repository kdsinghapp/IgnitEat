import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { image } from '../../config/utils/images';
import { useNavigation } from '@react-navigation/native';
import RightIcon from '../../assets/svg/right.svg';
import ScreenNameEnum from '../../routes/screenName.enum';

const RingtoneMenu = () => {
  const navigation = useNavigation();
  const [isCookbookNamesEnabled, setIsCookbookNamesEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={image.back} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hack Aplate</Text>
        <Image source={image.appLogo} style={styles.menuIcon} resizeMode='contain' />
      </View>
      
      <Text style={styles.title}>Timer Ringtone</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.preference}>
          <View style={{ width: '80%' }}>
            <Text style={styles.preferenceTitle}>Time Ringtone</Text>
            <Text style={styles.preferenceDescription}>
              On
            </Text>
          </View>
          <Switch
            value={isCookbookNamesEnabled}
            onValueChange={() => setIsCookbookNamesEnabled(!isCookbookNamesEnabled)}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNameEnum.Timer_ringtone)}
          style={styles.aboutItem}
        >
          <Image source={image.bell2} style={{ height: 35, width: 35 }} />
          <Text style={styles.aboutText}>Select timer ringtone</Text>
          <RightIcon height={30} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  preference: {
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
  preferenceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  preferenceDescription: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  aboutItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 7,
    marginTop: 20,
  },
  aboutText: {
    width: '80%',
    fontSize: 14,
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
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
    fontSize: 20,
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

export default RingtoneMenu;

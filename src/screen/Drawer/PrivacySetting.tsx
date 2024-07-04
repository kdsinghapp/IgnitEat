
  import React from 'react';
  import { View, StyleSheet, Text ,Switch, TouchableOpacity, Image} from 'react-native';
  import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { colors, image, marginTop } from '../../config/utils/utils';
import { useNavigation } from '@react-navigation/native';

  export default function PrivacySetting() {
    const [isCookbookNamesEnabled, setIsCookbookNamesEnabled] = React.useState(false);
    const [isRecipesNamesEnabled, setIsRecipesNamesEnabled] = React.useState(false);
  const navigation = useNavigation()
    return (
      <View style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={image.back} style={styles.logo} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Hack Aplate</Text>
          <Image source={image.appLogo} style={styles.menuIcon} resizeMode='contain' />
      </View>
          <View style={styles.drawerContent}>
            <Text style={styles.title}>Privacy Settings</Text>
  
            <View style={styles.preference}>
            <View style={{width:'80%'}}>
              <Text style={styles.preferenceTitle}>Cookbook Names</Text>
              <Text style={styles.preferenceDescription}>
                Allow other users to view only cookbook names
              </Text>
              </View>
              <Switch
                value={isCookbookNamesEnabled}
                onValueChange={() =>
                  setIsCookbookNamesEnabled(!isCookbookNamesEnabled)
                }
              />
            </View>
  
            <View style={styles.preference}>
              <View style={{width:'80%'}}>
              <Text style={styles.preferenceTitle}>Cookbook Recipes Names</Text>
              <Text style={styles.preferenceDescription}>
                Allow other users to view recipes and cookbook names
              </Text>
              </View>
              <Switch
                value={isRecipesNamesEnabled}
                onValueChange={() =>
                  setIsRecipesNamesEnabled(!isRecipesNamesEnabled)
                }
              />
            </View>
          </View>
      </View>
    );
  }
  
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
      marginLeft: 20,
  },
  menuIcon: {
      width: 50,
      height: 40,
  },
    drawerContent: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color:'#000'
    },
    preference: {
      marginBottom: 20,
      justifyContent:'space-between',
      flexDirection:'row',
    },
    preferenceTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color:'#000'
    },
    preferenceDescription: {
      fontSize: 14,
      color: 'gray',
      marginBottom: 10,
    },
  });
  
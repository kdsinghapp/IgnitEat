
  import React from 'react';
  import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
  import RightIcon from '../../assets/svg/right.svg';
import { image } from '../../config/utils/images';
import Close from '../../assets/svg/close.svg';
import { colors } from '../../config/utils/colors';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';
import { marginTop } from '../../config/utils/utils';
  const notifications = [
    { id: '1', name: 'Ronaldo', action: 'shared a cookbook with you', details: 'Fish cookbook', time: 'Today' },
    { id: '2', name: 'Johan', action: 'shared a recipe with you', details: 'Spaghetti bolognaise with green salad and fried egg', time: 'Today' },
    { id: '3', name: 'HackAplate', action: 'share a message with you', details: '', time: 'Earlier' },
    { id: '4', name: 'HackAplate', action: 'share a recipe with you', details: 'Spaghetti bolognaise with green salad and fried egg', time: 'Earlier' },
    { id: '5', name: 'HackAplate', action: 'share a cookbook with you', details: 'Best Pastas by Chef Gurmetto', time: 'Earlier' },
  ];


 
  
  const Notifications = () => {

    const navigation =  useNavigation()

    const NotificationItem = ({item}) => (
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate(ScreenNameEnum.NotificationDetails)
      }}
      style={styles.notificationItem}>
        <View style={styles.notificationHeader}>
          <Image
            source={image.Notification} // Replace with actual avatar URL
            style={styles.avatar}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.action}>{item.action}</Text>
            {item.details ? <Text style={styles.details}>{item.details}</Text> : null}
          </View>
        </View>
        <View style={styles.notificationFooter}>
          <TouchableOpacity style={styles.iconButton}>
  <Close  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
       <RightIcon /> 
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
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
        <Text style={styles.heading}>Notification</Text>
        <Text style={styles.subHeader}>Today</Text>
        <FlatList
          data={notifications.filter(n => n.time === 'Today')}
          renderItem={NotificationItem}
          keyExtractor={item => item.id}
        />
        <Text style={styles.subHeader}>Earlier</Text>
        <FlatList
          data={notifications.filter(n => n.time === 'Earlier')}
          renderItem={NotificationItem}
          keyExtractor={item => item.id}
        />
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
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign: 'center',
      color:'#000'
    },
    subHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,

      color:colors.txtColor
    },
    notificationItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    notificationHeader: {
      flexDirection: 'row',
      alignItems: 'center',
  paddingVertical:10,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight:10,
    },
    textContainer: {
      height:40,
      width:'60%'
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      color:colors.txtColor
    },
    action: {
      fontSize: 12,
      color: '#666',
      color:colors.txtColor
    },
    details: {
      fontSize:10,
      color: '#999',
    },
    notificationFooter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconButton: {
      marginLeft: 10,
    },
  });
  
  export default Notifications;
  
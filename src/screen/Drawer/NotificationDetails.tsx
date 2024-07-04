
    import React from 'react';
    import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { colors, image, marginTop } from '../../config/utils/utils';
import { useNavigation } from '@react-navigation/native';
    
    const notifications = [
      {
        id: '1',
        name: 'Cheyenne Lipshutz',
        message: 'We’ve got a delicious fish recipe suggestion just for you. Dive into a fresh, flavorful dish that’s perfect for any occasion.',
        buttonText: 'Click to view',
      },
      {
        id: '2',
        name: 'Makenna Bergson',
        message: 'Tailored just for you, focusing on low-fat and weight loss recipes. Enjoy nutritious and delicious meals that support your health goals. Check it out!',
        buttonText: 'Click to view',
      },
    ];
    
    const NotificationItem = ({ name, message, buttonText }) => (
      <View style={styles.card}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
    
    const NotificationDetails = () => {

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
          <Text style={styles.Heading}>HackAplate Notification</Text>
          <FlatList
            data={notifications}
            renderItem={({ item }) => <NotificationItem {...item} />}
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
      Heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color:'#000'
      },
      card: {
        backgroundColor: '#fff',
        marginHorizontal:10,
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      },
      name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'#000'
      },
      message: {
        fontSize: 14,
        color: '#333',
        marginBottom: 20,
        color:'#000'
      },
      button: {
        backgroundColor: colors.btnColor,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    });
    
    export default NotificationDetails;
    
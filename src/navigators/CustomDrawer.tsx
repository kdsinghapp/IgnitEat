// components/CustomDrawerContent.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationIcon}>🔔</Text> {/* Replace with your icon */}
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.credits}>Credits: 500</Text>
        <View style={styles.profile}>
          <Image source={require('../assets/profile.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>Zaire Vetrovs</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <DrawerItemList {...props} />
      <View style={styles.divider} />
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutHeader}>About</Text>
        <TouchableOpacity style={styles.aboutItem}>
          <Text style={styles.aboutText}>Terms And Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.aboutItem}>
          <Text style={styles.aboutText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.aboutItem}>
          <Text style={styles.aboutText}>Frequently Asked Questions</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  notificationButton: {
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#004d00',
  },
  notificationIcon: {
    color: '#fff',
    fontSize: 20,
  },
  profileContainer: {
    paddingHorizontal: 20,
  },
  credits: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d00',
    marginBottom: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
  aboutContainer: {
    paddingHorizontal: 20,
  },
  aboutHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  aboutItem: {
    paddingVertical: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#666',
  },
});

export default CustomDrawerContent;

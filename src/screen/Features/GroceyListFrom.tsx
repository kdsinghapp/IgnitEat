// GroceryListForm.js
import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { colors } from '../../config/utils/colors';
import { image } from '../../config/utils/images';
import { marginTop } from '../../config/utils/utils';

const GroceryListForm = () => {
  const [listName, setListName] = useState('');
  const [items, setItems] = useState([
    'White fish fillets (like tilapia, cod, or seabass), 600g (approximately 4 fillets)',
    'Olive oil',
    'Black pepper',
    'Fresh parsley, 15g',
    'Fresh cilantro, 15g',
    'Fresh mint, 10g',
    'Red onion, 1 medium',
    'Limes, 2',
    'Extra virgin olive oil',
    'Jalapeño pepper (optional)',
  ]);

  const handleSave = () => {
    // Handle save action
    console.log('Saved:', { listName, items });
  };

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
      <View style={styles.iconContainer}>
       <Image  source={image.book} style={{height:80,width:80}}/>
       <View style={{
        position:'absolute',
        right:-5,
        bottom:0
       }}>
        <Image source={image.Refresh} style={{height:30,width:30}} />
       </View>
      </View>
      <View style={styles.inputContainer}>
                        <TextInput  
                            placeholder='Cook Book Name'                        
                            style={styles.input}
                        />
                    </View>
      <ScrollView style={styles.itemsContainer}>
        {items.map((item, index) => (
          <Text key={index} style={styles.itemText}>• {item}</Text>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 20,
        backgroundColor: '#F7F8F8',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        alignSelf:'center',

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
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  marginTop:20,
   
    alignSelf: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 50,
    color: '#fff',
  },
  input: {
    
  },
  itemsContainer: {
    flex: 1,
    backgroundColor: '#F7F8F8',
    marginHorizontal:10,
marginTop:20,
    padding:20,
    borderRadius:10,
    marginBottom: 20,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
    color:'#9DB2BF'
  },
  saveButton: {
    backgroundColor: colors.txtColor,
    marginHorizontal:30,
    paddingVertical: 15,
    borderRadius:10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default GroceryListForm;

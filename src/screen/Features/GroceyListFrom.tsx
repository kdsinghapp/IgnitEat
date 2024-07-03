// GroceryListForm.js
import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        {/* Replace this View with an Image component if you have an icon */}
        <Text style={styles.iconText}>📝</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Grocery List Name"
        value={listName}
        onChangeText={setListName}
      />
      <ScrollView style={styles.itemsContainer}>
        {items.map((item, index) => (
          <Text key={index} style={styles.itemText}>• {item}</Text>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#004d00',
    alignSelf: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 50,
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  itemsContainer: {
    flex: 1,
    backgroundColor: '#e9f5e9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  saveButton: {
    backgroundColor: '#004d00',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default GroceryListForm;

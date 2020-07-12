import 'react-native-get-random-values';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import { uuid } from 'uuidv4';
import 'react-native-get-random-values';
import ListItem from './components/ListItem.js';
import AddItem from './components/AddItem.js';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Fruits' },
    { id: uuid(), text: 'Bread' },
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text:'Ok'});
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems]
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) =>
          <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },

});

export default App;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style = {styles.listItem}>
        <View style = {styles.listItemView}>
            <Text style = {styles.listItemText}> {item.text} </Text>
            <Icon name = "remove" size = {20} color = "red" onPress = {() => deleteItem(item.id)}/>
        </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#f8f5f9',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },

    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    listItemText: {
        fontSize: 17
    }

});

export default ListItem;
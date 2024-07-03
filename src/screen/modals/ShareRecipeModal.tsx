// ShareRecipeModal.js

import React, { useState } from 'react';
import { View, Text, TextInput, Modal, FlatList, TouchableOpacity, Switch, StyleSheet, Image, ScrollView } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Search from '../../assets/svg/search.svg'
import BlackClose from '../../assets/svg/BlackClose.svg'
const ShareRecipeModal = ({ isVisible, onClose }) => {
    const [search, setSearch] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [isCollaborative, setIsCollaborative] = useState(false);

    const frequentlyShared = [
        { id: '1', name: 'Jaylon Herwitz', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: '2', name: 'Hanna Donin', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { id: '3', name: 'Dulce Philips', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
        { id: '4', name: 'Carter Curtis', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
    ];

    const searchResult = [
        { id: '5', name: 'Gretchen Herwitz', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
        { id: '6', name: 'Anika Gouse', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
        { id: '7', name: 'Emery Lubin', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
    ];

    const handleSelectUser = (user) => {
        if (!selectedUsers.includes(user)) {
            setSelectedUsers([...selectedUsers, user]);
        }
    };

    const handleRemoveUser = (user) => {
        setSelectedUsers(selectedUsers.filter((u) => u !== user));
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => onClose()}
        >

            <View style={styles.modalContent}>
                <Text style={styles.text}>Share a recipe</Text>
                <ScrollView>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center', borderWidth: 1, height: 45, paddingHorizontal: 10,
                        borderColor: '#ddd', borderRadius: 10
                    }}>
                        <Search />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                            value={search}
                            onChangeText={setSearch}
                        />
                    </View>

                    <View style={styles.selectedUsersContainer}>
                        {selectedUsers.map((user) => (
                            <View style={styles.selectedUser} key={user.id}>
                                <Text style={styles.selectedUserText}>{user.name}</Text>
                                <TouchableOpacity onPress={() => handleRemoveUser(user)}>
                                    <BlackClose height={15} />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>

                    <FlatList
                        data={frequentlyShared}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.userItem}
                                onPress={() => handleSelectUser(item)}
                            >
                                <Image source={{ uri: item.image }} style={styles.userImage} />
                                <Text style={styles.userName}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent={<Text style={styles.sectionHeader}>Frequently Shared</Text>}
                    />

                    <FlatList
                        data={searchResult}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.userItem}
                                onPress={() => handleSelectUser(item)}
                            >
                                <Image source={{ uri: item.image }} style={styles.userImage} />
                                <Text style={styles.userName}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent={<Text style={styles.sectionHeader}>Search Result</Text>}
                    />

                    <View style={styles.collaborativeSwitch}>
                        <Text style={styles.switchLabel}>Make Your Cookbook Collaborative</Text>
                        <Switch
                            value={isCollaborative}
                            onValueChange={setIsCollaborative}
                        />
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => onClose()}
                >
                    <BlackClose />
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    text: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '700',
        color: '#000',
        alignSelf: 'center',
        marginVertical: 10
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop: heightPercentageToDP(10)
    },
    searchInput: {

        padding: 10,
        borderRadius: 5,

        width: '90%'
    },
    selectedUsersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
        marginTop: 20
    },
    selectedUser: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#eee',
        borderRadius: 5,
        marginRight: 5,
        marginBottom: 5,
    },
    selectedUserText: {
        marginRight: 5,
    },
    removeText: {
        color: 'red',
        fontWeight: 'bold',
    },
    userItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 30,
        marginBottom: 10,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    collaborativeSwitch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    switchLabel: {
        fontSize: 16,
    },
});

export default ShareRecipeModal;

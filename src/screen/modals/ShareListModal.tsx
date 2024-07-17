// ShareListModal.js

import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image, Share } from 'react-native';
import { colors } from '../../config/utils/colors';
import { image } from '../../config/utils/images';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BlackClose from '../../assets/svg/BlackClose.svg';
import Right from '../../assets/svg/right.svg';
import ShareRecipeModal from './ShareRecipeModal';

const ShareListModal = ({ modalVisible, setModalVisible }) => {
    const [isRecipeModalVisible, setRecipeModalVisible] = useState(false);


    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: 'Check out this link: https://www.google.com/',
            });
            if (result.action === Share.sharedAction && !result.activityType) {
                // Shared
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity
                        style={[styles.button, styles.addButton, { marginTop: 40 }]}
                        onPress={handleShare}
                    >
                        <Image source={image.shareLink} style={styles.addButtonImage} />
                        <Text style={[styles.buttonText, styles.addButtonText]}>
                            Share a link on your social network
                        </Text>
                        <Right />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.addButton]}
                        onPress={() => setRecipeModalVisible(true)}
                    >
                        <Image source={image.shareLink} style={styles.addButtonImage} />
                        <Text style={[styles.buttonText, styles.addButtonText]}>
                            Share a recipe with Hackaplate users
                        </Text>
                        <Right />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <BlackClose />
                    </TouchableOpacity>
                </View>

                <ShareRecipeModal
                    isVisible={isRecipeModalVisible}
                    onClose={() => setRecipeModalVisible(false)}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: '100%',
        height: '30%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        marginTop: 10,
        width: '90%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    addButton: {
        backgroundColor: '#fff',
    },
    addButtonImage: {
        height: 30,
        width: 30,
    },
    addButtonText: {
        marginLeft: 20,
        color: colors.btnColor,
        width: '70%',
    },
    buttonText: {
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
});

export default ShareListModal;

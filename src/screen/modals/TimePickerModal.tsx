import React, { useState, useEffect } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Pause from '../../assets/svg/pause.svg'
import Music from '../../assets/svg/Music.svg'
import Play from '../../assets/svg/play.svg'
import WhiteClose from '../../assets/svg/whiteClose.svg';
import { colors } from '../../config/utils/colors';
const TimePickerModal = ({ isVisible, onClose, onConfirm }) => {
    const [timer, setTimer] = useState(32 * 60); // timer in seconds
    const [isRunning, setIsRunning] = useState(false);
    const [timerInterval, setTimerInterval] = useState(null);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setTimer((prev) => (prev > 0 ? prev - 1 : prev));
            }, 1000);
            setTimerInterval(interval);
        } else if (timerInterval) {
            clearInterval(timerInterval);
        }
        return () => clearInterval(timerInterval);
    }, [isRunning]);

    const increaseTime = (minutes) => {
        setTimer((prev) => Math.min(prev + minutes * 60, 2 * 60 * 60)); // max 2 hours
    };

    const decreaseTime = (minutes) => {
        setTimer((prev) => Math.max(prev - minutes * 60, 0));
    };

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        clearInterval(timerInterval);
        setTimer(0);
        setIsRunning(false);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <Modal visible={isVisible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
             
                    <AnimatedCircularProgress
                        size={180}
                        width={13}
                        fill={timer === 0 ? 0 : (timer / (2 * 60 * 60)) * 100}
                        tintColor={colors.btnColor}
                       
                        backgroundColor="#F0FFF7"
                    >
                        {() => <Text style={styles.timerText}>{formatTime(timer)}</Text>}
                    </AnimatedCircularProgress>

                    <View style={[styles.controlRow, { width: '70%', }]}>

                        <TouchableOpacity onPress={resetTimer}>
                            <Pause />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleTimer}>
                            <Play />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.controlRow, { position: 'absolute', top:-20 }]}>

                        <TouchableOpacity onPress={resetTimer}>
                            <Music />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClose}>
                            <WhiteClose color={'#fff'} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '100%',
        padding: 20,

        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    timerText: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    controlRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 30,
        marginTop: 20,
    },
    controlText: {
        fontSize: 18,
        color: 'blue',
        marginHorizontal: 10,
    },
});

export default TimePickerModal;

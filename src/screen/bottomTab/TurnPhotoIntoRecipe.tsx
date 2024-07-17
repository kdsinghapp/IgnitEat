
import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { image } from '../../config/utils/images';
import Slider from '@react-native-community/slider';
import { colors, marginTop } from '../../config/utils/utils';
import Right from '../../assets/svg/rightIcon.svg'
import MicModal from '../modals/MicModal';
import SignupModel from '../modals/SignupModel';
import CreateRecipe from '../modals/CreateRecipe';
import ScreenNameEnum from '../../routes/screenName.enum';
export default function TurnPhotoIntoRecipe() {
  const [diners, setDiners] = useState(2);
  const [time, setTime] = useState(10);
  const [level, setLevel] = useState('Home Cooker');
  const [mood, setMood] = useState('Gourmet');
  const navigation = useNavigation();
  const [MicVoiceModal, setMicVoiceModal] = useState(false);
  const [CreateRecipeModal, setCreateRecipeModal] = useState(false);
  const [recipe, setrecipe] = useState('');
  const inputRef = useRef(null); // Ref for TextInput

  const [editable, setEditable] = useState(false); // State to track edit mode

  const toggleEdit = () => {
    setEditable(!editable);
    if (!editable) {
      focusTextInput(); // Focus TextInput when entering edit mode
    } else {
      Keyboard.dismiss(); // Dismiss keyboard when exiting edit mode
    }
  };
  const focusTextInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleOutsidePress = () => {
    if (editable && inputRef.current) {
      // Save changes or exit edit mode
      inputRef.current.blur(); // Blur TextInput to hide keyboard
      setEditable(false); // Exit edit mode
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={image.appLogo} style={styles.logo} />
          <Text style={styles.headerText}>Hack Aplate</Text>
          <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
            <Image source={image.menu} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>

<View style={{height:hp(18),

  justifyContent:'center',alignItems:'center'}}>

<Image  source={image.dish} 
resizeMode='cover'
style={{height:hp(10),width:wp(50),marginTop:40}}/>

<View style={{flexDirection:'row',

justifyContent:'space-between',width:'45%',top:10,
alignSelf:'center',position:'absolute'}}>
  <Image source={image.image}   style={{height:30,width:30}}/>
  <Image source={image.camera}   style={{height:30,width:30}}/>

</View>
</View>



          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.button}>
              <Right />
              <Text style={styles.buttonText}>Nutrition values</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ScreenNameEnum.IngredientScreen)
            }}
            style={styles.avoidButton}>
            <Text style={styles.avoidButtonText}>Upload an image of the dish and optionally add any details or description (e.g., key ingredients, dish name) to help us generate a more accurate recipe.</Text>

          </TouchableOpacity>

          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Diners</Text>
            <Text style={{ fontSize: 12, color: "#777777" }}>Set number of diners</Text>
            <Slider
              minimumValue={1}
              maximumValue={10}
              step={1}

              maximumTrackTintColor='#b7cbc0'
              minimumTrackTintColor='#0E522D'
              value={diners}
              onValueChange={value => setDiners(value)}
              style={styles.slider}
              thumbImage={image.customThumb}

            />
            <Text>{diners}</Text>
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Time</Text>
            <Text style={{ fontSize: 12, color: "#777777" }}>Set your cooking time to fit your schedule</Text>
            <Slider
              minimumValue={1}
              maximumValue={10}
              step={1}

              maximumTrackTintColor='#b7cbc0'
              minimumTrackTintColor='#0E522D'
              value={diners}
              onValueChange={value => setDiners(value)}
              style={styles.slider}
              thumbImage={image.customThumb}

            />
            <Text>{diners}</Text>
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Level</Text>
            <Text style={{ fontSize: 12, color: "#777777" }}>Define the level of details provided in the recipe instruction</Text>
            <Slider
              minimumValue={1}
              maximumValue={10}
              step={1}

              maximumTrackTintColor='#b7cbc0'
              minimumTrackTintColor='#0E522D'
              value={diners}
              onValueChange={value => setDiners(value)}
              style={styles.slider}
              thumbImage={image.customThumb}

            />

            <Text>{['Beginner', 'Home Cooker', 'Chef'][level]}</Text>
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Mood</Text>
            <Text style={{ fontSize: 12, color: "#777777" }}>Define the creativity level of the recipe</Text>
            <Slider
              minimumValue={1}
              maximumValue={10}
              step={1}

              maximumTrackTintColor='#b7cbc0'
              minimumTrackTintColor='#0E522D'
              value={diners}
              onValueChange={value => setDiners(value)}
              style={styles.slider}
              thumbImage={image.customThumb}

            />

            <Text>{['Classic', 'Gourmet', 'Artisan'][mood]}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setCreateRecipeModal(true)
            }}
            style={styles.createButton}>
            <Text style={styles.createButtonText}>Create</Text>
          </TouchableOpacity>

          <View style={{ height: hp(10) }} />
        </ScrollView>
        <MicModal modalVisible={MicVoiceModal} setModalVisible={() => setMicVoiceModal(false)} />

        <CreateRecipe modalVisible={CreateRecipeModal} setModalVisible={() => setCreateRecipeModal(false)} />

        {/* <SignupModel    modalVisible={MicVoiceModal} setModalVisible={()=>setMicVoiceModal(false)} />
      */}
      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: marginTop
  },
  logo: {
    width: 40,
    height: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'anaktoria',
    color: colors.txtColor
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  greeting: {
    fontSize: 18,
    marginVertical: 8,
    fontWeight: '700',
    color: colors.txtColor,
    fontFamily: 'Recoleta-Bold',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 16,
    color: '#575757',
    alignSelf: 'center'
  },
  input: {

    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  avoidIngredientsContainer: {
    backgroundColor: '#b7cbc0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,

  },
  avoidIngredientsText: {
    color: '#333',
  },
  buttonsRow: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    flexDirection: 'row',

    padding: 16,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.txtColor,
    fontWeight: 'bold',
    marginLeft: 10
  },
  avoidButton: {
    backgroundColor: '#0E522D',

    alignItems: 'center',
    paddingHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row', justifyContent: 'space-between',
    marginBottom: 16,
  },
  avoidButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  sliderContainer: {
    marginBottom: 16,
  },
  sliderLabel: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '700',
    color:'#000'
  },
  slider: {
    width: '100%',

  },
  createButton: {
    backgroundColor: colors.btnColor,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 8,
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

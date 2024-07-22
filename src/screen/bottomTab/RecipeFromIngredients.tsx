
  import React, { useRef, useState } from 'react';
  import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
  import { image } from '../../config/utils/images';
  import Slider from '@react-native-community/slider';
  import { colors, marginTop } from '../../config/utils/utils';
  import Right from '../../assets/svg/rightIcon.svg'
  import Dot from '../../assets/svg/dot.svg'
  import Mic from '../../assets/svg/mic.svg'
  import Edit from '../../assets/svg/edit.svg'
  import Downgreen from '../../assets/svg/downgreen.svg'
  import CustomSlider from '../../config/customSlider';
  import MicModal from '../modals/MicModal';
  import SignupModel from '../modals/SignupModel';
  import CreateRecipe from '../modals/CreateRecipe';
  import ScreenNameEnum from '../../routes/screenName.enum';
import SubscribePrime from '../modals/SubscribePrime';
  export default function RecipeFromIngredients() {
    const [diners, setDiners] = useState(2);
    const [time, setTime] = useState(10);
    const [level, setLevel] = useState('Home Cooker');
    const [mood, setMood] = useState('Gourmet');
    const navigation = useNavigation();
    const [MicVoiceModal, setMicVoiceModal] = useState(false);
    const [CreateRecipeModal, setCreateRecipeModal] = useState(false);
    const [recipe, setrecipe] = useState('');
    const inputRef = useRef(null); // Ref for TextInput
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (id) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const [editable, setEditable] = useState(false); // State to track edit mode
    const [recentlyUsedIngredientsExpanded, setRecentlyUsedIngredientsExpanded] = useState(false);
    const [availableAppliancesExpanded, setAvailableAppliancesExpanded] = useState(false);
    const [cuisineStyleExpanded, setCuisineStyleExpanded] = useState(false);
  

    const handleOutsidePress = () => {
      if (editable && inputRef.current) {
        // Save changes or exit edit mode
        inputRef.current.blur(); // Blur TextInput to hide keyboard
        setEditable(false); // Exit edit mode
      }
    };
    const renderItem = ({ item }) => (
      <View style={styles.ingredient}>
        <Image 
        
        source={{ uri: 'data:image/jpeg;base64,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' }} 
        style={styles.ingredientImage} />
        <Text style={{marginLeft:10,color:'#000',fontWeight:'700',}}>{item.name}</Text>
      </View>
    );
    const ExpandableSection = ({ title, content, expanded, onPress }) => (
      <View style={{      backgroundColor: '#C8DBCE',borderRadius:15,marginVertical:10}}>
          <TouchableOpacity onPress={onPress} style={styles.expandableHeader}>
              <Text style={{color:colors.btnColor,fontWeight:'600'}}>{title}</Text>
              <Downgreen />
          </TouchableOpacity>
          {expanded && <View style={styles.expandableContent}><Text style={{color:'#000'}}>{content}</Text></View>}
      </View>
  );
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
           
          <View style={{flexDirection:'row',
          paddingHorizontal:10,backgroundColor:'#fff',shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
         height:45, 
          elevation: 5,
          marginHorizontal:5,borderRadius:15,marginTop:20,
          alignItems:'center',justifyContent:'space-between'}}>
       <TextInput  
       placeholder='My Ingredients-'
       placeholderTextColor={'#777777'}
       style={{width:'70%',color:'#000'}}
       />
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Image  source={image.microphon} style={{height:30,width:30}} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{
            setCreateRecipeModal(true)
          }}
          style={styles.iconButton}>
          <Image  source={image.camera2} style={{height:30,width:30}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ingredientsContainer}>
      <FlatList
        data={Dish}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        // columnWrapperStyle={styles.row}
        // contentContainerStyle={styles.ingredientsContainer}
      />
      </View>
   
      <View style={styles.buttonsRow}>
              <TouchableOpacity style={styles.button}>
                <Right />
                <Text style={styles.buttonText}>Generate Image</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Right />
                <Text style={styles.buttonText}>Add Nutrition</Text>
              </TouchableOpacity>
            </View>
            <FlatList
            data={sections}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <ExpandableSection
                    title={item.title}
                    content={item.content}
                    expanded={!!expandedSections[item.id]}
                    onPress={() => toggleSection(item.id)}
                />
            )}
        />
           
  
          
  
        
  
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
              <Text style={styles.createButtonText}>Suggest</Text>
            </TouchableOpacity>
  
            <View style={{ height: hp(10) }} />
          </ScrollView>
          <MicModal modalVisible={MicVoiceModal} setModalVisible={() => setMicVoiceModal(false)} />
  
          <SubscribePrime modalVisible={CreateRecipeModal} setModalVisible={() => setCreateRecipeModal(false)} />
  
          {/* <SignupModel    modalVisible={MicVoiceModal} setModalVisible={()=>setMicVoiceModal(false)} />
      */}
        </View>
  
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    iconContainer: {
      flexDirection: 'row',
    
    },
    iconButton: {
    marginLeft:10,
    },
    ingredientsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 16,
      marginTop:20
    },
    ingredient: {
      width:'30%',
 
      justifyContent:'center',
      alignItems: 'center',
      marginBottom: 10,
      flexDirection:'row',
      marginLeft:10,
      backgroundColor:'#fff',
      borderRadius:30,
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    ingredientImage: {
      width:30,
      height:30,
      borderRadius:15,
      marginVertical: 5,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 16,
    },
    actionButton: {
      backgroundColor: '#4CAF50',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
    },
    actionButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 16,
    },
    paginationDot: {
      height:8,width:8,borderRadius:4,color:'#ccc'
    },
    expandableHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#C8DBCE',
      borderRadius:30,
      paddingVertical:15,
      paddingHorizontal:15,
      marginBottom:10,
    },
    expandableContent: {
      padding: 10,
    
     
      marginBottom: 8,
    },
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
      alignSelf:'center'
    },
    button: {
     
      flexDirection: 'row',
      borderRadius: 8,
      marginHorizontal: 4,
      alignItems: 'center',
    },
    buttonText: {
      color: colors.txtColor,
      fontWeight: 'bold',
      marginLeft: 10,
      fontSize:12
    },
    avoidButton: {
      backgroundColor: colors.btnColor,
      height: 50,
      alignItems: 'center',
      paddingHorizontal: 10,
      borderRadius: 30,
      flexDirection: 'row', justifyContent: 'space-between',
      marginBottom: 16,
    },
    avoidButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    sliderContainer: {
      marginBottom: 16,
      marginTop:20
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
  
  const sections = [
    { id: 1, title: 'Recently Used Ingredients', content: 'Content for Recently Used Ingredients...' },
    { id: 2, title: 'Available Appliances', content: 'Content for Available Appliances...' },
    { id: 3, title: 'Cuisine Style', content: 'Content for Cuisine Style...' },
];
  const Dish = [
    { id: '1', name: 'Pizza' },
    { id: '2', name: 'Chicken' },
    { id: '3', name: 'Noodles' },
    { id: '4', name: 'Curry' },
    { id: '5', name: 'Pizza' },
    { id: '6', name: 'Pizza' },
    { id: '7', name: 'Pizza' },
    { id: '8', name: 'Chicken' },
    { id: '9', name: 'Pizza' },
  ];
  
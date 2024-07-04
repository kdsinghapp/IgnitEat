
// screens/Frequntly.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, UIManager, Platform, Image, ViewComponent } from 'react-native';
import { image } from '../../config/utils/images';
import { colors, marginTop } from '../../config/utils/utils';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DownArrow  from '../../assets/svg/downgreen.svg'
// Enable LayoutAnimation on Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Frequntly = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (key) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={image.back} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hack Aplate</Text>
        <Image source={image.appLogo} style={styles.menuIcon} resizeMode='contain' />
    </View>
      <Text style={styles.heading}>Frequently Asked Questions</Text>
<View>
<Image source={image.Faq} style={{height:hp(25),width:wp(90)}} resizeMode='contain'/>
</View>
<View style={{

backgroundColor: '#e6f7e6',
justifyContent:'center',
borderRadius: 10,
marginBottom: 10,
borderWidth: 1,
borderColor: '#d6f5d6',
}}>
      <TouchableOpacity style={styles.faqItem} onPress={() => toggleExpand('faq1')}>
        <Text style={styles.faqQuestion}>What is a credit?</Text>
       <DownArrow />
       </TouchableOpacity>
      {expanded['faq1'] && (<>
        <Text style={styles.faqAnswer}>
          1 credit corresponding to a 1 recipe generation from text, Image and voice
        </Text>
        <Text style={styles.faqAnswer}>
          Meal planning credits count depend on the number of the generated recipes
        </Text>
        </>
      )}
</View>
    
<View style={{

backgroundColor: '#e6f7e6',
justifyContent:'center',
borderRadius: 10,
marginBottom: 10,
borderWidth: 1,
borderColor: '#d6f5d6',
}}>
      <TouchableOpacity style={styles.faqItem} onPress={() => toggleExpand('faq1')}>
        <Text style={styles.faqQuestion}>How do I purchase credit?</Text>
       <DownArrow />
       </TouchableOpacity>
      {expanded['faq1'] && (<>
        <Text style={styles.faqAnswer}>
          1 credit corresponding to a 1 recipe generation from text, Image and voice
        </Text>
        <Text style={styles.faqAnswer}>
          Meal planning credits count depend on the number of the generated recipes
        </Text>
        </>
      )}
</View>
    
<View style={{

backgroundColor: '#e6f7e6',
justifyContent:'center',
borderRadius: 10,
marginBottom: 10,
borderWidth: 1,
borderColor: '#d6f5d6',
}}>
      <TouchableOpacity style={styles.faqItem} onPress={() => toggleExpand('faq1')}>
        <Text style={styles.faqQuestion}>What features are included in the Premium services?</Text>
       <DownArrow />
       </TouchableOpacity>
      {expanded['faq1'] && (<>
        <Text style={styles.faqAnswer}>
          1 credit corresponding to a 1 recipe generation from text, Image and voice
        </Text>
        <Text style={styles.faqAnswer}>
          Meal planning credits count depend on the number of the generated recipes
        </Text>
        </>
      )}
</View>
    
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
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
        marginLeft: 20,
    },
    menuIcon: {
        width: 50,
        height: 40,
    },
heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    alignSelf: 'center',
    marginVertical:20
  },
  faqItem: {
    backgroundColor: '#e6f7e6',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
   
  },
  faqQuestion: {
    fontSize:16,
    color: '#000',
    fontWeight:'700',
    width:'80%'
  },
  faqAnswer: {
    padding: 15,
    fontSize: 14,
    color: '#000',
   fontWeight:'500'
   
    
  },
});

export default Frequntly;

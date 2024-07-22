
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import { colors } from '../../config/utils/colors';
import { image, marginTop } from '../../config/utils/utils';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';
import { useDispatch, useSelector } from 'react-redux';
import { get_subscription } from '../../redux/feature/featuresSlice';
import Loading from '../../config/Loader';

const Subscription = () => {
  const navigation = useNavigation()
  const isFocuse = useIsFocused()
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.feature.isLoading);
  const Subscription = useSelector(state => state.feature.getSubscription);
    useEffect(() => {
      dispatch(get_subscription())
    }, [isFocuse])

  return (
    <View style={styles.container}>
      {isLoading?<Loading />:null}
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={image.back} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hack Aplate</Text>
        <Image source={image.appLogo} style={styles.menuIcon} resizeMode='contain' />
    </View>
    <Text style={styles.heading}>Subscription</Text>
    <ScrollView contentContainerStyle={{flex:1,}} showsVerticalScrollIndicator={false}>
     {Subscription?.length > 0 ? <FlatList  
      showsVerticalScrollIndicator={false}
      data={Subscription}
      renderItem={({item})=>(<>



      <Text style={styles.planTitle}>{item.subscription_title}</Text>
      <View style={styles.card}>
    
        <Text style={styles.planDescription}>{item.subscription_name}</Text>
        <Text style={styles.planPrice}>${item.subscription_price}/<Text style={styles.planDuration}>Month</Text></Text>
        <TouchableOpacity 
           onPress={()=>{
            navigation.navigate(ScreenNameEnum.SubscriptionOption)
        }}
        style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribe to standard</Text>
        </TouchableOpacity>
        <Text style={styles.planCredits}>{item.subscription_description}</Text>
      </View>
      </>
    )}

    />:
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:16,color:'#000',fontWeight:'700'}}>No Subscription Found</Text>
    </View>
    }
      
    </ScrollView>
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
    fontSize:20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#D4FFD8',
    padding:20,
    borderRadius:20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004d00',
    marginBottom: 10,

  },
  planDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  planPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d00',
    marginBottom: 15,
  },
  planDuration: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  subscribeButton: {
    backgroundColor:colors.btnColor,
    paddingVertical:14,
    borderRadius:10,
    alignItems: 'center',
    marginBottom: 10,
  },
  subscribeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight:'500'
  },
  planCredits: {
    fontSize: 14,
    color: '#000',
    fontWeight:'500'
  },
});

export default Subscription;

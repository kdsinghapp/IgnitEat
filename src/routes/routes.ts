
import TabNavigator from "../navigators/TabNavigator";
import IngredientScreen from "../screen/Features/IngredientScreen";
import MealPlan from "../screen/Features/CreateMealPlan";
import RecipeList from "../screen/Features/Recipebook";
import MealPlanPreferences from "../screen/Features/healthGoals";
import SplashScreen from "../screen/Wellcome/SplashScreen";
import Login from "../screen/auth/Login";
import OtpScreen from "../screen/auth/OtpScreen";
import PasswordReset from "../screen/auth/PasswordReset";
import SignUp from "../screen/auth/SignUp";
import forgotPassword from "../screen/auth/forgotPassword";
import ScreenNameEnum from "./screenName.enum";
import CreateMealPlan from "../screen/Features/CreateMealPlan";
import MyMealPlan from "../screen/Features/MyMealPlan";
import EditMeals from "../screen/Features/EditMeals";
import ViewmealPlaning from "../screen/Features/ViewmealPlaning";
import CookBookList from "../screen/Features/CookBookList";
import CookBookDetails from "../screen/Features/CookBookDetails";
import GroceryDetailsEdit from "../screen/Features/GroceryDetailsEdit";
import GroceryListForm from "../screen/Features/GroceyListFrom";
import MainDrawer from "../navigators/MainDrawer";
import Profile from "../screen/Drawer/Profile";
import Subscription from "../screen/Drawer/Subscription";
import PersonalPre from "../screen/Drawer/PersonalPre";
import TimerRingtone from "../screen/Drawer/TimerRingtone";
import ChangePassword from "../screen/Drawer/ChangePassword";
import ChnageUsername from "../screen/Drawer/ChnageUsername";
import PrivacySetting from "../screen/Drawer/PrivacySetting";
import TermCondition from "../screen/Drawer/TermCondition";
import PrivacyPolicy from "../screen/Drawer/PrivacyPolicy";
import Frequntly from "../screen/Drawer/Frequntly";
import Notification from "../screen/Drawer/Notification";
import SubscriptionOption from "../screen/Drawer/SubscriptionOption";
import RingtoneMenu from "../screen/Drawer/RingtonMenu";
import NotificationDetails from "../screen/Drawer/NotificationDetails";
import ShareMessage from "../screen/Drawer/Sharemessage";
import ShareHackAplate from "../screen/Drawer/ShareHackAplate";


const _routes = {
  REGISTRATION_ROUTE: [
    {
      name: ScreenNameEnum.SPLASH_SCREEN,
      Component:SplashScreen,
    },
    {
      name: ScreenNameEnum.LOGIN_SCREEN,
      Component:Login,
    },
    {
      name: ScreenNameEnum.SIGNUP_SCREEN,
      Component:SignUp,
    },
    {
      name: ScreenNameEnum.OTP_SCREEN,
      Component:OtpScreen,
    },
    {
      name: ScreenNameEnum.FORGOT_PASSWORD,
      Component:forgotPassword,
    },
    {
      name: ScreenNameEnum.PASSWORD_RESET,
      Component:PasswordReset,
    },
    {
      name: ScreenNameEnum.BOTTOM_TAB,
      Component:TabNavigator,
    },
    {
      name: ScreenNameEnum.IngredientScreen,
      Component:IngredientScreen,
    },
    {
      name: ScreenNameEnum.RecipeList,
      Component:RecipeList,
    },
    {
      name: ScreenNameEnum.MealPlanPreferences,
      Component:MealPlanPreferences,
    },
    {
      name: ScreenNameEnum.MealPlan,
      Component:MyMealPlan,
    },
    {
      name: ScreenNameEnum.CreateMealPlan,
      Component:CreateMealPlan,
    },
   
    {
      name: ScreenNameEnum.EditMeals,
      Component:EditMeals,
    },
    {
      name: ScreenNameEnum.ViewmealPlaning,
      Component:ViewmealPlaning,
    },
    {
      name: ScreenNameEnum.CookBookList,
      Component:CookBookList,
    },
    {
      name: ScreenNameEnum.CookBookDetails,
      Component:CookBookDetails,
    },
    {
      name: ScreenNameEnum.GroceryDetailsEdit,
      Component:GroceryDetailsEdit,
    },
    {
      name: ScreenNameEnum.GroceryListForm,
      Component:GroceryListForm,
    },
    {
      name: ScreenNameEnum.MainDrawer,
      Component:MainDrawer,
    },
    {
      name: ScreenNameEnum.Profile,
      Component:Profile,
    },
    {
      name: ScreenNameEnum.Subscription,
      Component:Subscription,
    },
    {
      name: ScreenNameEnum.Personal_preferences,
      Component:PersonalPre,
    },
    {
      name: ScreenNameEnum.Timer_ringtone,
      Component:TimerRingtone,
    },
    {
      name: ScreenNameEnum.Change_Password,
      Component:ChangePassword,
    },
    {
      name: ScreenNameEnum.Change_Username,
      Component:ChnageUsername,
    },
    {
      name: ScreenNameEnum.Privacy_Settings,
      Component:PrivacySetting,
    },
    {
      name: ScreenNameEnum.Termsconditions,
      Component:TermCondition,
    },
    {
      name: ScreenNameEnum.Privacypolicy,
      Component:PrivacyPolicy,
    },
    {
      name: ScreenNameEnum.FrequentlyQuestions,
      Component:Frequntly,
    },
    {
      name: ScreenNameEnum.NOTIFICATION,
      Component:Notification,
    },
    {
      name: ScreenNameEnum.SubscriptionOption,
      Component:SubscriptionOption,
    },
    {
      name: ScreenNameEnum.ShareHackAplate,
      Component:ShareHackAplate,
    },
    {
      name: ScreenNameEnum.RingtoneMenu,
      Component:RingtoneMenu,
    },
    {
      name: ScreenNameEnum.NotificationDetails,
      Component:NotificationDetails,
    },
    {
      name: ScreenNameEnum.ShareMessage,
      Component:ShareMessage,
    },
   
    
  ],
  
  // PROFILE_ROUTE: [
  //   {
  //     name: ScreenNameEnum.PROFILE_SCREEN,
  //     Component:Profile,
  //   }
 
   
    



  // BOTTOMTAB_ROUTE:[
    
  //   {
  //     name: ScreenNameEnum.HOME_SCREEN,
  //     Component:Home,
  //     logo:require('../assets/croping/HomeUnactive3x.png'),
  //     lable:'Home'
  //   },
  //   {
  //     name: ScreenNameEnum.Orders,
  //     Component:Orders,
  //     logo:require('../assets/croping/HomeUnactive3x.png'),
  //     lable:'Order'
  //   },
  //   {
  //     name: ScreenNameEnum.WALLET_SCREEN,
  //     Component:Wallet,
  //     logo:require('../assets/croping/IconPlus3x.png'),
  //     lable:'Wallet'
  //   },
  //   {
  //     name: ScreenNameEnum.PROFILE_STACK,
  //     Component:ProfileRoutes,
  //     logo:require('../assets/croping/Profile3x.png'),
  //     lable:'Profile'
  //   },
  // ]

};

export default _routes;

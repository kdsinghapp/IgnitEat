
import TabNavigator from "../navigators/TabNavigator";
import IngredientScreen from "../screen/Features/IngredientScreen";
import MealPlan from "../screen/Features/craeteMealPlan";
import RecipeList from "../screen/Features/Recipebook";
import MealPlanPreferences from "../screen/Features/healthGoals";
import SplashScreen from "../screen/Wellcome/SplashScreen";
import Login from "../screen/auth/Login";
import OtpScreen from "../screen/auth/OtpScreen";
import PasswordReset from "../screen/auth/PasswordReset";
import SignUp from "../screen/auth/SignUp";
import forgotPassword from "../screen/auth/forgotPassword";
import ScreenNameEnum from "./screenName.enum";
import createMealPlan from "../screen/Features/craeteMealPlan";
import myMealPlan from "../screen/Features/myMealPlan";
import EditMeals from "../screen/Features/EditMeals";
import ViewmealPlaning from "../screen/Features/ViewmealPlaning";
import CookBookList from "../screen/Features/CookBookList";
import CookBookDetails from "../screen/Features/CookBookDetails";
import GroceryDetailsEdit from "../screen/Features/GroceryDetailsEdit";
import GroceryListForm from "../screen/Features/GroceyListFrom";


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
      Component:myMealPlan,
    },
    {
      name: ScreenNameEnum.createMealPlan,
      Component:createMealPlan,
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

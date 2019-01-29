/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

 import { Navigation } from "react-native-navigation";
 import { FirstScreen, SecondScreen } from "./screens";

 Navigation.registerComponent(`FirstScreen`, () => FirstScreen);
 Navigation.registerComponent(`SecondScreen`, () => SecondScreen);

 Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         id: 'AppStack',
         children: [
           {
             component: {
               name: 'FirstScreen',
               options: {
                 topBar: {
                   title: {
                     text: 'First Screen'
                   }
                 }
               }
             }
           }
         ]
       }
     }
   });
 });

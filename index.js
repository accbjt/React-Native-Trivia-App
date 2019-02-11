/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'Home',
              options: {
                topBar: {
                  background: {
                    color: '#303952',
                  },
                  title: {
                    text: 'g2i Trivia',
                    color: '#fff',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});

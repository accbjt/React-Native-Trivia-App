/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { Navigation } from 'react-native-navigation';
import { QuestionScreen, ScoreScreen } from './screens';
import App from './App';

Navigation.registerComponent(`Home`, () => App);
Navigation.registerComponent(`QuestionScreen`, () => QuestionScreen);
Navigation.registerComponent(`ScoreScreen`, () => ScoreScreen);

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
                  title: {
                    text: 'g2i Trivia',
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

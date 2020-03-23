import {BackHandler} from 'react-native';

class BackButtonHandler {
  counter = 0;
  handleBackButtonStart;
  handleBackButtonStop;

  mount(back, navigation, toast, t) {
    this.addBackButtonListeners(back, navigation, toast, t);
  }

  addBackButtonListeners(back, navigation, toast, t) {
    this.handleBackButtonStart = navigation.addListener('didFocus', () =>
      BackHandler.addEventListener('hardwareBackPress', () =>
        this.onBackButtonPressAndroid(back, navigation, toast, t),
      ),
    );

    this.handleBackButtonStop = navigation.addListener('willBlur', () =>
      BackHandler.removeEventListener('hardwareBackPress', () =>
        this.onBackButtonPressAndroid(back, navigation, toast, t),
      ),
    );
  }

  onBackButtonPressAndroid = (back, navigation, toast, t) => {
    if (back) {
      navigation.goBack();
      return true;
    }
    if (this.counter > 0) {
      BackHandler.exitApp();
    } else {
      setTimeout(() => {
        this.counter = 0;
      }, 3000);
      this.counter++;
      toast(t('pressAgain'));
      return true;
    }
  };

  unmount() {
    this.removeBackButtonListeners();
  }

  removeBackButtonListeners() {
    this.handleBackButtonStart && this.handleBackButtonStart.remove();
    this.handleBackButtonStop && this.handleBackButtonStop.remove();
  }
}

export default new BackButtonHandler();

import {
    AlertIOS
} from 'react-native';

export default function prompt(
    title: ?string,
    message?: ?string,
    callbackOrButtons?: ?((text: string) => void) | Object,
    options?: Object
): void {
  var keyboardType='default'
  if(options.type=='numeric'){
    options.type='plain-text';
    keyboardType='numeric';
  }
    AlertIOS.prompt(title, message, callbackOrButtons, options.type, options.defaultValue,keyboardType);
};

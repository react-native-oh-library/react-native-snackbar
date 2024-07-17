import { Color, TurboModule } from '@rnoh/react-native-openharmony/ts';
import { TM } from '@rnoh/react-native-openharmony/generated/ts';
import promptAction from '@ohos.promptAction'

interface SnackbarOptions {
  text: string;
  duration?: number;
  numberOfLines?: number;
  textColor?: string | number;
  rtl?: boolean;
  marginBottom?: number;
  fontFamily?: string;
  backgroundColor?: string;
  action?: {
    text: string;
    textColor?: string | number;
  };
}

let DEFAULT_NUMBEROFLINES = 2
let DEFAULT_TEXTCOLOR = 'white'
let DEFAULT_MARGINBOTTOM = 0
let DEFAULT_BACKGROUNDCOLOR = 'gray'
let DEFAULT_ACTIONTEXTCOLOR = 'white'

export class RNSnackbarTurboModule extends TurboModule implements TM.SnackbarNativeModule.Spec {

  constructor(ctx) {
    super(ctx);
  }

  /* 
   @function:封装方法，对传入的参数判断是否为空，来确定是否给默认值
   @params options:SnackbarOptions结构的options
   @params key{string}:键名 
   @params fallback:默认值
  */
  getOptionValue(options, key: string, fallback: string | number | boolean) {
    return Object.keys(options).includes(key) ? options[key] : fallback
  }

  show(options: SnackbarOptions) {
    let numberOfLines = this.getOptionValue(options, 'text', DEFAULT_NUMBEROFLINES)
    let textColor = this.getOptionValue(options, 'textColor', DEFAULT_TEXTCOLOR)
    let marginBottom = this.getOptionValue(options, 'marginBottom', DEFAULT_MARGINBOTTOM)
    let backgroundColor = this.getOptionValue(options, 'backgroundColor', DEFAULT_BACKGROUNDCOLOR)
    if (options.action) {
      let actionTextColor = this.getOptionValue(options, 'textColor', DEFAULT_ACTIONTEXTCOLOR)
    }

    promptAction.showToast({
      message: options.text,
      bottom: marginBottom,
    })
  }
}
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

const DEFAULT_NUMBER_OF_LINES = 2
const DEFAULT_TEXT_COLOR = 'white'
const DEFAULT_MARGIN_BOTTOM = 0
const DEFAULT_BACKGROUND_COLOR = 'gray'
const DEFAULT_ACTION_TEXT_COLOR = 'white'

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
    let numberOfLines = this.getOptionValue(options, 'text', DEFAULT_NUMBER_OF_LINES)
    let textColor = this.getOptionValue(options, 'textColor', DEFAULT_TEXT_COLOR)
    let marginBottom = this.getOptionValue(options, 'marginBottom', DEFAULT_MARGIN_BOTTOM)
    let backgroundColor = this.getOptionValue(options, 'backgroundColor', DEFAULT_BACKGROUND_COLOR)
    if (options.action) {
      let actionTextColor = this.getOptionValue(options, 'textColor', DEFAULT_ACTION_TEXT_COLOR)
    }

    promptAction.showToast({
      message: options.text,
      bottom: marginBottom,
    })
  }
}
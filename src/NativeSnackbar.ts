import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

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

export interface Spec extends TurboModule {
    show:(options:SnackbarOptions,onPressCallback?:()=>void)=>void;
}   
 
export default TurboModuleRegistry.get<Spec>('SnackbarNativeModule') as Spec | null;

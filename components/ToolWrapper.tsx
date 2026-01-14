import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import toolReducer from "../src/store";
import { Tool as ToolComponent, type ToolProps } from "./Tool";
import { Features } from "./Features";
import type { WithContext, HowTo as HowToType } from "schema-dts";
import HowTo from "./HowTo";
import AdBlockDetector, { type adBlockerContentType } from "./AdBlockDetector";

export const store = configureStore({
  reducer: {
    tool: toolReducer,
  },
});

type ToolWrapperProps = ToolProps & {
  seoTitle: string;
  to: string;
  adBlockerContent: adBlockerContentType;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ToolWrapper(props: ToolWrapperProps) {
  const { lang, adBlockerContent } = props;
  return (
    <ReduxProvider store={store}>
      <ToolComponent {...props} />
      <AdBlockDetector content={adBlockerContent} lang={lang} />
    </ReduxProvider>
  );
}

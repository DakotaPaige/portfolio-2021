import { __PRIVATE__ } from 'styled-components';
import stringToDom from 'string-to-dom';

export const prerenderStyles = () => {
  if (window.__PRERENDERING) {
    stringToDom(
      __PRIVATE__.StyleSheet.master.toHTML(),
      document.querySelector('head')
    );
  }
};

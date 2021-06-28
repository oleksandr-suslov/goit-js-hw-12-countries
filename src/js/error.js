import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';


export default function errorFound() {
    error({
    text: 'No results were found for this request!',
    delay: '3000',
    maxTextHeight: null,
  });
}


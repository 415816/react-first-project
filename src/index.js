import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderAll } from './render';
import state from './redux/state'

rerenderAll(state);

reportWebVitals();

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import appStore from './appStore';
import App from './App';

const store = createStore(appStore);

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppContainer;

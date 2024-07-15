/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Store from './Store';
import { Provider } from 'react-redux';


const Reduxwrapper = () => {
    return (
        <Provider store={Store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => Reduxwrapper);
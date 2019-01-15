import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import { Header } from './components/common';
import reducers from './components/reducers';
import LibraryList from './components/LibraryList';

const App = () => {

    return (
        <Provider store = { createStore(reducers) }>
            <View style ={{ flex: 1 }}>
                <Header headerText = "Redux App" />
                <LibraryList> </LibraryList>
            </View>
        </Provider>
    );

};

export default App;
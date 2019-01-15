import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectedReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectedReducer
});
import React, { Component } from 'react';
import { ListView } from 'react-native'; 
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    componentWillMount() {
        {this.initialListViewSettings()};
    }

    initialListViewSettings() {
        const ds = new ListView.DataSource ({
            rowHasChanged: (rowOne, rowTwo) => rowOne != rowTwo
        });
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library) {
        return <ListItem library = {library} />
    }

    render() {
        return (
            <ListView  
                dataSource = { this.dataSource }
                renderRow = { this.renderRow.bind(this)}
            />
        );
    }

}

const mapStateToProps = state => {
    console.log(state);
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
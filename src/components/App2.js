// App.js

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from './../components/ListItem';
import { connect } from 'react-redux';
import { addPlace } from './../actions/place';
import { combineReducers } from "redux";
import placeReducer from "../reducers/placeReducer";

// Here, when we click the add button, we get the textbox value and then send it to the action with
// that value. Now that action returned the object with the action type and payload

// and based on the type the reducer will be executed and add that values inside the store.

// Now, if the store’s values are changed, then we need to update the UI based
// on the new values. That is why the mapStateToProps function is created. So,
// when the store’s places array get the new value, render function executed again and update the UI.

// The mapDispatchToProps function helps us to connect our application to the
// required action, so that action then further executed by a reducer and change the application state.

  class App extends Component {

  state = {
    placeName: '',
    places: []
  }

  placeSubmitHandler = () => {
    // if empty
    if(this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
  }

  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value
    });
  }

  placesOutput = () => {
    return (
      <FlatList style = { styles.listContainer }
                data = { this.props.places }
                keyExtractor={(item, index) => index.toString()}
                renderItem = { info => (
                  <ListItem
                    placeName={ info.item.value }
                  />
                )}
      />
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style = { styles.inputContainer }>
          <TextInput
            placeholder = "Seach Places"
            style = { styles.placeInput }
            value = { this.state.placeName }
            onChangeText = { this.placeNameChangeHandler }
          >

          </TextInput>
          <Button title = 'Add'
                  style = { styles.placeButton }
                  onPress = { this.placeSubmitHandler }
          />
        </View>
        <View style = { styles.listContainer }>
          { this.placesOutput() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  }

// ABOVE
// Accessing from here in this code -->
// C:\rnrex_tu\src\store\store.js
//     ...places...
  // const rootReducer = combineReducers({
  //   places: placeReducer
  // });
};

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
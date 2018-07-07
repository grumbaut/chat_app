import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { login } from '../store';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  handleSubmit() {
    login(this.state, this.props.navigation);
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>Enter your name and password:</Text>
        <TextInput
          onChangeText={ value => this.handleChange('name', value) }
          returnKeyType='next'
          autoCorrect={ false }
          onSubmitEditing={ () => this.passwordInput.focus() }
          style={ styles.input }
        />
        <TextInput
          onChangeText={ value => this.handleChange('password', value)}
          secureTextEntry
          returnKeyType='go'
          autoCapitalize='none'
          style={ styles.input }
          ref={ input => this.passwordInput = input }
        />
        <TouchableOpacity
          onPress={ this.handleSubmit }
          style={ styles.button }
        >
          <Text style={ styles.buttonText }>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
    height: '100%',
    width: '100%'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    width: '90%',
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
    marginTop: 10
  },
  button: {
    width: '75%',
    backgroundColor: 'blue',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

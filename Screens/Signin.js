import React from 'react';
import { View, TextInput, AsyncStorage, Text ,TouchableOpacity, KeyboardAvoidingView, Modal, Button } from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from "expo";
import BackButton from '../componets/BackButton'
import { Ionicons } from '@expo/vector-icons';
import style from '../css'



export default class SignIn extends React.Component {
    state = {
        email:'',
        password:'',
        errorEmail: '',
        errorPassword: '',
        errorLogin: '',
        modalVisible: false,
    }

    flag = true;

    _submit = async () => {
        if(this.state.errorEmail === '' && this.state.errorPassword === ''){
            fetch('http://13.209.131.247:5000/users/login',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email : this.state.email,
                password : this.state.password,
              }),
            }).then(res => {
                if(res.ok){
                    console.log("--------success---------", res.ok);
                    flag = true;
                    this._signInAsync()
                }
                else {
                    console.log("--------fail---------", res.ok);
                    flag= false;
                    this.setModalVisible(true);
                }
              })
        }
    }

    _errorMessages = () => {
        if (this.state.email === "") {
            this.setState(() => ({ errorEmail: "Email Address required."}));
            flag = false;
          } else {
            this.setState(() => ({ errorEmail: ''}));
            flag = true;
          }
        if (this.state.password === "") {
            this.setState(() => ({ errorPassword: "Password required."}));
            flag = false;
          } else {
            this.setState(() => ({ errorPassword: ''}));
            flag = true;
          }
        if (this.state.email === "" || this.state.password === "") {
            flag = false;
          }
          return flag;
    }

    _signInAsync = async () => {
        console.log("In sign!! suckSex!!")
        await AsyncStorage.setItem('userToken', 'aasertetdbc');
        this.props.navigation.navigate('DrawerNavigatorSignIn');
    };
    _errorMsg = (check) => {
        const state = this.state
        if(!!state[check]){
            return <Text style={{color: 'red'}}>{state[check]}</Text>
        }
    }

    _changeErr = (key,errName,text) => {
        this.setState(
            {
                [key] : text,
                [errName] : ''
            })
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    bannerError() {
      console.log("An error");
      return;
    }

    render(){
      return(
        <KeyboardAvoidingView style={style.container} behavior="padding" enabled>             
          <View style={style.backbutton}><BackButton navigation={this.props.navigation} /></View>
            <AdMobBanner
              bannerSize="fullBanner"
              adUnitID="ca-app-pub-5860557805372655/6946255641"
              // Test ID, Replace with your-admob-unit-id
              didFailToReceiveAdWithError={this.bannerError}
            />
            <View style={style.inputTag}>
              <Text style={style.inputText} >USER ID (Email Address)</Text>
              <TextInput
                  style={style.emailInput}
                  placeholder=" Email Address"
                  onChangeText={(text) => this._changeErr('email','errorEmail',text)}
              />
              {this._errorMsg("errorEmail")}
              <Text style={style.inputText} >PASSWORD</Text>
              <TextInput
                  style={style.passwordInput}
                  placeholder=" Password"
                  secureTextEntry={true}
                  onChangeText={(text) => this._changeErr('password','errorPassword',text)}
              />
              {this._errorMsg("errorPassword")}
              <TouchableOpacity
                style={style.signinButton}
                onPress={() => {
                    this._errorMessages() &&
                    this._submit();}
                }
                // onPress={this._errorMessages}
                // onPress={this._submit}
                // onPress={this._signInAsync}
              >                
                <Text style={style.submit}>
                  <Ionicons
                  name="md-lock"
                  size={60}
                  color="black"
                  /> SIGN IN
                </Text>
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}
              >
                <View style = {style.modalStyle}>
                  <View style = {style.inModalStyle}>
                    <Text  style={{color: 'black', fontSize : 15, fontWeight: 'bold', padding : 15}}> Check your E-mail or Password </Text>
                    <Button
                      title = ' close '
                      color = "black"
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      <Text> OK </Text>
                    </Button>
                  </View>
                </View>
              </Modal>
            </View>
          <PublisherBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-5860557805372655/1045517114" // Test ID, Replace with your-admob-unit-id
            onDidFailToReceiveAdWithError={this.bannerError}
            onAdMobDispatchAppEvent={this.adMobEvent} />
        </KeyboardAvoidingView>    
      )
    }
}
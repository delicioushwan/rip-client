import React from 'react';
import { View, TextInput, Text ,TouchableOpacity, KeyboardAvoidingView, Modal, Button, ScrollView} from 'react-native';
import BackButton from '../componets/BackButton'
import style from '../css'


export default class SignUp extends React.Component {
    state = {
        email:'',
        password:'',
        nickname:'',
        check:'',
        errorEmail: '',
        errorNickname: '',
        errorPassword: '',
        errorCheck: '',
        modalVisible: false,
    }

    flag = true;

    _submit = () => {
      if(this.state.errorEmail === '' && this.state.errorPassword === ''){
        fetch('http://13.209.131.247:5000/users/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nickname : this.state.nickname,
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
        if (this.state.nickname === "") {
            this.setState(() => ({ errorNickname: "Nickname required."}));
            flag = false;
          } else {
            this.setState(() => ({ errorNickname: ''}));
            flag = true;
          }
        if (this.state.password !== this.state.check) {
            this.setState(() => ({ errorCheck: "Not the same password."}));
            flag = false;
          } else {
            this.setState(() => ({ errorCheck: ''}));
            flag = true;
          }
        if (this.state.email === "" || this.state.password === "" || this.state.nickname === "" ) {
            flag = false;
          }
          return flag;
    }

    _signInAsync = () => {
      this.props.navigation.navigate('Sign In');
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
    render(){
        return(
          <ScrollView>
            <KeyboardAvoidingView style={style.container} behavior="padding" enabled>
                <View style={style.backbutton}><BackButton navigation={this.props.navigation} /></View>
                <View style={style.inputTag}>
                    <Text style={style.inputText} >USER ID (Email Address)</Text>
                    <TextInput
                        style={style.emailInput}
                        placeholder=" Email Address"
                        onChangeText={(text) => this._changeErr('email','errorEmail',text)}
                    />
                    {this._errorMsg ("errorEmail")}

                    <Text style={style.inputText} >PASSWORD</Text>
                    <TextInput
                        style={style.passwordInput}
                        placeholder=" Password"
                        secureTextEntry={true}
                        onChangeText={(text) => this._changeErr('password','errorPassword',text)}
                    />
                    {this._errorMsg("errorPassword")}

                    <Text style={style.checkInput} >CONFIRM PASSWORD</Text>
                    <TextInput
                        style={style.passwordInput}
                        placeholder=" Password"
                        secureTextEntry={true}
                        onChangeText={(text) => this._changeErr('check','errorCheck',text)}
                    />
                    {this._errorMsg("errorCheck")}

                    <Text style={style.inputText} >NICKNAME</Text>
                    <TextInput
                        style={style.passwordInput}
                        placeholder=" Nickname"
                        onChangeText={(text) => this._changeErr('nickname','errorNickname',text)}
                    />
                    {this._errorMsg("errorNickname")}

                    <TouchableOpacity
                        style={style.signinButton}
                        onPress = {() => {
                          this._errorMessages() &&
                          this._submit()
                        }}
                        // onPress={this._errorMessages}
                        // onPress={this._submit}

                    >                
                    <Text style={style.submit}>SIGN UP</Text>
                    </TouchableOpacity>
                    <Modal
                        
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                          Alert.alert('Modal has been closed.');
                        }}>
                        <View style = {style.modalStyle}>
                          <View style = {style.inModalStyle}>
                            <Text  style={{color: 'white', fontSize : 15, fontWeight: 'bold', padding : 15}}> Check your E-mail or Password </Text>
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
                <View style={{flex:2}}>
                </View>
            </KeyboardAvoidingView>    
            </ScrollView>
        )
    
    }
}


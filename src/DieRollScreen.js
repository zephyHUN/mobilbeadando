import React, { Component } from "react";
import { Button, View, StyleSheet, TextInput  } from "react-native";

let dieNumber=0;
let drop=0;

export default class DieRollScreen extends Component {
    static navigationOptions = {
      title: 'DieRoll',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          numeric
          placeholder="number of dice"
          keyboardType={'numeric'}
          onChangeText={text => dieNumber=text}
        />
        <p></p>
        <TextInput
          style={styles.textInputStyle}
          numeric
          placeholder="dropped dice"
          keyboardType={'numeric'}
          onChangeText={text => drop=text}
        />
        <p>size of the die</p>
        <Button
            title="d4"
            onPress={() => alert(dieRollFunction(4))}
            color="#2b1d0e"
        />
        <p></p>
        <Button
            title="d6"
            onPress={() => alert(dieRollFunction(6))}
            color="#2b1d0e"
        />
         <p></p>
        <Button
            title="d10"
            onPress={() => alert(dieRollFunction(10))}
            color="#2b1d0e"
        />
         <p></p>
        <Button
            title="d12"
            onPress={() => alert(dieRollFunction(12))}
            color="#2b1d0e"
        />
         <p></p>
        <Button
            title="d20"
            onPress={() => alert(dieRollFunction(20))}
            color="#2b1d0e"
            containerViewStyle={{width: '100%', marginLeft: 0}}
        />
         <p></p>
       <Button
            title="d100"
            onPress={() => alert(dieRollFunction(100))}
            color="#2b1d0e"
        />
      </View>
      );
    }
  }

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FDF1DC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInputStyle: {
      width: 250,
      backgroundColor: 'white',
      padding: 16,
      
    },
    buttonStyle:{
      margin: '10px'
    }
  });

  function dieRollFunction(dieSize) {
    let rolls = []
    let text=''
    for(let i=0; i<dieNumber; i++)
    {
      rolls.push(Math.floor(Math.random() * dieSize)+1)
      
    }
    rolls.sort((a, b) => a - b);
    for(let i=drop; i<dieNumber; i++)
    {
      text+=rolls[i]  
      if(i<dieNumber-1)
      {
        text+='+'
      }
    }
    //rolls.slice(0,drop);
    let result=0;
    for(let i=drop; i<dieNumber; i++)
    {
      result+=parseInt(rolls[i]);
    }
    return "Result of the rolls:"+text+'='+result;
  }
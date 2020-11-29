/*
Pathfinder 2. kiadásába az akciókhoz d20-at(20 oldaló kocka) kell dobni és hozzáadni a módosítót.
Az akciónak négy féle eredmnye lehet: Kritikus bukás,Bukás,Siker,Kritikus Siker
Ha a dobás eredménye nagyobb vagy egyenlő a célszámmal(DC) az akció sikeres
Ha a dobás eredménye kisebb mint a célszám az akció elbukott 
Ha a dobás eredménye legalább 10-el nagyobb mint a célszám
( 20-as célszámnál 30 vagy nagyobb dobáseredmény) akkor az akció kritikusan sikeres lett
Ha a dobás eredménye legalább 10-el kiebb mint a célszám 
( 20-as célszámnál 10 vagy kisebb dobáseredmény) akkor az akció kritikusan elbukott
Ha a kockadobás eredménye módosítók hozzáadása elött 1-es, tehát a kockával 1-et dobtunk,
akkor az eredmény romlik eggyel
Kritikus siker->Siker, Siker->Bukás, Bukás->Kritikus bukás
Ha a kockadobás eredménye módosítók hozzáadása elött 20-as, tehát a kockával 20-at dobtunk,
akkor az eredmény javul eggyel
Kritikus bukás->Bukás, Bukás->Siker, Siker->Kritikus siker
*/
import React, { Component } from "react";
import { Button, View, StyleSheet, TextInput  } from "react-native";

let modifier=0;
let targetNumber=0;

export default class PathFinderScreen extends Component {
    static navigationOptions = {
      title: 'PathFinder',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          numeric
          placeholder="modifiers for the roll"
          keyboardType={'numeric'}
          onChangeText={text => modifier=text}
        />
        <TextInput
          style={styles.textInputStyle}
          numeric
          placeholder="DC"
          keyboardType={'numeric'}
          onChangeText={text => targetNumber=text}
        />
       <Button
            title="Calculate"
            onPress={() => alert(calculate())}
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

  function calculate() 
  {
    let result;
    let rollResult=Math.floor(Math.random() * 20)+1
    if((parseInt(rollResult)+parseInt(modifier))<parseInt(targetNumber))
    {
        if(parseInt(targetNumber)-(parseInt(rollResult)+parseInt(modifier))>=10)
        {
            result=0;
        }
        else
        {
            result=1;
        }
    }
    if((parseInt(rollResult)+parseInt(modifier))>=parseInt(targetNumber))
    {
        if((parseInt(rollResult)+parseInt(modifier))-parseInt(targetNumber)>=10)
        {
            result=3;
        }
        else
        {
            result=2;
        }
    }
    if(rollResult==20)
    {
        if(result<3)
        {
            result++;
        }
    }
    if(rollResult==1)
    {
        if(result>0)
        {
            result--;
        }
    }
    let resultArray = new Array('Critical failure', 'Failure','Success','Critical success')
    return "Targetnumber:" + targetNumber+" result of the roll: "+rollResult+ "+" + modifier + "=" + (parseInt(rollResult)+parseInt(modifier)) + " " + resultArray[result]
  }
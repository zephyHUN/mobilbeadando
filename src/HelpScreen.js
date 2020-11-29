import React, { Component } from "react";
import { View, StyleSheet, Text} from "react-native";



export default class DieRollScreen extends Component {
    static navigationOptions = {
      title: 'Help',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
      <View style={styles.container}>
        <Text>
            <h1>Die Roller</h1>
            <p>This function rolls cirtual dice for you</p>
            <p>to roll a die press a dx button where x equals the sides of the die. 
                (for ex.: if you have to roll a 10 sided die press d10, if you have to roll a 4 sided die press d4) 
            </p>
            <p>if you have to roll multiple dice for example four 6 sided die(or 4d6) type 4 into the number of dice
                input.
            </p>
            <p>
                if you have to drop some of the lowest dice type the number of dropped dice into the dropped dice input.
                (for ex.: if you have to roll four 6 sided die and drop the lowest(4d6d1) type 1 into the dropped dice input)
            </p>
            <h1>
                Pathfinder(2e) success calculator
            </h1>
            <p>
              This function tells you the result of your action in pathfinder 2nd edition.
            </p>
            <p>How to use:</p>
            <ul>
              <li>
                If you have any modifiers(for ex.: from proficiency) type it into the "modifiers for the roll" input
              </li>
              <li>
                Type the Difficulty Class(or DC or Target number) of the roll into the "DC" input. 
              </li>
              <li>
                Press the Calculate button
              </li>
            </ul>
            <p>After this the function rolls you a d20 and tells you the result</p>
            
            
        </Text>
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
  });

  
import React, { Component } from "react";
import { Button, View, StyleSheet  } from "react-native";

export default class HomeScreen extends Component {
    static navigationOptions = {
      title: '',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
      <View style={styles.container}>
        <Button
            title="Die Roller"
            onPress={() => navigate('Die Roll')}
            color="#2b1d0e"
        />
        <p></p>
        <Button
            title="Pathfinder(2e) success calculator"
            onPress={() => navigate('Pathfinder')}
            color="#2b1d0e"
        />
       <p></p>
       <Button
            title="Help"
            onPress={() => navigate('Help')}
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
    }
    
  });



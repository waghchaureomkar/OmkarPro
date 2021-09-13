import React from "react";
import { View,Text,StyleSheet } from 'react-native'

const ProgressBar = () => {
  

const styles = StyleSheet.create({
    containerStyles : {
        height: 8,
        width: '100%',
        backgroundColor: "#c3c6d5",
        borderRadius: 50,
        margin: 50
      },
    
      fillerStyles : {
        height: '100%',
        width: '67%',
        backgroundColor: '#ff6aa2',
        textAlign: 'right'
      }

});

return (
    <View style={styles.containerStyles}>
      <View style={styles.fillerStyles}>
      </View>
    </View>
  );
};

export default ProgressBar;
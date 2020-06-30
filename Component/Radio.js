import React from "react";
import {StyleSheet, Text, View} from "react-native"
import PropTypes from "prop-types"


//export default class Radio extends React.Component{
export default function Radio({programs, time}){
   console.log(programs);
   console.log(time);
   return (<View>
       <Text>test</Text>
   </View> 
   );
}

Radio.PropTypes = {
    programs: PropTypes.array.isRequired,
    time: PropTypes.array.isRequired
};
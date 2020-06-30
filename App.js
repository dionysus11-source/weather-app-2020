import React from 'react';
import Loading from "./Loading";
import Radio from "./Component/Radio";
import axios from "axios";

export default class App extends React.Component {
  state={
    isLoading : true
  }
  getRadio = async(location) => {
    const{
      data:{
        programs,
        time
      }
    } = await axios.get(`http://dionysus11.asuscomm.com:2020/getRadioProgram/${location}`);
    this.setState({isLoading:false, programs:programs, time: time});
    //test
  };
  componentDidMount(){
    location = "경기도"
    this.getRadio(location);
  }
  render(){
    const {isLoading, programs, time} = this.state;
    return  isLoading? <Loading />:<Radio programs={programs} time={time} />;
  }
  
  //render(){
    //return (<Loading />);
  //  return (<text>aaa</text>);
}




import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useRef, useState }  from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';
// 
const Watch = () => {
    const samplevideo = require('../assets/Video/past_live.mp4')
  return (
  <SafeAreaView style={styles.container}>
<ScrollView>
  <View >
    <Text style = {styles.text}> Mặt trời lại mọc</Text>
    <YoutubePlayer
    height={220}
    play={false}
    videoId={'q9nOmNSqVWg'}
    />
    </View> 
    <View>
      <Text style = {styles.text}> Past Live </Text> 
    <YoutubePlayer
    height={220}
    play={false}
    videoId={'sJEbO_CsVo8'}
    />    
    
</View>
<View>
  <Text style = {styles.text}>  At My Worst </Text> 
<YoutubePlayer
    height={220}
    play={false}
    videoId={'8CEJoCr_9UI'}
    /> 
</View>
<View>
  <Text style = {styles.text}> The Night </Text> 
<YoutubePlayer
    height={220}
    play={false}
    videoId={'-njb__c9Y2M'}
    /> 
   </View> 
   <View>
  <Text style = {styles.text}>  Từ Em Mà Ra </Text> 
<YoutubePlayer
    height={220}
    play={false}
    videoId={'gIfpaRjXJsE'}
    /> 
</View>
<View>
  <Text style = {styles.text}>  Gió Vẫn Hát </Text> 
<YoutubePlayer
    height={220}
    play={false}
    videoId={'1d2HfH8EBsk'}
    /> 
</View>
<View>
  <Text style = {styles.text}>  Em Đồng Ý </Text> 
<YoutubePlayer
    height={220}
    play={false}
    videoId={'IOe0tNoUGv8'}
    /> 
</View>
<View>
  <Text style = {styles.text}>  Nơi Này Có Anh </Text> 
<YoutubePlayer
    height={220}
    play={false}
    videoId={'yrAlRngYndg'}
    /> 
</View>
   </ScrollView>
    </SafeAreaView>
  )
}

export default Watch;

const styles = StyleSheet.create({
    container:{
      flex:1,
      borderWidth:1,
      marginBottom:120,
      backgroundColor:"#93BFCF"
    },
    text:{
      marginTop:30,
      fontWeight:"bold",
      fontSize:22,
      color:"#A7727D"
    },
})
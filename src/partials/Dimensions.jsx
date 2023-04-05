<TouchableHighlight
style = {{
  borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
  width: Dimensions.get('window').width * 0.5,
  height: Dimensions.get('window').width * 0.5,
  backgroundColor:'#f00',
  justifyContent: 'center',
  alignItems: 'center'
}}
underlayColor = '#ccc'
onPress = { () => alert('Yaay!') }
>
<Text> Mom, look, I am a circle! </Text>
</TouchableHighlight>
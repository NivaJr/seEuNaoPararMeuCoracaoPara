import { View, StyleSheet, ImageBackground, Image } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1}}>
      <ImageBackground source={require("./item/image.png")} style={{ height: '100%' }}>
        <View style={style.imageBot}>
          <Image source={require("./item/esquerda.png")} style={style.imageBotLeft}></Image>
          <Image source={require("./item/direita.png")} style={style.imageBotRight}></Image>
        </View>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  imageBot: {
    flexDirection:'row',
    height:'auto',
    width:'100%',
    position:'absolute',
    bottom:10
  },
  imageBotLeft: {
    height:70,
    width:55,
    alignSelf:'flex-end',
    margin: 5
  },
  imageBotRight: {
    height:30,
    width:125,
    alignSelf:'flex-end',
    position:'absolute',
    right:5,
    bottom:5
  },
});
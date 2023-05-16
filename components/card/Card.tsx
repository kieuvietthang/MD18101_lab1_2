import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { CardProps } from './CardProp'


const Card = (props: CardProps) => {
  console.log(props.imgUrl);
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <Image source={props.imgUrl} style={styles.image}></Image>
    </View>
  )
}


export default Card

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    height: 250,
    resizeMode: 'cover',
  }
})
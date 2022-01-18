import React from 'react'
import { View, Text } from 'react-native'

import ButtonStyles from './Button.scss'

type ButtonProps = {
  type: string;
  value: string
}

export default function Button({ type,  value }: ButtonProps){
  var selectedTheme = 1
  var theme = type + "--" + selectedTheme
  return(
    <View style={ButtonStyles[theme]}>
      <Text style={ButtonStyles[theme + "--text"]}>{value}</Text>
    </View>
  )
}

export function InputButton({ value }){
  return(
    <Button type="inputButton" value={value} />
  )
}

export function ClearingButton({ value }: { value: string}){
  return(
    <Button type='clearingButton' value={value} />
  )
}

export function EqualsButton(){
  return(
    <Button type='equalsButton' value="=" />
  )
}
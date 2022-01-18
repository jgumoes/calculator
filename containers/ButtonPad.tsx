import React from 'react'
import { View } from 'react-native'
import { ClearingButton, EqualsButton, InputButton } from '../components/Button'

import ButtonPadStyles from './ButtonPad.scss'

export default function ButtonPad(){
  var theme = "1"
  var style = `buttonPad--${theme}`
  return(
    <View style={ButtonPadStyles[style]}>
      <Row>
        <InputButton value={7} />
        <InputButton value={8} />
        <InputButton value={9} />
        <ClearingButton value="DEL" />
      </Row>
      <Row>
        <InputButton value={4} />
        <InputButton value={5} />
        <InputButton value={6} />
        <InputButton value={"+"} />
      </Row>
      <Row>
        <InputButton value={1} />
        <InputButton value={2} />
        <InputButton value={3} />
        <InputButton value={"-"} />
      </Row>
      <Row>
        <InputButton value={"."} />
        <InputButton value={0} />
        <InputButton value={"/"} />
        <InputButton value={"x"} />
      </Row>
      <Row>
        <ClearingButton value={"RESET"} />
        <EqualsButton />
      </Row>
    </View>
    
  )
}

function Row({children}) {
  return(
    <View style={ButtonPadStyles.Row}>
      {children}
    </View>
  )
}

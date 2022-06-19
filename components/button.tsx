import { DeviceLayout } from 'app/utils'
import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
} from 'react-native'

type Props = {
  title: string
  type: string
  size: string
  textStyle: string
  style?: ViewStyle
}

const Button = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity = {0.7}
      style = {[
        styles.default,
        props.style,
        props.size === 'small' ? styles.smallSize : undefined,
        props.type === 'orangeButton' ? styles.accent : undefined,
      ]}
    >
      <Text
        style = {[
          styles.blueButtonText,
          props.textStyle === 'accent' ? styles.orangeButtonText : undefined,
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({

  default: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2AA6FF',
    width: DeviceLayout.getSize(374),
    height: DeviceLayout.getSize(60),
    borderRadius: 6,
  },
  accent: {
    borderColor: '#FFA858',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  blueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'roboto-bold',
  },
  orangeButtonText: {
    color: '#FFA858',
    fontFamily: 'roboto-bold',
  },
  smallSize: {
    width: DeviceLayout.getSize(180),
  },
  ternedOff: {
    opacity: 0.2,
  },
})

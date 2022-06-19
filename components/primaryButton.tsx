import { DeviceLayout } from 'app/utils'
import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'


const PrimaryButtons = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.default,
        props.isDisabled ? styles.ternedOff : undefined,
        props.size === 'small' ? styles.smallSize : undefined,
      ]}
      activeOpacity={0.7}
      disabled={props.isDisabled} // true
    >
      <View>
        <Text style={styles.buttonText}>
          {props.title} 
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PrimaryButtons

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2AA6FF',
    width: DeviceLayout.getSize(374),
    height: DeviceLayout.getSize(60),
    borderRadius: 6,
  },
  smallSize: {
    width: DeviceLayout.getSize(180),
  },
  ternedOff: {
    opacity: 0.2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'roboto-bold',
  },
})
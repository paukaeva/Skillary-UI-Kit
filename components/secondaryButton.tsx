
import { DeviceLayout } from 'app/utils'
import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'

const SecondaryButtons = (props) => {
  return (
    <TouchableOpacity
      style={styles.default}
      activeOpacity={0.7}
    >
      <View>
        <Text style={styles.buttonText}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default SecondaryButtons

const styles = StyleSheet.create({
  default: {
    width: DeviceLayout.getSize(374),
    justifyContent: 'center',
    alignItems: 'center',
    height: DeviceLayout.getSize(60),
    margin: 20,
    borderRadius: 6,
    borderColor: '#FFA858',
    borderWidth: 1,
  },
  smallSize: {
    width: DeviceLayout.getSize(180),
  },
  buttonText: {
    color: '#FFA858',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'roboto-bold',
  },
})
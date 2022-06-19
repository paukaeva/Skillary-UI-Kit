import { DeviceLayout } from 'app/utils'
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

const Stepper = (props) => {
  return (
    <View
      style={styles.container}
    >
      <View style={[ styles.circle, styles.accentCircle ]}>
        <Text style={[ styles.text, styles.accentText ]}>01</Text>
      </View>
      <View
        style={[
          styles.stick,
          props.step === 2 ? styles.accentStick : undefined,
        ]}
      />
      <View
        style={[
          styles.circle,
          props.step === 2 ? styles.accentCircle : undefined,
        ]}
      >
        <Text
          style={[
            styles.text,
            props.step === 2 ? styles.accentText : undefined,
          ]}
        >
        02</Text>
      </View>
    </View>
  )
}

export default Stepper

const styles = StyleSheet.create({
  container: {
    width: DeviceLayout.getSize(311),
    height: DeviceLayout.getSize(36),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EBF7FF',
  },
  circle: {
    backgroundColor: '#FFFFFF',
    width: DeviceLayout.getSize(36),
    height: DeviceLayout.getSize(36),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accentCircle: {
    backgroundColor: '#FFA858',
  },
  stick: {
    backgroundColor: '#FFFFFF',
    width: DeviceLayout.getSize(243),
    height: DeviceLayout.getSize(4),
  },
  accentStick: {
    backgroundColor: '#FFA858',
  },
  text: {
    color: '#2AA6FF',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
  },
  accentText: {
    color: '#FFFFFF',
  },
})



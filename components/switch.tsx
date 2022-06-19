import { DeviceLayout } from 'app/utils'
import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'


type Props = {
  value?: string
  variants: Array<Variant>
  onChangeValue: (variant: Variant) => void
}

type Variant = {
  title: string
  value: string
}

const Switch = (props: Props) => {
  const [ firstVariant, secondVariant ] = props.variants

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.default,
          props.value === firstVariant.value ? styles.selected : undefined,
        ]}
        onPress={() => props.onChangeValue(firstVariant)}
      >
        <Text
          style={[
            styles.defaultText,
            props.value === firstVariant.value ? styles.selectedText : undefined,
          ]}
        >
          {firstVariant.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.default,
          props.value === secondVariant.value ? styles.selected : undefined,
        ]}
        onPress={() => props.onChangeValue(secondVariant)}
      >
        <Text
          style={[
            styles.defaultText,
            props.value === secondVariant.value ? styles.selectedText : undefined,
          ]}
        >
          {secondVariant.title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Switch

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: DeviceLayout.getSize(374),
  },
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: DeviceLayout.getSize(177),
    height: DeviceLayout.getSize(60),
    borderRadius: 6,
  },
  defaultText: {
    color: '#2AA6FF',
    maxWidth: DeviceLayout.getSize(110),
    textAlign: 'center',
    fontFamily: 'roboto-medium',
    fontSize: DeviceLayout.getFontSize(16),
    lineHeight : DeviceLayout.getFontSize(24),
  },
  selected: {
    backgroundColor: '#FFA858',
  },
  selectedText: {
    color: '#FFFFFF',
  }
})
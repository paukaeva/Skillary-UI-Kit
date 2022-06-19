import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native'

const Input = (props) => {
  const [ isFocused, setIsFocused ] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={[
          styles.inputContainer,
          isFocused ? styles.inputContainerOnFocus : undefined,
        ]}
        placeholder = {props.placeholder}
        onFocus={() => { setIsFocused(true) }}
        onBlur={() => { setIsFocused(false) }}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    height: 80,
    width: '100%',
    marginTop: 32,
  },
  inputContainer: {
    borderRadius: 6,
    paddingLeft: 16,
    marginTop: 8,
    height: 50,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: '#FFFFFF',
  },
  inputContainerOnFocus: {
    borderWidth: 1,
    borderColor: "#2AA6FF",
  },
  label: {
    color: '#8F8F8F',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 22,
  },
  placeholder: {
    color: '#BEBEBE',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
})
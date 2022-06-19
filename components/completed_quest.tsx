import { DeviceLayout } from 'app/utils'
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import StarIcon from './icons/star'

const STARS = [ 1, 2, 3, 4, 5 ]

type Props = {
  title: string
  minutes: number
  points: number
}

const CompletedQuest = (props:Props) => {
  const [ rating, setRating ] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={[
        styles.flexContainer,
        { marginBottom: DeviceLayout.getSize(12) },
      ]}>
        {STARS.map((value) => {
          return (
            <TouchableOpacity key={value} onPress={() => setRating(value)}>
              <StarIcon isFilled={rating >= value} />
            </TouchableOpacity>
          )
        })}
      </View>
      <View style={styles.flexContainer}>
        <Text style={styles.leftSideText}>Пройдено за:</Text>
        <Text style={styles.rightSideText}>{props.minutes} минут</Text>
      </View>
      <View style={styles.flexContainer}>
        <Text style={styles.leftSideText}>Награда:</Text>
        <Text style={styles.rightSideText}>{props.points} баллов</Text>
      </View>
    </View>
  )
}

export default CompletedQuest

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEBD9',
    width: DeviceLayout.getSize(333),
    height: DeviceLayout.getSize(235),
    paddingTop: DeviceLayout.getSize(20),
    paddingLeft: DeviceLayout.getSize(20),
    paddingRight: DeviceLayout.getSize(20),
    borderRadius: DeviceLayout.getSize(6),
  },
  title: {
    fontFamily: 'roboto-medium',
    fontSize: DeviceLayout.getFontSize(16),
    lineHeight: DeviceLayout.getFontSize(18),
    color: '#1B1B1B',
    textAlign: 'center',
    marginBottom: DeviceLayout.getSize(24),
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: DeviceLayout.getSize(12),
  },
  leftSideText: {
    fontFamily: 'roboto-light',
    fontSize: DeviceLayout.getFontSize(16),
    lineHeight: DeviceLayout.getFontSize(24),
    color: '#333333',
  },
  rightSideText: {
    fontFamily: 'roboto-regular',
    fontSize: DeviceLayout.getFontSize(16),
    lineHeight: DeviceLayout.getFontSize(24),
    color: '#000000',
  },
  star: {
    backgroundColor: '#FFFFFF',
    width: DeviceLayout.getSize(40),
    height: DeviceLayout.getSize(40),
  },
  orange: {
    backgroundColor: '#FF881A',
  },
})

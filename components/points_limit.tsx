import { DeviceLayout } from 'app/utils'
import React, from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import BellIcon from './icons/bell'

type Props = {
  score: number
}

const PointsLimit = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Text style={styles.title}>Лимит баллов в день</Text>
        <TouchableOpacity activeOpacity = {0.7}>
          <BellIcon />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>Заработано {props.score} из 100 баллов сегодня</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressContainerText}>100</Text>
        <View
          style={[
            styles.progressValue,
            { width: DeviceLayout.getSize(374 / 100 * props.score) },
          ]}
        >
          <Text style={styles.progressValueText}>{props.score}</Text>
        </View>
      </View>
    </View>
  )
}

export default PointsLimit

const styles = StyleSheet.create({
  container: {
    width: DeviceLayout.getSize(414),
    height: DeviceLayout.getSize(175),
    backgroundColor: '#39A0FF',
    paddingHorizontal: DeviceLayout.getSize(20),
    paddingTop: DeviceLayout.getSize(25),
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'roboto-medium',
    fontSize: DeviceLayout.getFontSize(24),
    lineHeight: DeviceLayout.getFontSize(30),
    color: '#FFFFFF',
  },
  description: {
    fontFamily: 'roboto-regular',
    fontSize: DeviceLayout.getFontSize(14),
    lineHeight: DeviceLayout.getFontSize(22),
    color: '#FFFFFF',
    marginBottom: DeviceLayout.getSize(16),
  },
  progressContainer: {
    backgroundColor: '#FFFFFF',
    width: DeviceLayout.getSize(374),
    height: DeviceLayout.getSize(30),
    borderRadius: DeviceLayout.getSize(16),
    justifyContent: 'center',
  },
  progressContainerText: {
    fontFamily: 'roboto-regular',
    fontSize: DeviceLayout.getFontSize(14),
    lineHeight: DeviceLayout.getFontSize(22),
    color: '#000000',
    position: 'absolute',
    right: DeviceLayout.getSize(16),
  },
  progressValue: {
    backgroundColor: '#FFA858',
    height: '100%',
    borderRadius: DeviceLayout.getSize(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressValueText: {
    fontFamily: 'roboto-regular',
    fontSize: DeviceLayout.getFontSize(14),
    lineHeight: DeviceLayout.getFontSize(22),
    color: '#FFFFFF',
  },
})

import React from 'react'
import { DeviceLayout } from 'app/utils'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native'
import { COLORS, TEXT_STYLES } from 'app/config/constants'

const MOCKUP_DATA = [
  { title: 'Звездный спецназ', reason: 'Нет времени' },
  { title: '«Школа шпионов Kingsman»', reason: 'Не интересно' },
  { title: 'Гонка героев', reason: 'Нет времени' },
  { title: 'Звездный спецназ', reason: 'Нет времени' },
  { title: '«Школа шпионов Kingsman»', reason: 'Не интересно' },
  { title: 'Гонка героев', reason: 'Нет времени' },
]

const CanceledQuests = () => {
  return (
    <FlatList
      data={MOCKUP_DATA}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text style={styles.redTitle}>Квест отменен</Text>
          <Text style={styles.blackTitle}>{item.title}</Text>
          <View style={styles.flexContainer}>
            <Text style={styles.leftSideText}>Причина отмены:</Text>
            <Text style={styles.rightSideText}>{item.reason}</Text>
          </View>
          <View style={styles.flexContainer}>
            <Text style={styles.leftSideText}>Награда:</Text>
            <Text style={styles.rightSideText}>Не получена</Text>
          </View>
        </View>
      )}
    />

  )
}

export default CanceledQuests

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND_BLUE,
    width: DeviceLayout.getSize(374),
    height: DeviceLayout.getSize(195),
    paddingHorizontal: DeviceLayout.getSize(30),
    paddingTop: DeviceLayout.getSize(23),
    borderRadius: DeviceLayout.getSize(6),
    marginVertical: DeviceLayout.getSize(17),
  },
  redTitle: {
    ...TEXT_STYLES.H3_LIGHT,
    lineHeight: DeviceLayout.getSize(18),
    color: COLORS.SUNSET_ORANGE,
    marginBottom: DeviceLayout.getSize(11),
    textAlign: 'center',
  },
  blackTitle: {
    ...TEXT_STYLES.H3_MEDIUM,
    lineHeight: DeviceLayout.getSize(18),
    marginBottom: DeviceLayout.getSize(30),
    textAlign: 'center',
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: DeviceLayout.getSize(12),
  },
  leftSideText: {
    ...TEXT_STYLES.H3_LIGHT,
    lineHeight: DeviceLayout.getSize(18),
    color: COLORS.NIGHT_RIDER,
  },
  rightSideText: {
    ...TEXT_STYLES.H3_MEDIUM,
    color: COLORS.DODGER_BLUE,
  },
})


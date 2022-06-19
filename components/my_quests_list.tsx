import { DeviceLayout } from 'app/utils'
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native'
import { COLORS, TEXT_STYLES, SKILL_TYPES } from 'app/config/constants'
import { getColorByType } from './quest_card'

const MOCKUP_DATA = [
  { type: SKILL_TYPES.LEADERSHIP, time: 75, points: 120, title: 'Гонка героев' },
  { type: SKILL_TYPES.WORLD, time: 45, points: 90, title: 'Школа шпионов «Kingsman»' },
  { type: SKILL_TYPES.PHYSICAL, time: 50, points: 156, title: 'Звёздный спецназ' },
  { type: SKILL_TYPES.SOCIAL, time: 90, points: 65, title: 'Школа шпионов «Kingsman»' },
  { type: SKILL_TYPES.CREATION, time: 60, points: 100, title: 'Звёздный спецназ' },
  { type: SKILL_TYPES.LEADERSHIP, time: 75, points: 120, title: 'Гонка героев' },
  { type: SKILL_TYPES.WORLD, time: 45, points: 90, title: 'Школа шпионов «Kingsman»' },
  { type: SKILL_TYPES.PHYSICAL, time: 50, points: 156, title: 'Звёздный спецназ' },
  { type: SKILL_TYPES.SOCIAL, time: 90, points: 65, title: 'Школа шпионов «Kingsman»' },
  { type: SKILL_TYPES.CREATION, time: 60, points: 100, title: 'Звёздный спецназ' },
]

const MyQuestsList = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Мои квесты</Text>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={MOCKUP_DATA}
        ItemSeparatorComponent={() => (<View style={styles.separator} />)}
        renderItem={({ item }) => (
          <View style={[
            styles.container,
            { backgroundColor: getColorByType(item.type) },
          ]}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.flexContainer}>
              <View style={styles.circleContainer}>
                <Text>{item.time} min</Text>
              </View>
              <View style={styles.circleContainer}>
                <Text>{item.points}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default MyQuestsList

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0,
  },
  separator: {
    width: DeviceLayout.getSize(12),
  },
  titleText: {
    ...TEXT_STYLES.H2_MEDIUM,
    marginBottom: DeviceLayout.getSize(20),
    textAlign: 'left',
    paddingLeft: DeviceLayout.getSize(20),
  },
  container: {
    height: DeviceLayout.getSize(119),
    width: DeviceLayout.getSize(160),
    borderRadius: DeviceLayout.getSize(6),
    paddingVertical: DeviceLayout.getSize(12),
    paddingHorizontal: DeviceLayout.getSize(18),
    justifyContent: 'space-between',
  },
  title: {
    ...TEXT_STYLES.H3_MEDIUM,
    lineHeight: DeviceLayout.getSize(18),
    textAlign: 'center',
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleContainer: {
    height: DeviceLayout.getSize(56),
    width: DeviceLayout.getSize(56),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.BLACK_NERO,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    maxHeight: DeviceLayout.getSize(119),
    paddingLeft: DeviceLayout.getSize(20),
  },
})

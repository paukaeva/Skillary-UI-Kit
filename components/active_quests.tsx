import { TEXT_STYLES, SKILL_TYPES } from 'app/config/constants'
import { DeviceLayout } from 'app/utils'
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { getColorByType } from './quest_card'

const MOCKUP_DATA = [
  { type: SKILL_TYPES.LEADERSHIP, time: 75, points: 120, title: 'Гонка героев' },
  { type: SKILL_TYPES.WORLD, time: 45, points: 90, title: 'Школа шпионов «Kingsman»'  },
  { type: SKILL_TYPES.PHYSICAL, time: 50, points: 156, title: 'Звёздный спецназ'  },
  { type: SKILL_TYPES.SOCIAL, time: 90, points: 65, title: 'Гонка героев'  },
  { type: SKILL_TYPES.CREATION, time: 60, points: 100, title: 'Гонка героев'  },
]

const ActiveQuests = (props) => {
  return (
    MOCKUP_DATA.map((element, index) => {
      const color = getColorByType(element.type)
      const time = element.time
      const points = element.points
      const title = element.title
      return (
        <View
          key={`${title}_${index}`}
          style={[
            styles.mainContainer,
            { backgroundColor: color },
          ]}
        >
          <View style={styles.flexContainer}>
            <Text style={styles.leftSideText}>Осталось времени:</Text>
            <Text style={styles.rightSideText}>{element.time} минут</Text>
          </View>
          <View style={styles.flexContainer}>
            <Text style={styles.leftSideText}>Награда:</Text>
            <Text style={styles.rightSideText}>{element.points} баллов</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{element.title}</Text>
          </View>
        </View>
      )
    })
  )
}

export default ActiveQuests

const styles = StyleSheet.create({
  titleContainer: {
    height: DeviceLayout.getSize(35),
    borderColor: '#2AA6FF',
    borderWidth: DeviceLayout.getSize(1),
    borderRadius: DeviceLayout.getSize(6),
    backgroundColor: '#FFFFFF',
    paddingLeft: DeviceLayout.getSize(16),
    paddingRight: DeviceLayout.getSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: DeviceLayout.getSize(-17),
  },
  title: {
    ...TEXT_STYLES.H3_MEDIUM,
    lineHeight: DeviceLayout.getSize(18),
  },
  mainContainer: {
    width: DeviceLayout.getSize(374),
    height: DeviceLayout.getSize(116),
    borderRadius: DeviceLayout.getSize(6),
    paddingLeft: DeviceLayout.getSize(30),
    paddingTop: DeviceLayout.getSize(30),
    paddingRight: DeviceLayout.getSize(30),
    paddingBottom: DeviceLayout.getSize(20),
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: DeviceLayout.getSize(12),
  },
  leftSideText: {
    ...TEXT_STYLES.H3_LIGHT,
    color: '#333333',
  },
  rightSideText: {
    ...TEXT_STYLES.H3_MEDIUM,
    color: '#FFFFFF',
  },
})

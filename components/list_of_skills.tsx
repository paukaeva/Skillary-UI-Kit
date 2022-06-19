import React from 'react'
import { COLORS, TEXT_STYLES, SKILL_TYPES } from 'app/config/constants'
import { DeviceLayout } from 'app/utils'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
}
  from 'react-native'
import SmallMedalIcon from './icons/small_medal'
import BigMedalIcon from './icons/big_medal'
import { getColorByType } from './quest_card'

const MOCKUP_DATA = [
  { title: 'Физическое развитие', points: 300, type: SKILL_TYPES.PHYSICAL },
  { title: 'Интеллект', points: 450, type: SKILL_TYPES.INTELLIGENCE },
  { title: 'Окружающий мир', points: 500, type: SKILL_TYPES.WORLD },
  { title: 'Творчество', points: 650, type: SKILL_TYPES.CREATION },
  { title: 'Лидерство', points: 250, type: SKILL_TYPES.LEADERSHIP },
  { title: 'Социальный успех', points: 300, type: SKILL_TYPES.SOCIAL },
  { title: 'Практические навыки', points: 450, type: SKILL_TYPES.PRACTICAL },
]

const ListOfSkills = () => {
  return (
    <FlatList
      data={MOCKUP_DATA}
      ItemSeparatorComponent={() => <View style={styles.separator} /> }
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <SmallMedalIcon />
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={[
              styles.progressOpacity,
              { backgroundColor: getColorByType(item.type)},
            ]}/>
            <View style={[
              styles.progressValue,
              {
                width: DeviceLayout.getSize((190 / 100) * (item.points / 10)),
                backgroundColor: getColorByType(item.type),
              },
            ]}
            >
              <Text style={styles.pointsText}>{item.points}</Text>
            </View>
          </View>
          <BigMedalIcon />
        </View>
      )}
    />
  )
}

export default ListOfSkills

const styles = StyleSheet.create({
  itemContainer: {
    height: DeviceLayout.getSize(86),
    width: DeviceLayout.getSize(414),
    paddingHorizontal: DeviceLayout.getSize(20),
    paddingVertical: DeviceLayout.getSize(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    width: DeviceLayout.getSize(110),
    marginLeft: DeviceLayout.getSize(15),

  },
  titleText: {
    ...TEXT_STYLES.H4_REGULAR,
  },
  progressContainer: {
    width: DeviceLayout.getSize(190),
    height: DeviceLayout.getSize(30),
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: DeviceLayout.getSize(-30),
  },
  progressOpacity: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
  },
  progressValue: {
    height: '100%',
    borderRadius: DeviceLayout.getSize(16),
    paddingLeft: DeviceLayout.getSize(14),
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    ...TEXT_STYLES.H4_REGULAR,
    color: COLORS.WHITE,
  },
  separator: {
    flex: 1,
    marginHorizontal: DeviceLayout.getSize(20),
    height: DeviceLayout.getSize(1),
    backgroundColor: '#F2F6FF',
  },
})

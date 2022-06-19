import React from 'react'
import { COLORS, TEXT_STYLES } from 'app/config/constants'
import { DeviceLayout } from 'app/utils'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
}
  from 'react-native'
import RatingMedalIcon from './icons/rating_medal'


const MOCKUP_DATA = [
  { name: 'Захаров Алексей', points: 5236, reward: 10 },
  { name: 'Анастасия Радионова', points: 4920, reward: 10 },
  { name: 'Миша Алексеев', points: 5236, reward: 10 },
  { name: 'Ксюша Ободова', points: 4226, reward: 8 },
  { name: 'Егор Трафимов', points: 3658, reward: 8 },
  { name: 'Маша Егорова', points: 3123, reward: 8 },
  { name: 'Лена Беляева', points: 2980, reward: 8 },
  { name: 'Артур Растягаев', points: 2771, reward: 7 },
]

const getColorByIndex = (index: number) => {
  if (MOCKUP_DATA[0]) return COLORS.PUMPKIN
  if (MOCKUP_DATA[1]) return COLORS.SULU
  if (MOCKUP_DATA[2]) return COLORS.MAYA_BLUE
}

const MedalItem = (props) => {
  const color = getColorByIndex(props.index)
  return (
    <View style={styles.flexContainer}>
      <RatingMedalIcon color={color}/>
      <View style={styles.blueCircle} />
    </View>
  )
}

const NumberItem = () => {
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.number}>4</Text>
      <View style={styles.blueCircle} />
    </View>
  )
}

const RatingList = () => {
  return (
    <FlatList
      data={MOCKUP_DATA}
      renderItem={({ item, index }) => (
        <View style={styles.mainContainer}>
          {index <= 2 ? <MedalItem index={index} /> : <NumberItem />}
          <View style={{ width: DeviceLayout.getSize(200) }}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.points} баллов</Text>
          </View>
          <Text style={[ styles.subtitle, { alignSelf: 'flex-end' } ]}>{item.reward} наград</Text>
        </View>
      )}
    />
  )
}

export default RatingList

const styles = StyleSheet.create({
  mainContainer: {
    width: DeviceLayout.getSize(414),
    height: DeviceLayout.getSize(82),
    paddingHorizontal: DeviceLayout.getSize(20),
    paddingVertical: DeviceLayout.getSize(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexContainer: {
    width: DeviceLayout.getSize(80),
    marginRight: DeviceLayout.getSize(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...TEXT_STYLES.H3_REGULAR,
  },
  subtitle: {
    ...TEXT_STYLES.H3_REGULAR,
    color: COLORS.PRIMARY_GRAY,
  },
  number: {
    ...TEXT_STYLES.H3_MEDIUM,
    color: COLORS.DODGER_BLUE,
  },
  blueCircle: {
    width: DeviceLayout.getSize(40),
    height: DeviceLayout.getSize(40),
    backgroundColor: COLORS.LIGHT_SKY_BLUE,
    borderRadius: 50,
  },
})

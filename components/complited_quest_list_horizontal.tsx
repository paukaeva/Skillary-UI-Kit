import { DeviceLayout } from 'app/utils'
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import CompletedQuest from './completed_quest'
import { TEXT_STYLES, COLORS } from 'app/config/constants'

const STARS = [ 1, 2, 3, 4, 5 ]

const MOCKUP_DATA = [
  { title: 'Гонка героев', time: 20, points: 10 },
  { title: 'Школа шпионов «Kingsman»', time: 14, points: 30 },
  { title: 'Звёздный спецназ', time: 34, points: 20 },
  { title: 'Гонка героев', time: 20, points: 10 },
  { title: 'Школа шпионов «Kingsman»', time: 14, points: 30 },
  { title: 'Звёздный спецназ', time: 34, points: 20 },
]

const CompletedQuestsListHorizontal = () => {
  const [ rating, setRating ] = useState(0)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Пройденные квесты</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.subtitle}>Смотреть все</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={MOCKUP_DATA}
        horizontal={true}
        ItemSeparatorComponent={() => (<View style={styles.separator} />)}
        renderItem={({ item }) => (
          <CompletedQuest
            title={item.title}
            minutes={item.time}
            points={item.points}
          />
        )}
      />
    </View>
  )
}

export default CompletedQuestsListHorizontal

const styles = StyleSheet.create({
  separator: {
    width: DeviceLayout.getSize(17),
  },
  mainContainer: {
    paddingLeft: DeviceLayout.getSize(25),
  },
  textContainer: {
    width: DeviceLayout.getSize(370),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingBottom: DeviceLayout.getSize(25),
  },
  title: {
    ...TEXT_STYLES.H2_MEDIUM,
  },
  subtitle: {
    ...TEXT_STYLES.H4_REGULAR,
    color: COLORS.MAYA_BLUE,
  },
})


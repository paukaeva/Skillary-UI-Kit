import { DeviceLayout } from 'app/utils'
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native'
import CompletedQuest from './completed_quest'

const STARS = [ 1, 2, 3, 4, 5 ]

const MOCKUP_DATA = [
  { title: 'Гонка героев', time: 20, points: 10 },
  { title: 'Школа шпионов «Kingsman»', time: 14, points: 30 },
  { title: 'Звёздный спецназ', time: 34, points: 20 },
  { title: 'Гонка героев', time: 20, points: 10 },
  { title: 'Школа шпионов «Kingsman»', time: 14, points: 30 },
  { title: 'Звёздный спецназ', time: 34, points: 20 },
]

const CompletedQuestsList = () => {
  const [ rating, setRating ] = useState(0)
  return (
    <FlatList
      data={MOCKUP_DATA}
      ItemSeparatorComponent={() => (<View style={styles.separator} />)}
      renderItem={({ item }) => (
        <CompletedQuest
          title={item.title}
          minutes={item.time}
          points={item.points}
        />
      )}
    />
  )
}

export default CompletedQuestsList

const styles = StyleSheet.create({
  separator: {
    height: DeviceLayout.getSize(17),
  },
})

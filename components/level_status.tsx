import { DeviceLayout } from 'app/utils'
import React from 'react'
import { COLORS, TEXT_STYLES } from 'app/config/constants'
import ProgressCircle from './icons/progress_circle'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import InformationIcon from './icons/information'

const MOCKUP_DATA = [
  { key: 1, status: 'Новичок', level: 5, progress: 95 },
  { key: 2, status: 'Уже смешарик', level: 99, progress: 40 },
  { key: 4, status: 'Сеньор-помидор', level: 15, progress: 79 },
  { key: 3, status: 'Жмурки', level: 4, progress: 100 },
]

const LevelStatus = () => {
  return (
    <>
      {MOCKUP_DATA.map(element => {
        return (
          <View style={styles.container} key={element.key}>
            <ProgressCircle progress={element.progress}/>
            <Text style={styles.progress}>{element.progress} %</Text>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{element.status}</Text>
              <Text style={styles.subtitle}>Уровень {element.level}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <InformationIcon />
            </TouchableOpacity>
          </View>
        )
      })}
    </>
  )
}

export default LevelStatus

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: DeviceLayout.getSize(135),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: DeviceLayout.getSize(20),
    paddingVertical: DeviceLayout.getSize(23),
    alignItems: 'center',
  },
  textContainer: {
    width: DeviceLayout.getSize(250),
    marginLeft: DeviceLayout.getSize(20),
  },
  title: {
    ...TEXT_STYLES.H2_MEDIUM,
    marginBottom: DeviceLayout.getSize(5),
  },
  subtitle: {
    ...TEXT_STYLES.H4_REGULAR,
    color: COLORS.PRIMARY_GRAY,
  },
  progress: {
    ...TEXT_STYLES.H4_MEDIUM,
    position: 'absolute',
    left: DeviceLayout.getSize(49),
  },
})

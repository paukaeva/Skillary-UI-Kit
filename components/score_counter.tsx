import { TEXT_STYLES } from "app/config/constants"
import { DeviceLayout } from "app/utils"
import React from "react"
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

type Props = {
  thisWeekPoints: number
  lastWeekPoints: number
  totalPoints: number 
}

const ScoreCounter = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мои баллы <Text style={{color: '#FFA858'}}>{props.totalPoints}</Text></Text>
      <Text style={styles.description}><Text style={{color: '#FFA858'}}>{props.thisWeekPoints}</Text> заработано на этой неделе</Text>
      <Text style={styles.description}><Text style={{color: '#FFA858'}}>{props.lastWeekPoints}</Text> заработано на прошлой неделе</Text>
    </View>
  )
}

export default ScoreCounter

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: DeviceLayout.getSize(25),
    marginBottom: DeviceLayout.getSize(30),
  },
  title: {
    ...TEXT_STYLES.H2_MEDIUM,
    marginBottom: DeviceLayout.getSize(15),

  },
  description: {
    ...TEXT_STYLES.H3_REGULAR,
    paddingBottom: DeviceLayout.getSize(10),
  },
})

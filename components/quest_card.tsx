import { TEXT_STYLES } from 'app/config/constants'
import { DeviceLayout } from 'app/utils'
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { SKILL_TYPES, COLORS } from 'app/config/constants'
import SkillProgress from './skill_progress'

export const getColorByType = (type: SKILL_TYPES) => {
  switch (type) {
    case SKILL_TYPES.PHYSICAL: return COLORS.SUNSET_ORANGE
    case SKILL_TYPES.INTELLIGENCE: return COLORS.LIGHT_SLATE_BLUE
    case SKILL_TYPES.WORLD: return COLORS.KELLY_GREEN
    case SKILL_TYPES.CREATION: return COLORS.PUMPKIN_2
    case SKILL_TYPES.LEADERSHIP: return COLORS.PURPLE
    case SKILL_TYPES.SOCIAL: return COLORS.DARK_TURQUOISE
    case SKILL_TYPES.PRACTICAL: return COLORS.AU_CHICO
    case SKILL_TYPES.TRAINABILITY: return COLORS.MAYA_BLUE
    default: return
  }
}

const MOCKUP_DATA = [
  { key: '0', type: SKILL_TYPES.LEADERSHIP, score: 75 },
  { key: '1', type: SKILL_TYPES.WORLD, score: 45 },
  { key: '2', type: SKILL_TYPES.PHYSICAL, score: 50 },
  { key: '3', type: SKILL_TYPES.CREATION, score: 60 },
  { key: '4', type: SKILL_TYPES.SOCIAL, score: 90 },
  { key: '5', type: SKILL_TYPES.TRAINABILITY, score: 20 },
]

const QuestCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Text style={styles.keyText}>Награда:</Text>
        <Text style={styles.valueText}>{props.reward}</Text>
      </View>

      <View style={styles.flexContainer}>
        <Text style={styles.keyText}>Статус:</Text>
        <Text style={styles.valueText}>{props.status}</Text>
      </View>

      <View style={styles.flexContainer}>
        <Text style={styles.keyText}>Категория квеста:</Text>
        <Text style={styles.valueText}>{props.category}</Text>
      </View>

      <View style={styles.flexContainer}>
        <Text style={styles.keyText}>Время на выполнение:</Text>
        <Text style={styles.valueText}>{props.executionTime}</Text>
      </View>

      <View style={styles.flexContainer}>
        <Text style={styles.keyText}>Необходимо подтверждений:</Text>
        <Text style={styles.valueText}>{props.amountOfConfirmation}</Text>
      </View>
      <View style={styles.flexContainer}>
        {MOCKUP_DATA.map((element) => (
          <SkillProgress
            score={element.score}
            type={element.type}
            key={element.key}
          />
        ))}
      </View>
    </View>
  )
}

export default QuestCard

const styles = StyleSheet.create({
  container: {
    width: DeviceLayout.getSize(374),
    height: DeviceLayout.getSize(308),
    backgroundColor: '#FFF6EE',
    borderRadius: DeviceLayout.getSize(6),
    paddingTop: DeviceLayout.getSize(17),
    paddingLeft: DeviceLayout.getSize(20),
    paddingRight: DeviceLayout.getSize(20),

  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexWrap: 'wrap',
    marginBottom: DeviceLayout.getSize(15),
  },
  keyText: {
    ...TEXT_STYLES.H3_LIGHT,
    color: '#333333',
  },
  valueText: {
    ...TEXT_STYLES.H3_REGULAR,
    color: '#FFA858',
  },
})

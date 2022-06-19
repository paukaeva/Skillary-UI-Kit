import { DeviceLayout } from 'app/utils'
import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import MedalIcon from './icons/medal'
import { SKILL_TYPES, COLORS } from 'app/config/constants'

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

type Props = {
  score: number
  type: SKILL_TYPES
  style?: string
}

const SkillProgress = (props: Props) => {
  const color = getColorByType(props.type)
  return (
    <View style={styles.medalContainer}>
      <View style={[
        styles.progressContainer,
        props.style === 'blue' ? { backgroundColor: COLORS.BACKGROUND_BLUE } : undefined,
      ]}>
        <View style={[
          styles.progressValue,
          {
            width: DeviceLayout.getSize(75 / 100 * props.score),
            backgroundColor: color,
          },
        ]}/>
      </View>
      <View>
        <MedalIcon color={color}/>
      </View>
    </View>
  )
}

export default SkillProgress

const styles = StyleSheet.create({
  medalContainer: {
    flexDirection: 'row',
    width: DeviceLayout.getSize(97),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressContainer: {
    backgroundColor: '#FFFFFF',
    width: DeviceLayout.getSize(75),
    height: DeviceLayout.getSize(8),
    borderRadius: DeviceLayout.getSize(6),
    position: 'absolute',
    left: DeviceLayout.getSize(22),
  },
  progressValue: {
    height: '100%',
    borderRadius: DeviceLayout.getSize(6),
  },
})

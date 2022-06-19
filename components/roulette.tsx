import { DeviceLayout } from 'app/utils'
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { COLORS, TEXT_STYLES, SKILL_TYPES, FONT } from 'app/config/constants'
import SkillProgress from './skill_progress'
import StarMedal from './icons/star_medal'

const MOCKUP_DATA = [
  {
    key: '01',
    title: '«Гонка героев»',
    points: 15,
    skills: [
      { key: '0', type: SKILL_TYPES.LEADERSHIP, score: 75 },
      { key: '1', type: SKILL_TYPES.WORLD, score: 45 },
      { key: '2', type: SKILL_TYPES.PHYSICAL, score: 50 },
      { key: '3', type: SKILL_TYPES.CREATION, score: 60 },
      { key: '4', type: SKILL_TYPES.SOCIAL, score: 90 },
      { key: '5', type: SKILL_TYPES.TRAINABILITY, score: 20 },
    ],
  },
  {
    key: '02',
    title: '«Школа шпионов Kingsman»',
    points: 5,
    skills: [
      { key: '0', type: SKILL_TYPES.LEADERSHIP, score: 75 },
      { key: '1', type: SKILL_TYPES.WORLD, score: 45 },
      { key: '2', type: SKILL_TYPES.PHYSICAL, score: 50 },
      { key: '3', type: SKILL_TYPES.CREATION, score: 60 },
      { key: '4', type: SKILL_TYPES.SOCIAL, score: 90 },
      { key: '5', type: SKILL_TYPES.TRAINABILITY, score: 20 },
    ],
  },
  {
    key: '03',
    title: '«Миньоны»',
    points: 10,
    skills: [
      { key: '0', type: SKILL_TYPES.LEADERSHIP, score: 75 },
      { key: '1', type: SKILL_TYPES.WORLD, score: 45 },
      { key: '2', type: SKILL_TYPES.PHYSICAL, score: 50 },
      { key: '3', type: SKILL_TYPES.CREATION, score: 60 },
      { key: '4', type: SKILL_TYPES.SOCIAL, score: 90 },
      { key: '5', type: SKILL_TYPES.TRAINABILITY, score: 20 },
    ],
  },
]


const Roulette = () => {
  return (
    <View style={styles.backgroundContainer}>
      {MOCKUP_DATA.map((item) => {
        return (
          <View style={styles.mainContainer} key={item.key}>
            <View
              style={[
                styles.flexContainer,
                { justifyContent: 'flex-start' },
              ]}
            >
              <View>
                <StarMedal />
              </View>
              <View style={{ paddingLeft: DeviceLayout.getSize(17) }}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.subtitleText}>{item.points} баллов</Text>
              </View>
            </View>
            <View style={styles.skillsContainer}>
              {item.skills.map((skill) => {
                return <SkillProgress score={skill.score} type={skill.type} key={skill.key} style='blue'/>
              })}
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default Roulette

const styles = StyleSheet.create({
  backgroundContainer: {
    width: DeviceLayout.getSize(374),
    height: DeviceLayout.getSize(525),
    borderRadius: DeviceLayout.getSize(16),
    backgroundColor: COLORS.TEXAS_ROSE,
    paddingHorizontal: DeviceLayout.getSize(20),
    paddingVertical: DeviceLayout.getSize(30),
    marginTop: DeviceLayout.getSize(10),
  },
  mainContainer: {
    width: DeviceLayout.getSize(333),
    height: DeviceLayout.getSize(147),
    borderRadius: DeviceLayout.getSize(10),
    backgroundColor: COLORS.WHITE,
    marginBottom: DeviceLayout.getSize(12),
    paddingHorizontal: DeviceLayout.getSize(12),
    paddingVertical: DeviceLayout.getSize(12),
  },
  titleText: {
    fontFamily: FONT.MEDIUM,
    fontSize: DeviceLayout.getFontSize(18),
    lineHeight: DeviceLayout.getFontSize(21),
    color: COLORS.BLACK_NERO,
  },
  subtitleText: {
    ...TEXT_STYLES.H3_REGULAR,
    color: COLORS.MAYA_BLUE,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: DeviceLayout.getSize(65),
    alignContent: 'space-between',
    justifyContent: 'space-between',
    marginTop: DeviceLayout.getSize(10),
  },
})

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './navigationParamList';

export type RocketsScreenProps = StackScreenProps<
  RootStackParamList,
  'Rockets'
>;

export type CrewMemberScreenProps = StackScreenProps<
  RootStackParamList,
  'CrewMembers'
>;

export type CrewMemberDetailScreenProps = StackScreenProps<
  RootStackParamList,
  'CrewMemberDetail'
>;

import { Crew } from '../../types/crewTypes';

export type BottomTabParamList = {
  RocketsStack: undefined;
  CrewMembersStack: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Rockets: undefined;
  CrewMembers: undefined;
  CrewMemberDetail: {
    crewMember: Crew;
  };
};

export type RootStackParamList = BottomTabParamList & MainStackParamList;

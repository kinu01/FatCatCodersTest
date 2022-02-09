export type BottomTabParamList = {
  RocketsStack: undefined;
  CrewMembersStack: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Rockets: undefined;
  CrewMembers: undefined;
  CrewMember: undefined;
};

export type RootStackParamList = BottomTabParamList & MainStackParamList;

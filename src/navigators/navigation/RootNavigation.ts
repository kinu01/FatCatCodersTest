import {
  StackActions,
  createNavigationContainerRef,
  NavigationAction,
} from '@react-navigation/native';
import { RootStackParamList } from './navigationParamList';

type RouteName = keyof RootStackParamList;

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(
  screen: RouteName,
  params?: RootStackParamList[RouteName],
): void {
  navigationRef.current?.navigate(screen, params);
}

export function dispatch(action: NavigationAction): void {
  navigationRef.current?.dispatch(action);
}

export function replace(
  screen: RouteName,
  params?: RootStackParamList[RouteName],
): void {
  navigationRef.current?.dispatch(StackActions.replace(screen, params));
}

export function push(
  screen: RouteName,
  params?: RootStackParamList[RouteName],
): void {
  navigationRef.current?.dispatch(StackActions.push(screen, params));
}

export function goBack(): void {
  navigationRef.current?.goBack();
}

export const navigation = {
  navigate,
  dispatch,
  replace,
  push,
  goBack,
};

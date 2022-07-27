import {CommonActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RoutesGenericType = {
  [key: string]: Record<string, string>;
};

function useNavigationTyped(): StackNavigationProp<
  RoutesGenericType,
  string | number,
  undefined
> {
  const navigation = useNavigation<StackNavigationProp<RoutesGenericType>>();
  return navigation;
}

function resetRoutToTop(routeName: string) {
  return CommonActions.reset({
    index: 0,
    routes: [{name: routeName}],
  });
}

export type RouteWithParams<Params> = {route: {params: Params}};

export {useNavigationTyped as useNavigation, resetRoutToTop};

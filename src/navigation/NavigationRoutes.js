// Tab Route
import HomeTab from '../containers/homeTab/HomeTab';
import PlannerTab from '../containers/plannerTab/PlannerTab';
import MoreTab from '../containers/moreTab/MoreTab';
import TraceTab from '../containers/traceTab/TraceTab';

// Screens Route
import SplashScreen from '../containers/auth/SplashScreen';
import TraceVehicleScreen from '../containers/traceTab/TraceVehicleScreen';
import TabBarNavigation from './Type/TabBarNavigation';

export const TabRoute = {
  HomeTab,
  PlannerTab,
  MoreTab,
  TraceTab,
};

export const StackRoute = {
  SplashScreen,
  TraceVehicleScreen,
  TabBarNavigation,
};

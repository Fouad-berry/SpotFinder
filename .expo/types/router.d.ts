/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/Components/Home/GoogleMapView` | `/Components/Home/Header` | `/Context/UserLocationContext` | `/Navigations/TabNavigation` | `/Screens/Fav` | `/Screens/Home` | `/Screens/Profile` | `/Screens/Search` | `/Shared/Colors` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}

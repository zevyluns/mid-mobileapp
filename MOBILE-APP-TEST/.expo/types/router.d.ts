/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/about` | `/about`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/background` | `/background`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/experience` | `/experience`; params?: Router.UnknownInputParams; } | { pathname: `/src/context/AuthContext`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/login`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/about` | `/about`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/background` | `/background`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/experience` | `/experience`; params?: Router.UnknownOutputParams; } | { pathname: `/src/context/AuthContext`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/login${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/about${`?${string}` | `#${string}` | ''}` | `/about${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/background${`?${string}` | `#${string}` | ''}` | `/background${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/experience${`?${string}` | `#${string}` | ''}` | `/experience${`?${string}` | `#${string}` | ''}` | `/src/context/AuthContext${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/about` | `/about`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/background` | `/background`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/experience` | `/experience`; params?: Router.UnknownInputParams; } | { pathname: `/src/context/AuthContext`; params?: Router.UnknownInputParams; };
    }
  }
}

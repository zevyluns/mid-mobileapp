/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/src/context/AuthContext`; params?: Router.UnknownInputParams; } | { pathname: `/UNKLAB_CAFETERIA_SYSTEM/home`; params?: Router.UnknownInputParams; } | { pathname: `/UNKLAB_CAFETERIA_SYSTEM/menu`; params?: Router.UnknownInputParams; } | { pathname: `/UNKLAB_CAFETERIA_SYSTEM/qrscan`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/login`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/src/context/AuthContext`; params?: Router.UnknownOutputParams; } | { pathname: `/UNKLAB_CAFETERIA_SYSTEM/home`; params?: Router.UnknownOutputParams; } | { pathname: `/UNKLAB_CAFETERIA_SYSTEM/menu`; params?: Router.UnknownOutputParams; } | { pathname: `/UNKLAB_CAFETERIA_SYSTEM/qrscan`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/login${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/src/context/AuthContext${`?${string}` | `#${string}` | ''}` | `/UNKLAB_CAFETERIA_SYSTEM/home${`?${string}` | `#${string}` | ''}` | `/UNKLAB_CAFETERIA_SYSTEM/menu${`?${string}` | `#${string}` | ''}` | `/UNKLAB_CAFETERIA_SYSTEM/qrscan${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/src/context/AuthContext`; params?: Router.UnknownInputParams; } | { pathname: `/UNKLAB_CAFETERIA_SYSTEM/home`; params?: Router.UnknownInputParams; } | { pathname: `/UNKLAB_CAFETERIA_SYSTEM/menu`; params?: Router.UnknownInputParams; } | { pathname: `/UNKLAB_CAFETERIA_SYSTEM/qrscan`; params?: Router.UnknownInputParams; };
    }
  }
}

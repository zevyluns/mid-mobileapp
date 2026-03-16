/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as auth_verifyCredentials from "../auth/verifyCredentials.js";
import type * as feedback_createFeedback from "../feedback/createFeedback.js";
import type * as menu_getAll from "../menu/getAll.js";
import type * as qr_checkAndMark from "../qr/checkAndMark.js";
import type * as users_getById from "../users/getById.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  "auth/verifyCredentials": typeof auth_verifyCredentials;
  "feedback/createFeedback": typeof feedback_createFeedback;
  "menu/getAll": typeof menu_getAll;
  "qr/checkAndMark": typeof qr_checkAndMark;
  "users/getById": typeof users_getById;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};

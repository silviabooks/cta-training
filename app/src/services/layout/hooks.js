/**
 * Let change the main title of the App
 *
 * {
 *   component: () => 'A title'
 *   ?props {}
 * }
 */
export const LAYOUT_TITLE_COMPONENT = "layout/title";

/**
 * {
 *   component: () => 'A title'
 *   ?props {}
 * }
 */
export const LAYOUT_MENU_COMPONENTS = "layout/menu/components";

/**
 * It allows to register new routes according to ReactRouter APIs
 * https://reactrouter.com/docs/en/v6/getting-started/overview
 *
 * {
 *   props: { path, element}
 *   ?component Route
 * }
 */
export const LAYOUT_ROUTE_COMPONENTS = "layout/route/components";

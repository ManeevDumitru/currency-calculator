import { RouteLocationNormalized } from "vue-router";

export async function loadLayoutMiddleware(route: RouteLocationNormalized) {
  try {
    const layout = route.meta.layout || "default";
    const layoutComponent = await import(`../../layouts/${layout}.vue`);
    route.meta.layoutComponent = layoutComponent.default;
  } catch (e) {
    console.log(e);
  }
}

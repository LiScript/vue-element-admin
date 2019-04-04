const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language, // 语言
  device: state => state.app.device, // 电脑还是手机
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes
}
export default getters

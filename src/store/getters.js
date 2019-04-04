const getters = {
  sidebar: state => state.app.sidebar, // 侧边栏
  language: state => state.app.language, // 语言
  device: state => state.app.device, // 电脑还是手机
  visitedViews: state => state.tagsView.visitedViews, // 切换
  cachedViews: state => state.tagsView.cachedViews, // 切换
  token: state => state.user.token, // 令牌
  avatar: state => state.user.avatar, // 头像
  name: state => state.user.name, // 昵称
  introduction: state => state.user.introduction, // 介绍
  roles: state => state.user.roles, // 用户的权限等级
  permission_routes: state => state.permission.routes, // 生成路由
  addRoutes: state => state.permission.addRoutes // 增加路由
}
export default getters

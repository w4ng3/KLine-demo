export type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns'

export type AssemblySizeType = 'large' | 'default' | 'small'

export type LanguageType = 'zh' | 'en' | null

/* GlobalState */
export interface GlobalState {
  layout: LayoutType
  assemblySize: AssemblySizeType
  language: LanguageType
  maximize: boolean
  primary: string
  isDark: boolean
  isGrey: boolean
  isWeak: boolean
  asideInverted: boolean
  headerInverted: boolean
  isCollapse: boolean
  accordion: boolean
  breadcrumb: boolean
  breadcrumbIcon: boolean
  tabs: boolean
  tabsIcon: boolean
  footer: boolean
}

/* UserState */
export interface UserState {
  token: string
  userInfo: {
    /** * 登录账号 */
    account?: string
    /** * 头像 */
    avatar?: string
    /** * 主键 */
    pkId?: number
    /** * 角色id */
    roleId?: number
    /** * 角色名称 */
    roleName?: string
  }
  ysToken: string
  ysExpireTime: number
}

/* tabsMenuProps */
export interface TabsMenuProps {
  icon: string
  title: string
  path: string
  name: string
  close: boolean
  isKeepAlive: boolean
}

/* TabsState */
export interface TabsState {
  tabsMenuList: TabsMenuProps[]
}

/* AuthState */
// export interface AuthState {
//   routeName: string
//   authButtonList: {
//     [key: string]: string[]
//   }
//   // authMenuList: Menu.MenuOptions[]
// }

/* KeepAliveState */
export interface KeepAliveState {
  keepAliveName: string[]
}

import { Breakpoints, ResponsiveProperty } from "@displaykit/responsive_styles"


type ResposiveProperty<Type> = Partial<Record<Breakpoints, Type>>

export interface StyleSheet {
  fontFamily?: ResposiveProperty<string> | string
  backgroundColor?: ResponsiveProperty<string> | string
  [key: string]: any
}

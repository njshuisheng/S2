---
title: S2Theme
order: 2
---

## ThemeCfg

<description> **optional**  _object_ </description>

功能描述： 表主题配置项。

| 参数 | 参数 | 类型 | 默认值  | 必选 |
| :--- | :--- | :--- | :--- | :---: |
| theme |主题 schema | [S2Theme](#s2theme) | - | |
| palette | 色板 schema | [Palette](#palette) | - | |
| name |  色板 schema | `default` \|  `colorful` \| `gray`  | `default`| |

### Palette

<description> **optional**  _object_ </description>

 功能描述： 表主题色板 `Schama`

| 参数 | 参数 | 类型 | 默认值  | 必选 |
| :--- |  :--- | :--- | :--- | :---: |
| basicColors | 基础色板 | `string[]` | - |  |
| semanticColors | 用于表示实际业务语义的颜色。例如内置颜色 “红跌绿涨” | `[key: string]` | - |  |

### S2Theme

<description> **optional**  _object_ </description>

 功能描述： 表主题 `Schama`

| 参数 | 参数 | 类型 | 默认值  | 必选 |
| :--- | :--- | :--- | :--- | :---: |
| cornerCell | 角头单元格主题 | [DefaultCellTheme](#defaultcelltheme) | | |
| rowCell |  角头单元格主题 | [DefaultCellTheme](#defaultcelltheme) | | |
| colCell | 行头单元格主题 | [DefaultCellTheme](#defaultcelltheme) |  | |
| dataCell | 数据单元格主题 | [DefaultCellTheme](#defaultcelltheme) |  | |
| resizeArea |  列宽行高调整热区 | [ResizeArea](#resizearea) | | |
| scrollBar | 滚动条样式 | [ScrollBarTheme](#scrollbartheme) |  | |
| splitLine | 框架分割线样式 | [SplitLine](#splitline) |  | |
| prepareSelectMask | 刷选遮罩样式  | [InteractionStateTheme](#interactionstatetheme) |  | |
| background |  刷选遮罩样式  | [Background](#background) | | |
| [key: string] |  额外属性字段，用于用户自定义主题时传参  | `unknown` | | |

#### DefaultCellTheme

<description> **optional**  _object_ </description>

功能描述： 默认单元格主题

| 参数 | 说明 | 类型 | 默认值  | 必选 |
| :--- |  :--- | :--- | :--- | :---: |
| bolderText | 加粗文本样式 | [TextTheme](#texttheme) | - | |
| text | 文本样式 | [TextTheme](#texttheme) | - | |
| cell | 单元格样式 | [CellTheme](#texttheme) | - | |
| icon | 图标样式 | [IconTheme](#texttheme) | - | |
| seriesNumberWidth | 序号列宽 | `number` | 80 | |

#### ResizeArea

<description> **optional**  _object_ </description>

功能描述： 列宽行高拖拽热区样式

| 参数 | 说明 | 类型 | 默认值  | 必选 |
| :--- | :--- | :--- | :---  | :---: |
| size | 热区尺寸 | `number` | 3 |  |
| background | 热区背景色 | `string` | - | |
| backgroundOpacity | 热区背景色透明度 | `number` | - |  |
| guideLineColor | 参考线颜色 | `string` | - |  |
| guideLineDash | 热区参考线 [虚线模式](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash) | `number[]` | `[3, 3]`|  |
| interactionState | 热区交互态样式 | [InteractionState](#interactionstate) | - | |

#### ScrollBarTheme

<description> **optional**  _object_ </description>

功能描述： 滚动条样式

| 参数 | 说明 | 类型 | 默认值  | 必选 |
| :--- | :--- | :--- | :--- | :---: |
| trackColor |  滚动条轨道颜色 | `string` | `rgba(0,0,0,0)` | |
| thumbHoverColor | 滚动条 Hover 态颜色 | `string` | `rgba(0,0,0,0.4)` | |
| thumbColor | 滚动条颜色 | `string` | `rgba(0,0,0,0.15)` | |
| size |  滚动条尺寸 | `number` | Mobile: 3 <br> PC: 6 | |
| hoverSize |  滚动条 Hover 态尺寸 | `number` | 16 | |
| lineCap | 指定如何绘制每一条线段末端 | `butt` \| `round` \| `square` | `round` | |

#### SplitLine

<description> **optional**  _object_ </description>

功能描述： 分割线样式

| 参数 | 说明 | 类型 | 默认值  | 必选 |
| :--- | :--- | :--- | :--- | :---: |
| horizontalBorderColor | 水平分割线颜色 | `string` | - | |
| horizontalBorderColorOpacity | 水平分割线颜色透明度 | `number` | 1 | |
| horizontalBorderWidth | 水平分割线宽度 | `number` | 2 | |
| verticalBorderColor | 垂直分割线颜色 | `string` | - | |
| verticalBorderColorOpacity | 垂直分割线颜色透明度 | `number` | 1 | |
| verticalBorderWidth | 垂直分割线宽度 | `number` | 2 | |
| showShadow | 分割线是否显示外阴影（行列冻结情况下） | `boolean` | `true` | |
| shadowWidth | 阴影宽度 | `number` | 10 | |
| shadowColors | `left` : 线性变化左侧颜色  <br> `right` : 线性变化右侧颜色 | `{left: string,` <br> `right: string}` | `{left: 'rgba(0,0,0,0.1)',`<br>`right: 'rgba(0,0,0,0)'}` | |

#### TextTheme

<description> **optional**  _object_ </description>

功能描述： 文本主题

| 参数 | 说明 | 类型 | 默认值  | 必选 |
| :--- | :--- | :--- | :--- | :---: |
| textAlign | 文本内容的对齐方式 | `left` \| `center` \| `right` | - | |
| textBaseline | 绘制文本时的基线 | `top` \| `middle` \| `bottom` | - | |
| fontFamily | 字体 | `string` | `Roboto, PingFangSC,` <br>  `BlinkMacSystemFont,` <br> `Microsoft YaHei,` <br> `Arial, sans-serif`  | |
| fontSize | 字体大小 | `number` | - | |
| fontWeight | number <br> string: `normal` <br> `bold` <br> `bolder` <br> `lighter` 字体粗细 | `number` \| `string` | 粗体文本：Mobile：`520`  PC: `bold` <br> 普通文本：`normal` | |
| fill | 字体颜色 | `string` | - | |
| linkTextFill |链接文本颜色 | `string` | - | |
| opacity | 字体透明度 | `number` | 1 | |

#### CellTheme

<description> **optional**  _object_ </description>

功能描述： 单元格通用主题

| 参数 | 说明                                    | 类型 | 默认值  | 必选 |
| :--- | :--- | :--- | :--- | :---: |
| crossBackgroundColor | 基数行单元格背景色 | `string` | - | |
| backgroundColor |  单元格背景色 | `string` | - | |
| backgroundColorOpacity | 单元格背景色透明度 | `number` | 1 |  |
| horizontalBorderColor | 单元格水平边线颜色 | `string` | - | |
| horizontalBorderColorOpacity | 单元格水平边线颜色透明度 | `number` | 1 | |
| horizontalBorderWidth | 单元格水平边线宽度 | `number` | - | |
| verticalBorderColor | 单元格垂直边线颜色 | `string` | - | |
| verticalBorderColorOpacity | 单元格垂直边线颜色透明度 | `number` | 1 | |
| verticalBorderWidth | 单元格垂直边线宽度 | `number` | - | |
| padding | 单元格内边距 | [Padding](#margin--padding) | - | |
| interactionState | 单元格交互态 | [InteractionStateTheme](#interactionstatetheme) | - | |
| miniBarChartHeight | 单元格内条件格式-迷你条形图高度 | `number` | 12 | |
| miniBarChartFillColor | 单元格内条件格式-迷你条形图默认填充颜色 | `string` | - | |

#### IconTheme

<description> **optional**  _object_ </description>

功能描述：icon 通用主题

| 参数 | 说明             | 类型 | 默认值  | 必选 |
| :--- | :--- | :--- | :--- | :---: |
| fill |  icon 填充色 | `string` | - | |
| downIconColor | 下跌 icon 填充色 | `string` | `#FF4D4F`  | |
| upIconColor | 上涨 icon 填充色 | `string` | `#29A294` | |
| size | icon 大小 | `number` | - | |
| margin | 单元格外边距 | [Margin](#margin--padding) | - | |

#### InteractionStateTheme

<description> **optional**  _object_ </description>

功能描述：交互通用主题

| 参数 | 说明       | 类型 | 默认值  | 必选 |
| :--- | :--- | :--- | :--- | :---: |
| backgroundColor | 背景填充色 | `string` |  | |
| backgroundOpacity | 背景透明度 | `number` | |  |
| borderColor | 边线填充色 | `string` |  | |
| borderWidth | 边线宽度 | `number` |  | |
| opacity | 整体透明度 | `number` |  | |

#### Margin ｜ Padding

<description> **optional**  _object_ </description>

功能描述：icon 外边距，单元格内边距

| 参数 | 说明 | 类型 | 默认值  | 必选 |
| :--- | :--- | :--- |  :---| :---: |
| top | 上 | `number` | | |
| right | 右 | `number` | | |
| bottom | 下 | `number` | | |
| left | 左 | `number` | | |

#### Background

<description> **optional**  _object_ </description>

功能描述：背景

| 参数 | 说明 | 类型 | 默认值  | 必选 |
| :--- | :--- | :--- | :---| :---:  |
| color | 颜色 | `string`  | - |  |
| opacity | | `number` | 1 | |
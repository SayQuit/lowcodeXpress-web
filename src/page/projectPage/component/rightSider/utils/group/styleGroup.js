export const styleGroup = [
    {
        type: 'display',
        componentType: 'select',
        name: '布局',
        options: [
            {
                value: 'inline',
                label: '行内元素'
            },
            {
                value: 'block',
                label: '块级元素'
            },
            {
                value: 'inline-block',
                label: '行内块元素'
            },
            {
                value: 'flex',
                label: '弹性盒元素'
            }
        ]
    },
    {
        type: 'width',
        componentType: 'inputNumber',
        name: '宽度',
        addonAfter: 'px'
    },
    {
        type: 'height',
        componentType: 'inputNumber',
        name: '高度',
        addonAfter: 'px'
    },
    {
        type: 'boxSizing',
        componentType: 'select',
        name: '盒子类型',
        options: [
            {
                value: "content-box",
                label: "标准盒"
            },
            {
                value: "border-box",
                label: "怪异盒"
            },
        ]
    },
    {
        type: 'float',
        componentType: 'select',
        name: '浮动',
        options: [
            {
                value: "left",
                label: "左浮动"
            },
            {
                value: "right",
                label: "右浮动"
            },
        ]
    },
    {
        type: 'overflow',
        componentType: 'select',
        name: '溢出',
        options: [
            {
                value: 'visible',
                label: '可见'
            },
            {
                value: 'hidden',
                label: '隐藏'
            },
            {
                value: 'scroll',
                label: '滚动'
            },
            {
                value: 'auto',
                label: '自动'
            },
        ]

    },
    {
        type: 'fontSize',
        componentType: 'inputNumber',
        name: '字体大小',
        addonAfter: 'px'
    },
    {
        type: 'textAlign',
        componentType: 'select',
        name: '文字位置',
        options: [
            {
                value: 'center',
                label: '居中'
            },
            {
                value: 'left',
                label: '左对齐'
            },
            {
                value: 'right',
                label: '右对齐'
            },
            {
                value: 'justify',
                label: '两端对齐'
            },
            {
                value: 'start',
                label: '对齐开始'
            },
            {
                value: 'end',
                label: '对齐结尾'
            }
        ]
    },
    {
        type: 'color',
        componentType: 'colorPicker',
        name: '字体颜色',
        defaultValue: '#000000'
    },
    {
        type: 'fontFamily',
        componentType: 'select',
        name: '字体',
        options: [
            {
                value: "Courier New, Courier, monospace",
                label: "Courier New, Courier, monospace"
            },
            {
                value: "Franklin Gothic Medium, 'Arial Narrow', Arial, sans-serif",
                label: "Franklin Gothic Medium, 'Arial Narrow', Arial, sans-serif"
            },
            {
                value: "Gill Sans, Gill Sans MT, Calibri, 'Trebuchet MS', sans-serif",
                label: "Gill Sans, Gill Sans MT, Calibri, 'Trebuchet MS', sans-serif"
            },


            {
                value: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
                label: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
            },
            {
                value: "Times New Roman', Times, serif",
                label: "Times New Roman', Times, serif"
            },
            {
                value: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                label: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
            },
            {
                value: "Arial, Helvetica, sans-serif",
                label: "Arial, Helvetica, sans-serif"
            },
            {
                value: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                label: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
            },
            {
                value: "Georgia, 'Times New Roman', Times, serif",
                label: "Georgia, 'Times New Roman', Times, serif"
            },
            {
                value: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                label: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
            },
            {
                value: "Verdana, Geneva, Tahoma, sans-serif",
                label: "Verdana, Geneva, Tahoma, sans-serif"
            },
        ]
    },
    {
        type: 'fontWeight',
        componentType: 'select',
        name: '字体粗细',
        options: [
            {
                value: "100",
                label: "100"
            },
            {
                value: "200",
                label: "200"
            },
            {
                value: "300",
                label: "300"
            },
            {
                value: "400",
                label: "400"
            },
            {
                value: "500",
                label: "500"
            },
            {
                value: "600",
                label: "600"
            },
            {
                value: "700",
                label: "700"
            },
            {
                value: "800",
                label: "800"
            },
            {
                value: "900",
                label: "900"
            },
            {
                value: "bold",
                label: "粗体"
            },
            {
                value: "bolder",
                label: "粗粗体"
            },
            {
                value: "lighter",
                label: "淡体"
            },
            {
                value: "normal",
                label: "普通"
            },
        ]
    },
    {
        type: 'fontStyle',
        componentType: 'select',
        name: '字体风格',
        options: [
            {
                value: "normal",
                label: "标准"
            },
            {
                value: "italic",
                label: "斜体"
            },
            {
                value: "oblique",
                label: "倾斜"
            },
        ]
    },
    {
        type: 'lineHeight',
        componentType: 'inputNumber',
        name: '字体高度',
        addonAfter: 'px'
    },


    {
        type: 'background',
        componentType: 'input',
        name: '背景',
    },

    {
        type: 'backgroundColor',
        componentType: 'colorPicker',
        name: '背景颜色',
        defaultValue: '#FFFFFF'
    },
    {
        type: 'backgroundPosition',
        componentType: 'select',
        name: '背景位置',
        options: [
            {
                value: "top left",
                label: "上左"
            },
            {
                value: "top center",
                label: "上中"
            },
            {
                value: "top right",
                label: "上右"
            },


            {
                value: "center left",
                label: "中左"
            },
            {
                value: "center center",
                label: "中中"
            },
            {
                value: "center right",
                label: "中右"
            },
            {
                value: "bottom left",
                label: "下左"
            },
            {
                value: "bottom center",
                label: "下中"
            },
            {
                value: "bottom right",
                label: "下右"
            },
        ]
    },
    // todo
    // {
    //     type: 'backgroundPosition',
    //     componentType: 'input',
    //     name: '背景位置',
    // },
    {
        type: 'backgroundImage',
        componentType: 'input',
        name: '背景图片',
    },

    {
        type: 'margin',
        componentType: 'input',
        name: '外边距',
    },
    {
        type: 'padding',
        componentType: 'input',
        name: '内边距',
    },
    {
        type: 'border',
        componentType: 'input',
        name: '边框',
    },

    {
        type: 'marginTop',
        componentType: 'inputNumber',
        name: '上外边距',
        addonAfter: 'px'
    },
    {
        type: 'marginLeft',
        componentType: 'inputNumber',
        name: '左外边距',
        addonAfter: 'px'
    },
    {
        type: 'marginRight',
        componentType: 'inputNumber',
        name: '右外边距',
        addonAfter: 'px'
    },
    {
        type: 'marginBottom',
        componentType: 'inputNumber',
        name: '下外边距',
        addonAfter: 'px'
    },


    {
        type: 'paddingTop',
        componentType: 'inputNumber',
        name: '上内边距',
        addonAfter: 'px'
    },
    {
        type: 'paddingLeft',
        componentType: 'inputNumber',
        name: '左内边距',
        addonAfter: 'px'
    },
    {
        type: 'paddingRight',
        componentType: 'inputNumber',
        name: '右内边距',
        addonAfter: 'px'
    },
    {
        type: 'paddingBottom',
        componentType: 'inputNumber',
        name: '下内边距',
        addonAfter: 'px'
    },
    {
        type: 'borderWidth',
        componentType: 'inputNumber',
        name: '边距宽度',
        addonAfter: 'px'
    },
    {
        type: 'borderStyle',
        componentType: 'select',
        name: '边距样式',
        options: [
            {
                value: "none",
                label: "无边框"
            },
            {
                value: "hidden",
                label: "隐藏边框"
            },
            {
                value: "solid",
                label: "实线边框"
            },
            {
                value: "dashed",
                label: "虚线边框"
            },
            {
                value: "dotted",
                label: "点状边框"
            },
            {
                value: "double",
                label: "双线边框"
            },
        ]
    },
    {
        type: 'borderColor',
        componentType: 'colorPicker',
        name: '边距颜色',
        defaultValue: '#000000'
    },

    {
        type: 'borderRadius',
        componentType: 'inputNumber',
        name: '圆角宽度',
        addonAfter: 'px'
    },
    {
        type: 'position',
        componentType: 'select',
        name: '定位',
        options: [
            {
                value: "static",
                label: "无定位"
            },
            {
                value: "relative",
                label: "相对定位"
            },
            {
                value: "absolute",
                label: "绝对定位"
            },
            {
                value: "fixed",
                label: "固定定位"
            },
            {
                value: "sticky",
                label: "粘性定位"
            },
        ]
    },
    {
        type: 'top',
        componentType: 'inputNumber',
        name: '上',
        addonAfter: 'px'
    },
    {
        type: 'bottom',
        componentType: 'inputNumber',
        name: '下',
        addonAfter: 'px'
    },
    {
        type: 'left',
        componentType: 'inputNumber',
        name: '左',
        addonAfter: 'px'
    },
    {
        type: 'right',
        componentType: 'inputNumber',
        name: '右',
        addonAfter: 'px'
    },

    {
        type: 'flex',
        componentType: 'input',
        name: '弹性长度',
    },
    {
        type: 'flexShrink',
        componentType: 'inputNumber',
        name: '弹性收缩',
    },
    {
        type: 'flexGrow',
        componentType: 'inputNumber',
        name: '弹性伸张',
    },
    {
        type: 'flexBasis',
        componentType: 'inputNumber',
        name: '弹性初始长度',
        addonAfter: 'px'
    },
    {
        type: 'flexDirection',
        componentType: 'select',
        name: '弹性方向',
        options: [
            {
                value: "row",
                label: "行"
            },
            {
                value: "row-reverse",
                label: "反行"
            },
            {
                value: "column",
                label: "列"
            },
            {
                value: "column-reverse",
                label: "反列"
            }
        ]

    },
    {
        type: 'flexWrap',
        componentType: 'select',
        name: '弹性换行',
        options: [
            {
                value: "nowrap",
                label: "不换行"
            },
            {
                value: "nowrap",
                label: "换行"
            },
            {
                value: "wrap-reverse",
                label: "换行反向"
            }
        ]
    },
    {
        type: 'justifyContent',
        componentType: 'select',
        name: '主轴线排列',
        options: [
            {
                value: "flex-start",
                label: "头部开始"
            },
            {
                value: "flex-end",
                label: "尾部开始"
            },
            {
                value: "center",
                label: "居中"
            },
            {
                value: "space-between",
                label: "间隔"
            },
            {
                value: "space-around",
                label: "环绕"
            },
        ]
    },
    {
        type: 'justifyItems',
        componentType: 'select',
        name: '主轴项目排列',
        options: [
            {
                value: "start",
                label: "起始对齐"
            },
            {
                value: "end",
                label: "尾部对齐"
            },
            {
                value: "center",
                label: "居中"
            },
            {
                value: "stretch",
                label: "填充"
            },
            {
                value: "baseline",
                label: "基线对齐"
            },
        ]
    },
    {
        type: 'alignContent',
        componentType: 'select',
        name: '副轴线排列',
        options: [
            {
                value: "flex-start",
                label: "头部开始"
            },
            {
                value: "flex-end",
                label: "尾部开始"
            },
            {
                value: "center",
                label: "居中"
            },
            {
                value: "space-between",
                label: "间隔"
            },
            {
                value: "space-around",
                label: "环绕"
            },
        ]
    },
    {
        type: 'alignItems',
        componentType: 'select',
        name: '副轴项目排列',
        options: [
            {
                value: "start",
                label: "起始对齐"
            },
            {
                value: "end",
                label: "尾部对齐"
            },
            {
                value: "center",
                label: "居中"
            },
            {
                value: "stretch",
                label: "填充"
            },
            {
                value: "baseline",
                label: "基线对齐"
            },
        ]
    },

    {
        type: 'transition',
        componentType: 'input',
        name: '过渡',
    },
    {
        type: 'transform',
        componentType: 'input',
        name: '转换',
    },    
]
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
        defaultValue:'#000000'
    },
    {
        type: 'backgroundColor',
        componentType: 'colorPicker',
        name: '背景颜色',
        defaultValue:'#FFFFFF'
    },
]
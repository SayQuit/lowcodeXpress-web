export const attrGroup = [
    {
        type: 'children',
        componentType: 'input',
        name: '文本',
    },
    {
        type: 'html',
        componentType: 'input',
        name: '超文本',
    },
    {
        type: 'src',
        componentType: 'input',
        name: '资源链接',
    },
    {
        type: 'href',
        componentType: 'input',
        name: '跳转链接',
    },
    {
        type: 'controls',
        componentType: 'checkout',
        name: '视频控制',
    },
    {
        type: 'autoPlay',
        componentType: 'checkout',
        name: '视频自动播放',
    },
    {
        type: 'loop',
        componentType: 'checkout',
        name: '视频循环播放',
    },
    {
        type: 'type',
        componentType: 'select',
        name: '按钮类型',
        options: [
            {
                value: 'primary',
                label: '主要'
            },
            {
                value: 'dashed',
                label: '虚线'
            },
            {
                value: 'link',
                label: '链接'
            },
            {
                value: 'text',
                label: '文本'
            },
            {
                value: 'default',
                label: '默认'
            },
            {
                value: 'navigation',
                label: '全宽'
            },
            {
                value: 'inline',
                label: '行内'
            },
            {
                value: 'line',
                label: '线'
            },
            {
                value: 'circle',
                label: '环'
            },
            {
                value: 'dashboard',
                label: '仪表板'
            },
        ]
    },
    {
        type: 'danger',
        componentType: 'checkout',
        name: '危险',
    },
    {
        type: 'disabled',
        componentType: 'checkout',
        name: '禁用',
    },
    {
        type: 'loading',
        componentType: 'checkout',
        name: '加载中',
    },
    {
        type: 'size',
        componentType: 'select',
        name: '形状',
        options: [
            {
                value: 'small',
                label: '小'
            },
            {
                value: 'middle',
                label: '中'
            },
            {
                value: 'large',
                label: '大'
            },
        ]
    },
    {
        type: 'checked',
        componentType: 'checkout',
        name: '选中',
    },
    {
        type: 'defaultChecked',
        componentType: 'checkout',
        name: '默认选中',
    },
    {
        type: 'defaultValue',
        componentType: 'input',
        name: '默认值',
    },
    {
        type: 'maxLength',
        componentType: 'inputNumber',
        name: '最大长度',
    },
    {
        type: 'showCount',
        componentType: 'checkout',
        name: '显示字数',
    },
    {
        type: 'value',
        componentType: 'input',
        name: '值',
    },
    {
        type: 'current',
        componentType: 'inputNumber',
        name: '目前序号',
    },
    {
        type: 'direction',
        componentType: 'select',
        name: '方向',
        options: [
            {
                value: 'horizontal',
                label: '水平'
            },
            {
                value: 'vertical',
                label: '垂直'
            }
        ]
    },
    {
        type: 'initial',
        componentType: 'inputNumber',
        name: '起始序号',
    },
    {
        type: 'labelPlacement',
        componentType: 'select',
        name: '标签放置位置',
        options: [
            {
                value: 'horizontal',
                label: '水平'
            },
            {
                value: 'vertical',
                label: '垂直'
            }
        ]
    },
    {
        type: 'percent',
        componentType: 'inputNumber',
        name: '进度',
    },
    {
        type: 'progressDot',
        componentType: 'checkout',
        name: '点状',
    },
    {
        type: 'items',
        componentType: 'inputJSON',
        name: '子元素',
    },
    {
        type: 'allowClear',
        componentType: 'checkout',
        name: '允许清除',
    },
    {
        type: 'notFoundContent',
        componentType: 'input',
        name: '空内容',
    },
    {
        type: 'options',
        componentType: 'inputJSON',
        name: '选项',
    },
    {
        type: 'placeholder',
        componentType: 'input',
        name: '占位文本',
    },
    {
        type: 'placement',
        componentType: 'select',
        name: '浮层预设位置',
        options: [
            {
                value: 'bottomLeft',
                label: '左下'
            },
            {
                value: 'bottomRight',
                label: '右下'
            },
            {
                value: 'topLeft',
                label: '左上'
            },
            {
                value: 'topRight',
                label: '右上'
            },
            {
                value: 'top',
                label: '上'
            },
            {
                value: 'bottom',
                label: '下'
            },
        ]
    },
    {
        type: 'showSearch',
        componentType: 'checkout',
        name: '展示搜索',
    },
    {
        type: 'searchValue',
        componentType: 'input',
        name: '搜索值',
    },
    {
        type: 'multiple',
        componentType: 'checkout',
        name: '多选',
    },
    {
        type: 'defaultFormat',
        componentType: 'select',
        name: '默认颜色格式',
        options: [
            {
                value: 'rgb',
                label: 'rgb'
            },
            {
                value: 'hex',
                label: 'hex'
            },
            {
                value: 'hsb',
                label: 'hsb'
            },
        ]
    },
    {
        type: 'format',
        componentType: 'select',
        name: '颜色格式',
        options: [
            {
                value: 'rgb',
                label: 'rgb'
            },
            {
                value: 'hex',
                label: 'hex'
            },
            {
                value: 'hsb',
                label: 'hsb'
            },
        ]
    },
    {
        type: 'showText',
        componentType: 'checkout',
        name: '显示颜色文本',
    },
    {
        type: 'mode',
        componentType: 'select',
        name: '模式',
        options: [
            {
                value: 'left',
                label: '左'
            },
            {
                value: 'alternate',
                label: '交替'
            },
            {
                value: 'right',
                label: '右'
            },
            {
                value: 'time',
                label: '时间'
            },
            {
                value: '日期',
                label: 'date'
            },
            {
                value: 'month',
                label: '月份'
            },
            {
                value: 'year',
                label: '年份'
            },
            {
                value: 'decade',
                label: '十年'
            },
        ]
    },
    {
        type: 'showNow',
        componentType: 'checkout',
        name: '显示现在',
    },
    {
        type: 'showTime',
        componentType: 'checkout',
        name: '显示时间',
    },
    {
        type: 'showWeek',
        componentType: 'checkout',
        name: '显示星期',
    },
    {
        type: 'max',
        componentType: 'inputNumber',
        name: '最大值',
    },
    {
        type: 'min',
        componentType: 'inputNumber',
        name: '最小值',
    },
    {
        type: 'steps',
        componentType: 'input',
        name: '步数',
    },
    {
        type: 'count',
        componentType: 'inputNumber',
        name: '数量',
    },
    {
        type: 'maxCount',
        componentType: 'inputNumber',
        name: '最大数量',
    },
    {
        type: 'defaultActiveKey',
        componentType: 'input',
        name: '默认key',
    },
    {
        type: 'activeKey',
        componentType: 'input',
        name: '选中key',
    },
    {
        type: 'centered',
        componentType: 'checkout',
        name: '中间放置',
    },
    {
        type: 'tabPositon',
        componentType: 'select',
        name: '模式',
        options: [
            {
                value: 'top',
                label: '上'
            },
            {
                value: 'bottom',
                label: '下'
            },
            {
                value: 'left',
                label: '左'
            },
            {
                value: 'right',
                label: '右'
            }
        ]
    },
    {
        type: 'column',
        componentType: 'inputNumber',
        name: '一行数量',
    },
    {
        type: 'layout',
        componentType: 'select',
        name: '放置方向',
        options: [
            {
                value: 'horizontal',
                label: '水平'
            },
            {
                value: 'vertical',
                label: '垂直'
            }
        ]
    },
    {
        type: 'description',
        componentType: 'input',
        name: '内容',
    },
    {
        type: 'preview',
        componentType: 'checkout',
        name: '预览',
    },
    {
        type: 'color',
        componentType: 'colorPicker',
        name: '颜色',
    },
    {
        type: 'reverse',
        componentType: 'checkout',
        name: '反序',
    },
    {
        type: 'dataSource',
        componentType: 'inputJSON',
        name: '数据元',
    },
    {
        type: 'columns',
        componentType: 'inputJSON',
        name: '表头',
    },
    {
        type: 'percent',
        componentType: 'inputNumber',
        name: '百分比',
    },
    {
        type: 'strokeColor',
        componentType: 'colorPicker',
        name: '进度条颜色',
    },
    {
        type: 'trailColor',
        componentType: 'colorPicker',
        name: '未完成分段颜色',
    },
    {
        type: 'showInfo',
        componentType: 'checkout',
        name: '展示数值或图标',
    },
    {

        type: 'strokeLinecap',
        componentType: 'select',
        name: '进度条样式',
        options: [{
            value: 'round',
            label: '圆'
        },
        {
            value: 'butt',
            label: '靶'
        },
        {
            value: 'square',
            label: '正方形'
        }]
    },
    {
        type: 'delay',
        componentType: 'inputNumber',
        name: '延迟',
    },
    {
        type: 'spinning',
        componentType: 'checkout',
        name: '加载中',
    },
    {
        type: 'fullscreen',
        componentType: 'checkout',
        name: '全屏加载',
    },

]
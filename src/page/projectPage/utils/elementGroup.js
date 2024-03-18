import {
    Button as AntButton,
    Checkbox as AntCheckbox,
    Input as AntInput,
    Steps as AntSteps,
    Cascader as AntCascader,
    ColorPicker as AntColorPicker,
    DatePicker as AntDatePicker,
    InputNumber as AntInputNumber,
    Rate as AntRate,
    Select as AntSelect,
    Switch as AntSwitch,
    TimePicker as AntTimePicker,
    Collapse as AntCollapse,
    Descriptions as AntDescriptions,
    Empty as AntEmpty,
    Image as AntImage,
    Table as AntTable,
    Tag as AntTag,
    Timeline as AntTimeline,
    Progress as AntProgress,
    Spin as AntSpin,

} from 'antd';

import {
    FontSizeOutlined,
    BoldOutlined,
    FileImageOutlined,
    LinkOutlined,
    VideoCameraOutlined,
    ContainerOutlined,
    UnorderedListOutlined,
    SolutionOutlined,
    FileImageTwoTone,
    BorderOutlined,
    TableOutlined,
    LineHeightOutlined,
    RetweetOutlined
} from '@ant-design/icons';

import EchartsGraph from '../../../component/echartsGraph'


export const elementGroup = [
    {
        title: '基础组件',
        type: 'basic',
        items: [
            {
                name: '容器',
                type: 'container',
                icon: <ContainerOutlined />,
                getComponent: () => {
                    return ''
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '循环渲染',
                type: 'circle',
                icon: <RetweetOutlined />,
                getComponent: () => {
                    return ''
                },
                styleSelector: [],
                attrSelector: [],
                default: {},
            },
        ]
    },
    {
        title: '浏览器标签',
        type: 'web',
        items: [
            {
                name: '文本',
                type: 'div',
                icon: <FontSizeOutlined />,
                getComponent: () => {
                    return <div></div>
                },
                styleSelector: [],
                attrSelector: ['children', 'html'],
                default: {
                    children: '文本'
                }
            },
            {
                name: '按钮',
                type: 'button',
                icon: <BoldOutlined />,
                getComponent: () => {
                    return <button></button>
                },
                styleSelector: [],
                attrSelector: ['children'],
                default: {
                    children: '按钮'
                }
            },
            {
                name: '图片',
                type: 'img',
                icon: <FileImageOutlined />,
                getComponent: () => {
                    return <img alt="" />
                },
                styleSelector: [],
                attrSelector: ['src'],
                default: {
                    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                }
            },
            {
                name: '链接',
                type: 'a',
                icon: <LinkOutlined />,
                getComponent: () => {
                    return <a href='/'> </a>
                },
                styleSelector: [],
                attrSelector: ['children', 'href'],
                default: {
                    href: '/',
                    children: '链接'
                }

            },
            {
                name: '视频',
                type: 'video',
                icon: <VideoCameraOutlined />,
                getComponent: () => {
                    return <video></video>
                },
                styleSelector: [],
                attrSelector: ['src', 'autoPlay', 'controls', 'loop'],
                default: {
                    src: 'https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/skypixel-2024/PC.mp4',
                    controls: true,
                    autoPlay: true
                }
            }
        ]
    },
    {
        title: '微信小程序标签',
        type: 'wechat mini program',
        items: [
            {
                name: '文本',
                type: 'wxml',
                icon: <FontSizeOutlined />,
                getComponent: () => {
                    return <div></div>
                },
                styleSelector: [],
                attrSelector: ['children', 'html'],
                default: {
                    children: '文本'
                }
            },
            {
                name: '图片',
                type: 'image',
                icon: <FileImageOutlined />,
                getComponent: () => {
                    return <img alt="" />
                },
                styleSelector: [],
                attrSelector: ['src'],
                default: {
                    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                }
            },
            {
                name: '视频',
                type: 'video',
                icon: <VideoCameraOutlined />,
                getComponent: () => {
                    return <video></video>
                },
                styleSelector: [],
                attrSelector: ['src', 'controls', 'loop'],
                default: {
                    src: 'https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/skypixel-2024/PC.mp4',
                    controls: true,
                    autoPlay: true
                }
            }
        ]
    },

    {
        title: 'ant-design 组件',
        type: 'ant-design',
        items: [
            {
                name: '按钮',
                type: 'ant-button',
                icon: <AntButton type='primary' size='small'>Button</AntButton>,
                getComponent: () => {
                    return <AntButton></AntButton>
                },
                styleSelector: [],
                attrSelector: ['children', 'type', 'danger', 'disabled', 'loading', 'size'],
                default: {
                    children: 'Button',
                    type: 'primary',
                }
            },
            {
                name: '选框',
                type: 'ant-checkbox',
                icon: <AntCheckbox checked={true}></AntCheckbox>,
                getComponent: () => {
                    return <AntCheckbox></AntCheckbox>
                },
                styleSelector: [],
                attrSelector: ['checked', 'defaultChecked', 'disabled'],
                default: {}
            },
            {
                name: '输入框',
                type: 'ant-input',
                icon: <AntInput placeholder='Input' size='small'></AntInput>,
                getComponent: () => {
                    return <AntInput></AntInput>
                },
                styleSelector: [],
                attrSelector: ['defaultValue', 'disabled', 'maxLength', 'showCount', 'size', 'value'],
                default: {}
            },
            {
                name: '步骤条',
                type: 'ant-steps',
                icon: <AntSteps size='small' items={[{}]}></AntSteps>,
                getComponent: () => {
                    return <AntSteps />
                },
                styleSelector: [],
                attrSelector: ['current', 'direction', 'initial', 'labelPlacement', 'percent', 'size', 'progressDot', 'type', 'items'],
                default: {
                    current: 1,
                    items:
                        [
                            {
                                title: 'Finished',
                            },
                            {
                                title: 'In Progress',
                                subTitle: 'Left 00:00:08',
                            },
                            {
                                title: 'Waiting',
                            },
                        ]
                }
            },
            {
                name: '级联',
                type: 'ant-cascader',
                icon: <AntCascader placeholder="Cascader" size='small' />,
                getComponent: () => {
                    return <AntCascader />
                },
                styleSelector: [],
                attrSelector: ['allowClear', 'defaultValue', 'disabled', 'notFoundContent', 'options', 'placeholder', 'placement', 'showSearch', 'size', 'value', 'multiple', 'searchValue'],
                default: {
                    options: [
                        {
                            value: 'zhejiang',
                            label: 'Zhejiang',
                            children: [
                                {
                                    value: 'hangzhou',
                                    label: 'Hangzhou',
                                },
                            ],
                        },
                        {
                            value: 'jiangsu',
                            label: 'Jiangsu',
                            children: [
                                {
                                    value: 'nanjing',
                                    label: 'Nanjing',
                                },
                            ],
                        },
                    ]
                }
            },
            {
                name: '颜色',
                type: 'ant-colorpicker',
                icon: <AntColorPicker defaultValue="#1677ff" size='small' />,
                getComponent: () => {
                    return <AntColorPicker />
                },
                styleSelector: [],
                attrSelector: ['allowClear', 'defaultValue', 'defaultFormat', 'disabled', 'destoryTooltipOnHide', 'format', 'placement', 'showText', 'size', 'value'],
                default: {
                    defaultValue: "#1677ff"
                }
            },
            {
                name: '日期',
                type: 'ant-datepicker',
                icon: <AntDatePicker />,
                getComponent: () => {
                    return <AntDatePicker />
                },
                styleSelector: [],
                attrSelector: ['allowClear', 'disabled', 'mode', 'picker', 'placeholder', 'placement', 'size', 'multiple', 'showNow', 'showTime', 'showWeek'],
                default: {}
            },
            {
                name: '数字输入',
                type: 'ant-inputnumber',
                icon: <AntInputNumber size='small' />,
                getComponent: () => {
                    return <AntInputNumber />
                },
                styleSelector: [],
                attrSelector: ['placeholder', 'defaultValue', 'disabled', 'max', 'min', 'readOnly', 'size', 'steps', 'value'],
                default: {}
            },
            {
                name: '评分',
                type: 'ant-rate',
                icon: <AntRate value={5} />,
                getComponent: () => {
                    return <AntRate />
                },
                styleSelector: [],
                attrSelector: ['allowClear', 'allowFocus', 'count', 'defaultValue', 'disabled', 'value'],
                default: {}
            },
            {
                name: '选项',
                type: 'ant-select',
                icon: <AntSelect placeholder="Select" size='small' />,
                getComponent: () => {
                    return <AntSelect />
                },
                styleSelector: [],
                attrSelector: ['allowClear', 'defaultValue', 'disabled', 'options', 'placeholder', 'placement', 'showSearch', 'showSearrch', 'size', 'value', 'loading'],
                default: {
                    options: [{ value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },]
                }
            },
            {
                name: '开关',
                type: 'ant-switch',
                icon: <AntSwitch size='small' />,
                getComponent: () => {
                    return <AntSwitch />
                },
                styleSelector: [],
                attrSelector: ['checked', 'defaultChecked', 'defaultValue', 'disabled', 'size', 'loading', 'value'],
                default: {}
            },
            {
                name: '时间',
                type: 'ant-timepicker',
                icon: <AntTimePicker />,
                getComponent: () => {
                    return <AntTimePicker />
                },
                styleSelector: [],
                attrSelector: ['disabled', 'placeholder', 'placement', 'size', 'showNow'],
                default: {}
            },
            {
                name: '折叠',
                type: 'ant-collapse',
                icon: <UnorderedListOutlined />,
                getComponent: () => {
                    return <AntCollapse />
                },
                styleSelector: [],
                attrSelector: ['defaultActiveKey', 'activeKey', 'centered', 'size', 'tabPositon', 'items'],
                default: {
                    items: [{
                        key: '1',
                        label: 'This is panel header 1',
                        children: '1',
                    },
                    {
                        key: '2',
                        label: 'This is panel header 2',
                        children: '2',
                    },
                    {
                        key: '3',
                        label: 'This is panel header 3',
                        children: '3',
                    }]
                }
            },
            {
                name: '描述',
                type: 'ant-descriptions',
                icon: <SolutionOutlined />,
                getComponent: () => {
                    return <AntDescriptions title="User Info" />;
                },
                styleSelector: [],
                attrSelector: ['column', 'items', 'layout', 'size', 'title'],
                default: {
                    items: [{
                        key: '1',
                        label: 'UserName',
                        children: 1,
                    },
                    {
                        key: '2',
                        label: 'Telephone',
                        children: 2,
                    }]
                }
            },
            {
                name: '空页',
                type: 'ant-empty',
                icon: <BorderOutlined />,
                getComponent: () => {
                    return <AntEmpty />;
                },
                styleSelector: [],
                attrSelector: ['description'],
                default: {}
            },
            {
                name: '图片',
                type: 'ant-image',
                icon: <FileImageTwoTone />,
                getComponent: () => {
                    return <AntImage
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                },
                styleSelector: [],
                attrSelector: ['preview', 'src'],
                default: {}
            },
            {
                name: '表格',
                type: 'ant-table',
                icon: <TableOutlined />,
                getComponent: () => {
                    return <AntTable />;
                },
                styleSelector: [],
                attrSelector: ['dataSource', 'columns'],
                default: {
                    dataSource: [
                        {
                            key: '1',
                            name: '胡彦斌',
                            age: 32,
                            address: '西湖区湖底公园1号',
                        },
                        {
                            key: '2',
                            name: '胡彦祖',
                            age: 42,
                            address: '西湖区湖底公园1号',
                        },
                    ],

                    columns: [
                        {
                            title: '姓名',
                            dataIndex: 'name',
                            key: 'name',
                        },
                        {
                            title: '年龄',
                            dataIndex: 'age',
                            key: 'age',
                        },
                        {
                            title: '住址',
                            dataIndex: 'address',
                            key: 'address',
                        },
                    ]
                }
            },
            {
                name: '标签',
                type: 'ant-tag',
                icon: <AntTag color="#87d068">TAG</AntTag>,
                getComponent: () => {
                    return <AntTag></AntTag>
                },
                styleSelector: [],
                attrSelector: ['color', 'children'],
                default: {
                    children: 'TAG',
                }
            },
            {
                name: '时间线',
                type: 'ant-timeline',
                icon: <LineHeightOutlined />,
                getComponent: () => {
                    return <AntTimeline />
                },
                styleSelector: [],
                attrSelector: ['items', 'reverse'],
                default: {
                    items: [{ children: 'Create a services site 2015-09-01', }, { children: 'Solve initial network problems 2015-09-01', }, { children: 'Technical testing 2015-09-01', }, { children: 'Network problems being solved 2015-09-01', },]
                }
            },
            {
                name: '进度条',
                type: 'ant-progress',
                icon: <AntProgress percent={30} />,
                getComponent: () => {
                    return <AntProgress percent={30} />
                },
                styleSelector: [],
                attrSelector: ['percent', 'showInfo', 'strokeColor', 'size', 'type', 'trailColor', 'strokeLinecap'],
                default: {

                }
            },
            {
                name: '加载中',
                type: 'ant-spin',
                icon: <AntSpin />,
                getComponent: () => {
                    return <AntSpin />
                },
                styleSelector: [],
                attrSelector: ['delay', 'size', 'spinning', 'fullscreen'],
                default: {}
            },
        ]

    },
    {

        title: 'Echarts 图表组件',
        type: 'echarts',
        items: [
            {
                name: '折线图',
                type: 'echarts-line',
                icon: <EchartsGraph echartsStyle={{ width: '50px', height: '50px' }} option={{ xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu'] }, yAxis: { type: 'value', min: 50, max: 250, axisLine: { show: false }, axisTick: { show: false }, splitLine: { show: false } }, series: [{ data: [130, 150, 104, 111], type: 'line' }] }} />,
                getComponent: () => {
                    return <EchartsGraph />
                },
                styleSelector: [],
                attrSelector: [],
                default: {
                    option: {
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                        },
                        yAxis: {
                            type: 'value',
                        },
                    },
                }
            },
            {
                name: '柱状图',
                type: 'echarts-bar',
                icon: <EchartsGraph echartsStyle={{ width: '50px', height: '50px' }} option={{ xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu'] }, yAxis: { type: 'value', min: 50, max: 250, axisLine: { show: false }, axisTick: { show: false }, splitLine: { show: false } }, series: [{ data: [130, 150, 104, 111], type: 'bar' }] }} />,
                getComponent: () => {
                    return <EchartsGraph />
                },
                styleSelector: [],
                attrSelector: [],
                default: {
                    option: {
                        xAxis: {
                            type: 'category',
                        },
                        yAxis: {
                            type: 'value',
                        },
                        series: [{ type: 'bar' }]
                    },
                }
            },

            {
                name: '散点图',
                type: 'echarts-scatter',
                icon: <EchartsGraph echartsStyle={{ width: '50px', height: '50px' }} option={{ xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu'] }, yAxis: { type: 'value', min: 50, max: 250, axisLine: { show: false }, axisTick: { show: false }, splitLine: { show: false } }, series: [{ data: [130, 150, 104, 111], type: 'scatter' }] }} />,
                getComponent: () => {
                    return <EchartsGraph />
                },
                styleSelector: [],
                attrSelector: [],
                default: {
                    option: {
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                        },
                        yAxis: {
                            type: 'value',
                        },
                        series: [{ type: 'scatter' }]
                    },
                }
            },

            {
                name: '饼状图',
                type: 'echarts-pie',
                icon: <EchartsGraph echartsStyle={{ width: '50px', height: '50px' }} option={{ xAxis: {}, yAxis: { axisLine: { show: false }, axisTick: { show: false } }, series: [{ data: [{ value: 1048, name: 'Search Engine' }, { value: 735, name: 'Direct' }, { value: 580, name: 'Email' }], type: 'pie' }] }} />,
                getComponent: () => {
                    return <EchartsGraph />
                },
                styleSelector: [],
                attrSelector: [],
                default: {
                    option: {
                        xAxis: {
                            type: 'category',
                            axisLine: { show: false }, axisTick: { show: false }
                        },
                        yAxis: {
                            type: 'value',
                        },
                        series: [{ type: 'pie' }]
                    },
                }
            }
        ]
    }
]

const getElementMap = () => {
    const map = {}
    elementGroup.forEach((item) => {
        item.items.forEach((value) => {
            map[value.type] = value
        })
    })
    return map
}
export const elementMap = getElementMap()
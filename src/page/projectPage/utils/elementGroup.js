import {
    Button as AntButton,
    Checkbox as AntCheckbox,
    Input as AntInput,
    Divider as AntDivider,
    Steps as AntSteps,
    Cascader as AntCascader,
    ColorPicker as AntColorPicker,
    DatePicker as AntDatePicker,
    InputNumber as AntInputNumber,
    Rate as AntRate,
    Select as AntSelect,
    Slider as AntSlider,
    Switch as AntSwitch,
    TimePicker as AntTimePicker,
    Transfer as AntTransfer,
    TreeSelect as AntTreeSelect,
    Calendar as AntCalendar,
    Card as AntCard,
    Collapse as AntCollapse,
    Descriptions as AntDescriptions,
    Empty as AntEmpty,
    Image as AntImage,
    QRCode as AntQRCode,
    Statistic as AntStatistic,
    Table as AntTable,
    Tag as AntTag,
    Timeline as AntTimeline,
    Tree as AntTree,
    Alert as AntAlert,
    Progress as AntProgress,
    Result as AntResult,
    Skeleton as AntSkeleton,
    Spin as AntSpin,

} from 'antd';

import {
    FontSizeOutlined,
    BoldOutlined,
    FileImageOutlined,
    LinkOutlined,
    VideoCameraOutlined,
    ContainerOutlined,
    SwapOutlined,
    NumberOutlined,
    CreditCardOutlined,
    UnorderedListOutlined,
    SolutionOutlined,
    FileImageTwoTone,
    QrcodeOutlined,
    BorderOutlined,
    OrderedListOutlined,
    TableOutlined,
    LineHeightOutlined,
    HeatMapOutlined,
    CheckCircleOutlined,
    SketchOutlined,
    RetweetOutlined
} from '@ant-design/icons';

import {
    Button as EuiButton,
} from 'element-react';

const dataSource = [
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
];

const columns = [
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
];

const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                    {
                        title: (
                            '1'
                        ),
                        key: '0-0-1-0',
                    },
                ],
            },
        ],
    },
];

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
                type: 'text',
                icon: <FontSizeOutlined />,
                getComponent: () => {
                    return <div></div>
                },
                styleSelector: ['display', 'width', 'height', 'fontSize', 'textAlign', 'color', 'backgroundColor'],
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
                styleSelector: ['display', 'width', 'height', 'fontSize', 'color', 'backgroundColor'],
                attrSelector: ['children'],
                default: {
                    children: '按钮'
                }
            },
            {
                name: '图片',
                type: 'image',
                icon: <FileImageOutlined />,
                getComponent: () => {
                    return <img alt="" />
                },
                styleSelector: ['display', 'width', 'height'],
                attrSelector: ['src'],
                default: {
                    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                }
            },
            {
                name: '链接',
                type: 'link',
                icon: <LinkOutlined />,
                getComponent: () => {
                    return <a href='/'> </a>
                },
                styleSelector: ['display', 'width', 'height', 'fontSize', 'textAlign', 'color', 'backgroundColor'],
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
                styleSelector: ['display', 'width', 'height'],
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
        title: 'ANTD组件',
        type: 'ant-design',
        items: [
            {
                name: '按钮',
                type: 'ant-button',
                icon: <AntButton type='primary' size='small'>Button</AntButton>,
                getComponent: () => {
                    return <AntButton type='primary'>Button</AntButton>
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '选框',
                type: 'ant-checkbox',
                icon: <AntCheckbox checked={true}></AntCheckbox>,
                getComponent: () => {
                    return <AntCheckbox></AntCheckbox>
                },
                styleSelector: [],
                attrSelector: [],
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
                attrSelector: [],
                default: {}
            },
            {
                name: '分割线',
                type: 'ant-devider',
                icon:
                    <AntDivider
                        style={{
                            border: '1px solid',
                            width: '50%',
                            minWidth: '50%',
                            margin: '0 auto'
                        }}>
                    </AntDivider>,
                getComponent: () => {
                    return <AntDivider></AntDivider>
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '步骤条',
                type: 'ant-steps',
                icon: <AntSteps size='small' items={[{}]}></AntSteps>,
                getComponent: () => {
                    return <AntSteps
                        current={1}
                        items={[
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
                        ]}
                    />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '级联',
                type: 'ant-cascader',
                icon: <AntCascader placeholder="Cascader" size='small' />,
                getComponent: () => {
                    return <AntCascader placeholder="Cascader" />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '颜色',
                type: 'ant-colorpicker',
                icon: <AntColorPicker defaultValue="#1677ff" size='small' />,
                getComponent: () => {
                    return <AntColorPicker defaultValue="#1677ff" />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '日期',
                type: 'ant-datepicker',
                icon: <AntDatePicker />,
                getComponent: () => {
                    return <AntDatePicker />
                },
                styleSelector: [],
                attrSelector: [],
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
                attrSelector: [],
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
                attrSelector: [],
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
                attrSelector: [],
                default: {}
            },
            {
                name: '滑动条',
                type: 'ant-slider',
                icon: <AntSlider />,
                getComponent: () => {
                    return <AntSlider />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '开关',
                type: 'ant-switch',
                icon: <AntSwitch size='small' />,
                getComponent: () => {
                    return <AntSwitch />
                },
                styleSelector: [],
                attrSelector: [],
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
                attrSelector: [],
                default: {}
            },
            {
                name: '穿梭',
                type: 'ant-transfer',
                icon: <SwapOutlined />,
                getComponent: () => {
                    return <AntTransfer />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '树',
                type: 'ant-treeselect',
                icon: <AntTreeSelect />,
                getComponent: () => {
                    return <AntTreeSelect />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '日期',
                type: 'ant-calender',
                icon: <NumberOutlined />,
                getComponent: () => {
                    return <AntCalendar />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '卡片',
                type: 'ant-card',
                icon: <CreditCardOutlined />,
                getComponent: () => {
                    return <AntCard >Card</AntCard>
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '折叠',
                type: 'ant-collapse',
                icon: <UnorderedListOutlined />,
                getComponent: () => {
                    return <AntCollapse
                        items={[{
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
                        }]} />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '描述',
                type: 'ant-descriptions',
                icon: <SolutionOutlined />,
                getComponent: () => {
                    return <AntDescriptions title="User Info"
                        items={[{
                            key: '1',
                            label: 'UserName',
                            children: 1,
                        },
                        {
                            key: '2',
                            label: 'Telephone',
                            children: 2,
                        }]} />;
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '空页',
                type: 'ant-empty',
                icon: <BorderOutlined />,
                getComponent: () => {
                    return <AntEmpty />;
                },
                styleSelector: [],
                attrSelector: [],
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
                attrSelector: [],
                default: {}
            },
            {
                name: '二维码',
                type: 'ant-qrcode',
                icon: <QrcodeOutlined />,
                getComponent: () => {
                    return <AntQRCode value={'-'} />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '统计数值',
                type: 'ant-statistic',
                icon: <OrderedListOutlined />,
                getComponent: () => {
                    return <AntStatistic title="Feedback" value={1128} />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '表格',
                type: 'ant-table',
                icon: <TableOutlined />,
                getComponent: () => {
                    return <AntTable dataSource={dataSource} columns={columns} />;
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '表格',
                type: 'ant-tag',
                icon: <AntTag color="#87d068" size="small">tag</AntTag>,
                getComponent: () => {
                    return <AntTag>tag</AntTag>
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '时间线',
                type: 'ant-timeline',
                icon: <LineHeightOutlined />,
                getComponent: () => {
                    return <AntTimeline items={[{ children: 'Create a services site 2015-09-01', }, { children: 'Solve initial network problems 2015-09-01', }, { children: 'Technical testing 2015-09-01', }, { children: 'Network problems being solved 2015-09-01', },]} />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '树',
                type: 'ant-tree',
                icon: <HeatMapOutlined />,
                getComponent: () => {
                    return <AntTree checkable treeData={treeData} />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '警告',
                type: 'ant-alert',
                icon: <AntAlert message="Alert" type="success" />,
                getComponent: () => {
                    return <AntAlert message="Alert" type="success" />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '进度条',
                type: 'ant-progress',
                icon: <AntProgress percent={30} />,
                getComponent: () => {
                    return <AntProgress percent={30} />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '结果',
                type: 'ant-result',
                icon: <CheckCircleOutlined />,
                getComponent: () => {
                    return <AntResult status="success" />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '骨架',
                type: 'ant-skeleton',
                icon: <SketchOutlined />,
                getComponent: () => {
                    return <AntSkeleton />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
            {
                name: '加载中',
                type: 'ant-spin',
                icon: <AntSpin />,
                getComponent: () => {
                    return <AntSpin />
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
        ]

    },

    {
        title: 'ELEMENTUI组件',
        type: 'element-ui',
        items: [
            {
                name: '按钮',
                type: 'eui-button',
                icon: <EuiButton type='primary' size='small'>Button</EuiButton>,
                getComponent: () => {
                    return <EuiButton type='primary' >Button</EuiButton>
                },
                styleSelector: [],
                attrSelector: [],
                default: {}
            },
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
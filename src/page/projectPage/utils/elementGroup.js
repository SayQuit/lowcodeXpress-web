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
    TreeSelect as AntTreeSelect,
    Card as AntCard,
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
    CreditCardOutlined,
    UnorderedListOutlined,
    SolutionOutlined,
    FileImageTwoTone,
    BorderOutlined,
    TableOutlined,
    LineHeightOutlined,
    RetweetOutlined
} from '@ant-design/icons';

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
                type: 'img',
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
                type: 'a',
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
        title: 'ant-design 组件',
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
                name: '标签',
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
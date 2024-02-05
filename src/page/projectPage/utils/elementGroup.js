import {
    Button as AntButton,
    Radio as AntRadio,
    Checkbox as AntCheckbox,
    Input as AntInput,
} from 'antd';

import {
    FontSizeOutlined,
    BoldOutlined,
    FileImageOutlined,
    LinkOutlined,
    VideoCameraOutlined,
    ContainerOutlined
} from '@ant-design/icons';

import {
    Button as EuiButton
} from 'element-react';

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
                }
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
                    return <div>输入文本</div>
                },
                styleSelector:[],
                attrSelector:[],
                containerStyleSelector:[]
            },
            {
                name: '按钮',
                type: 'button',
                icon: <BoldOutlined />,
                getComponent: () => {
                    return <button>按钮</button>
                },
                styleSelector:[],
                attrSelector:[],
                containerStyleSelector:[]
            },
            {
                name: '图片',
                type: 'image',
                icon: <FileImageOutlined />,
                getComponent: () => {
                    return <img src="https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg" alt="" />
                },
                styleSelector:[],
                attrSelector:[],
                containerStyleSelector:[]
            },
            {
                name: '链接',
                type: 'link',
                icon: <LinkOutlined />,
                getComponent: () => {
                    return <a href='/'>链接</a>
                },
                styleSelector:[],
                attrSelector:[],
                containerStyleSelector:[]

            },
            {
                name: '视频',
                type: 'video',
                icon: <VideoCameraOutlined />,
                getComponent: () => {
                    return <video></video>
                },
                styleSelector:[],
                attrSelector:[],
                containerStyleSelector:[]
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
                styleSelector:[],
                attrSelector:[],
                containerStyleSelector:[]
            },
            {
                name: '单选框',
                type: 'ant-radio',
                icon: <AntRadio checked={true}></AntRadio>,
                getComponent: () => {
                    return <AntRadio></AntRadio>
                },
                styleSelector:[],
                attrSelector:[],
                containerStyleSelector:[]
            },
            {
                name: '多选框',
                type: 'ant-checkbox',
                icon: <AntCheckbox checked={true}></AntCheckbox>,
                getComponent: () => {
                    return <AntCheckbox></AntCheckbox>
                },
                styleSelector:[],
                attrSelector:[],
                containerStyleSelector:[]
            },
            {
                name: '输入框',
                type: 'ant-input',
                icon: <AntInput placeholder='Input' size='small'></AntInput>,
                getComponent: () => {
                    return <AntInput></AntInput>
                },
                styleSelector:[],
                attrSelector:[],
                containerStyleSelector:[]
            }
        ]

    },

    {
        title: 'ELEMENTUI组件',
        type: 'element-ui',
        items: [
            {
                name: '按钮',
                type: 'eui-buton',
                icon: <EuiButton type='primary' size='small'>Button</EuiButton>,
                getComponent: () => {
                    return <EuiButton type='primary'>Button</EuiButton>
                },
                styleSelector:[],
                attrSelector:[],
                containerStyleSelector:[]
            },
        ]

    }
]
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

export const element = [
    {
        title: '基础组件',
        type: 'basic',
        items: [
            {
                name: '容器',
                type: 'container',
                icon: <ContainerOutlined />,
                component: () => {
                    return null
                }
            },
        ]
    },
    {
        title: 'HTML标签',
        type: 'html',
        items: [
            {
                name: '文本',
                type: 'text',
                icon: <FontSizeOutlined />,
                component: () => {
                    return <div>输入文本</div>
                }
            },
            {
                name: '按钮',
                type: 'button',
                icon: <BoldOutlined />,
                component: () => {
                    return <button></button>
                }
            },
            {
                name: '图片',
                type: 'image',
                icon: <FileImageOutlined />,
                component: () => {
                    return <img alt=''></img>
                }
            },
            {
                name: '链接',
                type: 'link',
                icon: <LinkOutlined />,
                component: () => {
                    return <a href='/'>链接</a>
                }
                
            },
            {
                name: '视频',
                type: 'video',
                icon: <VideoCameraOutlined />,
                component: () => {
                    return <video></video>
                }
            }
        ]
    },

    {
        title: 'ANTD组件',
        type: 'antd',
        items: [
            {
                name: '按钮',
                type: 'ant-button',
                icon: <AntButton type='primary' size='small'>BUTTON</AntButton>,
                component: () => {
                    return <AntButton></AntButton>
                }
            },
            {
                name: '单选框',
                type: 'ant-radio',
                icon: <AntRadio checked={true}></AntRadio>,
                component: () => {
                    return <AntRadio></AntRadio>
                }
            },
            {
                name: '多选框',
                type: 'ant-checkbox',
                icon: <AntCheckbox checked={true}></AntCheckbox>,
                component: () => {
                    return <AntCheckbox></AntCheckbox>
                }
            },
            {
                name: '输入框',
                type: 'ant-input',
                icon: <AntInput placeholder='INPUT' size='small'></AntInput>,
                component: () => {
                    return <AntInput></AntInput>
                }
            }
        ]

    },

    {
        title: 'ELEMENTUI组件',
        type: 'elementUI',
        items: [
            {
                name: '按钮',
                type: 'eui-buton',
                icon: <EuiButton type='primary' size='small'>BUTTON</EuiButton>,
                component: () => {
                    return <EuiButton></EuiButton>
                }
            },
        ]

    }
]
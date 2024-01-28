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
                id:'container',
                component: <ContainerOutlined />
            },
        ]
    },
    {
        title: 'HTML标签',
        type: 'html',
        items: [
            {
                name: '文本',
                id:'text',
                component: <FontSizeOutlined />
            },
            {
                name: '按钮',
                id:'button',
                component: <BoldOutlined />
            },
            {
                name: '图片',
                id:'image',
                component: <FileImageOutlined />
            },
            {
                name: '链接',
                id:'link',
                component: <LinkOutlined />
            },
            {
                name: '视频',
                id:'video',
                component: <VideoCameraOutlined />
            }
        ]
    },

    {
        title: 'ANTD组件',
        type: 'antd',
        items: [
            {
                name: '按钮',
                id:'ant-button',
                component: <AntButton type='primary' size='small'>BUTTON</AntButton>
            },
            {
                name: '单选框',
                id:'ant-radio',
                component: <AntRadio checked={true}></AntRadio>
            },
            {
                name: '多选框',
                id:'ant-checkbox',
                component: <AntCheckbox checked={true}></AntCheckbox>
            },
            {
                name: '输入框',
                id:'ant-input',
                component: <AntInput placeholder='INPUT' size='small'></AntInput>
            }
        ]

    },

    {
        title: 'ELEMENTUI组件',
        type: 'elementUI',
        items: [
            {
                name: '按钮',
                id:'eui-buton',
                component: <EuiButton type='primary' size='small'>BUTTON</EuiButton>
            },
        ]

    }
]
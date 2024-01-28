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
                component: <FontSizeOutlined />
            },
            {
                name: '按钮',
                component: <BoldOutlined />
            },
            {
                name: '图片',
                component: <FileImageOutlined />
            },
            {
                name: '链接',
                component: <LinkOutlined />
            },
            {
                name: '视频',
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
                component: <AntButton type='primary' size='small'>BUTTON</AntButton>
            },
            {
                name: '单选框',
                component: <AntRadio checked={true}></AntRadio>
            },
            {
                name: '多选框',
                component: <AntCheckbox checked={true}></AntCheckbox>
            },
            {
                name: '输入框',
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
                component: <EuiButton type='primary' size='small'>BUTTON</EuiButton>
            },
        ]

    }
]
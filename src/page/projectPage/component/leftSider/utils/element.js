import {
    Button as AntButton,
    Radio as AntRadio,
    Checkbox as AntCheckbox,
    Input as AntInput,
} from 'antd';
import {
    Button as EuiButton
} from 'element-react';
import {
    FontSizeOutlined,
    BoldOutlined,
    FileImageOutlined,
    LinkOutlined,
    VideoCameraOutlined
} from '@ant-design/icons';
export const element = [
    {
        title: 'HTML标签',
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
        items: [
            {
                name: '按钮',
                component: <EuiButton type='primary' size='small'>BUTTON</EuiButton>
            },
            {
                name: '按钮',
                component: <EuiButton type='primary' size='small'>BUTTON</EuiButton>
            },
            {
                name: '按钮',
                component: <EuiButton type='primary' size='small'>BUTTON</EuiButton>
            },
            {
                name: '按钮',
                component: <EuiButton type='primary' size='small'>BUTTON</EuiButton>
            },
            {
                name: '按钮',
                component: <EuiButton type='primary' size='small'>BUTTON</EuiButton>
            },
            {
                name: '按钮',
                component: <EuiButton type='primary' size='small'>BUTTON</EuiButton>
            },
        ]

    }
]
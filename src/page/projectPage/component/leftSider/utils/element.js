
import { Button } from 'antd';
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
                component: <Button size='small' type='primary'>BUTTON</Button>
            }
        ]

    }
]
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
                styleSelector: ['display', 'width', 'height', 'fontSize', 'textAlign', 'color', 'backgroundColor'],
                attrSelector: [],
                containerStyleSelector: []
            },
            {
                name: '按钮',
                type: 'button',
                icon: <BoldOutlined />,
                getComponent: () => {
                    return <button>按钮</button>
                },
                styleSelector: ['display', 'width', 'height', 'fontSize', 'color', 'backgroundColor'],
                attrSelector: [],
                containerStyleSelector: []
            },
            {
                name: '图片',
                type: 'image',
                icon: <FileImageOutlined />,
                getComponent: () => {
                    return <img src="https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg" alt="" />
                },
                styleSelector: ['display', 'width', 'height'],
                attrSelector: [],
                containerStyleSelector: []
            },
            {
                name: '链接',
                type: 'link',
                icon: <LinkOutlined />,
                getComponent: () => {
                    return <a href='/'>链接</a>
                },
                styleSelector: ['display', 'width', 'height', 'fontSize', 'textAlign', 'color', 'backgroundColor'],
                attrSelector: [],
                containerStyleSelector: []

            },
            {
                name: '视频',
                type: 'video',
                icon: <VideoCameraOutlined />,
                getComponent: () => {
                    return <video controls autoplay
                        src="https://tbexpand.alicdn.com/772ed1822eb4802f/1639051391463/84f3e18ec27edd1d_mov_340612418368_mp4_264_hd_aliyun.mp4?auth_key=1707399841-0-0-91332558237d4c903510eab1f6c84b98&biz=publish-2f31420cf7951f0d&t=2106dfc017073971416145166e14ba&t=2106dfc017073971416145166e14ba&b=publish&p=cloudvideo_http_video_extranet_publish&i=340612418368">
                    </video>
                },
                styleSelector: ['display', 'width', 'height'],
                attrSelector: [],
                containerStyleSelector: []
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
                containerStyleSelector: []
            },
            {
                name: '单选框',
                type: 'ant-radio',
                icon: <AntRadio checked={true}></AntRadio>,
                getComponent: () => {
                    return <AntRadio></AntRadio>
                },
                styleSelector: [],
                attrSelector: [],
                containerStyleSelector: []
            },
            {
                name: '多选框',
                type: 'ant-checkbox',
                icon: <AntCheckbox checked={true}></AntCheckbox>,
                getComponent: () => {
                    return <AntCheckbox></AntCheckbox>
                },
                styleSelector: [],
                attrSelector: [],
                containerStyleSelector: []
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
                containerStyleSelector: []
            }
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
                    return <EuiButton type='primary'>Button</EuiButton>
                },
                styleSelector: [],
                attrSelector: [],
                containerStyleSelector: []
            },
        ]

    }
]

const getElementMap = () => {
    const res = {}
    elementGroup.forEach((item) => {
        item.items.forEach((value) => {
            res[value.type] = value
        })
    })
    return res
}
export const elementMap = getElementMap()
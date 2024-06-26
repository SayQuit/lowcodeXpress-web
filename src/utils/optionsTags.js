export const options = {
    projectType: [
        {
            value: 'wechat mini program',
            label: '微信小程序',
            color: '#FFFFFF',
            backgroundColor: '#1AAD19',
            name: 'Wechat'
        },
        {
            value: 'web',
            label: 'Web项目',
            color: '#115199',
            backgroundColor: '#FFFFFF',
            name: 'Web'
        }
    ],
    projectTech: [
        {
            value: 'vue',
            label: 'Vue.js',
            color: '#33495D',
            backgroundColor: '#41B784',
            name: 'Vue'
        }, {
            value: 'react',
            label: 'React.js',
            color: '#5FD5F5',
            backgroundColor: '#2A2C2E',
            name: 'React'
        }
    ],
    projectLib: [
        {
            value: 'ant-design',
            label: 'Ant-Design',
            color: '#FFFFFF',
            backgroundColor: '#2872F6',
            name: 'Antd'
        }, {
            value: 'echarts',
            label: 'Echarts',
            color: '#FFFFFF',
            backgroundColor: '#E43961',
            name: 'Echarts'
        }
    ]
}

export const getTags = (tags) => {
    if (!tags) return []
    const tagsMap = {}
    const res = []
    for (const key in options) {
        options[key].forEach(item => {
            const { value, backgroundColor, name, color } = item
            tagsMap[value] = {
                backgroundColor,
                name,
                color
            }
        });
    }
    tags.forEach(item => {
        res.push(tagsMap[item])
    });
    return res
}
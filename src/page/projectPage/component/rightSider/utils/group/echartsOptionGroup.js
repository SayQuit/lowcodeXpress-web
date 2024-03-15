export const echartsOptionGroup = [
    {
        type:'title',
        name:'标题',
        option: [
            {
                name: '标题名称',
                type: 'text',
                componentType: 'input'
            }
        ]
    },
    {
        type: 'xAxis',
        name: 'x轴',
        option: [
            {
                name: '数据',
                type: 'data',
                componentType: 'inputJSON'
            },
            {
                name: '类型',
                type: 'type', 
                componentType: 'select',
                options: [
                    {
                        value: 'category',
                        label: '类别'
                    },
                    {
                        value: 'value',
                        label: '值'
                    },
                    {
                        value: 'time',
                        label: '时间'
                    },
                    {
                        value: 'log',
                        label: '对数'
                    },
                    
                ]
            },
            {
                name: '位置',
                type: 'position', 
                componentType: 'select',
                options: [
                    {
                        value: 'top',
                        label: '上'
                    },
                    {
                        value: 'bottom',
                        label: '下'
                    },
                ]
            },
            {
                name: '名字',
                type: 'name', 
                componentType: 'input',
            },
            {
                name: '名字位置',
                type: 'nameLocation', 
                componentType: 'select',
                options: [
                    {
                        value: 'start',
                        label: '起始'
                    },
                    {
                        value: 'middle',
                        label: '中间'
                    },
                    {
                        value: 'end',
                        label: '结尾'
                    },
                ]
            },
            {
                name: '最小值',
                type: 'min', 
                componentType: 'inputNumber',
            },
            {
                name: '最大值',
                type: 'max', 
                componentType: 'inputNumber',
            },
            {
                name: '间隔',
                type: 'interval', 
                componentType: 'inputNumber',
            },
        ]
    },{
        type: 'yAxis',
        name: 'y轴',
        option: [
            {
                name: '数据',
                type: 'data',
                componentType: 'inputJSON'
            },
            {
                name: '类型',
                type: 'type', 
                componentType: 'select',
                options: [
                    {
                        value: 'category',
                        label: '类别'
                    },
                    {
                        value: 'value',
                        label: '值'
                    },
                    {
                        value: 'time',
                        label: '时间'
                    },
                    {
                        value: 'log',
                        label: '对数'
                    },
                    
                ]
            },
            {
                name: '位置',
                type: 'position', 
                componentType: 'select',
                options: [
                    {
                        value: 'top',
                        label: '上'
                    },
                    {
                        value: 'bottom',
                        label: '下'
                    },
                ]
            },
            {
                name: '名字',
                type: 'name', 
                componentType: 'input',
            },
            {
                name: '名字位置',
                type: 'nameLocation', 
                componentType: 'select',
                options: [
                    {
                        value: 'start',
                        label: '起始'
                    },
                    {
                        value: 'middle',
                        label: '中间'
                    },
                    {
                        value: 'end',
                        label: '结尾'
                    },
                ]
            },
            {
                name: '最小值',
                type: 'min', 
                componentType: 'inputNumber',
            },
            {
                name: '最大值',
                type: 'max', 
                componentType: 'inputNumber',
            },
            {
                name: '间隔',
                type: 'interval', 
                componentType: 'inputNumber',
            },
        ]
    },

]
import './index.css'
import { Input, Typography, Flex, Select } from 'antd'

function ProjectSetup() {
    return (
        <div>
            <div className='projectSetup-header'>
                <div className='projectSetup-header-icon'></div>
                <div className='projectSetup-header-name'>设置</div>
            </div>
            <div className='projectSetup-main'>
                <Flex vertical gap={16}>
                    <div>
                        <Typography.Title level={5}>项目名称</Typography.Title>
                        <Input
                            count={{
                                show: true,
                                max: 8,
                            }}
                            placeholder='输入项目名称'
                            size='large'
                        />
                    </div>

                    <div>
                        <Typography.Title level={5}>项目描述</Typography.Title>
                        <Input
                            count={{
                                show: true,
                                max: 100,
                            }}
                            placeholder='输入项目描述'
                            size='large'
                        />
                    </div>

                    <div>
                        <Typography.Title level={5}>项目类型</Typography.Title>
                        <Select
                            style={{ width: '100%' }}
                            size='large'
                            placeholder="选择项目类型"
                            options={[{
                                value: 'wechat mini program',
                                label: '微信小程序'
                            }, {
                                value: 'web',
                                label: 'Web项目'
                            }]}
                        />
                    </div>

                    <div>
                        <Typography.Title level={5}>项目技术栈</Typography.Title>
                        <Select
                            style={{ width: '100%' }}
                            size='large'
                            placeholder="选择项目技术栈"
                            options={[{
                                value: 'normal',
                                label: '原生'
                            },{
                                value: 'vue',
                                label: 'Vue.js'
                            }, {
                                value: 'react',
                                label: 'React.js'
                            }]}
                        />
                    </div>

                    <div>
                        <Typography.Title level={5}>库</Typography.Title>
                        <Select
                            mode='tags'
                            style={{ width: '100%' }}
                            size='large'
                            placeholder="选择需要引入的库"
                            options={[{
                                value: 'element-ui',
                                label: 'Element-UI'
                            },{
                                value: 'ant-design',
                                label: 'Ant-Design'
                            }, {
                                value: 'echarts',
                                label: 'Echarts'
                            }]}
                        />
                    </div>

                </Flex>
            </div>
        </div>
    );
}

export default ProjectSetup;

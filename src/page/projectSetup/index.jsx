import { useState, useMemo } from 'react';
import './index.css'
import { options } from '../../utils/optionsTags';
import { createProjectRequest } from '../../request';
import { Input, Typography, Flex, Select, Button, Alert } from 'antd'
import { successMessage } from '../../utils/message';
import { useNavigate } from 'react-router-dom';
const { TextArea } = Input;

function ProjectSetup() {
    const [setup, setSetup] = useState({
        name: '',
        description: '',
        type: '',
        tech: '',
        lib: [],
        element: []
    })

    const onChangeSetup = (value, key) => {
        setSetup({
            ...setup,
            [key]: value
        })
    }

    const warning = useMemo(() => {
        const { name, description, type, tech } = setup
        if (name.trim() === '' || description.trim() === '' || type === '') return '部分信息未填写'
        else if (type === 'web' && tech === '') return '部分信息未填写'
        else if (description.length > 500) return '项目描述字数超过500字'
        else return ''
    }, [setup])


    const navigate = useNavigate()
    const onClickCreat = async () => {
        const { element, name, description, type, tech, lib } = setup
        const res = await createProjectRequest(element, name, description, type, tech, lib)
        if (!res) return
        successMessage('创建成功')
        navigate('/')
    }

    return (
        <div>
            <div className='setup-header'>
                <div className='setup-header-icon'></div>
                <div className='setup-header-name'>设置</div>
            </div>
            <div className='setup-main'>
                <Flex vertical gap={16}>
                    <div>
                        <Typography.Title level={5}>项目名称</Typography.Title>
                        <Input
                            value={setup.name}
                            count={{
                                show: true,
                                max: 8,
                            }}
                            placeholder='输入项目名称'
                            size='large'
                            key='name'
                            onChange={(e) => onChangeSetup(e.target.value.trim(), 'name')}
                        />
                    </div>

                    <div>
                        <Typography.Title level={5}>项目描述</Typography.Title>
                        <TextArea
                            value={setup.description}
                            placeholder='输入项目描述（500字内）'
                            autoSize={{ minRows: 3, maxRows: 5 }}
                            size='large'
                            onChange={(e) => onChangeSetup(e.target.value.trim(), 'description')}
                        />
                    </div>

                    <div>
                        <Typography.Title level={5}>项目类型</Typography.Title>
                        <Select
                            value={setup.type}
                            style={{ width: '100%' }}
                            size='large'
                            placeholder="选择项目类型"
                            options={options.projectType}
                            onChange={(value) => onChangeSetup(value, 'type')}
                        />
                    </div>

                    {setup.type === 'web' && <div>
                        <Typography.Title level={5}>项目技术栈</Typography.Title>
                        <Select
                            value={setup.tech}
                            style={{ width: '100%' }}
                            size='large'
                            placeholder="选择项目技术栈"
                            options={options.projectTech}
                            onChange={(value) => onChangeSetup(value, 'tech')}
                        />
                    </div>}

                    {setup.type === 'web' && setup.tech !== 'normal' && <div>
                        <Typography.Title level={5}>库</Typography.Title>
                        <Select
                            value={setup.lib}
                            mode='tags'
                            style={{ width: '100%' }}
                            size='large'
                            placeholder="选择需要引入的库"
                            options={options.projectLib}
                            onChange={(value) => onChangeSetup(value, 'lib')}
                        />
                    </div>}

                    {warning && <Alert
                        message={warning}
                        type="warning"
                        showIcon
                    />}

                    <div className='flex justify-end'>
                        <Button size='large' type='primary' disabled={warning} onClick={onClickCreat}>创建项目</Button>
                    </div>

                </Flex>
            </div>
        </div>
    );
}

export default ProjectSetup;

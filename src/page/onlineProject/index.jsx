import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import React from 'react';
import './index.css'
import { xhrRequest } from '../projectPage/utils/xhrRequest';
import { getComponentMap } from '../projectPage/utils/getComponentMap';
import { createElementByNestElement, createElementByElement } from '../projectPage/utils/elementCreate';
import OnlineBoard from './component/onlineBoard';
import { getOnlineDetailRequest } from '../../request';
import { useSearchParams,useNavigate } from 'react-router-dom';

function OnlinePage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [element, elementDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'set':
                return action.value
            default:
                return state
        }
    }, [])

    const [variable, variableDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'set':
                return action.value
            case 'change':
                {
                    return state.map((item) => {
                        if (item.id !== action.variable.id) return item
                        else return {
                            ...item,
                            ...action.variable
                        }
                    })
                }
            case 'delete':
                {
                    return state.filter((item) => {
                        return item.id !== action.id
                    })
                }
            default: return state
        }
    }, [])

    const [props, propsDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'set':
                return action.value
            case 'change':
                {
                    return state.map((item) => {
                        if (item.id !== action.props.id) return item
                        else return {
                            ...item,
                            ...action.props
                        }
                    })
                }
            case 'delete':
                {
                    return state.filter((item) => {
                        return item.id !== action.id
                    })
                }
            default: return state
        }
    }, [])

    const [event, eventDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'set':
                return action.value
            case 'change':
                {
                    return state.map((item) => {
                        if (item.id !== action.event.id) return item
                        else return {
                            ...item,
                            ...action.event
                        }
                    })
                }
            case 'delete':
                {
                    return state.filter((item) => {
                        return item.id !== action.id
                    })
                }
            default: return state
        }
    }, [])

    const [onload, setOnload] = useState('')

    const variableMap = useMemo(() => {
        const map = {}
        variable.map((item) => {
            return map[item.name] = item
        })
        return map
    }, [variable])

    const propsMap = useMemo(() => {
        const map = {}
        props.map((item) => {
            return map[item.name] = item
        })
        return map
    }, [props])

    const eventMap = useMemo(() => {
        const map = {}
        event.map((item) => {
            return map[item.name] = item
        })
        return map
    }, [event])

    const get = useCallback((key) => {
        return variableMap[key] || propsMap[key] || null
    }, [variableMap, propsMap])

    const set = useCallback((key, value) => {
        let varItem = get(key)
        if (varItem) variableDispatch({ type: 'change', variable: { ...varItem, value } })
    }, [get])

    const createFunction = (item, set, variable) => {
        let fn = () => { }
        if (item.type === 'setValue') {
            if (item.setValue.useE) {
                if (item.setValue.value === 'e') fn = (e) => { set(item.setValue.variable, e) }
                if (item.setValue.value === 'e.target.value') fn = (e) => { set(item.setValue.variable, e.target.value) }
                if (item.setValue.value === 'e.target.checked') fn = (e) => { set(item.setValue.variable, e.target.checked) }
            }
            else fn = () => { set(item.setValue.variable, item.setValue.newValue) }
        }
        else if (item.type === 'custom') {
            // eslint-disable-next-line no-eval
            fn = () => { eval(item.custom.code) }
        }
        else if (item.type === 'request') {
            const { url, method, params, set } = item.request
            const param = {}
            variable.forEach((variableItem) => {
                params.forEach((paramsItem) => {
                    if (paramsItem === variableItem.name) {
                        param[paramsItem] = variableItem.value
                    }
                })
            })
            fn = () => {
                xhrRequest(url, method, param)
                    .then((res) => {
                        if (set) {
                            const data = JSON.parse(res).data
                            variable.forEach(item => {
                                if (data[item.name]) variableDispatch({ type: 'change', variable: { ...item, value: data[item.name] } })
                            });
                        }
                    })
            }
        }
        else { }
        return fn
    }

    const parseElementToComponent = useCallback((element, variable, event, props) => {
        const res = []
        element.forEach((item) => {
            let value = null
            let childrenElement = null
            let containerStyle = {}
            const variableArr = variable.filter((varItem) => {
                return varItem.bindElement === item.id
            })
            const variableAttr = {}
            variableArr.forEach((item) => {
                variableAttr[item.bind] = item.value
            })


            const propsArr = props.filter((varItem) => {
                return varItem.bindElement === item.id
            })
            const propsAttr = {}
            propsArr.forEach((item) => {
                propsAttr[item.bind] = item.value
            })

            const eventArr = event.filter((eventItem) => {
                return eventItem.bindElement === item.id
            })
            const eventAttr = {}
            eventArr.forEach((item) => {
                eventAttr[item.bindEvent] = createFunction(item, set, variable)
            })


            if (item.type === 'nest') {
                childrenElement = parseElementToComponent(item.childrenElement, variable, event, props)
                containerStyle = {
                    style: item.style,
                    styleObject: item.styleObject,
                }
            }
            else if (item.type !== 'container' && item.type !== 'circle') {
                const attribute = {
                    style: item.styleObject,
                    key: item.id,
                    ...item.attr,
                    ...variableAttr,
                    ...eventAttr,
                    ...propsAttr
                }
                if (item.attr.html) {
                    if (attribute['children']) delete attribute['children']
                    attribute['dangerouslySetInnerHTML'] = { __html: item.attr.html }
                }
                value = React.cloneElement(
                    getComponentMap[item.type](),
                    attribute,

                );
            }
            else if (item.type === 'circle' && item.target.length) {
                let value
                if (variableMap[item.circleVariableName]) value = variableMap[item.circleVariableName].value || []
                else if (propsMap[item.circleVariableName]) value = propsMap[item.circleVariableName].value || []
                else value = []

                const temp = []

                value.forEach((item2) => {
                    let copied = item.circleElement.childrenElement ? createElementByNestElement(item.circleElement) : createElementByElement(item.circleElement)
                    item.target.forEach((item3) => {
                        let from = item2
                        let to = copied
                        item3.fromArray.forEach((item4) => {
                            from = from[item4]
                        })
                        item3.toArray.forEach((item4, index) => {
                            if (index <= item3.toArray.length - 2) to = to[item4]
                        })
                        const lastKey = item3.toArray[item3.toArray.length - 1]
                        to[lastKey] = from

                    })
                    temp.push(copied)
                })

                childrenElement = parseElementToComponent(temp, variable, event, props)
                containerStyle = {
                    style: item.style,
                    styleObject: item.styleObject,
                }
            }
            res.push({
                type: item.type,
                value,
                id: item.id,
                childrenElement,
                ...containerStyle
            })
        })
        return res
    }, [set, variableMap, propsMap])

    const component = useMemo(() => {
        return parseElementToComponent(element, variable, event, props)
    }, [element, variable, event, parseElementToComponent, props])

    const getOnlineDetail = async () => {
        const id = searchParams.get('id')
        if (!id) navigate('/')
        const { data } = await getOnlineDetailRequest(id)
        const { element, props, variable, event, onload } = data
        elementDispatch({ type: 'set', value: element })
        variableDispatch({ type: 'set', value: variable })
        propsDispatch({ type: 'set', value: props })
        eventDispatch({ type: 'set', value: event })
        setOnload(onload || '')
    }

    useEffect(() => {
        getOnlineDetail()
    }, []);
    useEffect(() => {
        if (onload && eventMap[onload]) createFunction(eventMap[onload], set, variable)()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onload])

    return (
        <OnlineBoard component={component}></OnlineBoard>
    );
}

export default OnlinePage;

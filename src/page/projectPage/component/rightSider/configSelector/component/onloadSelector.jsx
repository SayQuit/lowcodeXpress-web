import { Flex, Select } from "antd";
import { ElementContext } from "../../../../provider/elementProvider";
import { useContext } from 'react';
function OnloadSelector() {
    const { event, onload, setOnload } = useContext(ElementContext)

    return (
        <Flex>
            <div className="w-16 leading-6">初始化函数</div>
            <Select className="flex-1"
                allowClear
                value={onload}
                onChange={(e) => setOnload(e || '')}
                options={event.map((item) => {
                    return {
                        label: item.name,
                        value: item.name
                    }
                })}></Select>
        </Flex>
    );
}

export default OnloadSelector;

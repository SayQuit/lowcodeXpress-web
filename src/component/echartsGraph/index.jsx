import React, { useEffect, useRef, forwardRef, useContext } from 'react';
import * as echarts from 'echarts';
import { LeftSiderContext } from '../../page/projectPage/provider/leftSiderProvider';

const EchartsGraph = forwardRef(({ option, echartsStyle }, ref) => {
    const chartRef = useRef(null);
    const { elementSelectVisible } = useContext(LeftSiderContext) || {};

    useEffect(() => {
        let chart = echarts.init(chartRef.current);
        const initCharts = () => {
            console.log(option);
            chart = echarts.init(chartRef.current);
            chart.setOption(option);
        }
        initCharts()
        const handleResize = () => {
            initCharts()
        };
        window.addEventListener('resize', handleResize);
        return () => {
            chart.dispose();
            window.removeEventListener('resize', handleResize);
        };
    }, [option, echartsStyle, elementSelectVisible]);

    useEffect(() => {
        if (ref) ref.current = chartRef.current;
    }, [ref]);

    return <div style={{ ...echartsStyle }} ref={chartRef} />;
});

export default EchartsGraph;

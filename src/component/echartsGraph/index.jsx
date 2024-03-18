import React, { useEffect, useRef, forwardRef } from 'react';
import * as echarts from 'echarts';

const EchartsGraph = forwardRef(({ option, echartsStyle }, ref) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = echarts.init(chartRef.current);
        chart.setOption(option);

        return () => {
            chart.dispose();
        };
    }, [option, echartsStyle]);

    useEffect(() => {
        if (ref) ref.current = chartRef.current;
    }, [ref]);

    return <div style={{ ...echartsStyle }} ref={chartRef} />;
});

export default EchartsGraph;

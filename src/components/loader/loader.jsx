import React from 'react';
import 'antd/dist/antd.css';
import {Spin} from 'antd';

const Spinner = () => {
    return (
        <Spin size={'large'} tip="Loading...">
        </Spin>
    )
}

export default Spinner;
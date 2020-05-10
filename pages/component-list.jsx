import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';

const List = () => {
    return(
        <dl>
            <dt>Button Component</dt>
            <dd>
            <Button label="soge" color ="red" />
            </dd>
            <dd>
            <Button label="kage" color ="blue" /> 
            </dd>
        </dl>
    );
};

export default List;



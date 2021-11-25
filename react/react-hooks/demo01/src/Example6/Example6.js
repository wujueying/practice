import React from 'react';
import Button from './Button';
import ShowArea from './showArea';
import {Color} from './color';  // 状态共享

function Example6(){
    return (
        <div>
            <Color>
              <ShowArea />
              <Button />
            </Color >
        </div>
    )
}

export default Example6;
import React from 'react';
import Tippy from '@tippyjs/react';


type Props = {
    content: string,
    style?: Object,
};

const ToolTip = (props: Props) => {
    const { style = {}, content, ...rest } = props;

    return (
        <Tippy
            placement="top"
            arrow={true}
            content={
                <span style={{ fontSize: '14px', fontWeight: 'bold', ...style}}>
                    {content}
                </span>
            }
            {...rest}
        />
    )
};

export default ToolTip

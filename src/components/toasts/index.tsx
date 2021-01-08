import React, { ReactNode } from 'react';
import { ToastsContainer } from "./style";

type Props = {
    toasts: {
        type: string,
        timeout: number,
        msg: string, 
        id: string,
    }[],
};

const Toasts = ({ toasts, ...props }: Props) => {
    return (
        <ToastsContainer>
            {
                toasts.map(toast => {
                    const { type, timeout, msg, id} = toast
                    switch(type) {
                        
                    }
                })
            }
        </ToastsContainer>
    );
}

export default Toasts;
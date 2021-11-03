import React from 'react';
import Image from 'next/image'
import cb from "classnames";


function ErrorMessage(props) {
    const error = props['error'];

    return (
        <div
            className={cb(
                'fixed top-1/3 m-auto py-3 px-4',
                'flex flex-row left-error overflow-y-auto',
                'bg-red-500 bg-opacity-90 w-2/3',
                'border-2 border-solid rounded-2xl border-red-900',
                {'z-30' : error},
                {'z-0' : !error},
            )}
        >
            <div className="m-auto">
                <Image className="w-20 min-h-20 h-auto" src="/Warning_icn.svg" alt="!" />
            </div>
            <div className="pl-4 m-auto h-full overflow-y-auto">
                {error}
            </div>
        </div>
    );
}

export default ErrorMessage;

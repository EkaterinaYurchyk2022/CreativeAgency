import React from 'react';

export const TitleLogo = ({className, caption, title}) => {
    return (
        <>
            <h1 className={`${className} title-logo`}>
                <span>{caption}</span>
                {title}
            </h1>
        </>
    );
};

export const TitleSm = ({title}) => {
    return <h1 className={`title-sm`}>{title} </h1>
};

export const Title = ({className, title}) => {
    return <h1 className={`${className} title`}>{title}</h1>
};


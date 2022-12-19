import React from 'react';

type PropsType = {
    heading: string
    about: string
}

export const Content = (props: PropsType) => {
    return (
        <>
            <h2>{props.heading}</h2>
            <div>{props.about}</div>
        </>
    );
};


import React from 'react';
import {dataState, DataStateType} from "../../dataState/dataState";

type PropsType = {
    dataState: DataStateType
}

export const Page = (props: PropsType) => {
    return (
        <div>
            {props.dataState.pages[0].heading}    {/*{dataState.pages[1].heading} - import*/}
        </div>
    );
};

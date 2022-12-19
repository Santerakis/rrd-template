import React from 'react';
import {dataState, DataStateType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";
import {Content} from "../Content";

type PropsType = {
    dataState: DataStateType
}

export const Page = (props: PropsType) => {
    let params = useParams()  //{id: '0'}
    console.log(params)
    return (
        <div>
            <Content
                heading={props.dataState.pages[Number(params.id)].heading}
                about={props.dataState.pages[Number(params.id)].about}
            />
            {/*{dataState.pages[1].heading} - import*/}
        </div>
    );
};

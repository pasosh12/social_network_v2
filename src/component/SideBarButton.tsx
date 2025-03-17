import React from 'react';

type PropsType={
    title: string,
}
const SideBarButton = (props:PropsType) => {
    return (

        <button>
            {/*<img></img>*/}
            {props.title}
        </button>

    );
};

export default SideBarButton;
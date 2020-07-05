import React from 'react';
import * as Type from './type';
import './style.scss';

import worka from './assets/192.png';

export const WorkaImg = ({ children, isShow }: Type.Props) => {
    return <img src={worka} alt="worka" style={{ visibility: isShow ? "visible" : "hidden" }} >{children}</img>
}
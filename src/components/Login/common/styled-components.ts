import styled from "styled-components";
import * as antd from 'antd'
export const Input = styled(antd.Input)`
    /* Input */

    box-sizing: border-box;
    background: #FFFFFF;
    border: 0.7px solid #616161;
    border-radius: 18px;

    /* Text */

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    padding-left: 4%;
    color: rgba(0, 0, 0, 0.38);
`;
export const InputPassword = styled(antd.Input.Password)`
    /* Input */

    box-sizing: border-box;
    background: #FFFFFF;
    border: 0.7px solid #616161;
    border-radius: 18px;

    /* Text */

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    padding-left: 4%;
    color: rgba(0, 0, 0, 0.38);
`;
export const Button = styled(antd.Button)`
    /* Button Container */

    background: #1E1E1E;
    border-radius: 18px;

    /* Text */

    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    text-align: center;

    color: #FFFFFF;
`;
export const Form = styled(antd.Form)`
`;
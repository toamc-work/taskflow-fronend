import React from "react";
import "./styles.desktop.css";
import { Button, Input, InputPassword } from "./common/styled-components";

export const RegisterDesktopComponent: React.FunctionComponent = () => {
    return (
            <div id="register-content">
                <header id="register-header">
                    <h1>Register</h1>
                    <p>TaskFlow: A Collaborative Task Management System</p>
                </header>
                <main id="register-main">
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <InputPassword placeholder="Password"/>
                    <InputPassword placeholder="Confirm Password"/>
                    <Button type="primary">Submit</Button>
                </main>
            </div>
    )
};
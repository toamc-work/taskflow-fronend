import React from "react";
import "./styles.css"
import { RegisterDesktopComponent } from "../../components/Register/component.desktop";

export const RegisterScreen = ({status}:{status: 'mobile' | 'tablet' | 'desktop'}) => {
    if(status === 'desktop')
    {
        return (
            <div id="register-screen-desktop-layout">
                <RegisterDesktopComponent/>
            </div>
        )
    }
    else if(status === 'tablet')
    {
        return <RegisterDesktopComponent/>
    }
    else
    {
        return <RegisterDesktopComponent/>
    }
}
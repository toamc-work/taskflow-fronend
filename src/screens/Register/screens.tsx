import React from "react";
import "./styles.css"
import { RegisterDesktopComponent } from "../../components/Register/component.desktop";
import { RegisterTabletComponent } from "../../components/Register/component.tablet";

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
        return <RegisterTabletComponent/>
    }
    else
    {
        return <RegisterDesktopComponent/>
    }
}
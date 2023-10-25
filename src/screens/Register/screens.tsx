import React from "react";
import "./styles.css"
import { RegisterDesktopComponent } from "../../components/Register/component.desktop";
import { RegisterTabletComponent } from "../../components/Register/component.tablet";
import { RegisterMobileComponent } from "../../components/Register/component.mobile";

export const RegisterScreen = ({status}:{status: 'mobile' | 'tablet' | 'desktop'}) => {
    console.log(status);
        return (
            <div id="register-screen-desktop-layout">
                    {status === "desktop" && <RegisterDesktopComponent/>}
                    {status === "tablet" && <RegisterTabletComponent/>}
                    {status === "mobile" && <RegisterMobileComponent/>}
            </div>
        )
}
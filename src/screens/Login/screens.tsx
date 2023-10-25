import React from "react";
import "./styles.css"
import { LoginDesktopComponent } from "../../components/Login/component.desktop";
import { LoginTabletComponent } from "../../components/Login/component.tablet";
import { LoginMobileComponent } from "../../components/Login/component.mobile";

export const LoginScreen = ({status}:{status: 'mobile' | 'tablet' | 'desktop'}) => {
    console.log(status);
        return (
            <div id="login-screen-desktop-layout">
                    {status === "desktop" && <LoginDesktopComponent/>}
                    {status === "tablet" && <LoginTabletComponent/>}
                    {status === "mobile" && <LoginMobileComponent/>}
            </div>
        )
}
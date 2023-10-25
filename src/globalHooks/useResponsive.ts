import React, { useEffect, useState } from "react";

type DeviceName = 'mobile' | 'tablet' | 'desktop';

interface IUseResponsive {
    mobile: {
        isMobile: boolean;
        name: DeviceName;
    };
    tablet: {
        isTablet: boolean;
        name: DeviceName;
    };
    desktop: {
        isDesktop: boolean;
        name: DeviceName;
    };
}

export const useResponsive = ():IUseResponsive => {
    const [size, setSize] = useState(window.innerWidth);

    const MOBILE_MAX_SIZE = 748;
    const DESKTOP_MIN_SIZE = 1024;

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    console.log({size})
    const isMobile = size <= MOBILE_MAX_SIZE;
    const isTablet = size > MOBILE_MAX_SIZE && size < DESKTOP_MIN_SIZE;
    const isDesktop = size >= DESKTOP_MIN_SIZE;

    return {
        mobile:{
            isMobile:isMobile,
            name:'mobile',
        },
        tablet: {
            isTablet:isTablet,
            name:'tablet',
        },
        desktop:{
            isDesktop:isDesktop,
            name:'desktop'
        }
    };
}
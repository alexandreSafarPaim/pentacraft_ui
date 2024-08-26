import React from 'react';
export declare function PCLayoutHeaderMenu({ userName, customAvatar, userImage, children, }: {
    userName?: string;
    userImage?: string;
    customAvatar?: ({ userName, userImage, }: {
        userName?: string;
        userImage?: string;
    }) => React.ReactNode;
    children: React.ReactNode;
}): React.JSX.Element;
export declare function PCLayoutHeaderMenuItem({ children, href, onClick, }: {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
}): React.JSX.Element;

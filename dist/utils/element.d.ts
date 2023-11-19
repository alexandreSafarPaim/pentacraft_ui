import React from 'react';
export declare const isComponent: (children: any, elementName: string) => boolean;
export declare const defineChildrenElement: (children: React.ReactNode, elementName: string, defaultElement: React.ReactNode) => React.ReactNode;
export declare const defineAllChildrenElement: (children: React.ReactNode, elementName: string) => (number | boolean | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactFragment | null | undefined)[];
export declare const childrenWithout: (children: any, elementNames: string[]) => any;

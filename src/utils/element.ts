import React from 'react';

export const isComponent = (children: any, elementName: string) => {
  if (children.type.name) {
    return children.type.name == elementName;
  } else {
    return children.type.displayName == elementName;
  }
};

export const defineChildrenElement = (
  children: React.ReactNode,
  elementName: string,
  defaultElement: React.ReactNode
) => {
  let element = defaultElement;
  if (Array.isArray(children)) {
    children.forEach((child: any) => {
      if (isComponent(child, `${elementName}`)) {
        element = child;
      }
    });
  } else {
    if (isComponent(children, `${elementName}`)) {
      element = children;
    }
  }
  return element;
};

export const defineAllChildrenElement = (
  children: React.ReactNode,
  elementName: string
) => {
  let element = [];
  if (Array.isArray(children)) {
    children.forEach((child: any) => {
      if (isComponent(child, `${elementName}`)) {
        element.push(child);
      }
    });
  } else {
    if (isComponent(children, `${elementName}`)) {
      element.push(children);
    }
  }

  return element;
};

export const childrenWithout = (children: any, elementNames: string[]) => {
  let restChildren = null;

  const elements = elementNames.map(elementName => {
    return `${elementName}`;
  });

  if (Array.isArray(children)) {
    restChildren = children.filter(
      (child: any) =>
        !elements.includes(child.type.name || child.type.displayName)
    );
  } else {
    restChildren = children.props.children;
  }
  return restChildren;
};

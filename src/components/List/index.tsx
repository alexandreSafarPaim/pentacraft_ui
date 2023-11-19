import React, { useMemo } from 'react';
import { defineChildrenElement } from '../../utils/element';
import { NavigationButton } from '../Inputs/NavigationButton';
import { PCLayoutFilters } from './Filter';
import { PCLayoutListContent } from './ListContent';

const PCLayoutList = ({
  children,
  title,
  createButtonTitle,
  onCreateClick,
  createButtonHref,
}: {
  children?: React.ReactNode;
  title?: string;
  createButtonTitle?: string;
  onCreateClick?: () => void;
  createButtonHref?: string;
}) => {
  const filters = useMemo(() => {
    if (!children) {
      return null;
    }
    return defineChildrenElement(children, 'Filters', null);
  }, [children]);

  const content = useMemo(() => {
    if (!children) {
      return null;
    }
    return defineChildrenElement(children, 'ListContent', null);
  }, [children]);

  return (
    <div className="w-full h-full flex flex-col px-3 pt-2">
      <div className="flex items-center justify-between">
        {title && <h1 className="text-3xl font-bold mb-2">{title}</h1>}
        {createButtonTitle && (
          <NewButton
            createButtonHref={createButtonHref}
            onCreateClick={onCreateClick}
            createButtonTitle={createButtonTitle}
          />
        )}
      </div>
      {filters}
      <div
        className="flex-1"
        style={{
          height: 'calc(100% - 6rem)',
        }}
      >
        {content}
      </div>
    </div>
  );
};

const List = {
  Root: PCLayoutList,
  Content: PCLayoutListContent,
  Filters: PCLayoutFilters,
};

export default List;

function NewButton({
  createButtonHref,
  onCreateClick,
  createButtonTitle,
}: {
  createButtonHref?: string;
  onCreateClick?: () => void;
  createButtonTitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <NavigationButton
      className={`px-3 py-1 text-sm rounded-lg font-bold w-fit`}
      fill
      href={createButtonHref}
      onClick={() => onCreateClick?.()}
    >
      {createButtonTitle}
    </NavigationButton>
  );
}

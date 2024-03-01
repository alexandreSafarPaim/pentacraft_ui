import React, { useMemo } from 'react';
import { defineChildrenElement } from '../../utils/element';
import { NavigationButton } from '../Inputs/NavigationButton';
import { PCLayoutFilters } from '../Filter';
import { PCLayoutListContent } from './ListContent';

const PCLayoutList = ({
  children,
  title,
  createButtonTitle,
  onCreateClick,
  createButtonHref,
  renderPreList,
  renderPosList,
  actions,
}: {
  children?: React.ReactNode;
  title?: string;
  createButtonTitle?: string;
  onCreateClick?: () => void;
  createButtonHref?: string;
  renderPreList?: () => React.ReactNode;
  renderPosList?: () => React.ReactNode;
  actions?: () => React.ReactNode;
}) => {
  const filters = useMemo(() => {
    if (!children) {
      return null;
    }
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutFilters.name, null);
    } else {
      return defineChildrenElement(children, List.Filters.name, null);
    }
  }, [children]);

  const content = useMemo(() => {
    if (!children) {
      return null;
    }
    if (process.env.NODE_ENV == 'development') {
      return defineChildrenElement(children, PCLayoutListContent.name, null);
    } else {
      return defineChildrenElement(children, List.Content.name, null);
    }
  }, [children]);

  return (
    <div className="w-full h-full flex flex-col px-3 pt-2">
      <div className="flex items-center justify-between">
        {title && <h1 className="text-3xl font-bold mb-2">{title}</h1>}
        <div
          className="flex items-center"
          style={{
            gap: '0.5rem',
          }}
        >
          {actions?.()}
          {createButtonTitle && (
            <NewButton
              createButtonHref={createButtonHref}
              onCreateClick={onCreateClick}
              createButtonTitle={createButtonTitle}
            />
          )}
        </div>
      </div>
      {filters}
      <div
        className="flex flex-col flex-1"
        style={{
          height: 'calc(100% - 6rem)',
        }}
      >
        {renderPreList?.()}
        <div className="w-full h-full">{content}</div>
        {renderPosList?.()}
      </div>
    </div>
  );
};

const List: {
  Root: typeof PCLayoutList;
  Content: typeof PCLayoutListContent;
  Filters: typeof PCLayoutFilters;
} = {
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
      className={`px-3 py-1 text-sm rounded-lg font-bold max-w-fit`}
      fill
      href={createButtonHref}
      onClick={() => onCreateClick?.()}
    >
      {createButtonTitle}
    </NavigationButton>
  );
}

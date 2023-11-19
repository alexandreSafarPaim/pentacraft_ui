import React, { useMemo } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { LayoutMenuContext } from '../../Layout/context';

export const PCLayoutPagination = ({
  currentPage,
  totalPages,
  perPage,
  onChangePerPage,
  onChangePage,
}: {
  currentPage: number;
  totalPages: number;
  perPage?: number;
  onChangePerPage?: (perPage: number) => void;
  onChangePage: (page: number) => void;
}) => {
  const { scheme } = React.useContext(LayoutMenuContext);

  const pages = useMemo(() => {
    const pages: any[] = [];
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;

    if (previousPage >= 1) {
      pages.push(previousPage);
    }
    pages.push(currentPage);
    if (nextPage <= totalPages) {
      pages.push(nextPage);
      if (pages.length == 2 && nextPage + 1 <= totalPages) {
        pages.push(nextPage + 1);
      }
    }

    if (currentPage >= 3) {
      pages.unshift(1);
    }

    if (pages[pages.length - 1] < totalPages) {
      pages.push(totalPages);
    }

    // add dots if necessary after first page and before last page
    if (pages.length >= 2) {
      if (pages[1] > 2) {
        pages.splice(1, 0, '...');
      }
      if (pages[pages.length - 2] < totalPages - 1) {
        pages.splice(pages.length - 1, 0, '...');
      }
    }

    return pages;
  }, [totalPages, currentPage]);

  const handlePageClick = (page: any) => {
    if (page === currentPage) {
      return;
    }
    if (page < 1) {
      return;
    }
    if (page > totalPages) {
      return;
    }
    onChangePage(page);
  };
  return (
    <div
      className={`w-full h-12 flex flex-col items-center justify-center relative border-t`}
      style={{
        backgroundColor: scheme?.tertiary,
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <nav aria-label="Pagination" className="flex items-center">
        <button
          className={`p-2 mr-4 rounded`}
          style={{
            color: scheme?.textPrimary,
            transition: 'color 0.3s ease-in-out',
          }}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          <IoIosArrowBack />
        </button>
        {pages.map((page, index) => {
          return (
            <button
              className={`p-2 mr-1 rounded ${
                page === currentPage ? 'font-bold' : 'font-normal'
              } ${page == '...' ? 'cursor-default' : ''}`}
              style={{
                transform: page === currentPage ? 'scale(1.1)' : 'scale(1)',
                transition:
                  'transform 0.2s ease-in-out, color 0.3s ease-in-out',
                color:
                  page === currentPage
                    ? scheme?.textPrimaryHover
                    : scheme?.textPrimary,
              }}
              onClick={() => page != '...' && handlePageClick(page)}
              key={index}
            >
              {page}
            </button>
          );
        })}
        <button
          className={`p-2 ml-4 rounded`}
          style={{
            color: scheme?.textPrimary,
            transition: 'color 0.3s ease-in-out',
          }}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          <IoIosArrowForward />
        </button>
      </nav>
      {perPage && onChangePerPage && (
        <div className="md:absolute md:left-5 md:block hidden h-6">
          <label htmlFor="perPage">Items por página</label>
          <select
            className={`ml-5 bg-transparent`}
            id="perPage"
            value={perPage}
            onChange={e => onChangePerPage(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      )}
    </div>
  );
};

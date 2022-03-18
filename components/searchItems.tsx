import { useLazyQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  ActionType,
  BadgeFieldName,
  BundleObject,
  FeedObject,
  SearchQueryName,
} from '../utils/types';
import { BadgeList } from './badgeList';
import { Search, Spin } from './svg';
import * as _ from 'lodash';

export const SearchItems = ({
  currentItem,
  setItem,
  queryName,
  query,
  fieldName,
}: {
  currentItem: FeedObject | BundleObject;
  setItem: Dispatch<SetStateAction<FeedObject | BundleObject>>;
  queryName: SearchQueryName;
  query: DocumentNode;
  fieldName: BadgeFieldName;
}) => {
  const [search, setSearch] = useState('');
  const [findItemQuery, { loading, data, called }] = useLazyQuery(query, {
    fetchPolicy: 'network-only',
  });
  console.log(loading, data, called);

  const fetchedItems = _.get(data, queryName);
  const filtFindItems = fetchedItems
    ? fetchedItems.filter(
        (oneItem) =>
          !currentItem[fieldName].map((o) => o.name).includes(oneItem.name)
      )
    : [];

  const matchCurrent = filtFindItems.filter((o) => o.name === search);
  const matchList = currentItem[fieldName].filter((o) => o.name === search);
  const filtFindItemsWithAdd =
    matchCurrent.length === 0 &&
    matchList.length === 0 &&
    queryName !== 'findFeeds'
      ? [...filtFindItems, { name: search }]
      : filtFindItems;

  console.log(fetchedItems);
  console.log(filtFindItems);

  const dummyNewItem = {
    ...currentItem,
    [fieldName]: filtFindItems,
  };

  return (
    <div>
      <div className=''>
        {loading ? (
          <svg
            className='w-8 h-8'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
            />
          </svg>
        ) : (
          <svg
            className='w-8 h-8 mb-10'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        )}
        <input
          className='border-4 rounded w-full py-2 px-3'
          value={search}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              setItem((currState) => ({
                ...currState,
                [fieldName]: [
                  ...currState[fieldName],
                  { ...dummyNewItem[fieldName][0] },
                ],
              }));
              setSearch(() => '');
            }
          }}
          onChange={(e) => {
            e.persist();
            if (e.target.value !== search) {
              setSearch(() => e.target.value);
              findItemQuery({
                variables: { data: { search: e.target.value } },
              });
            }
          }}
        />
        <div className='grid grid-cols-3 gap-2 flex m-2'>
          {search !== '' ? (
            <BadgeList
              fieldName={fieldName}
              action={ActionType.ADD}
              setItem={setItem}
              item={dummyNewItem}
              setSearch={setSearch}
            />
          ) : called ? (
            <p className='text-gray-400'>No matches</p>
          ) : null}
        </div>
      </div>
      <div className='grid grid-cols-3 gap-2 flex m-2'>
        {search !== '' ? (
          <BadgeList
            fieldName={fieldName}
            action={ActionType.ADD}
            setItem={setItem}
            item={dummyNewItem}
            setSearch={setSearch}
          />
        ) : called ? (
          <p className='text-gray-400'>No Matches</p>
        ) : null}
      </div>
    </div>
  );
};

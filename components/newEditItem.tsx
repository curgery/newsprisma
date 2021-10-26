import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { CREATE_BUNDLE_MUTATION, CREATE_FEED_MUTATION } from '../utils/api/graphql/mutations';
import { BundleObject, FeedObject, ItemType, NewItemState } from '../utils/types';
import { ErrorSign, WaitingClock } from './svg';

export const NewEditItem = ({type}: {type: ItemType}) => {
    const isFeed = type === ItemType.FeedType
    const initialFeed: FeedObject = {name: "", url: "", tags: []};
    const initialBundle: BundleObject = {name: "", description: "", tags: []};
    const initialState: NewItemState = isFeed ? initialFeed : initialBundle;
    const [currentItem, setItem] = useState<NewItemState>(initialState)

   const [ createItemMutation, { loading: createLoading, error: createError } ]  = useMutation(isFeed ? CREATE_FEED_MUTATION : CREATE_BUNDLE_MUTATION);

   if(createLoading) {
      return <WaitingClock className="my-20 h-10 w-10 text-gray-500 m-auto"/>
   }  
   if(createError) {
      return <ErrorSign className="my-20 h-10 w-10 text-gray-500 m-auto"/>
   } 
   
   return (
     <>
      <form onSubmit={e => e.preventDefault()}>
        
      </form>
     </>
   )
}

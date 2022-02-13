import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { CREATE_BUNDLE_MUTATION, CREATE_FEED_MUTATION } from '../utils/api/graphql/mutations';
import { prepareNewUpdateObj } from '../utils/prepareUpdateObj';
import { BundleObject, FeedObject, ItemType, NewItemState } from '../utils/types';
import { ErrorSign, WaitingClock } from './svg';

export const NewEditItem =   ({type}: {type: ItemType}) => {
    const isFeed = type === ItemType.FeedType
    const initialFeed: FeedObject = {name: "", url: "", tags: []};
    const initialBundle: BundleObject = {name: "", description: "", tags: []};
    const initialState: NewItemState = isFeed ? initialFeed : initialBundle;
    const [currentItem, setItem] = useState<NewItemState>(initialState)
    const inputFields = isFeed ? ['name', 'url'] : ['name', 'description'];

   const [ createItemMutation, { loading: createLoading, error: createError } ]  = useMutation(isFeed ? CREATE_FEED_MUTATION : CREATE_BUNDLE_MUTATION);

   if(createLoading) {
      return <WaitingClock className="my-20 h-10 w-10 text-gray-500 m-auto"/>
   }  
   if(createError) {
      return <ErrorSign className="my-20 h-10 w-10 text-gray-500 m-auto"/>
   } 
   
   return (
     <>
      <form
      onSubmit={(e) => {
         e.preventDefault();
         const data = prepareNewUpdateObj(currentItem)
         console.log(data)
      }} >
         <div className="grid grid-cols-12 gap-4 rounded-md border-4 my-4 py-2 px-4">
            <h3 className="col-span-12 text-lg font-medium py-2">
               {isFeed ? "New Feed" : "New Bundle"}
            </h3>
            <div className="col-span-6">
               {inputFields.map((name) => (
                  <p key={name}>{name}</p>
               ))}
            </div>
            <div className={`py-4 ${isFeed ? null : 'pt-28'}`}>
               <input className={`py-4 ${`bg-${isFeed ? 'green' : 'purple'}-400 `} hover:bg-${
               isFeed ? 'green' : 'purple'
               }-700 text-white font-bold px-12 rounded`} type="submit"
               />
            </div>
         </div>
         
      </form>
     </>
   )
}

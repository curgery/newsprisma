import {v4 as uuidv4} from 'uuid';


const genNestedItems = (currentItem) => {
    const tags = 
    "tags" in currentItem ? {
        tags: {
            connect: currentItem.tags.map(({ id }) =>({ id })).filter(({ id }) => id !== undefined),

            create: currentItem.tags
            .filter(({ id }) => id === undefined)
            .map((o) => ({ ...o, id: uuidv4() })),
        },
    }
     : {};

     const feeds =
     'feeds' in currentItem
       ? {
           feeds: {
             connect: currentItem.feeds
               .map(({ id }) => ({ id }))
               .filter(({ id }) => id !== undefined),
           },
         }
       : {};

       const { __typename, likes, author, bundles, ...cleanedItem } = currentItem;  //strip unwanted from currentItem and call it 'cleanedItem' 'CleanedItem' will be all of the fields that are leftover.

       return { ...cleanedItem, ...tags, ...feeds };  //add all tag and feed info to cleanedItem.


}


export const prepareNewUpdateObj = (currentItem) => {
   const currentData =  genNestedItems(currentItem)

   return { ...currentData,  id: uuidv4() // currentData (feed or tag) is returned WITHOUT an id number; thus one is provided.
   } 
}
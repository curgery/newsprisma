import React from 'react'
import {v4 as uuid4v } from 'uuid'


const genNestedItems = ( currentItem ) => {
    const tags = 
    'tags' in currentItem ? {
        tags: {
            connect: currentItem.tags.map(({ id }) => ({ id })).filter(({ id }) => id !== undefined),

            create: currentItem.tags.filter(({ id }) => id === undefined).map((o) => ({ ...o, id: uuid4v() })),
        },
    } : {};

    const feeds = 
    'feeds' in currentItem ? {
        feeds: {
                connect: currentItem.feeds.map(({ id }) => ({ id })).filter(({ id }) => id !== undefined),

            },
        }
        : {};
    const { __typename, likes, author, bundles, ...cleanedItem  } = currentItem;

    return { ...cleanedItem, ...tags, ...feeds };

}

export const prepareNewUpdateObject = (currentItem) => {
    const currentData = genNestedItems(currentItem);

    return {currentData, id: uuid4v()};
};


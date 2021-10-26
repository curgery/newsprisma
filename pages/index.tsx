import { useState } from 'react';
import { Layout } from '../components/layout';
import { ItemList } from '../components/itemList';
import { ItemType, SelectedFeedState } from '../utils/types';
const IndexPage = () => {
  const initialSelected: SelectedFeedState = {
    id: null,
    feeds: [],
    editMode: false,
    newMode: false,
  };

  const [ selected, setSelected ] = useState(initialSelected) 

  return (
    <Layout>
      <h3 className='justify-start flex text-lg font-medium py-4'>
        Southern Woodland Lumber, LLC
      </h3>
      <ItemList
        selected={selected}
        setSelected={setSelected}
        useSelected={true}
        type={ItemType.BundleType}
        allowEdits
        />
    </Layout>
  );
};

export default IndexPage;

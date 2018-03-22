import React from 'react';

import { FilterList } from '../../../filter';
import NewsList from '../newsList';

export default function NewsPage(props) {
  return (
    <React.Fragment>
      <FilterList />
      <NewsList />
    </React.Fragment>
  );
}

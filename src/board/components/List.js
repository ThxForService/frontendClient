import React from 'react';
import ListItems from './ListItems';
import ListSearchForm from './ListSearchForm';

const List = ({ items, search, onSubmit, onChange }) => {
  return (
    <>
      <ListItems items={items} />
      <ListSearchForm
        search={search}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default List;

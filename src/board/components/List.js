// List.js
import React from 'react';
import ListItems from './ListItems';
import ListSearchForm from './ListSearchForm';

const List = ({ items, search, onSubmit, onChange, onRowClick }) => {
  return (
    <>
      <ListItems items={items} onRowClick={onRowClick} />
      <ListSearchForm
        search={search}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default List;

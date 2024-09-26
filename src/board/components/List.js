// List.js
import React from 'react';
import ListItems from './ListItems';
import ListSearchForm from './ListSearchForm';

const List = ({ items, search, onSubmit, onChange, onRowClick, bid }) => {
  return (
    <>
      <ListSearchForm search={search} onChange={onChange} onSubmit={onSubmit} />
      <ListItems items={items} onRowClick={onRowClick} bid={bid} />
    </>
  );
};

export default List;

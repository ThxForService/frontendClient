'use client';
import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { apisurveyList } from '../apis/apiList';

const TestListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const items = await apisurveyList();
        setItems(items);
        setTimeout(function () {
          setLoading(true);
        }, 2000);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [setLoading]);

  return <ItemList items={items} loading={loading} />;
};

export default React.memo(TestListContainer);

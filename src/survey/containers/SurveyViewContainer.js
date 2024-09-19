import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { apiGet } from '../apis/apiInfo';
import Loading from '../../../commons/components/Loading';
import ItemImage from '../components/ItemImage';
import ItemDescription from '../components/ItemDescription';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const SurveyViewContainer = ({ setPageTitle }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const { srvyno } = useParams();

  useEffect(() => {
    setLoading(true);
    apiGet(srvyno).then((item) => {
      setPageTitle(item.title);
      setItem(item);
      const position = { lat: item.latitude, lng: item.longitude };
    });
    setLoading(false);
  }, [srvyno, setPageTitle]);

  if (loading || !item) {
    return <Loading />;
  }

  return (
    <>
      <Wrapper>
        {item.photoUrl && (
          <ItemImage images={item.photoUrl} onClick={onShowImage} />
        )}
        <ItemDescription item={item} />
      </Wrapper>
    </>
  );
};

export default React.memo(SurveyViewContainer);

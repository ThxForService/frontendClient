'use client';
import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { produce } from 'immer';
import { getInfo, deleteBoardData } from '../apis/apiboard';
import { write as writeComment } from '../apis/apiComment';
import { getList } from '../apis/apiComment'; 
import UserInfoContext from '../../commons/contexts/UserInfoContext';
import Loading from '../../commons/components/Loading';
import View from '../components/View';
import { useRouter } from 'next/navigation'; 
import ListContainer from './ListContainer';

const ViewContainer = () => {
  const { seq } = useParams(); 
  const [board, setBoard] = useState(null);
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]); 
  const [commentForm, setCommentForm] = useState({
    boardDataSeq: '',
    mode: 'write',
    commenter: '',
    content: '',
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const { t } = useTranslation();
  const router = useRouter(); 

  const {
    states: { userInfo, isLogin },
  } = useContext(UserInfoContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getInfo(seq);
        setData(res);
        setBoard(res.board);

        setCommentForm((prev) => ({
          ...prev,
          boardDataSeq: seq,
          commenter: userInfo?.userName || '',
        }));

        const commentsRes = await getList(seq); 
        setComments(commentsRes); 

        window.scrollTo(0, 0);
      } catch (err) {
        console.error(err);
        setMessage(err.message);
      }
    };

    fetchData();
  }, [seq, router, userInfo]);

  const onDelete = useCallback(
    (seq) => {
      if (!window.confirm(t('정말 삭제하시겠습니까'))) {
        return;
      }

      (async () => {
        try {
          await deleteBoardData(seq);
          router.push(`/board/list/${board.bid}`);
        } catch (err) {
          console.error(err);
        }
      })();
    },
    [t, router, board],
  );

  const onChange = useCallback((e) => {
    setCommentForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
  
      const _errors = {};
      let hasErrors = false;
  
      // 필수 항목 검증
      const requiredFields = {
        commenter: t('작성자를 입력하세요'),
        content: t('댓글을 입력하세요'),
      };
    
  
      for (const [field, message] of Object.entries(requiredFields)) {
        if (!commentForm[field]?.trim()) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }
  
      setErrors(_errors);
  
      if (hasErrors) {
        return;
      }
  
      (async () => {
        try {
          await writeComment(commentForm);
      
          const commentsRes = await getList(commentForm.boardDataSeq); 
          setComments(commentsRes); 
          setCommentForm((prev) => ({
            ...prev,
            content: '', 
          }));
        } catch (err) {
          console.error(err); 
          setErrors({ content: [err.message] }); 
        }
      })();
    },
    [t, isLogin, commentForm],
  );
  

  if (!data) {
    return (
      <>
        {message && <div style={{ color: 'red' }}>{message}</div>} 
        <Loading />
      </>
    );
  }

  const { showListBelowView, bid } = board;

  return (
    <>
      <View
        board={board}
        data={{ ...data, comments }} 
        commentForm={commentForm}
        onChange={onChange}
        onSubmit={onSubmit}
        errors={errors}
        onDelete={onDelete}
      />
      {showListBelowView && <ListContainer bid={bid} />}
    </>
  );
};

export default React.memo(ViewContainer);

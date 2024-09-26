'use client';
import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { getUserStates } from '@/commons/contexts/UserInfoContext';
import Form from '@/board/components/Form';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import {
  getInfo,
  createBoardData,
  updateBoardData,
} from '@/board/apis/apiboard';
import Loading from '../../commons/components/Loading';
import { deleteFile } from '@/commons/libs/apiFile';

const RegisterContainer = ({ bid, seq }) => {
  const { isLogin, userInfo } = getUserStates();

  const [form, setForm] = useState({
    bid: bid || '',
    gid: Date.now() + '',
    seq: '',
    poster: '',
    subject: '',
    notice: false,
    content: '',
    num1: null,
    num2: null,
    num3: null,
    text1: '',
    text2: '',
    text3: '',
    longText1: '',
    longText2: '',
    mode: seq ? 'edit' : 'write',
  });

  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();

  useLayoutEffect(() => {
    setMainTitle(t('게시판'));
  }, [setMainTitle, t]);

  useEffect(() => {
    setForm((form) => ({ ...form, poster: userInfo?.username }));
  }, [isLogin, userInfo]);

  useEffect(() => {
    const fetchBoardData = async () => {
      if (seq) {
        setLoading(true);
        try {
          const boardData = await getInfo(seq);
          setForm({
            ...boardData,
            mode: 'edit',
          });
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchBoardData();
  }, [seq]);

  const onChange = useCallback(
    (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    },
    [form],
  );
  const onFileDelete = useCallback(
    (seq) => {
      if (!confirm(t('정말_삭제하겠습니까?'))) {
        return;
      }

      (async () => {
        try {
          await deleteFile(seq);

          let editorImages = form?.editorImages;
          if (!editorImages) {
            return;
          }

          editorImages = editorImages.filter((file) => file.seq !== seq);
          setForm((form) => ({ ...form, editorImages }));
        } catch (err) {
          console.error(err);
        }
      })();
    },
    [form, t],
  );
  const onEditorChange = (event, editor) => {
    const data = editor.getData();
    setForm({ ...form, content: data });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.mode === 'edit') {
        await updateBoardData({ ...form, seq });
        router.replace(`/board/view/${seq}`);
      } else {
        await createBoardData(form);
        router.replace(`/board/list/${bid}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>{seq ? '게시글 수정' : '게시글 등록'}</h1>
      <Form
        form={form}
        onChange={onChange}
        onEditorChange={onEditorChange}
        onSubmit={onSubmit}
        bid={bid}
        onFileDelete={onFileDelete}
      />
    </div>
  );
};

export default React.memo(RegisterContainer);

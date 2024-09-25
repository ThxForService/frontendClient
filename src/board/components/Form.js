import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { createBoardData, updateBoardData } from '@/board/apis/apiboard';
import { useRouter } from 'next/navigation';

const Form = ({ initialValues, onSubmit }) => {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setForm(initialValues);
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setForm({ ...form, content: data });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      if (form.mode === 'edit') {
        await updateBoardData(form);
      } else {
        await createBoardData(form);
      }
      router.replace('/board/list/1');
    } catch (error) {
      setErrors(error.message);
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>게시판 ID</label>
        <input
          type="text"
          name="bid"
          value={form.bid}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>작성자</label>
        <input
          type="text"
          name="poster"
          value={form.poster}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>비회원 비밀번호</label>
        <input
          type="password"
          name="guestPw"
          value={form.guestPw}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>제목</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>공지글 여부</label>
        <input
          type="checkbox"
          name="notice"
          checked={form.notice}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>내용</label>
        <CKEditor
          editor={ClassicEditor}
          data={form.content}
          onChange={handleEditorChange}
        />
      </div>
      <div>
        <label>정수 추가 필드1 (num1)</label>
        <input
          type="number"
          name="num1"
          value={form.num1 || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>정수 추가 필드2 (num2)</label>
        <input
          type="number"
          name="num2"
          value={form.num2 || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>정수 추가 필드3 (num3)</label>
        <input
          type="number"
          name="num3"
          value={form.num3 || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>한줄 텍스트 추가 필드1 (text1)</label>
        <input
          type="text"
          name="text1"
          value={form.text1 || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>한줄 텍스트 추가 필드2 (text2)</label>
        <input
          type="text"
          name="text2"
          value={form.text2 || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>한줄 텍스트 추가 필드3 (text3)</label>
        <input
          type="text"
          name="text3"
          value={form.text3 || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>여러줄 텍스트 추가 필드1 (longText1)</label>
        <textarea
          name="longText1"
          value={form.longText1 || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>여러줄 텍스트 추가 필드2 (longText2)</label>
        <textarea
          name="longText2"
          value={form.longText2 || ''}
          onChange={handleChange}
        />
      </div>
      <button type="submit">저장</button>
    </form>
  );
};

export default Form;

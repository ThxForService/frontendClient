import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Form = ({ form, bid, handleChange, handleEditorChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>게시판 ID: {bid}</label>
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
    <button type="submit">저장</button>
  </form>
);

export default Form;

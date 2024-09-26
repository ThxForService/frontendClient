import React, { useState, useCallback } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FileUpload from '@/commons/components/FileUpload';
import FileItems from '@/commons/components/FileItems';
import { useTranslation } from 'react-i18next';

const Form = ({ form, bid, onChange, onEditorChange, onSubmit, onFileDelete }) => {
  const { t } = useTranslation();
  const [editor, setEditor] = useState(null);

  const insertImageCallback = useCallback(
    (files) => {
      if (!files || files.length === 0 || !editor) {
        return;
      }

      const source = files.map((file) => file.fileUrl);
      editor.execute('insertImage', { source });

      const editorImages = form?.editorImages ?? [];
      editorImages.push(...files);
      onChange({ target: { name: 'editorImages', value: editorImages } });
    },
    [editor, form, onChange],
  );

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>작성자: </label>
        {form?.poster}
      </div>
      <div>
        <label>제목</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>내용</label>
        <CKEditor
          editor={ClassicEditor}
          data={form.content}
          onChange={onEditorChange}
          onReady={editor => {
            setEditor(editor); // 에디터 초기화 시 인스턴스 저장
          }}
        />
      </div>
      <FileUpload
        imageOnly={true}
        gid={form?.gid}
        color="primary"
        callback={insertImageCallback}
      >
        {t('이미지_첨부')}
      </FileUpload>
      {form?.editorImages && (
        <FileItems files={form.editorImages} onDelete={onFileDelete} />
      )}
      <button type="submit">저장</button>
    </form>
  );
};

export default Form;

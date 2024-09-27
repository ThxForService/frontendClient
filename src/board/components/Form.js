import React, { useState, useCallback } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FileUpload from '@/commons/components/FileUpload';
import FileItems from '@/commons/components/FileItems';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { colors } from '@/theme/colors';
import { StyledButton } from '@/commons/components/StyledButton';

const FormContainer = styled.form`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  vertical-align: middle;

  &:first-child {
    width: 150px;
    background-color: #f5f6f8;
    text-align: left;
    font-weight: bold;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
`;

const ContentEditor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const EditorContainer = styled.div`
  flex-grow: 1;
  height: 400px;
  overflow: auto;

  .ck-editor__editable {
    min-height: 350px;
  }
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const submitButtonStyles = {
  size: 'medium',
  bgColor: colors.gray,
  hoverColor: colors.darkGray,
};

const Form = ({ form, onChange, onEditorChange, onSubmit, onFileDelete }) => {
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
    <FormContainer onSubmit={onSubmit}>
      <Table>
        <tbody>
          <tr>
            <TableCell>{t('작성자')}</TableCell>
            <TableCell>{form?.poster}</TableCell>
          </tr>
          <tr>
            <TableCell>{t('제목')}</TableCell>
            <TableCell>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={onChange}
                required
                placeholder={t('제목을 입력하세요')}
              />
            </TableCell>
          </tr>
          <tr>
            <TableCell>{t('내용')}</TableCell>
            <TableCell>
              <ContentEditor>
                <EditorContainer>
                  <CKEditor
                    editor={ClassicEditor}
                    data={form.content}
                    onChange={onEditorChange}
                    onReady={editor => {
                      setEditor(editor);
                    }}
                  />
                </EditorContainer>
              </ContentEditor>
            </TableCell>
          </tr>
        </tbody>
      </Table>

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
      
      <ButtonGroup>
        <StyledButton type="submit" {...submitButtonStyles}>
          {t('등록')}
        </StyledButton>
      </ButtonGroup>
    </FormContainer>
  );
};

export default Form;

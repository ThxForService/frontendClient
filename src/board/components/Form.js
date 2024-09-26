import React, { useState, useCallback } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// 공통 폼 스타일
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
  height: 400px; /* 고정 높이 설정 */
  overflow: hidden; /* 내부 요소의 오버플로우 숨김 */
`;

const EditorContainer = styled.div`
  flex-grow: 1; /* 에디터가 가능한 공간을 모두 차지 */
  height: 400px; /* 에디터 높이 설정 */
  overflow: auto; /* 내용이 넘칠 경우 스크롤 생기도록 설정 */
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 20px;
`;

// 버튼 스타일
const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  color: white;
  background-color: ${(props) => props.bgColor || '#3498db'};
  
  &:hover {
    background-color: ${(props) => props.hoverColor || '#2980b9'};
  }
`;

const Form = ({ form, onChange, onEditorChange, onSubmit }) => {
  const { t } = useTranslation();
  const [editor, setEditor] = useState(null);

  const insertImageCallback = useCallback(
    (files) => {
      if (!files || files.length === 0 || !editor) return;

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
            <TableCell>
              <input
                type="text"
                name="poster"
                value={form?.poster}
                onChange={onChange}
                readOnly
              />
            </TableCell>
          </tr>
          <tr>
            <TableCell>{t('비밀번호')}</TableCell>
            <TableCell>
              <input
                type="password"
                name="password"
                value={form?.password}
                onChange={onChange}
                required
                placeholder={t('비밀번호를 입력하세요')}
              />
            </TableCell>
          </tr>
          <tr>
            <TableCell>{t('제목')}</TableCell>
            <TableCell>
              <input
                type="text"
                name="subject"
                value={form?.subject}
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
                    data={form?.content}
                    onChange={onEditorChange}
                    onReady={(editorInstance) => setEditor(editorInstance)}
                  />
                </EditorContainer>
              </ContentEditor>
            </TableCell>
          </tr>
        </tbody>
      </Table>
      
      <ButtonGroup>
        <Button type="submit" bgColor="#0064C5" hoverColor="#0056b3">
          {t('작성 완료')}
        </Button>
        <Button type="reset" bgColor="#6c757d" hoverColor="#5a6268">
          {t('다시 입력')}
        </Button>
      </ButtonGroup>
    </FormContainer>
  );
};

export default Form;

export default function CounselingDetail({ params }) {
  const { cSeq } = params; // URL에서 상담 ID 추출

  return (
    <div>
      <h1>{cSeq}번 상담 상세보기</h1>
      {/* id를 이용해 상담의 상세 정보를 불러와 렌더링 */}
    </div>
  );
}
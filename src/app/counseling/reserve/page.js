const CounselingReserve = () => {
  return (
    <div>
      <h1>상담 예약 페이지</h1>
      {/* 상담 예약 폼 */}
      <form>
        <label htmlFor="username">이름:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="date">예약 날짜:</label>
        <input type="date" id="date" name="date" />

        <button type="submit">예약하기</button>
      </form>
    </div>
  );
};

export default CounselingReserve();

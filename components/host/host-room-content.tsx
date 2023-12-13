export const HostRoomContent = () => {
  return (
    <div className="grid-areas-roomMobile md:grid-areas-room grid h-[calc(100%-48px)] auto-rows-[minmax(200px,auto)] grid-cols-1 gap-[10px] p-4 md:grid-cols-12 [&>*]:overflow-hidden [&>*]:rounded-md [&>*]:bg-zinc-700/10 [&>*]:dark:bg-dark-300">
      <div className="grid-in-picture">객실 사진 영역</div>
      <div className="grid-in-graph">객실 매출 그래프 영역</div>
      <div className="grid-in-reservation">예약 내역 영역</div>
      <div className="grid-in-service">시설 및 서비스 영역</div>
      <div className="grid-in-calendar">달력 영역</div>
      <div className="grid-in-price">가격 영역</div>
      <div className="grid-in-review">리뷰 영역</div>
    </div>
  );
};

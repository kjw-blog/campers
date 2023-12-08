export default function RoomIdPage({
  params,
}: {
  params: { campId: string; roomId: string };
}) {
  return (
    <>
      <p>{params.campId}</p>
      <p>{params.roomId}</p>
    </>
  );
}

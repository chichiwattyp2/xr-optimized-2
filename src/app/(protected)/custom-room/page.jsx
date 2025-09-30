
'use client';
import dynamic from 'next/dynamic';
const CustomRoom = dynamic(
  () => import('src/components/common/RoomSelector/CustomRoom'),
  { ssr: false }
);

const Page = () => {
  return (
    <>
      <CustomRoom />
    </>
  );
};

export default Page;

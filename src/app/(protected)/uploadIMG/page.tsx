'use client';
import dynamic from 'next/dynamic';
const ThreeDViewer = dynamic(
  () => import('@/components/common/RoomSelector/ThreeDViewer'),
  { ssr: false }
);

const Page = () => {
  return (
    <>
      <ThreeDViewer />
    </>
  );
};

export default Page;

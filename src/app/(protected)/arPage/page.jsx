'use client';
import dynamic from 'next/dynamic';
const SceneComponent = dynamic(
  () => import SceneComponent from ('@/components/common/sceneComponent')
),
  { ssr: false }
);

const Page = () => {
  return (
    <>
      <SceneComponent />
    </>
  );
};

export default Page;

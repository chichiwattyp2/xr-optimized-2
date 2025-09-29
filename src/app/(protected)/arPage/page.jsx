'use client';
import dynamic from 'next/dynamic';
const SceneComponent = dynamic(
  () => import('src/components/common/sceneComponent.jsx'),
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

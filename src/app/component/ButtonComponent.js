// components/ButtonComponent.js
"use client"
import { useRouter } from 'next/navigation';

const ButtonComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/project-details'); // Replace '/next-page' with the actual path to your next page
  };

  return (
    <button onClick={handleClick}>
      Go to Next Page
    </button>
  );
};

export default ButtonComponent;

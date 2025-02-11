import Image from 'next/image';

const FloatingImage = () => {
  return (
    <Image
      src="/virender2.png"  // Correct path to the image in the public folder
      alt="A picture of the user" // More descriptive alt text
      className="relative top-0 left-0 max-w-xs h-auto animate-float"
    />
  );
};

export default FloatingImage;

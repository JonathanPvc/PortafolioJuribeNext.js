// components/ProfileImage.tsx

import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative">
      <Image
        src="/profile.png"
        alt="Jonathan Uribe"
        width={500}
        height={500}
        className="
          rounded-3xl
          border
          border-gray-800
          object-cover
        "
      />
    </div>
  );
}
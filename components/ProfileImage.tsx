// components/ProfileImage.tsx

import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative">
      <Image
        src="/profile.jpg"
        alt="Jonathan Uribe"
        width={300}
        height={300}
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
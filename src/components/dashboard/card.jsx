import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

function Cart({ learning }) {
  return (
    <Link href="/workspace">
      <div className="bg-white py-4 mr-2 rounded-2xl shadow-sm cursor-pointer">
        <div className="relative h-[100px] mx-4  ">
          <Image
            src={learning}
            alt={"Learning"}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <p className="text-[12px] text-center pt-4 text-lightGray">
          Vocabulary Flashcard
        </p>
      </div>
    </Link>
  );
}

export default Cart;

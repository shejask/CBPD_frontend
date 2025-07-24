import Image from "next/image";
import React from "react";
import reg from "/public/images/reg no.png";
function Recognition() {
  return (
    <div className=" p-10 md:my-11 grid grid-cols-1 gap-10 md:flex md:flex-col md:gap-10 items-center">
      <h1 className=" text-4xl md:text-7xl text-center font-semibold md:w-1/2">
        Our Recognitions & Accreditations
      </h1>
      <div className=" md:flex md:items-center grid grid-cols-1 gap-10 place-items-center md:w-full md:justify-center md:gap-20">
        <div className=" h-72 px-5 md:w-1/6 flex items-center justify-center bg-blue-950 rounded-2xl">
          <Image
            src={reg}
            alt="payments"
            width={320}
            height={30}
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "200px",
            }}
          />
        </div>

        <div className=" h-72 px-5 md:w-1/6 flex items-center justify-center bg-blue-950 rounded-2xl">
          <Image
            src="/images/footer/cpdlogo.png"
            alt="cpdlogo"
            width={320}
            height={10}
            style={{
              width: "auto",
              paddingTop: "11px",
              height: "auto",
              maxWidth: "200px",
            }}
          />
        </div>
        <div className=" h-72 px-5 md:w-1/6 flex items-center justify-center bg-blue-950 rounded-2xl">
          <Image
            src="/images/footer/aoht.png"
            alt="aoht"
            width={320}
            height={20}
            style={{
              width: "auto",
              paddingTop: "11px",
              height: "auto",
              maxWidth: "200px",
            }}
          />
        </div>
        <div className=" h-72 px-5 md:w-1/6 flex items-center justify-center bg-blue-950 rounded-2xl">
          <Image
            src="/images/footer/ukrlp.jpg"
            alt="ukrlp"
            width={350}
            height={30}
            style={{
              width: "auto",
              paddingTop: "11px",
              height: "auto",
              maxWidth: "200px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Recognition;

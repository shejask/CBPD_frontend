import Image from "next/image";
import React from "react";
import reg from "/public/images/reg noo.png";
function Recognition() {
  return (
    <div className="  md:my-11 grid grid-cols-1 gap-10 md:flex md:flex-col md:gap-10 items-center">
      <h1 className=" text-4xl md:text-7xl text-center font-semibold md:w-1/2">
        Our Recognitions & Accreditations
      </h1>
      <div className=" md:flex md:items-center py-5  grid grid-cols-1 gap-10 place-items-center md:w-full md:justify-center md:gap-20">
        <div className=" flex flex-col gap-1 items-center">
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
          <h1 className=" text-black font-semibold text-sm">
            REGISTERED NUMBER:16442180
          </h1>
        </div>

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
        <div className=" flex flex-col gap-2 items-center">
          <Image
            src="/images/footer/ico.jpeg"
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
          <h1 className=" text-black font-semibold text-sm">
            REGISTERED NUMBER:ZC015593
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Recognition;

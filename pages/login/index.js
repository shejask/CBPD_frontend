import Image from "next/image";
import React, { useState } from "react";
import { MailOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import { Input, Typography, Button, message } from "antd";
import Link from "next/link";
import institutionApi from "@/lib/api/institutionApi";
import { useRouter } from "next/router";

function Index() {
  const { Text } = Typography;
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const result = await institutionApi.instituteLogin(email, password);

      if (result.success) {
        message.success("Login successfully!");
        console.log(result);
        localStorage.setItem("login", true);
        localStorage.setItem("id", result.data.org._id);
        router.push("/dashboard");
      } else {
        message.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      message.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="">
      <div className="hidden w-full h-screen md:flex items-center justify-between ">
        <div className=" w-1/2 h-full bg-black flex items-center justify-center relative">
          <Image
            src="/portal/loginSide.jpg"
            width={5000}
            height={5000}
            className=" w-full h-full object-cover "
            alt="login image"
          />
          <div className=" w-full h-full absolute bg-opacity-50 bg-black top-0 left-0 p-4">
            <Image src="/logo.png" width={150} height={150} alt="logo" />
          </div>
        </div>
        <div className=" w-1/2 h-full bg-white flex items-center justify-center">
          <div className=" flex  flex-col gap-3">
            <div className=" flex flex-col gap-1">
              <p className=" text-3xl font-bold text-black ">
                Sign in To Your Account
              </p>
              <p>Let's sign in to your account and get started.</p>
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="email" className=" text-sm font-semibold">
                Email
              </label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                size="large"
                id="email"
                placeholder="Enter your email"
                prefix={<MailOutlined />}
                type="email"
              />
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="password" className=" text-sm font-semibold">
                Password
              </label>
              <Input.Password
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                size="large"
                placeholder="Enter your Password"
                prefix={<LockOutlined />}
              />
            </div>
            <Button
              size="large"
              type="primary"
              icon={<LoginOutlined />}
              iconPosition="end"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <div className=" flex flex-col text-center gap-2">
              <Text>
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Register here
                </Link>
              </Text>
              {/* <Text>
              <Link
                href="/forgot-password"
                className="text-blue-500 hover:text-blue-700"
              >
                Forgot Password?
              </Link>
            </Text> */}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-screen flex px-10 md:hidden items-center justify-center">
        <h1 className="text-center ">
          Please Open on a Computer for more safety and good user experiance
        </h1>
      </div>
    </div>
  );
}

export default Index;

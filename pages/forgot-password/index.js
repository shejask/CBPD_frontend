import Image from "next/image";
import React, { useState } from "react";
import { MailOutlined, ArrowLeftOutlined, SendOutlined } from "@ant-design/icons";
import { Input, Typography, Button, message, Alert } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

function ForgotPassword() {
  const { Text, Title } = Typography;
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      message.error("Please enter your email address");
      return;
    }

    if (!email.includes("@")) {
      message.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/institution/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmailSent(true);
        message.success("Password reset instructions sent to your email");
      } else {
        message.error(data.error || "Failed to send reset email");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      message.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  if (emailSent) {
    return (
      <div className="w-full h-screen flex items-center justify-between">
        <div className="w-1/2 h-full bg-black flex items-center justify-center relative">
          <Image
            src="/portal/loginSide.jpg"
            width={5000}
            height={5000}
            className="w-full h-full object-cover"
            alt="forgot password image"
          />
          <div className="w-full h-full absolute bg-opacity-50 bg-black top-0 left-0 p-4">
            <Image src="/logo.png" width={150} height={150} alt="logo" />
          </div>
        </div>
        <div className="w-1/2 h-full bg-white flex items-center justify-center">
          <div className="flex flex-col gap-6 max-w-md w-full px-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SendOutlined className="text-2xl text-green-600" />
              </div>
              <Title level={2} className="text-black mb-2">
                Check Your Email
              </Title>
              <Text className="text-gray-600">
                We've sent password reset instructions to{" "}
                <span className="font-semibold text-black">{email}</span>
              </Text>
            </div>

            <Alert
              message="Email Sent Successfully"
              description="If an account with that email exists, you'll receive a password reset link within a few minutes. Please check your spam folder if you don't see it in your inbox."
              type="success"
              showIcon
            />

            <div className="flex flex-col gap-3">
              <Button
                size="large"
                onClick={() => setEmailSent(false)}
                icon={<ArrowLeftOutlined />}
              >
                Try Different Email
              </Button>
              
              <Link href="/login">
                <Button size="large" type="primary" className="w-full">
                  Back to Login
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <Text className="text-gray-500">
                Didn't receive the email?{" "}
                <button
                  onClick={() => setEmailSent(false)}
                  className="text-blue-500 hover:text-blue-700 underline bg-transparent border-none cursor-pointer"
                >
                  Try again
                </button>
              </Text>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center justify-between">
      <div className="w-1/2 h-full bg-black flex items-center justify-center relative">
        <Image
          src="/portal/loginSide.jpg"
          width={5000}
          height={5000}
          className="w-full h-full object-cover"
          alt="forgot password image"
        />
        <div className="w-full h-full absolute bg-opacity-50 bg-black top-0 left-0 p-4">
          <Image src="/logo.png" width={150} height={150} alt="logo" />
        </div>
      </div>
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <div className="flex flex-col gap-6 max-w-md w-full px-8">
          <div className="flex flex-col gap-2">
            <Title level={2} className="text-black">
              Forgot Password?
            </Title>
            <Text className="text-gray-600">
              No worries! Enter your email address and we'll send you a link to reset your password.
            </Text>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-semibold">
                Email Address
              </label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                size="large"
                id="email"
                placeholder="Enter your registered email"
                prefix={<MailOutlined />}
                type="email"
                onKeyPress={handleKeyPress}
                disabled={loading}
              />
            </div>

            <Button
              size="large"
              type="primary"
              icon={<SendOutlined />}
              iconPosition="end"
              onClick={handleSubmit}
              loading={loading}
              disabled={!email}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </Button>
          </div>

          <div className="text-center">
            <Text>
              Remember your password?{" "}
              <Link
                href="/login"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Back to Login
              </Link>
            </Text>
          </div>

          <Alert
            message="Security Notice"
            description="For your security, we'll only send reset instructions to registered email addresses. If you don't receive an email, please check your spam folder or contact support."
            type="info"
            showIcon
          />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
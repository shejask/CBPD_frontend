import Image from "next/image";
import React, { useState, useEffect } from "react";
import { LockOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Input, Typography, Button, message, Alert, Progress } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

function ResetPassword() {
  const { Text, Title } = Typography;
  const router = useRouter();
  const { token } = router.query;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifyingToken, setVerifyingToken] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);
  const [institutionInfo, setInstitutionInfo] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [resetSuccess, setResetSuccess] = useState(false);

  // Password strength calculation
  const calculatePasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 6) strength += 25;
    if (pwd.length >= 8) strength += 25;
    if (/[A-Z]/.test(pwd)) strength += 25;
    if (/[0-9]/.test(pwd)) strength += 25;
    return strength;
  };

  const getPasswordStrengthColor = (strength) => {
    if (strength < 25) return "#ff4d4f";
    if (strength < 50) return "#faad14";
    if (strength < 75) return "#1890ff";
    return "#52c41a";
  };

  const getPasswordStrengthText = (strength) => {
    if (strength < 25) return "Weak";
    if (strength < 50) return "Fair";
    if (strength < 75) return "Good";
    return "Strong";
  };

  useEffect(() => {
    if (password) {
      setPasswordStrength(calculatePasswordStrength(password));
    } else {
      setPasswordStrength(0);
    }
  }, [password]);

  useEffect(() => {
    if (token) {
      verifyToken();
    }
  }, [token]);

  const verifyToken = async () => {
    try {
      const response = await fetch(`/api/institution/reset-password?token=${token}`);
      const data = await response.json();

      if (response.ok && data.success) {
        setTokenValid(true);
        setInstitutionInfo(data.data);
      } else {
        setTokenValid(false);
        message.error(data.error || "Invalid or expired reset token");
      }
    } catch (error) {
      console.error("Token verification error:", error);
      setTokenValid(false);
      message.error("Failed to verify reset token");
    } finally {
      setVerifyingToken(false);
    }
  };

  const handleSubmit = async () => {
    if (!password || !confirmPassword) {
      message.error("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      message.error("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      message.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/institution/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password,
          confirmPassword,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResetSuccess(true);
        message.success("Password reset successfully!");
      } else {
        message.error(data.error || "Failed to reset password");
      }
    } catch (error) {
      console.error("Reset password error:", error);
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

  // Loading state while verifying token
  if (verifyingToken) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <Text>Verifying reset token...</Text>
        </div>
      </div>
    );
  }

  // Invalid token state
  if (!tokenValid) {
    return (
      <div className="w-full h-screen flex items-center justify-between">
        <div className="w-1/2 h-full bg-black flex items-center justify-center relative">
          <Image
            src="/portal/loginSide.jpg"
            width={5000}
            height={5000}
            className="w-full h-full object-cover"
            alt="reset password image"
          />
          <div className="w-full h-full absolute bg-opacity-50 bg-black top-0 left-0 p-4">
            <Image src="/logo.png" width={150} height={150} alt="logo" />
          </div>
        </div>
        <div className="w-1/2 h-full bg-white flex items-center justify-center">
          <div className="flex flex-col gap-6 max-w-md w-full px-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <ExclamationCircleOutlined className="text-2xl text-red-600" />
            </div>
            <Title level={2} className="text-black">
              Invalid Reset Link
            </Title>
            <Text className="text-gray-600">
              This password reset link is invalid or has expired. Please request a new one.
            </Text>
            <div className="flex flex-col gap-3">
              <Link href="/forgot-password">
                <Button size="large" type="primary" className="w-full">
                  Request New Reset Link
                </Button>
              </Link>
              <Link href="/login">
                <Button size="large" className="w-full">
                  Back to Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success state
  if (resetSuccess) {
    return (
      <div className="w-full h-screen flex items-center justify-between">
        <div className="w-1/2 h-full bg-black flex items-center justify-center relative">
          <Image
            src="/portal/loginSide.jpg"
            width={5000}
            height={5000}
            className="w-full h-full object-cover"
            alt="reset password image"
          />
          <div className="w-full h-full absolute bg-opacity-50 bg-black top-0 left-0 p-4">
            <Image src="/logo.png" width={150} height={150} alt="logo" />
          </div>
        </div>
        <div className="w-1/2 h-full bg-white flex items-center justify-center">
          <div className="flex flex-col gap-6 max-w-md w-full px-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircleOutlined className="text-2xl text-green-600" />
            </div>
            <Title level={2} className="text-black">
              Password Reset Successful
            </Title>
            <Text className="text-gray-600">
              Your password has been successfully reset. You can now login with your new password.
            </Text>
            <Link href="/login">
              <Button size="large" type="primary" className="w-full">
                Continue to Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Reset password form
  return (
    <div className="w-full h-screen flex items-center justify-between">
      <div className="w-1/2 h-full bg-black flex items-center justify-center relative">
        <Image
          src="/portal/loginSide.jpg"
          width={5000}
          height={5000}
          className="w-full h-full object-cover"
          alt="reset password image"
        />
        <div className="w-full h-full absolute bg-opacity-50 bg-black top-0 left-0 p-4">
          <Image src="/logo.png" width={150} height={150} alt="logo" />
        </div>
      </div>
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <div className="flex flex-col gap-6 max-w-md w-full px-8">
          <div className="flex flex-col gap-2">
            <Title level={2} className="text-black">
              Reset Your Password
            </Title>
            {institutionInfo && (
              <div className="bg-blue-50 p-3 rounded-lg">
                <Text className="text-sm text-blue-800">
                  <strong>Institution:</strong> {institutionInfo.institutionName}
                </Text>
                <br />
                <Text className="text-sm text-blue-800">
                  <strong>Contact:</strong> {institutionInfo.contactName}
                </Text>
              </div>
            )}
            <Text className="text-gray-600">
              Please enter your new password below.
            </Text>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm font-semibold">
                New Password
              </label>
              <Input.Password
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                size="large"
                id="password"
                placeholder="Enter new password"
                prefix={<LockOutlined />}
                onKeyPress={handleKeyPress}
                disabled={loading}
              />
              {password && (
                <div className="mt-2">
                  <div className="flex justify-between items-center mb-1">
                    <Text className="text-xs">Password Strength:</Text>
                    <Text className="text-xs" style={{ color: getPasswordStrengthColor(passwordStrength) }}>
                      {getPasswordStrengthText(passwordStrength)}
                    </Text>
                  </div>
                  <Progress
                    percent={passwordStrength}
                    showInfo={false}
                    strokeColor={getPasswordStrengthColor(passwordStrength)}
                    size="small"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="confirmPassword" className="text-sm font-semibold">
                Confirm New Password
              </label>
              <Input.Password
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                size="large"
                id="confirmPassword"
                placeholder="Confirm new password"
                prefix={<LockOutlined />}
                onKeyPress={handleKeyPress}
                disabled={loading}
              />
              {confirmPassword && password !== confirmPassword && (
                <Text className="text-xs text-red-500">Passwords do not match</Text>
              )}
            </div>

            <Button
              size="large"
              type="primary"
              icon={<CheckCircleOutlined />}
              iconPosition="end"
              onClick={handleSubmit}
              loading={loading}
              disabled={!password || !confirmPassword || password !== confirmPassword}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </Button>
          </div>

          <Alert
            message="Password Requirements"
            description="Your password must be at least 6 characters long. For better security, include uppercase letters, numbers, and special characters."
            type="info"
            showIcon
          />

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
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
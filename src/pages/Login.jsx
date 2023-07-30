import React, { useState } from "react";
import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="w-[40%] mx-auto my-20">
      <div className="flex flex-row items-end justify-end">
        <Button onClick={() => navigate("/")}>Back to home</Button>
      </div>
      <p className="text-center text-lg font-semibold">Login page</p>
      <div className="my-4">
        <div className="my-4">
          <p>Email</p>
          <Input placeholder="email" />
        </div>
        <div className="my-4">
          <p>Password</p>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                colorScheme="blue"
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>

        <Button
          colorScheme="blue"
          className="w-full"
          onClick={() => navigate("/dashboard/doctor")}
        >
          Login
        </Button>
      </div>
      <p className="text-base text-center">
        If you don't have an account please{" "}
        <span
          className="text-[#3182CE] cursor-pointer"
          onClick={() => navigate("/auth/register")}
        >
          Register
        </span>
      </p>
    </div>
  );
}

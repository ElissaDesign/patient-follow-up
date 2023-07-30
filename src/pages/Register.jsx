import { Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="w-[50%] mx-auto my-10">
      <div className="flex flex-row items-end justify-end">
        <Button onClick={() => navigate("/")}>Back to home</Button>
      </div>
      <p className="text-center text-lg font-semibold">Register page</p>
      <div className="my-4">
        <div>
          <p>Names</p>
          <Input placeholder="full name" />
        </div>
        <div className="my-4">
          <p>Email</p>
          <Input placeholder="email" />
        </div>
        <div className="my-4">
          <p>Id Number</p>
          <Input placeholder="identity" />
        </div>
        <div className="my-4">
          <p>Degree</p>
          <Input placeholder="degree" />
        </div>
        <div className="my-4">
          <p>Your Hospital</p>
          <Input placeholder="hospital" />
        </div>
        <Button
          colorScheme="blue"
          className="w-full"
          onClick={() => navigate("/auth/login")}
        >
          Register
        </Button>
      </div>
      <p className="text-base text-center">
        If you don't have an account please{" "}
        <span
          className="text-[#3182CE] cursor-pointer"
          onClick={() => navigate("/auth/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
}

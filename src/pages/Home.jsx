import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-[80%] h-screen mx-auto flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg font-semibold">Home page</p>
        <div className="my-6">
          <Button colorScheme="blue" onClick={() => navigate("/auth/login")}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

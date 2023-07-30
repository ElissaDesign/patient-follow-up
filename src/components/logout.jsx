import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Logout() {
  const navigate = useNavigate();
  return (
    <Button colorScheme="blue" onClick={() => navigate("/auth/login")}>
      Logout
    </Button>
  );
}

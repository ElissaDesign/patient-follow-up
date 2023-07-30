import { Button } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <p className="my-2">Page not found</p>
      <Button colorScheme="blue">Back to home</Button>
    </div>
  );
}

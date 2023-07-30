import { Input, Button, Textarea } from "@chakra-ui/react";

export default function RecordPatient() {
  return (
    <div>
      <div className="my-4">
        <div>
          <p>Names</p>
          <Input placeholder="full name" />
        </div>
        <div className="my-4">
          <p>Age</p>
          <Input placeholder="age" />
        </div>
        <div className="my-4">
          <p>Address</p>
          <Input placeholder="address" />
        </div>
        <div className="my-4">
          <p>NationalId</p>
          <Input placeholder="identity" />
        </div>
        <div className="my-4">
          <p>Insurance</p>
          <Input placeholder="insurance" />
        </div>
        <div className="my-4">
          <p>Sickness</p>
          <Input placeholder="desease" />
        </div>
        <div className="my-4">
          <p>Medecine</p>
          <Input placeholder="medecine" />
        </div>
        <div className="my-4">
          <p>Date of treatment</p>
          <Input placeholder="date you treated a patient" />
        </div>
        <div className="my-4">
          <p>Date of Return:/ if available</p>
          <Input placeholder="date you treated a patient" />
        </div>
        <div className="my-4">
          <p>How long the medecine will last</p>
          <Input placeholder="period of medecine" />
        </div>
        <div className="my-4">
          <p>Add more details about the patient</p>
          <Textarea placeholder="more details" />{" "}
        </div>
        <Button
          colorScheme="blue"
          className="w-full"
          onClick={() => navigate("/auth/login")}
        >
          Add patient
        </Button>
      </div>
    </div>
  );
}

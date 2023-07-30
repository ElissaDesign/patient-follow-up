import React, { useState } from "react";
import {
  Input,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import TableData from "../components/table-data";
import { Icon } from "@iconify/react";
import RecordPatient from "../components/record-patient";
import Logout from "../components/logout";

export default function Controller() {
  const {
    isOpen: newDetailsModalOpen,
    onOpen: openDetailsModal,
    onClose: closeDetailsModal,
  } = useDisclosure();

  const {
    isOpen: newRecordModalOpen,
    onOpen: openRecordkModal,
    onClose: closeRecordModal,
  } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const [details, setDetails] = useState();

  const btnRef = React.useRef(null);

  const customStyles = {
    headCells: {
      style: {
        fontSize: "15px",
        fontWeight: "600", // Change the font size here
      },
    },
    cells: {
      style: {
        fontSize: "14px", // Change the font size here
      },
    },
  };
  const columns = [
    {
      name: "Name",
      selector: (row) => row.patientName,
    },
    {
      name: "age",
      selector: (row) => row.age,
    },
    {
      name: "address",
      selector: (row) => row.address,
    },
    {
      name: "insurance",
      selector: (row) => row.insuranceNumber,
    },
    {
      name: "sickness",
      selector: (row) => row.sickness,
    },
    {
      name: "Details",
      selector: (row) => row,
      sortable: true,
      cell: (row) => (
        <div
          className="flex items-center justify-center text-center cursor-pointer"
          onClick={() => {
            setDetails(row);
          }}
        >
          <Icon
            icon="emojione-v1:document"
            onClick={openDetailsModal}
            className="text-4xl text-center"
          />
        </div>
      ),
    },
  ];
  const patients = [
    {
      id: 1,
      patientName: "Jame Kamanzi",
      age: "30",
      address: "kigali/muhima",
      phone: "0786478264",
      identity: "1993",
      insuranceNumber: "Mutuel/32133",
      sickness: "Malaria",
      medecine: "Bitter pills",
      dateoftreatment: "19/8/2023",
      dateofreturn: "21/8/2023",
      timewhenpillslasts: "25/8/2023",
      description:
        "this patient has a bitter pills and must take care of her body.",
      doctor: "peter karangwa",
      hospital: "Kamembe hospital",
      contact: "+250 7803 7363",
      email: "peter@gmail.com",
      degree: "Phd in medecine",
      NID: "1987 800 373 3737",
    },
    {
      id: 2,
      patientName: "Jame Kamanzi",
      age: "30",
      address: "kigali/muhima",
      phone: "0786478264",
      identity: "1993",
      insuranceNumber: "Mutuel/32133",
      sickness: "Malaria",
      medecine: "Bitter pills",
      dateoftreatment: "19/8/2023",
      dateofreturn: "21/8/2023",
      timewhenpillslasts: "25/8/2023",
      description:
        "this patient has a bitter pills and must take care of her body.",
      doctor: "peter karangwa",
      hospital: "Kamembe hospital",
      contact: "+250 7803 7363",
      email: "peter@gmail.com",
      degree: "Phd in medecine",
      NID: "1987 800 373 3737",
    },
    {
      id: 3,
      patientName: "Jame Kamanzi",
      age: "30",
      address: "kigali/muhima",
      phone: "0786478264",
      identity: "1993",
      insuranceNumber: "Mutuel/32133",
      sickness: "Malaria",
      medecine: "Bitter pills",
      dateoftreatment: "19/8/2023",
      dateofreturn: "21/8/2023",
      timewhenpillslasts: "25/8/2023",
      description:
        "this patient has a bitter pills and must take care of her body.",
      doctor: "peter karangwa",
      hospital: "Kamembe hospital",
      contact: "+250 7803 7363",
      email: "peter@gmail.com",
      degree: "Phd in medecine",
      NID: "1987 800 373 3737",
    },
    {
      id: 4,
      patientName: "Jame Kamanzi",
      age: "30",
      address: "kigali/muhima",
      phone: "0786478264",
      identity: "1993",
      insuranceNumber: "Mutuel/32133",
      sickness: "Malaria",
      medecine: "Bitter pills",
      dateoftreatment: "19/8/2023",
      dateofreturn: "21/8/2023",
      timewhenpillslasts: "25/8/2023",
      description:
        "this patient has a bitter pills and must take care of her body.",
      doctor: "Peter karangwa",
      hospital: "Kamembe hospital",
      contact: "+250 7803 7363",
      email: "peter@gmail.com",
      degree: "Phd in medecine",
      NID: "1987 800 373 3737",
    },
  ];

  const [records, setRecords] = useState(patients);

  function handleFilter(event) {
    const newData = patients.filter((row) =>
      row.patientName.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setRecords(newData);
  }

  const ModelRecord = (
    <Modal isOpen={newRecordModalOpen} onClose={closeRecordModal}>
      <ModalOverlay />
      <ModalContent className="">
        <ModalHeader className="text-center">Record Patient </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <RecordPatient />
        </ModalBody>
      </ModalContent>
    </Modal>
  );

  return (
    <div className="w-[70%] mx-auto shadow my-6 py-4 ">
      <div className=" mx-2">
        <div className="flex flex-row items-end justify-end">
          <Logout />
        </div>
        <p className="text-center font-bold text-xl">
          Patients treated record table
        </p>
        <div className="flex items-center justify-between my-6 mt-14">
          <InputGroup className="basis-[70%]">
            <InputLeftElement pointerEvents="none">
              <Icon icon="cil:search" className="text-gray-300" />
            </InputLeftElement>
            <Input type="tel" placeholder="Search" onChange={handleFilter} />
          </InputGroup>
        </div>

        <div>
          <TableData
            columns={columns}
            data={records}
            customStyles={customStyles}
          />
        </div>
      </div>
      <div>
        <Modal
          onClose={closeDetailsModal}
          finalFocusRef={btnRef}
          isOpen={newDetailsModalOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="text-center border-b-2">
              Patient full details
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>
                <span className="font-semibold">Patient:</span>{" "}
                {details?.patientName}
              </p>
              <p>
                <span className="font-semibold">Age:</span> {details?.age}
              </p>
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {details?.address}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {details?.phone}
              </p>
              <p>
                <span className="font-semibold">NationalID:</span>{" "}
                {details?.identity}
              </p>
              <p>
                <span className="font-semibold">Insurance:</span>{" "}
                {details?.insuranceNumber}
              </p>
              <p>
                <span className="font-semibold">Sickness:</span>{" "}
                {details?.sickness}
              </p>
              <p>
                <span className="font-semibold">Medecine:</span>{" "}
                {details?.medecine}
              </p>
              <p>
                <span className="font-semibold">Date of Treatment:</span>{" "}
                {details?.dateoftreatment}
              </p>
              <p>
                <span className="font-semibold">Return date: </span>
                {details?.dateoftreatment}
              </p>
              <p>
                <span className="font-semibold">
                  Time the medecine will last:{" "}
                </span>
                {details?.timewhenpillslasts}
              </p>
              <p className="font-semibold">More about patient treatment:</p>
              <p> {details?.description}</p>
              <p className="text-center my-4 text-lg font-bold border-b-2">
                Doctors information
              </p>
              <p>
                <span className="font-semibold">Doctor: </span>
                {details?.doctor}
              </p>
              <p>
                <span className="font-semibold">Hospital: </span>
                {details?.hospital}
              </p>
              <p>
                <span className="font-semibold">Contact: </span>
                {details?.contact}
              </p>
              <p>
                <span className="font-semibold">Email: </span>
                {details?.email}
              </p>
              <p>
                <span className="font-semibold">Degree: </span>
                {details?.degree}
              </p>
              <p>
                <span className="font-semibold">NationalID: </span>
                {details?.NID}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={closeDetailsModal} colorScheme="blue">
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      {ModelRecord}
    </div>
  );
}

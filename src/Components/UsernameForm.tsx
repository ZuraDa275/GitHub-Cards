import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { FormProps } from "../interfaces";

export const UsernameForm = ({ setUserInfo }: FormProps) => {
  const toast = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("");
  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    setUserInfo(data);
    setUsername("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <form
      onSubmit={(e) => {
        if (inputRef?.current?.value) {
          e.preventDefault();
          fetchData();
        }
      }}
    >
      <FormControl isRequired fontFamily="Poppins" alignContent="center">
        <FormLabel>Username</FormLabel>
        <Flex direction="column">
          <Input
            placeholder="Enter your username..."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            ref={inputRef}
            required
            mb={5}
          />
          <br />
          <Button
            colorScheme="teal"
            variant="outline"
            type="submit"
            onClick={() => {
              if (!inputRef?.current?.value) {
                toast({
                  title: "Input Error",
                  description: "Username input field cannot be empty.",
                  status: "error",
                  duration: 2000,
                  isClosable: true,
                  position: "top",
                });
              }
            }}
          >
            Submit
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
};

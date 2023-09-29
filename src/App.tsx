import { UsernameForm } from "./Components/UsernameForm.tsx";
import { useState } from "react";
import { UserInfo } from "./interfaces.ts";
import { UserCard } from "./Components/UserCard.tsx";
import { Heading } from "@chakra-ui/react";

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  return (
    <>
      <Heading fontFamily="Poppins" fontSize="7xl" mb={20} textAlign="center">
        GitHub Info
      </Heading>
      <UsernameForm setUserInfo={(val: UserInfo) => setUserInfo(val)} />
      {userInfo && <UserCard userInfo={userInfo} />}
    </>
  );
}

export default App;

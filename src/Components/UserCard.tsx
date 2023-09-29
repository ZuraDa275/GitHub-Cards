import { Box, Avatar, Text, Flex, Badge, Divider } from "@chakra-ui/react";
import { CardProps } from "../interfaces";

const dateFormatter = (dateToFormatted: string) => {
  const date = new Date(dateToFormatted);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
};

export const UserCard = ({ userInfo }: CardProps) => {
  if (userInfo.message)
    return (
      <Text color="red" fontFamily="Poppins">
        {userInfo.message}
      </Text>
    );
  return (
    <Box
      w="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={6}
      bg="white"
      fontFamily="Mooli"
      mt={10}
    >
      <Flex alignItems="center">
        <Avatar src={userInfo.avatar_url} size="2xl" />
        <Text ml={4} fontWeight="bold" fontSize="2xl">
          {userInfo.login}
        </Text>
      </Flex>
      <Text fontSize="xl" mt={3}>
        {userInfo.name}
      </Text>
      <Divider my={4} />
      <Flex justifyContent="space-between" alignItems="center">
        <Badge colorScheme="blue" fontSize="xl">
          Repos: {userInfo.public_repos}
        </Badge>
        <Badge colorScheme="green" fontSize="xl">
          Gists: {userInfo.public_gists}
        </Badge>
      </Flex>
      <Text fontSize="xl" mt={5} color="grey">
        Created At: {dateFormatter(userInfo.created_at)}
      </Text>
    </Box>
  );
};

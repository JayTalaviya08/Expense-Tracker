import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function ExpenseView({ type, data }) {
  return (
    <Box
      flex={1}
      w="full"
      bg={"white"}
      mr={"4"}
      mt={"10"}
      mb={"5"}
      p={"5"}
      pb={"4"}
      border={"1px solid"}
      borderColor={"gray.200"}
      borderRadius={"12"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading size={"lg"} color={type === "income" ? "blue.800" : "red.700"}>
          {type === "income" ? "Income" : "Expense"}
        </Heading>
        <Flex w={"100%"} flexDirection={"column"}>
          {data.map((item) => (
            <>
              <Flex
                bg={type === "expense" ? "red.50" : "blue.50"}
                mt={"4"}
                alignItems={"center"}
                justifyContent={"space-between"}
                border={"1px solid"}
                borderColor={type === "expense" ? "red.200" : "blue.200"}
                p={"3"}
                borderRadius={"8"}
              >
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Text ml="3" fontWeight="bold" color="gray.600">
                    {item.description}
                  </Text>
                </Flex>
                <Text>${item.amount}</Text>
              </Flex>
            </>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

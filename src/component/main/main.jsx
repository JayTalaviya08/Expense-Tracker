import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import ExpenseView from "../expense-view/view";
import Summary from "../summary/summary";
import { useContext, useEffect } from "react";
import { GlobleContext } from "../../context/contextindex";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransaction,
    setAllTransaction,
  } = useContext(GlobleContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransaction.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransaction]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.500"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.400"} color={"black"} ml={"4"}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>

      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Flex
          w="full"
          alignItems={"flex-start"}
          justifyContent={"space-evenly"}
          flexDirection={["column", "column", "column", "row", "row"]}
        >
          <ExpenseView
            data={allTransaction.filter((item) => item.type === "expense")}
            type={"expense"}
          />
          <ExpenseView
            data={allTransaction.filter((item) => item.type === "income")}
            type={"income"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

import { useState } from "react";
import { Column } from "../../../../shared/column";
import { Title } from "../../../../shared/title";
import { Actions } from "./components/actions";
import { NotificationHeader } from "./components/notifications-header";

export const Notifications = () => {
  return (
    <>
      <NotificationHeader />
      <NotifiactionItem message="I'm mentioned in a message" />
      <NotifiactionItem message="Someone replies to my message" />
      <NotifiactionItem message="I'm given a task" />
      <NotifiactionItem message="I'm asked to review a task" />
    </>
  );
};

function NotifiactionItem({ message }) {
  const [selectedActionIndex, setSelectedActionIndex] = useState(0);
  return (
    <Column gap={20} borderBottom paddingVertical={20}>
      <Title>{message}</Title>
      <Actions
        selectedActionIndex={selectedActionIndex}
        setSelectedActionIndex={setSelectedActionIndex}
      />
    </Column>
  );
}

import { Column } from "../../../../../shared/column";
import { Title } from "../../../../../shared/title";

export const NotificationHeader = () => {
  return (
    <>
      <Column paddingVertical={40}>
        <Title style={{marginBottom: 10}}>General notifications</Title>
        <p>Select when you'll be notified when the following changes occur</p>
      </Column>
    </>
  );
};

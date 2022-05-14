import { BorderButton } from "../../../shared/button";
import { Row } from "../../../shared/row";
import { Title } from "../../../shared/title";
import { RiAddFill } from "react-icons/ri";
import { Colors } from "../../../utils/colors";

export const SectionTitle = () => {
  return (
    <Row alignCenter justifyBetween paddingVertical={20} gapp={10}>
      <Title small>Account Settings</Title>
      <BorderButton
        whileHover={{ backgroundColor: Colors.primary, color: "#fff" }}
        transition={{ duration: 0.2 }}
      >
        <Row alignCenter gap={10}>
          <RiAddFill style={{ fontSize: "large" }} />
          <p>Add User</p>
        </Row>
      </BorderButton>
    </Row>
  );
};

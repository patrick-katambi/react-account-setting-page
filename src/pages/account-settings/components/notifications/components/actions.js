import { Row } from "../../../../../shared/row";
import styled from "styled-components";
import { Colors } from "../../../../../utils/colors";
import { borderRadius } from "../../../../../utils/measurements";
import { handleActionClick } from "../functions/handle-action-click";

export const Actions = ({ selectedActionIndex, setSelectedActionIndex }) => {
  const actionList = ["None", "In-app", "Email"];
  return (
    <>
      <Row>
        {actionList.map((action, index) => {
          return (
            <Box
              key={index}
              clicked={index === selectedActionIndex ? true : false}
              onClick={() => handleActionClick(setSelectedActionIndex, index)}
              sideBoxLeft={index === 0 ? true : false}
              sideBoxRight={index + 1 === actionList.length ? true : false}
            >
              {action}
            </Box>
          );
        })}
      </Row>
    </>
  );
};

const Box = styled.div`
color: ${props => props.clicked ? Colors.white : Colors.text};
background-color: ${props => props.clicked ? Colors.primary : Colors.background};
  padding: 10px 15px;
  border-top-left-radius: ${(props) => (props.sideBoxLeft ? borderRadius : 0)};
  border-bottom-left-radius: ${(props) =>
    props.sideBoxLeft ? borderRadius : 0};
  border-top-right-radius: ${(props) =>
    props.sideBoxRight ? borderRadius : 0};
  border-bottom-right-radius: ${(props) =>
    props.sideBoxRight ? borderRadius : 0};
  border: ${`2px ${Colors.border} solid`};
  border-right: ${(props) =>
    props.sideBoxLeft ? "none" : `2px ${Colors.border} solid`};
  border-left: ${(props) =>
    props.sideBoxRight ? "none" : `2px ${Colors.border} solid`};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

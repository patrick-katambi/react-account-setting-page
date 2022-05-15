import { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../../utils/colors";
import { borderRadius } from "../../../../utils/measurements";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { Row } from "../../../../shared/row";
import { handleSelectOpen } from "./functions/handleSelectOpen";
import { AnimatePresence, motion } from "framer-motion";
import { handleSelectItemClicked } from "./functions/handleSelectItemClicked";
import ClickAwayListener from "react-advanced-click-away";
import { handleClickAway } from "./functions/handleClickAway";

export const Select = ({settingList}) => {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <>
      <ClickAwayListener onClickAway={() => handleClickAway(setOpenSelect)}>
        <div>
          <CurrentSelect
            clicked={openSelect}
            onClick={() => handleSelectOpen(setOpenSelect)}
          >
            <Row alignCenter justifyBetween>
              {settingList[selectedIndex]}
              {openSelect ? (
                <RiArrowDropUpLine style={{ fontSize: 30 }} />
              ) : (
                <RiArrowDropDownLine style={{ fontSize: 30 }} />
              )}
            </Row>
          </CurrentSelect>
          <AnimatePresence>
            {openSelect ? (
              <>
                {settingList.map((setting, index) => {
                  return (
                    <SelectItem
                      initial={{ opacity: 0, translateY: -20 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      exit={{ opacity: 0, translateY: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      key={index}
                      onClick={() =>
                        handleSelectItemClicked({
                          setSelectedIndex,
                          index,
                          setOpenSelect,
                        })
                      }
                    >
                      {setting}
                    </SelectItem>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </AnimatePresence>
        </div>
      </ClickAwayListener>
    </>
  );
};

const CurrentSelect = styled.div`
  background-color: ${(props) =>
    props.clicked ? Colors.primary : Colors.background};
  border: ${(props) =>
    props.clicked ? "none" : `1.5px ${Colors.faint} solid`};
  color: ${(props) => (props.clicked ? Colors.white : Colors.buttonText)};
  padding: 10px;
  width: 100%;
  cursor: pointer;
  border-radius: ${borderRadius};
  user-select: none;
  font-weight: bold;
`;

const SelectItem = styled(motion.div)`
  /* background-color: ${Colors.buttonText}; */
  border: ${`1.5px ${Colors.faint} solid`};
  color: ${Colors.text};
  padding: 10px;
  width: 100%;
  cursor: pointer;
  border-radius: ${borderRadius};
  user-select: none;
  margin-top: 10px;
`;

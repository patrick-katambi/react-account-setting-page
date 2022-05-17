import { Column } from "../../shared/column";
import { MainContainer } from "../../shared/main-container";
import {
  decrementHandler,
  incrementHandler,
  toggleThemeHandler,
} from "./button-handlers";
import { Button } from "./components";
import { useJotaiExperiment } from "./hook";
import { mainContainerStyles, previewContainerStyles } from "./styles";

export function JotaiExperiment() {
  const { count, setCount, doubleCount, theme, isLighTheme, setIsLighTheme } =
    useJotaiExperiment();
  return (
    <MainContainer style={mainContainerStyles(theme)}>
      <Column alignCenter justifyCenter style={previewContainerStyles(theme)}>
        <p>count 👉 {count}</p>
        <p>double count 👉 {doubleCount}</p>
      </Column>
      <Column alignCenter justifyCenter>
        <Button
          label="Up one"
          onClick={() => incrementHandler(setCount)}
          theme={theme}
        />
        <Button
          label="Down one"
          onClick={() => decrementHandler(setCount)}
          marginTop={10}
        />
        <Button
          label={isLighTheme.isLight ? "To dark" : "To Light"}
          onClick={() => toggleThemeHandler(setIsLighTheme)}
          marginTop={10}
        />
      </Column>
    </MainContainer>
  );
}

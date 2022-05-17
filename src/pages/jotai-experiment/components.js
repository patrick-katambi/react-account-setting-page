import { useJotaiExperiment } from "./hook";

export function Button({ label, onClick, marginTop = 20 }) {
    const { theme } = useJotaiExperiment();
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: theme.buttonBackground,
          color: theme.buttonTextColor,
          width: 150,
          padding: 20,
          borderRadius: 5,
          marginTop: marginTop,
          cursor: "pointer",
        }}
      >
        {label}
      </button>
    );
  }
  
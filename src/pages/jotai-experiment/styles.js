export const mainContainerStyles = (theme) => {
    return {
      height: "100%",
      backgroundColor: theme.backgroundColor,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };
  };

  export const previewContainerStyles = (theme) => {
    return {
      backgroundColor: theme.backgroundColorAccent,
      color: theme.textColor,
      width: "fit-content",
      padding: 40,
      borderRadius: 5,
    };
  };
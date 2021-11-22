import info from "../../core/utils/info";

export default function useErrors(
  messageDefault = "Houve um erro ao salvar o registro!"
) {
  const formatAlertFromRequest = (error: any) => {
    if (
      error &&
      error.response &&
      (error.response?.status === 400 ||
        error.response?.status === 404 ||
        error.response?.status === 409)
    ) {
      info({
        title: "Ops!",
        description: error.response?.data?.title,
      });
      return;
    }

    info({
      title: "Ops!",
      description: messageDefault,
    });
  };

  return {
    formatAlertFromRequest,
  };
}

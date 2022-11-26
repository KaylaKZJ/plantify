export const formUIUpdate = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setFormFeedback: React.Dispatch<
    React.SetStateAction<{
      text: string;
      state: string;
    }>
  >,
  feebackText: string,
  feebackState: 'success' | 'error' = 'error',
  loadingState: boolean = false
) => {
  setLoading(loadingState);
  setFormFeedback({
    text: feebackText,
    state: feebackState,
  });
};

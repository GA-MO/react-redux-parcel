export default ({ loadingMessage, successMessage, callAction }) => async (dispatch, getState) => {
  try {
    console.log('Loading:', loadingMessage)
    await callAction(dispatch, getState)
    console.log('Success:', successMessage)
  } catch (error) {
    console.log('Error', error)
  }
}

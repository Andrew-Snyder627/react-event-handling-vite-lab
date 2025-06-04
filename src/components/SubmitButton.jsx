// Code SubmitButton Component Here

// Render a submit button
// track mouse enter/leave events
function SubmitButton() {
  // Handler for mouse entering the button
  function handleEnter() {
    console.log("Mouse Entering");
  }
  // Handler for mouse leaving the button
  function handleLeave() {
    console.log("Mouse Exiting");
  }
  // Render
  return (
    <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      Submit Password
    </button>
  );
}

export default SubmitButton;

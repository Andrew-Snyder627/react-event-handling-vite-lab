// Code PasswordInput Component Here
// Render a password input field
// Track user typing events for security
// Connect to App
function PasswordInput() {
  // Handler for input change event
  function handleChange(e) {
    console.log("Entering password...");
  }
  return (
    <input
      type="password"
      onChange={handleChange}
      placeholder="Enter password"
    />
  );
}

export default PasswordInput;

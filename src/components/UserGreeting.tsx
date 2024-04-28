// Conditional rendering

function UserGreeting(props) {
  const welcomeMessage = <h2>Welcome {props.username}</h2>;

  const loginPrompt = <h2>Please log in to continue</h2>;

  return props.isLoggedin ? welcomeMessage : loginPrompt;
}

export default UserGreeting;

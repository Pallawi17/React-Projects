import {
  createContext
} from "react";

const UserContext = createContext({
  user: {
    name: "Dummy name",
    email: "dummy@gmail.com"
  }
});

// display name for debugging only
UserContext.displayName = "UserContext";

export default UserContext;
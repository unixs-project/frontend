import { LoginForm } from "../../views/LoginForm/index.jsx";
import { Cover } from "../../components/Cover/index.jsx";
import { Wrapper } from "../../components/Wrapper/index.jsx";

export function Login() {
  return (
    <Wrapper>
      <Cover />
      <LoginForm />
    </Wrapper>
  )
}
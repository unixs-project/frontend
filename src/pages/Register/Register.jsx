import { Cover } from "../../components/Cover";
import { Wrapper } from "../../components/Wrapper";
import { RegisterForm } from "../../views/RegisterForm";

export function Register() {
  return (
    <Wrapper position={'left'}>
      <RegisterForm />
      <Cover />
    </Wrapper>
  )
}
import { Container, Row, Col } from "reactstrap";
import { Background, CardItem, Input, Label, Text, Button } from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../../assets/book annotation.svg";
import { ChangeEvent, useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";


export function SignUp() {
  const { push } = useHistory();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(data);
     try {
       await api.post("/users/createUser", data);
       push('/home')
     } catch (err) {
       console.error(err);
     }
  }

  return (
    <Background>
      <Container>
        <Row>
          <Col lg="5" sm="6" md="6">
            <CardItem>
              <div className="title">
                <img src={logo} className="logo" alt="logo" />
              </div>
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    name="username"
                    value={data.username}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="email">Seu Email</Label>
                  <Input
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="exemple@gmail.com"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="password">Sua palavra passe</Label>
                  <Input
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                    type="password"
                    placeholder="password"
                    className="form-control"
                  />
                </div>
                <Button className="mt-2">Criar conta</Button>
              </form>
            </CardItem>
          </Col>
          <Col lg="5" sm="6" md="6">
            <Text>
              <h1>
                Criar uma conta na <br />
                plataforma
              </h1>
              <p>
                Cria uma conta para desfrutar das <br /> funcionalidades que
                aplicação oferece.
              </p>

              <div className="cta">
                <FaArrowLeft color="#fff" />
                <Button className="mt-2 ml-4 primary">Criar uma conta!</Button>
              </div>
            </Text>
          </Col>
        </Row>
      </Container>
    </Background>
  );
}

import { Container, Row, Col } from "reactstrap";
import { BannerContent, Btn, Avatar, BannerItens } from "./styles";
import { FaPen, FaCalendar, FaAdjust } from "react-icons/fa";

export function Banner() {
  return (
    <BannerContent>
      <Container>
        <div className="config">
          <span>Configurações</span>
          <label>
            <FaAdjust />
          </label>
        </div>
        <Row>
          <Col lg="3">
            <Avatar>AG</Avatar>
          </Col>
          <Col lg="9">
            <BannerItens>
              <h1>António Campos Gabriel</h1>
              <h2>antoniocamposgabriel@gmail.com</h2>
              <div className="cta">
                <Btn>
                  <FaPen /> Criar anotação
                </Btn>
                <Btn>Editar perfil</Btn>
              </div>
              <div className="agende">
                <span>Minha agenda</span>
                <label>
                  <FaCalendar />
                </label>
              </div>
            </BannerItens>
          </Col>
        </Row>
      </Container>
    </BannerContent>
  );
}

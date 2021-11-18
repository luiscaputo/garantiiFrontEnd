import { Container, Row, Col, Input } from "reactstrap";
import { Background, CardItem } from "./styles";
import { api } from "../../services/api";
import logo from "../../assets/book annotation.svg";
import { useEffect, useState } from "react";
import { Post } from "./Post";

interface Request {
  id: number;
}

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState("");

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await api.get("/users/list");
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
  }, []);

  return (
    <Background>
      <Container>
        <Row>
          <Col lg="10" sm="10" md="10">
            <CardItem>
              <div className="title">
                <img src={logo} className="logo" alt="logo" />
              </div>
              <div className="form-group mb-3 mt-4">
                <Input
                  placeholder="pesquisar..."
                  onChange={(e) => setSearchPosts(e.target.value)}
                />
              </div>
              {posts
                .filter((value: Request) => {
                  if (value.id === Number(searchPosts)) return value;

                  if (!searchPosts) return value;
                })
                .map(({ id, title, body }) => (
                  <Post
                    key={id}
                    className="body"
                    title={title}
                    desc={body}
                    route={`/users/getUser/${id}`}
                  />
                ))}
            </CardItem>
          </Col>
        </Row>
      </Container>
    </Background>
  );
}

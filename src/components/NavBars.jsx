import React, { useState } from "react";
import { Navbar, Offcanvas, Form, Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logoutActionAsync } from "../app/actions/login.action";
import { useNavigate } from "react-router-dom";
import { Collapse, Card } from "react-bootstrap";

const NavBars = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searching, setSearching] = useState("");
  const [open, setOpen] = useState(false);
  const pokemonsData = useSelector((state) => state.pokemon);

  const handleChangeSearch = (e) => {
    pokemonsData.find((pokemon) => {
      if (e.target.value == "") {
        setSearching("");
      } else {
        if (pokemon.name.includes(e.target.value)) {
          setSearching([pokemon]);
        }
      }
    });
  };

  const onBlurSearch = (e) => {
    setOpen(false);
    setSearching("");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" className="mb-3">
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{ color: "white" }}
            onClick={() => navigate("/")}
          >
            POKEDEX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1" onClick={() => navigate("/")}>
                  Home
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleChangeSearch}
                  onFocus={() => setOpen(true)}
                  onBlur={() => setTimeout(onBlurSearch, 500)}
                  aria-controls="collapsePokemon"
                  aria-expanded={open}
                />
                <Collapse
                  style={{
                    display: open ? "block" : "none",
                    position: "absolute",
                    top: "100%",
                    right: "0",
                  }}
                  in={open}
                  dimension="width"
                >
                  <div style={{ minHeight: "150px" }}>
                    <div id="collapsePokemon">
                      <Card body style={{ width: "400px" }}>
                        {searching !== "" ? (
                          <>
                            {searching.map((pokemon) => {
                              return (
                                <div
                                  className="search-card"
                                  style={{
                                    cursor: "pointer",
                                  }}
                                  key={pokemon.id}
                                  onClick={() =>
                                    navigate(
                                      `/pokemon/${pokemon.name}/${pokemon.id}`
                                    )
                                  }
                                >
                                  <img
                                    style={{
                                      width: "30px",
                                      marginRight: "10px",
                                    }}
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                                    alt={pokemon.name}
                                  />
                                  {pokemon.name}
                                </div>
                              );
                            })}
                          </>
                        ) : (
                          <div>search pokemon</div>
                        )}
                      </Card>
                    </div>
                  </div>
                </Collapse>
                <button
                  type="button"
                  className="btn-danger"
                  onClick={() => dispatch(logoutActionAsync())}
                  variant="danger"
                >
                  Logout
                </button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBars;

import React, { useState, useEffect } from "react";
import "./App.css";
import api from "./Services/api";
import { Col, Row, Button, FormGroup, Input, Spinner } from "reactstrap";
import Fields from "./Fields";

function App() {
  const [cep, setCep] = useState("");
  const [dataCep, setDataCep] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (cep !== "") {
      getCep(cep);
    } // eslint-disable-next-line
  }, [cep]);

  // eslint-disable-next-line
  async function getCep(cep) {
    // eslint-disable-next-line
    try {
      const response = await api.get(`${cep}/json/`);
      setDataCep(response.data);
      setLoader(!loader);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  function clearFields() {
    setDataCep([]);
    setCep("");
  }

  return (
    <div className="App">
      <br />
      <div className="Cep">
        <div className="formCep">
          <h2 className="text-center">Buscar CEP</h2>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Input
                  type="number"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  placeholder="Apenas números!"
                />
              </FormGroup>
            </Col>
          </Row>

          {error ? (
            <p>Cep inválido, digite um cep válido!</p>
          ) : (
            <span>
              <div className="text-center">
                {cep !== "" && !loader && (
                  <Spinner
                    color="secondary"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                )}
              </div>
              <Fields dataCep={dataCep} />
              {dataCep.length !== 0 && (
                <Button color="primary" onClick={() => clearFields()}>
                  Limpar Campos
                </Button>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

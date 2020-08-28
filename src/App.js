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

  async function getCep(cep) {
    await api
      .get(`${cep}/json/`)
      .then((res) => {
        const response = res.data;
        setDataCep(response);
        setLoader(!loader);
        setError(false);
      })
      .catch((res) => {
        console.log(res);
        setError(true);
      });
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

          {console.log(error)}

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

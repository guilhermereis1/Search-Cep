import React from "react";
import { Col, Row, FormGroup, Label, Input } from "reactstrap";

const Fields = (props) => {
  const dataCep = props.dataCep;
  return (
    <div>
      {dataCep.length !== 0 && (
        <span>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Logradouro</Label>
                <Input
                  type="text"
                  value={dataCep.logradouro}
                  placeholder="Logradouro"
                  disabled
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Bairro</Label>
                <Input
                  type="text"
                  value={dataCep.bairro}
                  placeholder="Bairro"
                  disabled
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label>Complemento</Label>
            <Input
              type="text"
              value={dataCep.complemento}
              placeholder="Complemento"
              disabled
            />
          </FormGroup>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label>Cidade</Label>
                <Input
                  type="text"
                  value={dataCep.localidade}
                  placeholder="Cidade"
                  disabled
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>Estado</Label>
                <Input
                  type="text"
                  value={dataCep.uf}
                  placeholder="Estado"
                  disabled
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>CEP</Label>
                <Input
                  type="text"
                  value={dataCep.cep}
                  placeholder="CEP"
                  disabled
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label>DDD</Label>
                <Input
                  type="text"
                  value={dataCep.ddd}
                  placeholder="DDD"
                  disabled
                />
              </FormGroup>
            </Col>
          </Row>
          <p>
            URL via cep:{" "}
            <a href={`https://viacep.com.br/ws/${dataCep.cep}/json/`}>
              https://viacep.com.br/ws/{dataCep.cep}/json/
            </a>
          </p>
          <br />
        </span>
      )}
    </div>
  );
};

export default Fields;

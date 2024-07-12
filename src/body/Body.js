import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Body.css';

const Body = () => {
  const [isValidated, setIsValidated] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [documentNumber, setDocumentNumber] = useState('45180551');
  const [validationCode, setValidationCode] = useState('2303172925643');

  const onChange = (value) => {
    console.log("reCAPTCHA value:", value);
    setIsCaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValidated(true);
  };

  const handleReturn = () => {
    setIsValidated(false);
    setIsCaptchaVerified(false);
  };

  return (
    <div className="container">
      <h2 className="header">Validador de Certificados</h2>
      {isValidated ? (
        <div className="validation-result">
          <div className='validation-header'><h1>Certificado Válido</h1></div>
          <div className="alert alert-success">
            El certificado es válido y está vigente
          </div>
          <div className='btn-div'>
            <button className="btn btn-primary btn-large" onClick={handleReturn}>Volver</button>
          </div>
        </div>
      ) : (
        <div style={{ width: '100%' }}>
          <div className="alert alert-info">
            Ingrese su <strong>Número de Documento</strong>, y luego el <strong>Código de Validación</strong> impreso en el certificado.
          </div>
          <form onSubmit={handleSubmit}>
            <div id="control_group_documento" className="control-group">
              <label className="control-label" htmlFor="documentNumber">Número de Documento</label>
              <input
                id="documento"
                type="text"
                name="documentNumber"
                value={documentNumber}
                onChange={(e) => setDocumentNumber(e.target.value)}
              />
            </div>
            <div id="control_group_codigo" className="control-group">
              <label className="control-label" htmlFor="validationCode">Código de Validación</label>
              <input
                id="codigo"
                type="text"
                name="validationCode"
                value={validationCode}
                onChange={(e) => setValidationCode(e.target.value)}
              />
            </div>
            <ReCAPTCHA
              sitekey="6LftoQAqAAAAACwoGgPh0GFq7aTCUC7I2FvQxSIS"
              onChange={onChange}
            />
            <button id="validar" className="btn-info" type="submit" disabled={!isCaptchaVerified}>Validar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Body;
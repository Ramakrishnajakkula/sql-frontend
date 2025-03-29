import React from 'react';
import { Card, Alert, ListGroup } from 'react-bootstrap';

const Validation = ({ validation }) => {
  if (!validation) return null;

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Query Validation</Card.Title>
        <Alert variant={validation.is_valid ? 'success' : 'danger'}>
          {validation.is_valid ? 'Query is valid' : 'Query has issues'}
        </Alert>
        
        {validation.issues && validation.issues.length > 0 && (
          <div className="mb-3">
            <h6>Issues Found:</h6>
            <ListGroup>
              {validation.issues.map((issue, index) => (
                <ListGroup.Item key={index} variant="danger">
                  {issue}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
        
        {validation.suggestions && validation.suggestions.length > 0 && (
          <div>
            <h6>Suggestions:</h6>
            <ListGroup>
              {validation.suggestions.map((suggestion, index) => (
                <ListGroup.Item key={index} variant="info">
                  {suggestion}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Validation;
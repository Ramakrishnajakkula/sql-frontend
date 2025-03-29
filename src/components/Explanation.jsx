import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';

const Explanation = ({ explanation }) => {
  if (!explanation) return null;

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Query Explanation</Card.Title>
        <div className="mb-3">
          <h6>Components:</h6>
          <ListGroup>
            <ListGroup.Item>
              <strong>SELECT:</strong> {explanation.components.select.join(', ')}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>FROM:</strong> {explanation.components.from}
            </ListGroup.Item>
            {explanation.components.where && explanation.components.where.length > 0 && (
              <ListGroup.Item>
                <strong>WHERE:</strong> {explanation.components.where.join(' AND ')}
              </ListGroup.Item>
            )}
            {explanation.components.order_by && (
              <ListGroup.Item>
                <strong>ORDER BY:</strong> {explanation.components.order_by}
              </ListGroup.Item>
            )}
            {explanation.components.limit && (
              <ListGroup.Item>
                <strong>LIMIT:</strong> {explanation.components.limit}
              </ListGroup.Item>
            )}
          </ListGroup>
        </div>
        <div>
          <h6>Notes:</h6>
          <p className="text-muted">{explanation.notes}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Explanation;
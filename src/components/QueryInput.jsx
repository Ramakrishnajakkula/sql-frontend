import { useState } from 'react'
import { Button, Form, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const QueryInput = ({ onSubmit, loading }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(query)
  }

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>
          <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
          Ask Your Database Question
        </Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your question in natural language (e.g., 'Show me all customers from New York')"
              disabled={loading}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading || !query.trim()}>
            {loading ? 'Processing...' : (
              <>
                <FontAwesomeIcon icon={faSearch} className="me-2" />
                Translate to SQL
              </>
            )}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default QueryInput
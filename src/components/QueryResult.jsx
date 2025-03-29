import { Card } from 'react-bootstrap'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const QueryResult = ({ query, sql, confidence }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Translation Results</Card.Title>
        <div className="mb-3">
          <h6>Your Query:</h6>
          <p className="text-muted">{query}</p>
        </div>
        <div className="mb-3">
          <h6>Generated SQL:</h6>
          <SyntaxHighlighter language="sql" style={docco}>
            {sql}
          </SyntaxHighlighter>
        </div>
        <div>
          <h6>Confidence:</h6>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${confidence * 100}%` }}
              aria-valuenow={confidence * 100}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {(confidence * 100).toFixed(1)}%
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default QueryResult
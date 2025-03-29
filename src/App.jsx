import { useState } from 'react'
import { Container, Spinner, Tab, Tabs } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import QueryInput from './components/QueryInput'
import QueryResult from './components/QueryResult'
import Explanation from './components/Explanation'
import Validation from './components/Validation'
import { translateQuery, explainQuery, validateQuery } from './components/api'

function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(null)
  const [explanation, setExplanation] = useState(null)
  const [validation, setValidation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('results')

  const handleSubmit = async (queryText) => {
    setLoading(true)
    setQuery(queryText)
    
    try {
      const translation = await translateQuery(queryText)
      setResults(translation)
      
      const explanation = await explainQuery(queryText)
      setExplanation(explanation)
      
      const validation = await validateQuery(queryText)
      setValidation(validation)
      
      setActiveTab('results')
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">NL2SQL Translator</h1>
      <QueryInput onSubmit={handleSubmit} loading={loading} />
      
      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      
      {results && (
        <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
          <Tab eventKey="results" title="Results">
            <QueryResult query={results.query} sql={results.sql} confidence={results.confidence} />
          </Tab>
          <Tab eventKey="explanation" title="Explanation">
            <Explanation explanation={explanation} />
          </Tab>
          <Tab eventKey="validation" title="Validation">
            <Validation validation={validation} />
          </Tab>
        </Tabs>
      )}
    </Container>
  )
}

export default App
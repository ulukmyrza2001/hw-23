import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ApprRouter from './routes/ApprRouter'

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<ApprRouter/>
			</Layout>
		</BrowserRouter>
	)
}

export default App

import './App.css'

import Intersect from './Intersect'
import GuestSnap from './GuestSnap'

function App() {

	const debug = process.env.NODE_ENV === 'development'?'solid':'none';

	return (
		<div id='guestsnap'>
			
			<div className='main-frame'>

				<Intersect className='fade-in'>
						<GuestSnap/>
				</Intersect>
			</div>
		</div>
 )
}

export default App

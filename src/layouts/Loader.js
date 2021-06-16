import spinner from '../assets/images/spinner.gif'

const Loader = () => (
  <div className='loader'>
    <img src={spinner} alt='Loading...' className='loader-img' />
  </div>
)

export default Loader

import './Address.css'

const Address = () => {
  return (
    <div className='address'>
      <h1>Address</h1>
    <form action="">
      <div>
        <label htmlFor="">Street:</label>
        <input type="text" placeholder='street' />
      </div>
      <div>
        <label htmlFor="">City:</label>
        <input type="text" placeholder='city' />
      </div>
      <div>
        <label htmlFor="">State:</label>
        <input type="text" placeholder='state' />
      </div>
      <div>
        <label htmlFor="">Zip:</label>
        <input type="text" placeholder='zip' />
      </div>
    </form>
  </div>
  )
}

export default Address
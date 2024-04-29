import './Account.css'

const Account = () => {
  return (
    <div className='account'>
      <h1>Account Setup</h1>
      <form action="">
        <div>
          <label htmlFor="">Email:</label>
          <input type="text" placeholder='email' />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="text" placeholder='password' />
        </div>
      </form>
    </div>
  )
}

export default Account
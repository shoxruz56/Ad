import './User.css'

const User = () => {
  return (
    <div className='user'>
      <h1>User Details</h1>
    <form action="">
      <div>
        <label htmlFor="">First Name:</label>
        <input type="text" placeholder='firstname' />
      </div>
      <div>
        <label htmlFor="">Last Name:</label>
        <input type="text" placeholder='lastname' />
      </div>
      <div>
        <label htmlFor="">Age:</label>
        <input type="text" placeholder='age' />
      </div>
    </form>
  </div>
  )
}

export default User
const SingUpForm = () => {
  return (
    <div className="container">
      <form>
        <div className="formControl">
          <label htmlFor="name">Name</label>
          <input type="text" />
        </div>
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input type="text" />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default SingUpForm;

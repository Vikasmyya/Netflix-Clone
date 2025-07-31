const valiFormdData = (email, password, name = null) => {
  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const validPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const validName = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);

  if (!validEmail) return "Email is not vaild";
  if (!validPassword) return "Password is not valid";
  if (name != null && !validName) return "Name is not valid";

  if (validEmail && validPassword) return null;
  if (name != null && validEmail && validPassword && validName) return null;
};

export default valiFormdData;

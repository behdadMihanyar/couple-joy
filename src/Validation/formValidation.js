function validation(user) {
  if (user.name.length <= 3) {
    alert("please enter your full name");
    throw new Error("name is not correct");
  } else if (user.family.length < 3) {
    alert("please enter your full family name");
    throw new Error("family is not correct");
  } else if (user.phoneNumber <= 11) {
    alert("please enter a valid number");
    throw new Error("Phone number is not correct");
  }
}
export default validation;

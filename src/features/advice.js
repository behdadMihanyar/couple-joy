export const getAdvice = async (setUser) => {
  const req = await fetch("https://api.adviceslip.com/advice");
  const res = await req.json();
  setUser(res.slip.advice);
};

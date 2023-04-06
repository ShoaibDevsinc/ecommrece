export const fetchProducts = async (setproduct) => {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);
  const data = await response.json();
  setproduct(data);
};
export const fetchProduct = async (setProductDetails, id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  setProductDetails(data);
};
export const login = async (email, pass, setLoginStatus) => {
  const url = "https://fakestoreapi.com/auth/login";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: email,
      password: pass,
    }),
  });
  response.ok === true ? setLoginStatus(true) : setLoginStatus(false);
  console.log(response.json());
};

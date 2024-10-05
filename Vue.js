const API_URL = 'https://resto-app-vr68.onrender.com';
export const placeOrder = async (order) => {
  const response = await fetch(`${API_URL}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
  return response.json();
};

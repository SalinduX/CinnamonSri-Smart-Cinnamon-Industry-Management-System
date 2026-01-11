const BASE_URL = "http://172.20.10.3:8000"; // Android Emulator
// const BASE_URL = "http://localhost:8000"; // Web

export async function predictQualityAndPrice(payload: any) {
  const response = await fetch(`${BASE_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Prediction failed");
  }

  return response.json();
}


import { Header } from "../../components/Header/Header";

export const Test = () => {
  const data = {
    userId: "",
    list: "",
  };
  return (
    <div>
      <Header />
      <div onClick={() => runQuery(data)}>Run Query</div>
    </div>
  );
};

const runQuery = async (data) => {
  const res = await fetch(
    "http://imojaa.com:5001/api/v1/wishlist/create-update-wishlist",
    {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoaW1lanVkZUBnZXRuYWRhLmNvbSIsInJvbGVzIjpbImN1c3RvbWVyIl0sImlhdCI6MTcxNDY4NjkzNSwiZXhwIjoxNzE1MjkxNzM1fQ.aRRwgLAf_Ssa5FDj07vtZoNOzuQ6FYb8e4_Q32EE2lqN8i70BTEGgKDt8ZXGPWXEBWPFx4zeIXK57nHcNWM7iTQVmr84GSFg-ybcZpiOPzy7naH5BbWOhFBH2_31epegeZbL4jsBL00JfjTtalcX6XBKlhNAAHISmp8aR0yXx53aahl5lO96kqaM_agE9TP9uUidGWFgh0P5nbMnIqHO6FC220gsl_0Ko3lDNJP3BFeZpy2bN7W0BQRpg9GpmlsVFED3vOCE2kPl9zX6LbeAp3_8vxGCpCp1zBC_LxNgfjBI9di21B1X4jw71kZVDEeGPPBXiOvXRbuJutF33ZsMjA`,
      },
    }
  );
  const info = res.json();
  console.log("info here ", info);
  return info;
};

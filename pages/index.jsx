import { useEffect, useRef, useState } from "react";
import { PrismaClient } from "@prisma/client";

const Home = (props) => {
  // const [formData, setFormData] = useState({});
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const ref = useRef();

  // useEffect(() => {
  //   getData();
  //   ref.current.focus();
  // }, []);

  // const getData = () => {
  //   fetch("/api/hello", { method: "GET" })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setData(response);
  //     })
  //     .catch((e) => console.log(e));
  // };

  // const submitForm = async (e) => {
  //   setLoading(true);
  //   e.preventDefault();
  //   const response = await fetch("/api/addUser", {
  //     method: "POST",
  //     body: JSON.stringify(formData),
  //   });
  //   let res = await response.json();
  //   if (res) setLoading(false);
  //   console.log(res);
  //   setFormData({});
  //   getData();
  // };
  return null;
  <div className="home">
    <div className="form-wrapper">
      <form action="#" onSubmit={submitForm} className="the-form">
        <input
          ref={ref}
          placeholder="first name"
          required
          value={formData.firstName || ""}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          type="text"
          name="firstName"
          id=""
        />
        <input
          placeholder="last name"
          required
          value={formData.lastName || ""}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          type="text"
          name="lastName"
          id=""
        />
        <input
          placeholder="age"
          required
          value={formData.age || ""}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          type="number"
          name="age"
          id=""
        />
        {!loading && <button type="submit">add</button>}
      </form>
    </div>

    <div className="list">
      <ul>
        {data?.map((e) => (
          <li key={e.id}>
            {e.firstName} {e.lastName} {e.age}
          </li>
        ))}
      </ul>
    </div>
  </div>;
};

export default Home;

// export async function getServerSideProps() {
//   // const data = [
//   //   { id: 1, title: "one" },
//   //   { id: 2, title: "two" },
//   // ];

//   const data = await prisma.user.findMany();

//   return { props: { data } };
// }

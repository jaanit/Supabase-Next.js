export default async function Page() {
  // Sample data
  const businesses = [
    {
      name: "Business 1",
      dateCreated: "2023-01-01",
      email: "business1@example.com",
      description: "",
    },
    {
      name: "Business 1",
      dateCreated: "2023-01-01",
      email: "business1@example.com",
      description: "",
    },
    {
      name: "Business 1",
      dateCreated: "2023-01-01",
      email: ""
    },
    {
      name: "Business 1",
      dateCreated: "2023-01-01",
      email: ""
    },



    // Add more business data as needed
  ];

  return (
    <div className="h-screen flex justify-center items-center bg-slate-700 w-full">
    <div className="bg-white rounded-lg shadow-lg px-10 pt-10 w-[90%] h-[680px] flex text-black flex-col">
      <div className="border-b">
        <h1 className="text-2xl font-bold text-center mb-2">Dashboard </h1>
      </div>
  
      <div className="overflow-y-auto max-h-[500px] my-2">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Business Name</th>
              <th className="border p-2">Date Created</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {businesses.map((business, index) => (
              <tr key={index}>
                <td className="border p-2">{business.name}</td>
                <td className="border p-2">{business.dateCreated}</td>
                <td className="border p-2">{business.email}</td>
                <td className="border p-2">{business.description}</td>
                <td className="border p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
  
  
}
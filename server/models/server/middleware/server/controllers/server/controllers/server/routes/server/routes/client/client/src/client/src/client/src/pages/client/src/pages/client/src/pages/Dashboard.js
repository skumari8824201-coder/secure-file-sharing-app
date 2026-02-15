import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [files, setFiles] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/files", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => setFiles(res.data));
  }, [token]);

  return (
    <div>
      <h2>Your Files</h2>
      {files.map((file) => (
        <div key={file._id}>{file.filename}</div>
      ))}
    </div>
  );
}

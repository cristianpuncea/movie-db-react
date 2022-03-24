import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    };
  });

  return (
    <div>
      Account Page.
    </div>
  )
}
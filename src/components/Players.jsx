import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export default function Players() {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);

  const team = searchParams.get("teamId");

  return <div className="container">Players for {team}</div>;
}

import React from "react";

const latestTransactions = [
  {
    id: "TXN001",
    title: "Zahlung an Max Mustermann",
    badge: "Completed",
    count: 49.99,
  },
  {
    id: "TXN002",
    title: "Zahlung an Anna Müller",
    badge: "Pending",
    count: 89.5,
  },
  {
    id: "TXN003",
    title: "Zahlung an John Doe",
    badge: "Failed",
    count: 15.0,
  },
  {
    id: "TXN004",
    title: "Zahlung an Lina Schmidt",
    badge: "Completed",
    count: 129.99,
  },
];

const popularContent = [
  {
    id: "CNT001",
    title: "React Crash Course",
    badge: "Web Development",
    count: 1240,
  },
  {
    id: "CNT002",
    title: "10 Tipps für besseres UI Design",
    badge: "Design",
    count: 980,
  },
  {
    id: "CNT003",
    title: "Next.js vs. React",
    badge: "JavaScript",
    count: 840,
  },
  {
    id: "CNT004",
    title: "MongoDB für Einsteiger",
    badge: "Backend",
    count: 1120,
  },
];

export default function CardList({ title }: { title: string }) {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;
  return (
    <>
      <h2 className="text-lg font-medium mb-6"></h2>
    </>
  );
}

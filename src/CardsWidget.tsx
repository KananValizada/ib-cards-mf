import { useEffect, useState } from "react";

type CardsData = {
  count: number;
};

const CardsWidget = () => {
  const [data, setData] = useState<CardsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData({ count: 3 });
      setLoading(false);
    }, 1200);
  }, []);

  if (loading) {
    return <div>Cards loading...</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 12 }}>
      <h3>Cards Widget</h3>
      <p>Active cards: {data?.count}</p>
    </div>
  );
};

export default CardsWidget;

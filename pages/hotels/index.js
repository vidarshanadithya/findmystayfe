import Header from "../../components/Header";
import HotelCard from "../../components/HotelCard";
import Layout from "../../components/Layout";

export default function HotelsPage() {
  return (
    <Layout
      title="Hotels | Findmystay"
      description="Best rated hotels in California"
    >
      <div className="grid gap-8 grid-cols-4 m-10 sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <HotelCard />
        <HotelCard />
        <HotelCard /> <HotelCard /> <HotelCard />
      </div>
    </Layout>
  );
}

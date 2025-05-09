import PaginatedItems from "./components/PaginatedItems";
export default async function Projets() {
  return (
    <>
      <h2 className="bg-font-extrabold text-left text-xl text-white underline underline-offset-8 sm:mb-2 sm:pb-2 sm:text-3xl">
        Mes réalisations
      </h2>
      <PaginatedItems itemsPerPage={6} />
    </>
  );
}

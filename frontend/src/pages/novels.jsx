import { novels } from "../data/novel.js";
import NovelCard from "../compoment/novelcard.jsx";
import FilterSidebar from "../compoment/filtersidebar.jsx";
import Pagination from "../compoment/pagination.jsx";

export default function Novels() {
  return (
    <div className="novels-flex novels-p-4 novels-space-x-4">
      <FilterSidebar />
      <div className="novels-grid novels-grid-cols-2 novels-md:grid-cols-3 novels-gap-4 novels-flex-1">
        {novels.map(novel => <NovelCard key={novel.id} novel={novel} />)}
      </div>
      <Pagination />
    </div>
  );
}
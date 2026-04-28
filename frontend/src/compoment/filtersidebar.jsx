export default function FilterSidebar() {
  return (
    <aside className="filtersidebar-bg-gray-100 filtersidebar-dark:bg-gray-700 filtersidebar-p-4 filtersidebar-rounded">
      <h3 className="filtersidebar-font-bold filtersidebar-mb-2">Bộ lọc</h3>
      <div>
        <label><input type="checkbox" /> Fantasy</label><br />
        <label><input type="checkbox" /> Romance</label>
      </div>
      <div className="mt-2">
        <select className="filtersidebar-w-full filtersidebar-p-2 filtersidebar-rounded">
          <option>Mới cập nhật</option>
          <option>Top</option>
        </select>
      </div>
    </aside>
  );
}
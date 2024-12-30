import React from "react";

const SearchDatabase = ({searchQuery, onHandleSearchChange, sortCriteria, onHandleSortChange}) => {
  return (
    <div>
      <div
        className="row border panel panel-primary"
        style={{ padding: "15px 0px" }}
      >
        <div className="col-lg-4" style={{ paddingLeft: "15px" }}>
          <input
            type="text"
            value={searchQuery}
            onChange={onHandleSearchChange}
            className="form-control"
            style={{ borderRadius: "5px" }}
            placeholder="Search Here........"
          />
        </div>
        <div className="col-lg-8 pull-right" style={{ maxWidth: "250px" }}>
          <div className="sort-options">
            <select className="form-control" value={sortCriteria} onChange={onHandleSortChange}>
              <option value="">Sort By</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title-asc">Title: A to Z</option>
              <option value="title-desc">Title: Z to A</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDatabase;

import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import RestaurantList from "../features/restaurant/RestaurantList";
import "./Pagination.css";

export default function Pagination({ data, search, selected }) {
	// console.log("first====", data);

	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 9;

	const endOffset = itemOffset + itemsPerPage;
	// console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const currentItems = data.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(data.length / itemsPerPage);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % data.length;
		// console.log(
		// 	`User requested page number ${event.selected}, which is offset ${newOffset}`
		// );
		setItemOffset(newOffset);
	};
	return (
		<>
			{currentItems
				.filter((item) => {
					return search.toLowerCase() === ""
						? item
						: item.name.toLowerCase().includes(search);
				})
				.filter((item) => {
					return selected === "" ? item : item.categories.includes(selected);
				})
				.map((item) => {
					return <RestaurantList key={item.id} data={item} />;
				})}

			<div className="col-span-12 mx-auto">
				<ReactPaginate
					breakLabel="..."
					nextLabel=">"
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					pageCount={pageCount}
					previousLabel="< "
					renderOnZeroPageCount={null}
					containerClassName="pagination"
					pageLinkClassName="page-num"
					previousLinkClassName="page-num"
					nextLinkClassName="page-num"
					activeLinkClassName="active"
				/>
			</div>
		</>
	);
}

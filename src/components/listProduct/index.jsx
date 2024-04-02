import React, { useEffect, useState } from "react";
import Filter from "./components/filter";
import { useParams } from "react-router-dom";
import Product from "../product";
import Pagination from "../pagination";

export default function ListProduct() {
  const { slug } = useParams();

  const [showFilter, setShowFilter] = useState(false);
  const [listCategory, setlistCategory] = useState([]);
  const [listProduct, setlistProduct] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12); // Set the number of items per page
  const [totalItems, setTotalItems] = useState(0); // Total number of items
  const [totalPages, setTotalPages] = useState(0); // Total number of pages
  const [listOrderProduct, setlistOrderProduct] = useState([]);
  useEffect(() => {
    if (!slug) return; // Prevent fetching if slug is undefined

    fetch(`https://gyomade.vn/mvc/category/`)
      .then((response) => response.json())
      .then((data) => {
        const category = data.find((item) => item.slug === slug);
        setlistCategory(category);
      });
  }, [slug]);

  useEffect(() => {
    fetchData();
  }, [listCategory.id, currentPage, sortBy]);

  const fetchData = () => {
    if (!listCategory.id) return;

    fetch(
      `https://gyomade.vn/mvc/products/category/${listCategory.id}?page_number=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setlistProduct(data.products);
        setlistOrderProduct(data.products);
        setPageSize(data.page_size);
        setTotalPages(data.total_pages);
        setTotalItems(data.total_entries);
      });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedProducts = () => {
    if (sortBy === "lowPrice") {
      return listOrderProduct.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === "highPrice") {
      return listOrderProduct.slice().sort((a, b) => b.price - a.price);
    } else {
      return listProduct;
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(listProduct);
  return (
    <section>
      <div className="cs_height_30 cs_height_lg_20" />
      <div className="container-fluid">
        {/* <div className={`cs_shop_filter ${showFilter ? "active" : ""}`}>
          <div className="cs_filter_overlay" />
          <button
            className="cs_filter_close"
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            X
          </button>
          <Filter />
        </div> */}
        <div className="cs_filter_sort">
          <div className="cs_filter_sidebar_heading cs_medium">
            <div className="cs_filter_sidebar_heading_in cs_filter_btn">
              <svg
                width={20}
                height={12}
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_395_2711)">
                  <path
                    d="M14.2249 3.46555C12.5384 3.46555 10.8518 3.46555 9.16531 3.4598C8.99666 3.4598 8.93268 3.51153 8.88034 3.6667C8.49651 4.81038 7.42643 5.569 6.22259 5.56325C5.00712 5.56325 3.93123 4.78739 3.55903 3.63796C3.5125 3.49429 3.44853 3.45406 3.30314 3.4598C2.43079 3.46555 1.55845 3.46555 0.686101 3.4598C0.360425 3.4598 0.08709 3.22992 0.0231179 2.93681C-0.0466698 2.62072 0.0987213 2.29314 0.395319 2.1667C0.523263 2.11498 0.67447 2.09199 0.819861 2.09199C1.64568 2.08624 2.47732 2.08624 3.30314 2.09199C3.44853 2.09199 3.5125 2.05176 3.55903 1.90808C3.93123 0.770148 4.99549 0.0057803 6.20515 3.31758e-05C7.42062 -0.00571395 8.48488 0.735665 8.86871 1.88509C8.92687 2.0575 9.00829 2.09199 9.17694 2.09199C12.4744 2.08624 15.7777 2.08624 19.0752 2.08624C19.145 2.08624 19.2206 2.08624 19.2903 2.08624C19.7091 2.10923 19.994 2.39658 19.994 2.78739C19.9882 3.17819 19.6974 3.4598 19.2729 3.46555C18.3133 3.4713 17.3537 3.46555 16.3942 3.46555C15.6788 3.46555 14.9519 3.46555 14.2249 3.46555ZM4.80358 2.7759C4.80358 3.5575 5.43748 4.18969 6.22259 4.18969C7.00189 4.18969 7.6358 3.56325 7.64161 2.79888C7.64743 2.01727 7.01934 1.38509 6.22841 1.37934C5.43748 1.3736 4.80358 1.99429 4.80358 2.7759Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.5167 8.53426C17.4064 8.53426 18.2846 8.53426 19.1628 8.53426C19.2791 8.53426 19.3954 8.53426 19.5059 8.56299C19.8083 8.64345 20.006 8.93081 20.0002 9.2469C19.9886 9.5515 19.7792 9.81587 19.4768 9.88483C19.3779 9.90782 19.2733 9.91357 19.1744 9.91357C18.3486 9.91357 17.5169 9.91931 16.6911 9.91357C16.5515 9.91357 16.4934 9.94805 16.4469 10.086C16.063 11.2412 15.0046 11.9998 13.7833 12.0055C12.5678 12.0055 11.5094 11.2584 11.1256 10.109C11.0674 9.9423 10.986 9.91357 10.829 9.91357C7.51403 9.91931 4.19912 9.91931 0.890016 9.91357C0.773703 9.91357 0.65739 9.91357 0.541077 9.88483C0.192139 9.81012 -0.0230402 9.51127 0.00603803 9.15495C0.0293006 8.82161 0.29682 8.55725 0.645759 8.54C0.732994 8.53426 0.820228 8.53426 0.907463 8.53426C4.20493 8.53426 7.50822 8.53426 10.8057 8.54C10.9802 8.54 11.0674 8.50552 11.1314 8.32161C11.5094 7.18368 12.5911 6.43081 13.7949 6.43656C14.9988 6.4423 16.0688 7.21242 16.4469 8.35035C16.4701 8.40207 16.4934 8.46529 16.5167 8.53426ZM13.7717 10.6205C14.5568 10.6262 15.1907 10.0113 15.1965 9.24115C15.2023 8.4538 14.5859 7.82161 13.7949 7.81012C13.0098 7.79862 12.3585 8.43081 12.3527 9.20667C12.3527 9.98828 12.9807 10.6147 13.7717 10.6205Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_395_2711">
                    <rect width={20} height={12} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span
                onClick={() => {
                  setShowFilter(!showFilter);
                }}
              >
                Filter
              </span>
            </div>
          </div>
          <div className="cs_sort_section">
            <div className="cs_sort_number">
              <p className="cs_medium mb-0">
                {" "}
                Showing {currentPage > 1 ? (currentPage - 1) * pageSize + 1 : 1}
                -{Math.min(currentPage * pageSize, totalItems)} of {totalItems}{" "}
                results
              </p>
            </div>
            <div className="cs_sort_wrap">
              <div className="cs_sort">
                <select value={sortBy} onChange={handleSortChange}>
                  <option value="latest">Sort By Latest</option>
                  <option value="lowPrice">Sort By Low Price</option>
                  <option value="highPrice">Sort By High Price</option>
                </select>
              </div>
              {/* <div className="cs_view">
                <span className="cs_viev_icon cs_grid_btn active">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0102539 1.14031C0.0362956 1.07235 0.0571289 1.00963 0.0779622 0.941678C0.260254 0.392837 0.755046 0.0112627 1.32796 0.00603568C2.73942 0.000808628 4.15088 -0.00441842 5.56234 0.00603568C6.2863 0.0112627 6.87484 0.607146 6.88004 1.33371C6.89046 2.74501 6.89046 4.15631 6.88004 5.56762C6.87484 6.30463 6.28109 6.89529 5.5415 6.90051C4.15088 6.90574 2.75505 6.90574 1.36442 6.90051C0.734212 6.90051 0.218587 6.48758 0.0519206 5.87079C0.0415039 5.8342 0.0258789 5.79761 0.0102539 5.76624C0.0102539 4.22427 0.0102539 2.68229 0.0102539 1.14031ZM3.44255 5.65125C4.09359 5.65125 4.74463 5.64602 5.39567 5.65648C5.56755 5.65648 5.63525 5.60943 5.63525 5.42649C5.63005 4.1145 5.63005 2.80251 5.63525 1.48529C5.63525 1.3128 5.58317 1.2553 5.4113 1.26053C4.104 1.26575 2.79671 1.26575 1.48421 1.26053C1.30192 1.26053 1.25505 1.32848 1.25505 1.50097C1.26025 2.80773 1.26025 4.1145 1.25505 5.42126C1.25505 5.59898 1.30713 5.6617 1.48942 5.65648C2.14046 5.64602 2.7915 5.65125 3.44255 5.65125Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.02051 1.14128C9.04655 1.07333 9.06738 1.01061 9.08822 0.942654C9.27051 0.393814 9.7653 0.0122393 10.3382 0.00701224C11.7497 0.00178519 13.1611 -0.00344186 14.5726 0.00701224C15.2965 0.0122393 15.8851 0.608123 15.8903 1.33468C15.9007 2.74599 15.9007 4.15729 15.8903 5.56859C15.8851 6.30561 15.2913 6.89626 14.5518 6.90149C13.1611 6.90672 11.7653 6.90672 10.3747 6.90149C9.74447 6.90149 9.22884 6.48855 9.06217 5.87176C9.05176 5.83517 9.03613 5.79858 9.02051 5.76722C9.02051 4.22524 9.02051 2.68326 9.02051 1.14128ZM12.4528 5.65223C13.1038 5.65223 13.7549 5.647 14.4059 5.65745C14.5778 5.65745 14.6455 5.61041 14.6455 5.42746C14.6403 4.11547 14.6403 2.80348 14.6455 1.48627C14.6455 1.31377 14.5934 1.25628 14.4215 1.2615C13.1143 1.26673 11.807 1.26673 10.4945 1.2615C10.3122 1.2615 10.2653 1.32946 10.2653 1.50195C10.2705 2.80871 10.2705 4.11547 10.2653 5.42224C10.2653 5.59996 10.3174 5.66268 10.4997 5.65745C11.1507 5.647 11.8018 5.65223 12.4528 5.65223Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0.0104167 10.236C0.0364583 10.1681 0.0572917 10.1053 0.078125 10.0374C0.260417 9.48854 0.755208 9.10697 1.32292 9.10174C2.73438 9.09651 4.14583 9.09128 5.55729 9.10174C6.28125 9.10697 6.86979 9.70285 6.875 10.4294C6.88542 11.8407 6.88542 13.252 6.875 14.6633C6.86979 15.4003 6.27604 15.991 5.53646 15.9962C4.13542 16.0014 2.73958 16.0014 1.33854 15.9962C0.744792 15.991 0.234375 15.5937 0.0572917 15.024C0.0416667 14.9665 0.0208333 14.9142 0 14.8619C0.0104167 13.32 0.0104167 11.778 0.0104167 10.236ZM5.63542 12.5307C5.63542 11.8825 5.63021 11.2396 5.64062 10.5914C5.64062 10.419 5.59896 10.3458 5.41146 10.351C4.10417 10.3562 2.79688 10.3562 1.48438 10.351C1.31771 10.351 1.25521 10.4033 1.26042 10.5758C1.26562 11.8878 1.26562 13.1997 1.26042 14.517C1.26042 14.6999 1.32292 14.7522 1.5 14.747C2.80208 14.7417 4.10417 14.7417 5.40625 14.747C5.58333 14.747 5.64583 14.6947 5.64062 14.5117C5.63021 13.8531 5.63542 13.1945 5.63542 12.5307Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.02067 10.237C9.04671 10.169 9.06755 10.1063 9.08838 10.0384C9.27067 9.48952 9.76546 9.10794 10.3332 9.10272C11.7446 9.09749 13.1561 9.09226 14.5675 9.10272C15.2915 9.10794 15.88 9.70383 15.8853 10.4304C15.8957 11.8417 15.8957 13.253 15.8853 14.6643C15.88 15.4013 15.2863 15.992 14.5467 15.9972C13.1457 16.0024 11.7498 16.0024 10.3488 15.9972C9.75505 15.992 9.24463 15.5947 9.06755 15.025C9.05192 14.9675 9.03109 14.9152 9.01025 14.8629C9.02067 13.3209 9.02067 11.779 9.02067 10.237ZM14.6457 12.5317C14.6457 11.8835 14.6405 11.2406 14.6509 10.5924C14.6509 10.4199 14.6092 10.3468 14.4217 10.352C13.1144 10.3572 11.8071 10.3572 10.4946 10.352C10.328 10.352 10.2655 10.4043 10.2707 10.5767C10.2759 11.8887 10.2759 13.2007 10.2707 14.5179C10.2707 14.7009 10.3332 14.7532 10.5103 14.7479C11.8123 14.7427 13.1144 14.7427 14.4165 14.7479C14.5936 14.7479 14.6561 14.6957 14.6509 14.5127C14.6405 13.8541 14.6457 13.1955 14.6457 12.5317Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="cs_viev_icon cs_list_btn">
                  <svg
                    width={21}
                    height={16}
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0102539 1.14031C0.0362956 1.07235 0.0571289 1.00963 0.0779622 0.941678C0.260254 0.392837 0.755046 0.0112627 1.32796 0.00603568C2.73942 0.000808628 4.15088 -0.00441842 5.56234 0.00603568C6.2863 0.0112627 6.87484 0.607146 6.88004 1.33371C6.89046 2.74501 6.89046 4.15631 6.88004 5.56762C6.87484 6.30463 6.28109 6.89529 5.5415 6.90051C4.15088 6.90574 2.75505 6.90574 1.36442 6.90051C0.734212 6.90051 0.218587 6.48758 0.0519206 5.87079C0.0415039 5.8342 0.0258789 5.79761 0.0102539 5.76624C0.0102539 4.22427 0.0102539 2.68229 0.0102539 1.14031ZM3.44255 5.65125C4.09359 5.65125 4.74463 5.64602 5.39567 5.65648C5.56755 5.65648 5.63525 5.60943 5.63525 5.42649C5.63005 4.1145 5.63005 2.80251 5.63525 1.48529C5.63525 1.3128 5.58317 1.2553 5.4113 1.26053C4.104 1.26575 2.79671 1.26575 1.48421 1.26053C1.30192 1.26053 1.25505 1.32848 1.25505 1.50097C1.26025 2.80773 1.26025 4.1145 1.25505 5.42126C1.25505 5.59898 1.30713 5.6617 1.48942 5.65648C2.14046 5.64602 2.7915 5.65125 3.44255 5.65125Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0.0104167 10.236C0.0364583 10.1681 0.0572917 10.1053 0.078125 10.0374C0.260417 9.48854 0.755208 9.10697 1.32292 9.10174C2.73438 9.09651 4.14583 9.09128 5.55729 9.10174C6.28125 9.10697 6.86979 9.70285 6.875 10.4294C6.88542 11.8407 6.88542 13.252 6.875 14.6633C6.86979 15.4003 6.27604 15.991 5.53646 15.9962C4.13542 16.0014 2.73958 16.0014 1.33854 15.9962C0.744792 15.991 0.234375 15.5937 0.0572917 15.024C0.0416667 14.9665 0.0208333 14.9142 0 14.8619C0.0104167 13.32 0.0104167 11.778 0.0104167 10.236ZM5.63542 12.5307C5.63542 11.8825 5.63021 11.2396 5.64062 10.5914C5.64062 10.419 5.59896 10.3458 5.41146 10.351C4.10417 10.3562 2.79688 10.3562 1.48438 10.351C1.31771 10.351 1.25521 10.4033 1.26042 10.5758C1.26562 11.8878 1.26562 13.1997 1.26042 14.517C1.26042 14.6999 1.32292 14.7522 1.5 14.747C2.80208 14.7417 4.10417 14.7417 5.40625 14.747C5.58333 14.747 5.64583 14.6947 5.64062 14.5117C5.63021 13.8531 5.63542 13.1945 5.63542 12.5307Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.3646 3.14221C12.7188 3.14221 11.0729 3.14221 9.42189 3.14221C8.94273 3.14221 8.63543 2.71359 8.8021 2.2902C8.89585 2.04976 9.07814 1.91908 9.33335 1.89295C9.39064 1.88772 9.44793 1.89295 9.51043 1.89295C12.7604 1.89295 16.0052 1.89295 19.2552 1.89295C19.3386 1.89295 19.4271 1.88772 19.5104 1.90863C19.8177 1.97135 20.0313 2.25884 20.0104 2.56724C19.9896 2.88609 19.7292 3.14221 19.4063 3.14744C18.9584 3.15789 18.5104 3.15267 18.0573 3.15267C16.8281 3.14221 15.5938 3.14221 14.3646 3.14221Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.406 10.8259C16.0519 10.8259 17.6977 10.8259 19.3487 10.8259C19.8175 10.8259 20.1248 11.2388 19.9737 11.657C19.8852 11.9079 19.6977 12.0438 19.4321 12.0751C19.3748 12.0804 19.3175 12.0804 19.255 12.0804C16.005 12.0804 12.7602 12.0804 9.51019 12.0804C9.42686 12.0804 9.33832 12.0856 9.26019 12.0647C8.9529 12.002 8.73936 11.7145 8.76019 11.4061C8.78102 11.0872 9.04144 10.8311 9.36436 10.8259C9.85915 10.8154 10.3539 10.8206 10.8487 10.8206C12.0362 10.8259 13.2185 10.8259 14.406 10.8259Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.6665 4.2406C13.7446 4.2406 14.828 4.2406 15.9061 4.2406C16.3905 4.2406 16.703 4.6849 16.5207 5.10829C16.4009 5.38533 16.1769 5.4951 15.88 5.4951C14.4686 5.48987 13.0571 5.4951 11.6405 5.4951C10.9269 5.4951 10.2082 5.4951 9.49463 5.4951C9.04671 5.4951 8.76025 5.2442 8.76025 4.86262C8.76546 4.48628 9.04671 4.2406 9.48421 4.2406C10.5467 4.23538 11.604 4.2406 12.6665 4.2406Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.6875 13.3353C13.7604 13.3353 14.8333 13.3353 15.9115 13.3353C16.3958 13.3353 16.7083 13.7796 16.526 14.203C16.4062 14.4801 16.1823 14.5898 15.8854 14.5898C14.474 14.5846 13.0625 14.5898 11.6458 14.5898C10.9323 14.5898 10.2135 14.5898 9.5 14.5898C9.05208 14.5898 8.76562 14.3389 8.76562 13.9573C8.77083 13.581 9.05208 13.3353 9.48958 13.3353C10.5521 13.3301 11.6198 13.3353 12.6875 13.3353Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div> */}
            </div>
          </div>
        </div>
        <div className="cs_product_grid cs_product_grid_4 cs_grid_view">
          {sortedProducts().map((product, index) => (
            <Product
              key={index}
              id={product.id}
              imageUrl={product.image}
              price={product.price}
              name={product.name}
              slug={product.slug}
              display_id={product.custom_id}
              product_id={product.id}
            />
          ))}
        </div>
        <div className="cs_height_75 cs_height_lg_50" />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        {/* <ul className="cs_pagination cs_fs_21 cs_semibold cs_mp0">
          <li className="cs_page_item active">
            <a className="cs_page_link" href="#">
              01
            </a>
          </li>
          <li className="cs_page_item">
            <a className="cs_page_link" href="#">
              02
            </a>
          </li>
          <li className="cs_page_item">
            <a className="cs_page_link" href="#">
              03
            </a>
          </li>
          <li className="cs_page_item">
            <a className="cs_page_link" href="#">
              <i className="fa-solid fa-arrow-right" />
            </a>
          </li>
        </ul> */}
      </div>
      <div className="cs_height_140 cs_height_lg_80" />
      <hr />
    </section>
  );
}

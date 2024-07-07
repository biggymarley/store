import { useState, useEffect } from "react";
const itemsPerPage = 10;
const useFetchJson = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayData, setDisplayData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' for ascending, 'desc' for descending

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          mode: "cors",
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        const totalItems = result.length;
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
        setDisplayData(result?.slice(0, itemsPerPage));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayData(data?.slice(start, end));
  }, [currentPage, data]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const searchData = (searchText) => {
    const searchTerm = searchText.trim();
    const filteredData = data.filter(
      (item) =>
        item["Handle"].toLowerCase().includes(searchTerm.toLowerCase()) ||
        item["Body (HTML)"].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCurrentPage(1);
    setTotalPages(Math.ceil(filteredData.length / itemsPerPage));
    setDisplayData(filteredData?.slice(0, itemsPerPage));
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    setDisplayData((prevFilteredData) =>
      [...prevFilteredData].sort((a, b) => {
        if (newSortOrder === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      })
    );
    setCurrentPage(1); // Reset to the first page on sort
  };

  return {
    data,
    displayData,
    loading,
    error,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    goToPage,
    searchData,
    toggleSortOrder,
    sortOrder,
  };
};

export default useFetchJson;

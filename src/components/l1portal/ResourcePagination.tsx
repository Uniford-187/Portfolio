
import { useResources } from "./ResourceContext";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ResourcePagination = () => {
  const { filteredResources, currentPage, resourcesPerPage, setCurrentPage } = useResources();

  const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);
  
  // If there's only one page or no resources, don't render pagination
  if (totalPages <= 1) return null;

  // Create an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Logic to show a limited number of page links
  const renderPageNumbers = () => {
    // Always show first page, last page, current page, and pages around the current page
    const delta = 2; // Number of pages to show on each side of the current page
    const range = [];
    const rangeWithDots = [];

    // Calculate range
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    // Add dots where needed
    let l;
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          // Just one page missing, add it
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          // Multiple pages missing, add dots
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots.map((page, index) => {
      if (page === "...") {
        return (
          <PaginationItem key={`ellipsis-${index}`}>
            <span className="py-2 px-4">...</span>
          </PaginationItem>
        );
      }

      return (
        <PaginationItem key={`page-${page}`}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(page as number);
            }}
            isActive={currentPage === page}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          
          {renderPageNumbers()}
          
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
              }}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ResourcePagination;

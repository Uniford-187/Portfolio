
import { useResources } from "./ResourceContext";
import ResourceCard from "./ResourceCard";
import ResourceModal from "./ResourceModal";

const ResourceGrid = () => {
  const { filteredResources, currentPage, resourcesPerPage } = useResources();

  // Calculate pagination
  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentResources = filteredResources.slice(
    indexOfFirstResource,
    indexOfLastResource
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No resources found matching your criteria.</p>
          <p className="text-gray-400 mt-2">Try adjusting your filters or search query.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
          <ResourceModal />
        </>
      )}
    </div>
  );
};

export default ResourceGrid;

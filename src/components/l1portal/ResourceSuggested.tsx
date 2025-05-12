
import { useResources } from "./ResourceContext";
import ResourceCard from "./ResourceCard";

const ResourceSuggested = () => {
  const { resources, selectedResource } = useResources();

  // Only show suggestions if a resource is selected
  if (!selectedResource) return null;

  // Find resources with matching tags
  const suggestedResources = resources
    .filter(
      (resource) =>
        resource.id !== selectedResource.id &&
        resource.tags.some((tag) => selectedResource.tags.includes(tag))
    )
    .slice(0, 3); // Limit to 3 suggestions

  if (suggestedResources.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-8 border-t">
      <h2 className="text-2xl font-bold mb-6">You may also like...</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestedResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default ResourceSuggested;

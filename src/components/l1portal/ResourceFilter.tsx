
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useResources, ResourceType } from "./ResourceContext";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const ResourceFilter = () => {
  const { currentType, setCurrentType, dateRange, setDateRange } = useResources();

  const resourceTypes: ResourceType[] = [
    "All",
    "Reports",
    "PDFs",
    "Videos",
    "Innovations",
    "Policy Docs",
    "Case Studies",
    "Whitepapers",
  ];

  const handleTypeChange = (value: string) => {
    setCurrentType(value as ResourceType);
  };

  return (
    <div className="bg-white shadow-md py-6 sticky top-20 z-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full overflow-x-auto pb-2">
            <ToggleGroup
              type="single"
              value={currentType}
              onValueChange={(value) => value && handleTypeChange(value)}
              className="flex-nowrap min-w-max"
            >
              {resourceTypes.map((type) => (
                <ToggleGroupItem
                  key={type}
                  value={type}
                  className="whitespace-nowrap"
                  variant="outline"
                >
                  {type}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div className="flex gap-2 min-w-max">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "justify-start text-left font-normal w-[240px]",
                    !dateRange[0] && !dateRange[1] && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange[0] || dateRange[1] ? (
                    <>
                      {dateRange[0]
                        ? format(dateRange[0], "PPP")
                        : "Start date"}{" "}
                      -{" "}
                      {dateRange[1]
                        ? format(dateRange[1], "PPP")
                        : "End date"}
                    </>
                  ) : (
                    <span>Select date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange[0] || new Date()}
                  selected={{
                    from: dateRange[0] || undefined,
                    to: dateRange[1] || undefined,
                  }}
                  onSelect={(range) => {
                    setDateRange([
                      range?.from || null,
                      range?.to || null,
                    ]);
                  }}
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
            {(dateRange[0] || dateRange[1]) && (
              <Button
                variant="ghost"
                onClick={() => setDateRange([null, null])}
                className="text-muted-foreground"
                size="sm"
              >
                Clear
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceFilter;

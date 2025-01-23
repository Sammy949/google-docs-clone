import { TableCell, TableRow } from "@/components/ui/table";
import { Doc } from "../../../convex/_generated/dataModel";

import { SiGoogledocs } from "react-icons/si";
import { Building2, CircleUser, MoreVertical } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

interface DocumentRowProps {
  document: Doc<"documents">;
}

const DocumentRow = ({ document }: DocumentRowProps) => {
  return (
    <TableRow className="cursor-pointer">
      <TableCell className="w-[50px]">
        <SiGoogledocs className="size-5 fill-blue-500" />
      </TableCell>
      <TableCell className="font-semibold md:w-[45%]">
        {document.title}
      </TableCell>
      <TableCell className="text-muted-foreground hidden md:flex items-center gap-2">
        {document.organizationId ? (
          <Building2 className="size-4" />
        ) : (
          <CircleUser className="size-4" />
        )}
        {document.organizationId ? "Organization" : "Personal"}
      </TableCell>
      <TableCell className="text-muted-foreground hidden md:table-cell">
        {format(new Date(document._creationTime), "MMM dd, yyyy")}
      </TableCell>
      <TableCell className="flex justify-end">
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreVertical className="size-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
export default DocumentRow;

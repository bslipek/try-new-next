import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/ui/dialog";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Invoice</DialogTitle>
        </DialogHeader>
        <Form customers={customers} />
      </DialogContent>
    </Dialog>
  );
}

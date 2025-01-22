import { UserRoundPlus } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NewsletterForm } from "./newsletter-form";

export const Newsletter: React.FC = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            rel="noopener noreferrer"
          >
            <UserRoundPlus className="h-4 w-4" />
            Join our newsletter
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create Your Own Style with us !</DialogTitle>
            <DialogDescription>
            Kelanie&apos;s vision is to inspire through handcrafted jewelry.
            </DialogDescription>
          </DialogHeader>
          <NewsletterForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

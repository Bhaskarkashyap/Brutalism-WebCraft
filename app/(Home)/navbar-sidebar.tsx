import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link";

interface NavbarItem{
    href: string;
    children: React.ReactNode;
}

interface Props{
    open: boolean;
    onOpenChange: (open : boolean) => void;
    items: NavbarItem[];
}

export const NavbarSidebar = ({open, onOpenChange, items} : Props) => {
    return(
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side='left'>
                <SheetHeader>
                    <div>
                        <SheetTitle>
                            MarketPlace
                        </SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea className="felx flex-col overflow-y-auto h-full ">
                 {items.map((item => (
                    <Link href={item.href} key={item.href}
                    className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                    onClick={() => onOpenChange(false)}
                    >
                     {item.children}
                    </Link>
                 )))}
                  
                   <div className="flex items-center gap-4 p-2 mt-12">
              <Button variant={"elevated"}>
                Sign In
              </Button>
              <Button variant={"elevated"} isfilled>
                Register
              </Button>
         </div>

                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}
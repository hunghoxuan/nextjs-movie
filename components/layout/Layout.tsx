import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ContextProvider } from "@/components/context/context-provider";
import { Toaster } from "@/components/ui/toaster";
import { MenuProps } from "@/lib/types/web";

export default function layout( { menu, children } : { menu: MenuProps, children: React.ReactNode } ) {
  const class1 = menu.orientation === "horizontal" ? "" : "pl-20";
  const class2 = menu.orientation === "horizontal" ? "" : "bg-zinc-950 border-t border-zinc-800 lg:border-r fixed bottom-0 lg:top-0 left-0 z-10 h-16 w-full lg:h-full lg:w-20";

  return (
    <ContextProvider>
      <Toaster />
      <div>
        <header className={`${class2}`}>
          <Navbar {...menu } />
        </header>
        <div className={`overflow-hidden pb-16 lg:pb-0 ${class1} min-h-screen flex flex-col`}>
          <div className="flex-1 h-full">{children}</div>
          <Footer />
        </div>
      </div>
    </ContextProvider>
  );
}

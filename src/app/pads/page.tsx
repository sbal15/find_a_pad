import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTable, useSortBy } from "react-table";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Ced() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://cities-qd9i.onrender.com/agents");
      const agents = await response.json();
      setData(agents);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... min-h-screen">
      <Tabs defaultValue="account" className="w-[400px] w-1">
        <TabsList>
          <TabsTrigger value="current">Pad Locations</TabsTrigger>
          <TabsTrigger value="create">Create a new Location</TabsTrigger>
        </TabsList>
        <TabsContent value="current">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="create">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAuth } from "@/lib/auth";

export default async function UserDashboard() {
  const { user } = await getAuth();
  return (
    <main className="grid grid-cols-3 p-12 gap-12">
      <div className="col-span-2">
        <h1 className="text-4xl mb-8">Dashboard</h1>
        <Tabs defaultValue="items">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="favourite">Favourite</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            ID: {user?.id} <br />
            Name: {user?.name} <br />
            Email: {user?.email} <br />
          </TabsContent>
          <TabsContent value="favourite">TO DO</TabsContent>
          <TabsContent value="history">TO DO</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

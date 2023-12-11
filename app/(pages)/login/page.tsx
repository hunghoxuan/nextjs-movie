import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInWithAccount from "@/components/auth/SignInWithAccount";
import SigninWithGithub from "@/components/auth/SignInWithGithub";
import SigninWithGoogle from "@/components/auth/SignInWithGoogle";
import { getAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const { user } = await getAuth();
  if (user) {
    return redirect("/user");
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Please sign in </CardTitle>
          <CardDescription>
            To access the private page you have to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <SignInWithAccount />
          </div>
          <div className="flex flex-col mt-15">
            <SigninWithGithub />
            <SigninWithGoogle />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

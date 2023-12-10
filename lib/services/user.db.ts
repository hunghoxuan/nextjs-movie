function authenticate(username: string, password: string) {
  if(username !== "admin" && password !== "admin") {
    return null;
  }

  const user = { 
    id: "9001",
    name: "Web Admin", 
    email: "admin@example.com"
  }; 
  
  return user; 
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: username,
  //   },
  // });

  // if (!user || !user?.hashedPassword || !(await compare(password, user.password))) {
  //   // throw new Error("Invalid credentials");
  //   return null;
  // }

  // return {
  //   id: user.id,
  //   email: user.email,
  //   name: user.name,
  //   randomKey: "Hey cool",
  // };

  // try {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_BE_ROUTE}/auth/signin`,
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         email: credentials?.email,
  //         password: credentials?.password,
  //       }),
  //     }
  //   );

  //   const user = await res.json();

  //   if (res.ok && user) {
  //     return user;
  //   } else if (user.error) {
  //     throw new Error(user.error);
  //   } else {
  //     throw new Error("Login failed.");
  //   }
  // } catch (error: any) {
  //   throw new Error(error.message);
  // }
}

export const userService = {
  authenticate,
};

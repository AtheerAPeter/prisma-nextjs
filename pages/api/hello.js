import prisma from "../../prisma";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  // const users = [
  //   { id: 1, firstName: "atheer", lastName: "peter", password: "asfasf" },
  //   { id: 2, firstName: "ahmed", lastName: "peter", password: "sa" },
  //   { id: 3, firstName: "ali", lastName: "peter", password: "s" },
  //   { id: 4, firstName: "ismail", lastName: "peter", password: "s" },
  // ];

  const users = await prisma.user.findMany();
  res.json(users);
};

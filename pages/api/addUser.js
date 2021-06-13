import prisma from "../../prisma";

export default async (req, res) => {
  console.log(typeof req.body);
  try {
    const addedUser = await prisma.user.create({
      data: typeof req.body == "string" ? JSON.parse(req.body) : req.body,
    });
    res.json(addedUser);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
};

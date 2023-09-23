import { Router } from "express";
const router = Router();
import authentication from "../middlewares/auth.js";
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "John Smith" },
  { id: 4, name: "Jane Smith" },
];
router.route("/").get((req, res) => {
  res.send(users);
});

router.route("/").post(authentication, (req, res) => {
  const user = req.body;
  console.log("test");
  users.push(user);
  res.send(users);
});

router.route("/:id").delete((req, res) => {
  const id = req.params.id;
  const index = users.findIndex((user) => user.id == id);
  users.splice(index, 1);
  res.send(users);
});

router.route("/:id").put((req, res) => {
  const id = req.params.id;
  const user = req.body;
  const index = users.findIndex((user) => user.id == id);
  users[index] = user;
  res.send(users);
});
export default router;

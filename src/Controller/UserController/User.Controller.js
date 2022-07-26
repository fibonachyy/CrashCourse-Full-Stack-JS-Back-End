const { User } = require("../../Model");

const registerUser = async (req, res) => {
  console.log("here");
  try {
    console.log({ body: req.body });
    const { name, age } = req.body;

    if (!name) {
      // string ! "" || undefined
      return res.status(400).send("name can't be empty!!!");
    }

    if (!age) {
      // number ! 0 || undefined
      return res.status(400).send("age can't be empty or zero!!!");
    }

    let newUserData = {
      name,
      age,
    };
    const newUser = await User.create(newUserData);

    return res.status(200).send(newUser);
  } catch (e) {
    console.log(e);
    res.status(400).send("something went wrong!");
  }
};

const userList = async (req, res) => {
  try {
    const userList = await User.find({});

    res.status(200).send({ result: [...userList] });
  } catch (e) {
    console.log(e);
    res.status(400).send("something went wrong!");
  }
};

module.exports = { registerUser, userList };

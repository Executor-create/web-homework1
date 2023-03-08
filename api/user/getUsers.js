const Router = require('express');
const { User } = require('../../models/users');

const router = Router();

router.get('/users', async (req, res) => {
  const { name, email } = req.query;

  const result = await User.find({ name, email });

  res.status(200).send(result);
});

module.exports = router;
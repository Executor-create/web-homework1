const { Session } = require('../../models/sessions');
const Router = require('express');

const router = Router();

router.get('/sessions', async (req, res) => {
  const { userId } = req.query;

  const result = await Session.find({ user_id: userId });

  res.status(200).send(result);
})

module.exports = router
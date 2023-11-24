const router = require('express').Router();
const TimeWorke = require('../../components/TimeWorke');

router.get('/', (req, res) => {
  const html = res.renderComponent(TimeWorke, { title: 'time' });
  res.send(html);
});
module.exports = router;

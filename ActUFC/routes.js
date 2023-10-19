const {Router} = require('express');
const controller = require('./controller');

const router = Router();


router.get('/',controller.GetUFC);
/*router.post("/", controller.addFighter);
router.post("/", controller.addComment);
*/
module.exports = router;

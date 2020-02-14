module.exports = function(app) {
  const ControllerMethods = require('../controllers/smartcontract.Controller');
  app.route('/ajouter_candidate')
  .post(ControllerMethods.ajouter_candidate);
  app.route('/getCondidateList')
  .get(ControllerMethods.getCondidateList);
  app.route('/Vote')
  .post(ControllerMethods.Vote);
};

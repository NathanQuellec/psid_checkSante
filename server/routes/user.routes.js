import UserController from "../controllers/user.controller.js";

export const UserRoutes = (app) => {
  app.post("/users", UserController.apiRegisterUserInformation);

  app.post("/diagnostics/avc", UserController.apiProcessAVCInformation);

  app.post("/diagnostics/cardiaque", UserController.apiProcessHeartInformation);

  app.post("/diagnostics/diabete", UserController.apiProcessDiabeteInformation);

  app.get("/diagnostics/avc", UserController.apiGetAVCModelResults);

  app.get("/test", UserController.test_simple);

  app.get("/test/:nom", UserController.test_avec_nom);

  app.get("/diagnostics/avc/history", UserController.apiGetAVCModelResultsHistory);

  app.get("/diagnostics/diabete", UserController.apiGetDiabeteModelResults);

  app.get("/diagnostics/diabete/history", UserController.apiGetDiabeteModelResultsHistory);

  app.get("/diagnostics/cardiaque", UserController.apiGetHeartModelResults);

  app.get("/diagnostics/cardiaque/history", UserController.apiGetHeartModelResultsHistory);

  app.get("/appointment/cardiologue", UserController.apiGetCardiologueAppointment);

  app.get("/appointment/diabetologue", UserController.apiGetDiabetologueAppointment);

  app.get("/appointment/neurologue", UserController.apiGetNeurologueAppointment);
};

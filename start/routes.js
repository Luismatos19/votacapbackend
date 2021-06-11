"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/app", "AppController.index");

//rotas enquetes
Route.get("/question", "QuestionController.index");
Route.post("/question", "QuestionController.create");
Route.delete("/question/:id", "QuestionController.destroy");
Route.patch("/question/:id", "QuestionController.update");

//rotas opçoes
Route.get("/question/:id/option", "OptionController.index");
Route.post("/question/:id/option", "OptionController.create");
Route.delete("/option/:id", "OptionController.destroy");
Route.patch("/option/:id", "OptionController.update");

"use strict";

const Question = use("App/Models/Question");
const Options = use("App/Models/Option");

class QuestionController {
  //cria enquetes
  async create({ request }) {
    const { title, description, initial_date, final_date, checked } =
      request.all();

    const question = new Question();

    question.fill({
      title,
      description,
      initial_date,
      final_date,
      checked,
    });

    await question.save(question);
    return question;
  }

  //retorn todas as enquetes
  async index() {
    return await Question.all();
  }

  //deleta  enquete
  async destroy(params, response) {
    const { id } = params.params;
    console.log(id);
    const question = await Question.find(id);

    await question.delete();
    return question;
  }

  //edita enquete
  async update({ params, request }) {
    const { id } = params;
    const question = await Question.find(id);

    //pega os dado da requisição
    const { title, description, initial_date, final_date, checked } =
      request.all();

    question.merge({
      title,
      description,
      initial_date,
      final_date,
      checked,
    });

    await question.save();
    return question;
  }
}

module.exports = QuestionController;

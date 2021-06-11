"use strict";

const Question = use("App/Models/Question");
const Option = use("App/Models/Option");

class EnqueteController {
  async index(params) {
    const { id } = params.params;

    const question = await Question.find(id);

    return await question.option().fetch();
  }

  async create({ params, request }) {
    const { name, vote } = request.all();

    const { id } = params;

    const question = await Question.find(id);
    const option = new Option();

    option.fill({
      name,
      vote,
    });

    await question.option().save(option);
    return option;
  }

  async destroy(params) {
    const { id } = params.params;

    const option = await Option.find(id);

    await option.delete();
    return option;
  }

  async update({ params, request }) {
    const { id } = params;
    const option = await Option.find(id);

    //pega os dado da requisição
    const { name, vote } = request.all();

    option.merge({
      name,
      vote,
    });

    await option.save();
    return option;
  }
}

module.exports = EnqueteController;

import { render } from '../framework/render.js';
import { generateFilters } from '../mock/points.js';
import FilterView from '../view/filter-view.js';

export default class FilterPresenter {
  #container = null;
  #pointsModel = null;
  #filters = [];

  constructor ({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;

    this.#filters = generateFilters(this.#pointsModel.points);
  }

  init() {
    render(new FilterView(this.#filters), this.#container);
  }
}

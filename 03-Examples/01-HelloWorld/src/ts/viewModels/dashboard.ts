import * as kos from "knockout";
import "ojs/ojinputtext";

class DashboardViewModel {
  public txtVal: KnockoutObservable<string>;

  constructor() {
    let self = this;
    self.txtVal = kos.observable("Hello World!");
  }
}

export = new DashboardViewModel();

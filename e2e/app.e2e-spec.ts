import { TrabajoPracticoSimulacionMontecarloPage } from './app.po';

describe('trabajo-practico-simulacion-montecarlo App', function() {
  let page: TrabajoPracticoSimulacionMontecarloPage;

  beforeEach(() => {
    page = new TrabajoPracticoSimulacionMontecarloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

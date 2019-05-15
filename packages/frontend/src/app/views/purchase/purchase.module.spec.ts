import { PurchaseModule } from './purchase.module';

describe('PurchaseModule', () => {
  let dataTablesModule: PurchaseModule;

  beforeEach(() => {
    dataTablesModule = new PurchaseModule();
  });

  it('should create an instance', () => {
    expect(dataTablesModule).toBeTruthy();
  });
});

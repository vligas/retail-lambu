import { AuthManagementModule } from './authManagement.module';

describe('AuthManagementModule', () => {
  let dataTablesModule: AuthManagementModule;

  beforeEach(() => {
    dataTablesModule = new AuthManagementModule();
  });

  it('should create an instance', () => {
    expect(dataTablesModule).toBeTruthy();
  });
});

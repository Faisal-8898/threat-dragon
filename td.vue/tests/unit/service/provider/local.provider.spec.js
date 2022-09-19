import local from '@/service/provider/local.provider.js';

describe('service/local.provider.js', () => {
    describe('getDashboardActions', () => {

        describe('open existing', () => {
            let action;

            beforeEach(() => {
                action = local.getDashboardActions().find(x=> x.key === 'openExisting');
            });

            it('links to the open page', () => {
                expect(action.to).toEqual('/local/threatmodel/open');
            });

            it('uses the save icon', () => {
                expect(action.icon).toEqual('save');
            });
        });

        describe('import', () => {
            let action;

            beforeEach(() => {
                action = local.getDashboardActions().find(x=> x.key === 'import');
            });

            it('links to the import page', () => {
                expect(action.to).toEqual('/local/threatmodel/import');
            });

            it('uses the file-import icon', () => {
                expect(action.icon).toEqual('file-import');
            });
        });

        describe('new', () => {
            let action;

            beforeEach(() => {
                action = local.getDashboardActions().find(x=> x.key === 'createNew');
            });

            it('links to the create page', () => {
                expect(action.to).toEqual('/local/threatmodel/new');
            });

            it('uses the plus icon', () => {
                expect(action.icon).toEqual('plus');
            });
        });

        describe('demo', () => {
            let action;

            beforeEach(() => {
                action = local.getDashboardActions().find(x=> x.key === 'demo');
            });

            it('links to the demo select page', () => {
                expect(action.to).toEqual('/demo/select');
            });

            it('uses the cloud download icon', () => {
                expect(action.icon).toEqual('cloud-download-alt');
            });
        });
    });
});

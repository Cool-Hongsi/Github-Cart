import moxios from 'moxios';
import { testStore } from '../Utils/index';
import { getPost } from '../store/modules/cart';

describe('gethPost action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        const expectedState = {
            pending : false,
            error : false,
            repeated : false,
            data : [
                {
                    login : 'Cool-Hongsi',
                    id : 39789641,
                    avatar_url : 'https://avatars3.githubusercontent.com/u/39789641?v=4',
                    public_repos : '31',
                    html_url : 'https://github.com/Cool-Hongsi',
                    quantity : 0
                },
                {
                    login : undefined,
                    id : undefined,
                    avatar_url : undefined,
                    public_repos : undefined,
                    html_url : undefined,
                    quantity : 0
                }
            ],
            total : 0
        };

        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status : 200,
                response : expectedState
            })
        });

        return store.dispatch(getPost()).then(() => {
            const newState = store.getState();
            expect(newState.cart).toStrictEqual(expectedState);
        });
        
    });

});
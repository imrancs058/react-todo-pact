import TodoService from './api/todo.service';
import * as Pact from '@pact-foundation/pact';
import TodoDto from './api/todoDto';

describe('TodoService API', () => {

    const todoService = new TodoService('http://localhost', global.port);

    describe('createHero()', () => {

        beforeEach((done) => {
            jest.setTimeout(60000);
            const contentTypeJsonMatcher = Pact.Matchers.term({
                matcher: "application/json",
                generate: "application/json"
            });

            global.provider.addInteraction({
                state: 'provider allows todo creation',
                uponReceiving: 'a POST request to create a todo',
                withRequest: {
                    method: 'POST',
                    path: '/todo',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: new TodoDto("new todo")
                },
                willRespondWith: {
                    status: 201,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: Pact.Matchers.somethingLike(
                        new TodoDto("new todo"))
                }
            }).then(() => done());
        });

        it('sends a request according to contract', (done) => {
            todoService.createTodo(new TodoDto("new todo"))
                .then(response => {
                    const hero = response.data;
                    expect(hero.name).toEqual("new todo");
                })
                .then(() => {
                    global.provider.verify()
                        .then(() => done(), error => {
                            done.fail(error)
                        })
                });
        });

    });

});

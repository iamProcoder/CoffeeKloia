const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../server');

chai.use(chaiHttp);

let coffeeId;
describe('[::::::::::> /coffee tests <::::::::::]', () => {

    describe('/GET ~~~ Coffee List ~~~', () => {
        it('it should GET all the coffees', (done) => {
            chai.request(server)
                .get('/coffee')
                .end((err, res) => {
                    if (err) throw err;
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.data.should.be.a('array');
                    
                    done();
                });
        });
    });

    describe('/POST ~~~ Coffee Create ~~~', (done) => {
        it('it should POST a the Coffee', (done) => {
            const coffee = {
                ingredients: ["Coffee"],
                title: "Programmer",
                description: "A Tool For Converting Caffeine Into Code",
                category: "hot"
            }
            chai.request(server)
                .post('/coffee')
                .send(coffee)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.data.should.have.property('ingredients');
                    res.body.data.should.have.property('title');
                    res.body.data.should.have.property('description');
                    res.body.data.should.have.property('category');
                    coffeeId = res.body.data._id;

                    done();
                });
        });
    });

    describe('/GET/:id ~~~ SingleCoffee ~~~', () => {
        it('it should GET a Coffee by the given id', (done) => {
            chai.request(server)
                .get('/coffee/' + coffeeId)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    res.body.data.should.have.property('ingredients');
                    res.body.data.should.have.property('title');
                    res.body.data.should.have.property('description');
                    res.body.data.should.have.property('category');
                    res.body.data.should.have.property('_id').eql(coffeeId);

                    done();
                });
        });
    });

    describe('/PUT/:id ~~~ Coffee Update ~~~', (done) => {
        it('it should update a Cofffee given by id', (done) => {
            const coffee = {
                ingredients: ["Coffee"],
                title: "Filter Coffee",
                description: "test text coffee",
                category: "hot"
            }
            chai.request(server)
                .put('/coffee/' + coffeeId)
                .send(coffee)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    res.body.data.should.have.property('ingredients');
                    res.body.data.should.have.property('title');
                    res.body.data.should.have.property('description');
                    res.body.data.should.have.property('category');
                    
                    done();
                });
        });
    });

    describe('/DELETE/:id ~~~ Coffee Delete ~~~', (done) => {
        it('it should DELETE a Coffee given by id', (done) => {
            chai.request(server)
                .delete('/coffee/' + coffeeId)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Deletes a single coffee');

                    done();
                });
        });
    });

});
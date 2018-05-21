const expect=require('expect');
const request=require('supertest');

const {app}=require('./../Server');
const {Todo}=require('./../Models/Todo');

beforeEach((done)=>{
  Todo.remove({}).then(()=> done());
});


describe('POST /todos',()=>
{
     it('shoulde create newdodo',(done)=>
     {
    var text="test todo text";
    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);

    })
    .end((err,res)=>
    {
      if(err){
        return done(err);
      }

        Todo.find().then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e)=>done(e));
    });


    it('should not create todo',(done)=>
    {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res)=>
                    {
                        if(err)
                        {
                          return done(err);
                        }

                        Todo.find().then((todos)=>{
                          expect(todos.length).toBe(0);
                          done();
                        }).catch((e)=> done(e));
                    });
    });




});
});

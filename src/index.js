const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dayjs = require('dayjs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRouter = require('router');
import UserController from './controllers/users';
import Controllers from './controllers';
import controllers from './controllers';
import { swaggerDocs, options } from './swagger';
import swaggerUI from 'swagger-ui-express';
import database from './database';

{
  async () => {
    const app = express();
    await database.$connect();

    //미들웨어
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true, limit: '700mb' }));

    // app.use('/users', UserController.router);

    Controllers.forEach((controller) => {
      app.use(controller.path, controller.router);
    });

    /* const today = new Date();
  const todayToDayjs = dayjs(today).format('YYYY-MM-DD');
  console.log(todayToDayjs);
  
  const password = '1234';
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log({ hashedPassword }); 
  const token = jwt.sign('1234', 'llII11');
  console.log({ token });*/

    //get 메서드
    //유저 정보 가져오기
    //성공시 200
    //쿼리나 주소값전달
    // app.get('/users', (req, res) => {
    //   const { id, name, age } = req.body;
    //   console.log(req.body);
    //   res.status(200).json({ users });
    // });

    // //post메서드
    // //유저 생성
    // //성공시 201
    // //요청 body
    // app.post('/users', (req, res) => {
    //   const { name, age } = req.body;
    //   console.log(req.body);
    //   users.push({
    //     id: new Date().getTime(),
    //     name,
    //     age,
    //   });
    //   res.status(201).json({ users });
    // });

    // //patch메서드
    // //유저수정
    // //성공시 204
    // //req.params.id
    // app.patch('/users/:id', (req, res) => {
    //   const { id } = req.params;
    //   const { name, age } = req.body;
    //   console.log('param', req.params);
    //   const targetUserIdx = users.findIndex((user) => user.id == Number(id));

    //   users[targetUserIdx] = {
    //     id: users[targetUserIdx].id,
    //     name: name ?? users[targetUserIdx].name,
    //     age: age ?? users[targetUserIdx.age],
    //   };
    //   res.status(204).json({});
    // });

    // //delete메서드
    // //유저삭제
    // //성공시 204
    // app.delete('/users/:id', (req, res) => {
    //   const { id } = req.params;

    //   const deleteUsers = users.filter((user) => user.id !== Number(id));
    //   users = deleteUsers;

    //   res.status(204).json({});
    // });

    //api 요청하기 req>요청, res>응답
    app.get('/', (req, res) => {
      res.send('Hello World');
    });

    app.use((err, req, res, next) => {
      console.log(err);
      err.message;
      res
        .status(err.status || 500)
        .json({ message: err.message || '서버에서 에러가 발생했습니다.' });
    });

    app.listen(8000, () => {
      console.log('서버시작되었습니다');
    });
  };
}

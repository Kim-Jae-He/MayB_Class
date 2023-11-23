import { Router } from 'express';

// Router
class UserController {
  router;
  path = '/users';
  users = [
    {
      id: 1,
      name: 'kimkim',
      age: 10,
    },
  ];
  constructor() {
    this.router = Router();
    this.init();
  }
  init() {
    this.router.get('/', this.getUsers.bind(this));
    this.router.get('/detail/:id', this.getUser.bind(this));
    this.router.post('/', this.createUser.bind(this));
  }
  getUsers(req, res, next) {
    try {
      res.status(200).json({ users: this.users });
    } catch (err) {
      next(err);
    }
  }
  getUser(req, res, next) {
    try {
      const { id } = req.params;

      const user = this.users.find((user) => user.id === Number(id));

      if (!user) {
        throw { status: 404, message: '유저를 찾을수 없습니다.' };
      }

      res.status(200).json({ user });
    } catch (err) {
      next(err);
    }
  }
  createUser(req, res, next) {
    try {
      const { name, age } = req.body;

      this.users.push({
        id: new Date().getTime(),
        name,
        age,
      });

      res.status(201).json({ users: this.users });
    } catch (err) {
      next(err);
    }
  }
}

const userController = new UserController();

export default userController;
import * as Swagger from '../controllers/swagger';
import defaultSwagger from './defaultswagger';
console.log(Swagger);

// 1) 가공하는 코드 작성
const { paths } = Object.values(Swaggers).reduce(
  (acc, apis) => {
    console.log('apis', apis);
    const APIs = Object.values(apis).map((api) => {
      console.log(api);
      return { ...api };
    });
    console.log(APIs);
    return acc;
  },

  { path: {} }
);
// 2) 스웨거에 등록할 json 만들기 defaultSwagger + 1)에서 가공한 paths
export const swaggerDocs = {
  ...defaultSwagger,
  //path 등록
};

// 3) 스웨거에 등록하는 방법
export const options = {
  swaggerOptions: {
    url: '/swagger.json',
  },
};

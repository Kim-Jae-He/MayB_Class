export const getUserSwagger = {
  '/detail/:id': {
    tags: ['User'],
    summary: '유저 상세 조회합니다.',
    parameters: [
      {
        in: 'path',
        name: 'id',
        required: true,
        schema: {
          type: 'number',
        },
      },
    ],
    reseponses: {
      200: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              user: {
                type: 'object',
                properties: {
                  id: {
                    type: 'number',
                  },
                  name: {
                    type: 'string',
                  },
                  age: {
                    type: 'number',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

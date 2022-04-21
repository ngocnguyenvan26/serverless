
export class IMockProductEntities{
  error?: string;
  title: string;
  params: any;
}
export const mockProductService = {
  updateCases: [
    {
      title: 'Update Success',
      params: {
        id: "534e6158-c6c4-4bf4-972c-1b781eb82e46",
        model: {
          name: "elene",
          price: 23,
        }
      },
    },
    {
      title: 'Update Fail with no id',
      params: {
        model: {
          name: "elene",
          price: 23,
        }
      },
    },
    {
      title: 'Update Fail with not found',
      params: {
        id: '123',
        model: {
          name: "elene",
          price: 23,
        }
      },
    },
  ],
  findCases: [
    {
      title: 'Find with no param',
      params: {
      },
    },
    {
      title: 'Find with name',
      params: {
        name: 'tn'
      }
    },
    {
      title: 'Find with startAt',
      params: {
        name: 'tn',
        startAt: '534e6158-c6c4-4bf4-972c-1b781eb82e46'
      }
    },
  ],
  findOneCases: [
    {
      title: 'Get with id',
      params: '534e6158-c6c4-4bf4-972c-1b781eb82e46',
    },
    {
      title: 'Get with no id',
      params: '',
   },
  ],
  createCases: [
    {
      title: 'success',
      params: {
        id: '534e6158-c6c4-4bf4-972c-1b781eb82e46',
        name: '123',
        price: 2
      }
    },
    {
      title: 'error',
      params: {},
    },
  ],
  deleteCases: [
    {
      title: 'success',
      params: '534e6158-c6c4-4bf4-972c-1b781eb82e46'
    },
    {
      title: 'error',
      params: '',
    },
  ],
}
export const mockProductController = {
  updateCases: [
    {
      title: 'Update Success',
      params: {
        id: "534e6158-c6c4-4bf4-972c-1b781eb82e46",
        model: {
          name: "elene",
          price: 23,
        }
      },
    },
    {
      title: 'Update Fail with no id',
      params: {
        model: {
          name: "elene",
          price: 23,
        }
      },
    },
    {
      title: 'Update Fail with not found',
      params: {
        id: '123',
        model: {
          name: "elene",
          price: 23,
        }
      },
    },
  ],
  findCases: [
    {
      title: 'Find with no param',
      params: {
      },
    },
    {
      title: 'Find with name',
      params: {
        name: 'tn'
      }
    },
    {
      title: 'Find with startAt',
      params: {
        name: 'tn',
        startAt: '534e6158-c6c4-4bf4-972c-1b781eb82e46'
      }
    },
  ],
  findOneCases: [
    {
      title: 'Get with id',
      params: '534e6158-c6c4-4bf4-972c-1b781eb82e46',
    },
    {
      title: 'Get with no id',
      params: '',
   },
  ],
  createCases: [
    {
      title: 'success',
      params: {
        id: '534e6158-c6c4-4bf4-972c-1b781eb82e46',
        name: '123',
        price: 2
      }
    },
    {
      title: 'error',
      params: {},
    },
  ],
  deleteCases: [
    {
      title: 'success',
      params: {
        id: '534e6158-c6c4-4bf4-972c-1b781eb82e46' 
      },
    },
    {
      title: 'error',
      params: '',
      isError: true
    },
  ],
}

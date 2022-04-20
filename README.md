# Serverless Nodejs Rest API with TypeScript And DynamoDb

This is simple REST API example for AWS Lambda By Serverless framwork with TypeScript and DynamoDb.

## Use Cases

* Serverless Framework - Lamda

* CRUD

* Store data in DynamoDB

* Unit Test Jest. 

* CI/CD and support multi-stage deployments

### Project structure

The project code base is mainly located within the `app` folder. This folder is divided in:

- `config` - containing config code base between your lambdas
- `modules` - containing code base module and configuration for your lambda functions
- `shares` - containing shared code base between your lambdas
```
.
├── app
│   ├── modules               # Lambda configuration and source code folder
│   │   ├── products
│   │   │   ├── productController.ts      # `products` lambda source code
│   │   │   ├── index.ts        # `Hello` lambda Serverless configuration
│   │   │   ├── mock.json       # `Hello` lambda input parameter, if any, for local invocation
│   │   │   └── schema.ts       # `Hello` lambda input event JSON-Schema
│   │   │
│   │   └── index.ts            # Import/export of all lambda configurations
│   │
│   └── share                    # Lambda shared code
│       └── apiGateway.ts       # API Gateway specific helpers
│       └── handlerResolver.ts  # Sharable library for resolving lambda handlers
│       └── lambda.ts           # Lambda middleware
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
└── webpack.config.js           # Webpack configuration
```
## Deploy

```
npm run deploy

```
### To Test It Locally

* Run ```npm install``` to install all the necessary dependencies.
* Run ```npm run local``` use serverless offline to test locally. 

### Deploy on AWS, simply run:

```
$ npm run deploy

# or

$ serverless deploy
```

## List enpoint

```
 POST - https://mtagmt62g4.execute-api.us-east-1.amazonaws.com/dev/products
  PUT - https://mtagmt62g4.execute-api.us-east-1.amazonaws.com/dev/products/{id}
  GET - https://mtagmt62g4.execute-api.us-east-1.amazonaws.com/dev/products
  GET - https://mtagmt62g4.execute-api.us-east-1.amazonaws.com/dev/products/{id}
  DELETE - https://mtagmt62g4.execute-api.us-east-1.amazonaws.com/dev/products/{id}
```

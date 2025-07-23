# ITSNP Backend Workshop

A comprehensive 9-day backend development workshop covering Node.js, Express.js, MongoDB, and production-ready web application development.

## Course Overview

This workshop is designed to take you from Node.js fundamentals to building production-ready backend applications. You'll learn modern backend development practices, security implementation, testing strategies, and deployment techniques.

## Course Curriculum

### Day 1: Node.js Fundamentals & Environment Setup

#### Core Node.js Concepts
- What is Node.js and V8 engine
- Event-driven, non-blocking I/O model
- Node.js vs traditional server technologies
- When to use Node.js

#### Development Environment
- Installing Node.js and npm/yarn
- Setting up VS Code with extensions
- Terminal/command line basics
- Git basics for version control

#### Module System
- CommonJS modules (require/module.exports)
- ES6 modules (import/export)
- Built-in modules overview
- Creating and organizing custom modules

#### File System Operations
- Synchronous vs asynchronous file operations
- Reading, writing, and deleting files
- Working with directories
- Path manipulation and cross-platform compatibility

#### Package Management
- Understanding package.json in detail
- Installing and managing dependencies
- Semantic versioning (semver)
- Scripts and automation
- Understanding node_modules and package-lock.json

### Day 2: HTTP Server & Asynchronous Programming

#### HTTP Server Fundamentals
- HTTP protocol basics
- Creating servers with http module
- Handling different HTTP methods
- Request and response objects
- Headers and status codes

#### Asynchronous Programming
- Understanding the event loop
- Callbacks and callback hell
- Promises and Promise chaining
- Async/await syntax
- Error handling in async code

#### Event-Driven Architecture
- EventEmitter class
- Creating custom events
- Event-driven architecture patterns
- Memory leaks and event listeners

#### Streams & Performance
- Understanding Node.js streams
- Readable, writable, and transform streams
- Piping streams
- Handling large files

#### Debugging & Development Tools
- Node.js debugging techniques
- Using VS Code debugger
- Console debugging strategies
- Nodemon and development workflow

### Day 3: Express.js Framework Fundamentals

#### Express.js Basics
- What is Express.js and why use it
- Installation and basic setup
- Express application structure
- Express vs raw Node.js HTTP

#### Routing System
- Basic routing (GET, POST, PUT, DELETE, PATCH)
- Route parameters and wildcards
- Query strings and request parsing
- Route handlers and multiple callbacks
- Router-level middleware

#### Middleware Architecture
- Understanding middleware concept
- Built-in middleware (express.json(), express.static())
- Third-party middleware
- Custom middleware functions
- Middleware execution order

#### Request/Response Handling
- Request object properties and methods
- Response object properties and methods
- Sending different types of responses
- Setting headers and cookies
- Content negotiation

#### Static Files & Templating
- Serving static files
- Template engines overview
- Basic templating with EJS/Handlebars
- Rendering dynamic content

### Day 4: Advanced Express & API Design

#### RESTful API Design
- REST principles and constraints
- Resource identification and URL design
- HTTP methods and their proper usage
- Status codes and their meanings
- API versioning strategies

#### Advanced Routing
- Route parameters validation
- Nested routes and sub-routers
- Route-specific middleware
- Error handling in routes
- Async route handlers

#### Data Validation & Sanitization
- Input validation strategies
- Using validation libraries (Joi, express-validator)
- Data sanitization techniques
- Custom validation functions
- Error handling for validation

#### Error Handling
- Error handling middleware
- Custom error classes
- Operational vs programmer errors
- Error logging and monitoring
- Graceful error responses

#### Testing Express Applications
- Testing frameworks (Jest, Mocha)
- Supertest for API testing
- Testing middleware and routes
- Mocking and stubbing
- Test environment setup

### Day 5: MongoDB Fundamentals

#### NoSQL & MongoDB Concepts
- NoSQL vs SQL databases
- Document-oriented databases
- MongoDB architecture and terminology
- BSON and document structure
- When to use MongoDB

#### MongoDB Atlas Setup
- Creating MongoDB Atlas account
- Setting up cloud clusters
- Database user management
- Network access configuration
- Connection strings and security

#### MongoDB Operations
- Creating databases and collections
- Insert operations (insertOne, insertMany)
- Find operations and query operators
- Update operations (updateOne, updateMany, replaceOne)
- Delete operations (deleteOne, deleteMany)

#### Query Operations
- Comparison operators ($eq, $ne, $gt, $lt, $gte, $lte)
- Logical operators ($and, $or, $not, $nor)
- Element operators ($exists, $type)
- Array operators ($in, $nin, $all, $size)
- Regular expressions in queries

#### Data Modeling
- Document design principles
- Embedding vs referencing
- One-to-one, one-to-many, many-to-many relationships
- Schema design patterns
- Data normalization vs denormalization

### Day 6: Mongoose ODM & Advanced Database Operations

#### Mongoose Fundamentals
- What is Mongoose and ODM concept
- Installing and connecting to MongoDB
- Connection management and error handling
- Mongoose vs native MongoDB driver

#### Schemas & Models
- Defining schemas
- Schema types and options
- Built-in validators
- Custom validation functions
- Schema methods and statics

#### CRUD Operations with Mongoose
- Creating documents (save, create)
- Reading documents (find, findOne, findById)
- Updating documents (findByIdAndUpdate, updateOne)
- Deleting documents (findByIdAndDelete, deleteOne)
- Query chaining and method chaining

#### Advanced Mongoose Features
- Middleware (pre and post hooks)
- Virtual properties
- Indexes and performance optimization
- Population and references
- Subdocuments and arrays

#### Aggregation Framework
- Introduction to aggregation pipeline
- Common aggregation stages ($match, $group, $sort, $project)
- Aggregation operators
- Complex data processing
- Performance considerations

### Day 7: Authentication & Authorization

#### Password Security
- Password hashing concepts
- Using bcrypt for password hashing
- Salt and hash generation
- Password comparison and verification
- Password policies and strength

#### JSON Web Tokens (JWT)
- Understanding JWT structure (header, payload, signature)
- Creating and signing tokens
- Token verification and decoding
- Token expiration and refresh strategies
- JWT best practices and security

#### Authentication Implementation
- User registration process
- User login process
- Token-based authentication flow
- Logout and token invalidation
- Remember me functionality

#### Authorization & Access Control
- Role-based access control (RBAC)
- Permission-based access control
- Route protection middleware
- User roles and permissions
- Resource-based authorization

#### Session Management
- Session-based vs token-based authentication
- Session storage options
- Session security considerations
- Cookie security (httpOnly, secure, sameSite)
- Cross-site request forgery (CSRF) protection

### Day 8: Security & Best Practices

#### API Security
- Rate limiting and DDoS protection
- Input sanitization and XSS prevention
- SQL injection prevention (NoSQL injection)
- Cross-Origin Resource Sharing (CORS)
- Content Security Policy (CSP)

#### Environment & Configuration
- Environment variables management
- Configuration files and secrets
- Different environments (dev, staging, prod)
- Secure credential storage
- Configuration validation

#### Data Validation & Sanitization
- Advanced input validation
- Schema validation with Joi/Yup
- File upload validation
- Data sanitization techniques
- Preventing code injection

#### Logging & Monitoring
- Logging best practices
- Log levels and structured logging
- Using logging libraries (Winston, Morgan)
- Error tracking and monitoring
- Performance monitoring

#### API Documentation
- API documentation importance
- Using Swagger/OpenAPI
- Postman collections
- Documentation automation
- Version control for APIs

### Day 9: Testing, Deployment & Production

> **Note:** Day 9 content will be added as the workshop progresses.

## Prerequisites

- Basic understanding of JavaScript
- Familiarity with command line/terminal
- Basic knowledge of web development concepts
- Git and GitHub account

## Workshop Setup

### Required Software
- Node.js (LTS version)
- Visual Studio Code
- Git
- MongoDB Compass (optional)
- Postman or similar API testing tool

### Recommended VS Code Extensions
- Node.js Extension Pack
- ES7+ React/Redux/React-Native snippets
- REST Client
- MongoDB for VS Code
- GitLens

## Learning Outcomes

By the end of this workshop, you will be able to:

- Build scalable backend applications with Node.js and Express.js
- Design and implement RESTful APIs
- Work with MongoDB and Mongoose ODM
- Implement authentication and authorization systems
- Apply security best practices
- Write comprehensive tests for your applications
- Deploy applications to production environments
- Monitor and maintain production applications

## Resources

- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)

## Workshop Repository Structure

```
ITSNP-BackendWorkshop/
├── day-01/          # Node.js Fundamentals
├── day-02/          # HTTP Server & Async Programming
├── day-03/          # Express.js Fundamentals
├── day-04/          # Advanced Express & API Design
├── day-05/          # MongoDB Fundamentals
├── day-06/          # Mongoose ODM
├── day-07/          # Authentication & Authorization
├── day-08/          # Security & Best Practices
├── day-09/          # Testing, Deployment & Production
├── projects/        # Hands-on projects
├── resources/       # Additional learning materials
└── README.md        # This file
```

## Contributing

If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

## License

This workshop content is provided for educational purposes.


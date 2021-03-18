// Implement and Run gRPC Server Locally
const { loadPackageDefinition, Server, ServerCredentials } = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const services = require('./service');

const PROTO_PATH = './proto/notes.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
// // The notesProto object has the full package hierarchy
const notesProto = loadPackageDefinition(packageDefinition);


const server = new Server();
//  We invoke the server addService method passing the NoteService service from the notes proto object
server.addService(notesProto.NoteService.service, services);

server.bind('127.0.0.1:50051', ServerCredentials.createInsecure());
console.log('Server running at http://127.0.0.1:50051');
server.start();